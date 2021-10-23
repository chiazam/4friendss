<?php

namespace audio_video\show;

use img_processor as img_culu;
use check\data_in_table as checkist;
use preg_spliter__ as splitter;
use preg_replacer__ as replacer__;
use post_timeline_stream as timestream;
use num_slang as slanger;
use relate_and_how as relator;

class audio_video_mp_show {

    static public function analyzer_db_needed(string $file_path) {
        $file_property_array = (new \getID3)->analyze($file_path);

        $coop_files_property = [];

        if (isset($file_property_array["tags"]["id3v2"]["artist"][0])) {
            $coop_files_property["artist"] = $file_property_array["tags"]["id3v2"]["artist"][0];
        } else {

            $coop_files_property["artist"] = "unknown";
        }

        if (isset($file_property_array["tags"]["id3v2"]["genre"][0])) {
            $coop_files_property["genre"] = $file_property_array["tags"]["id3v2"]["genre"][0];
        } else {

            $coop_files_property["genre"] = "unknown";
        }

        if (isset($file_property_array["tags"]["id3v2"]["album"][0])) {
            $coop_files_property["album"] = $file_property_array["tags"]["id3v2"]["album"][0];
        } else {

            $coop_files_property["album"] = "unknown";
        }

        if (isset($file_property_array["tags"]["id3v2"]["title"][0])) {
            $coop_files_property["title"] = $file_property_array["tags"]["id3v2"]["title"][0];
        } else {

            $coop_files_property["title"] = "unknown";
        }

        if (isset($file_property_array["tags"]["id3v2"]["year"][0])) {
            $coop_files_property["year"] = $file_property_array["tags"]["id3v2"]["year"][0];
        } else {

            $coop_files_property["year"] = "unknown";
        }

        if (isset($file_property_array["tags"]["id3v2"]["track_number"][0])) {
            $coop_files_property["track_number"] = $file_property_array["tags"]["id3v2"]["track_number"][0];
        } else {

            $coop_files_property["track_number"] = "unknown";
        }

        if (isset($file_property_array["tags"]["id3v2"]["composer"][0])) {
            $coop_files_property["composer"] = $file_property_array["tags"]["id3v2"]["composer"][0];
        } else {

            $coop_files_property["composer"] = "unknown";
        }

        if (isset($file_property_array["tags"]["id3v2"]["band"][0])) {
            $coop_files_property["band"] = $file_property_array["tags"]["id3v2"]["band"][0];
        } else {

            $coop_files_property["band"] = "unknown";
        }

        if (isset($file_property_array["playtime_string"])) {
            $coop_files_property["duration"] = $file_property_array["playtime_string"];
        } else {

            $coop_files_property["duration"] = "unknown";
        }

        if (isset($file_property_array["playtime_seconds"])) {
            $coop_files_property["duration_seconds"] = $file_property_array["playtime_seconds"];
        } else {

            $coop_files_property["duration_seconds"] = "unknown";
        }


        return $coop_files_property;
    }

    static public function save_audio_to_db_now(string $path_file, string $path_prefix, string $path_copied, string $audio_key_hash, string $file_name, string $file_size_mb, string $g, string $q) {

        copy($path_prefix . $path_file, $path_prefix . $path_copied);

        $file_properties = self::analyzer_db_needed($path_prefix . $path_copied);
        checkist\add_data_in_table::add_data_in_table("audio__info", ["path" => $path_copied, "hash" => $audio_key_hash, "name" => $file_name, "size_mb" => $file_size_mb, "duration" => $file_properties["duration"], "year" => $file_properties["year"], "title" => $file_properties["title"], "album" => $file_properties["album"], "track_number" => $file_properties["track_number"], "band" => $file_properties["band"], "composer" => $file_properties["composer"], "artist" => $file_properties["artist"], "duration_secs" => $file_properties["duration_seconds"]]);

        self::set_cover_album_background($audio_key_hash, $path_copied, $path_prefix);

        checkist\add_data_in_table::add_data_in_table("music_uploader", ["uploader_q" => $q, "uploader_g" => $g, "audio_key" => $audio_key_hash]);
    }

    static public function get_music_uploader(string $audio_key, string $g, string $b) {

        if (checkist\num_of_data_in_table::num_of_data_in_table("music_uploader", "*", ["audio_key" => $audio_key]) === 0) {

            return ['none' => true];
        } else {

            $em_info = checkist\get_data_in_table::get_data_in_table("music_uploader", "uploader_q, uploader_g", ["audio_key" => $audio_key]);

            $data_me = timestream\post_get_streamer::post_get_poster_people_infor(["b" => $b, "g" => $g])["info"];

            $data_them = timestream\post_get_streamer::post_get_poster_people_infor(["q" => $em_info['uploader_q'], "g" => $em_info['uploader_g']]);

            $data_them["relationship"] = relator\relate_detect_how::relate_picker($data_them["info"]["g"], $data_them["info"]["q"], $data_me['g'], $data_me['q']);

            return $data_them;
        }
    }

    static public function set_cover_album_background(string $audio_key, string $file_path, string $finder) {
        $file_property_array = (new \getID3)->analyze($finder . $file_path);

        if (isset($file_property_array["comments"]["picture"][0]["data"]) && isset($file_property_array["comments"]["picture"][0]["image_mime"])) {

            $new_mage_hash = \audio_video\hash\audio_video_hash::audio_video_time_namer_hash($finder . $file_path);

            $woooop = fopen($finder . "lib/wwwwoooopppptrash/wwwwoooopppptrash" . $new_mage_hash . ".jpg", 'w');

            fwrite($woooop, $file_property_array["comments"]["picture"][0]["data"]);

            fclose($woooop);

            img_culu\back_img_handler::add_back_color($audio_key, 'music', "lib/wwwwoooopppptrash/wwwwoooopppptrash" . $new_mage_hash . ".jpg");

            unlink($finder . "lib/wwwwoooopppptrash/wwwwoooopppptrash" . $new_mage_hash . ".jpg");
        } else {

            img_culu\back_img_handler::add_back_color($audio_key, 'music', "icons/ftefytwefdytewfdtjfde.jpg");
        }
    }

    static public function get_audio_key_album_info(string $audio_key, string $path_prefix, string $g, string $b, bool $minimal = false) {

        $data_viewer = timestream\post_get_streamer::post_get_poster_people_infor(["b" => $b, "g" => $g])["info"];

        if (checkist\num_of_data_in_table::num_of_data_in_table("audio__info", "*", ["hash" => $audio_key]) > 0) {

            $data_audio = checkist\get_data_in_table::get_data_in_table("audio__info", "album,band,composer,duration,hash,name,path,size_mb,title,track_number,year,artist,duration_secs", ["hash" => $audio_key]);

            $data_audio["uploader"] = self::get_music_uploader($audio_key, $g, $b);

            $data_audio["num_tiers"] = slanger\num_slang::slanger(\post_timeline_stream\post_get_streamer::num_tiers($audio_key));
			
			$data_audio["comment_num"] = slanger\num_slang::slanger(\post_timeline_stream\post_get_streamer::num_comment($audio_key));

            $data_audio['img_background'] = img_culu\back_img_handler::get_back_color($audio_key, 'music');

            $data_audio["favourite"] = (checkist\num_of_data_in_table::num_of_data_in_table("music_favourite", "*", ["hash" => $data_audio["hash"], "favour_g" => $g, "favour_b" => $b]) > 0);

            $data_audio["playlist"] = (checkist\num_of_data_in_table::num_of_data_in_table("music_playist", "*", ["hash" => $data_audio["hash"], "player_g" => $g, "player_b" => $b]) > 0);

            $data_audio['title'] = replacer__\preg_replacer::get_updated_string($data_audio['title'], splitter\music_artist\music_preg_spliter::preg_replaceable, splitter\music_artist\music_preg_spliter::preg_replacers);

            $data_audio['name'] = replacer__\preg_replacer::get_updated_string($data_audio['name'], splitter\music_artist\music_preg_spliter::preg_replaceable, splitter\music_artist\music_preg_spliter::preg_replacers);

            $data_audio['album'] = replacer__\preg_replacer::get_updated_string($data_audio['album'], splitter\music_artist\music_preg_spliter::preg_replaceable, splitter\music_artist\music_preg_spliter::preg_replacers);

            $data_audio['artist'] = replacer__\preg_replacer::get_updated_string($data_audio['artist'], splitter\music_artist\music_preg_spliter::preg_replaceable, splitter\music_artist\music_preg_spliter::preg_replacers);

            $data_audio['artist_array'] = splitter\music_artist\music_preg_spliter::get_all_artist($data_audio['artist']);

            if ($minimal === true) {

                $data_audio['related_songs'] = ['none' => true];
            } else if ($minimal === false) {

                $data_audio['related_songs'] = \artist_songs\get_artist_songs::get_songs_($data_audio['artist_array'], $b, $data_viewer['q'], $data_audio["hash"]);
            }

            return $data_audio;
        } else {
            return ["none" => true];
        }
    }

    static public function music_currentTime(string $start_date, int $music_secs_length) {

        $start_time = \time\string_to_time::string_to_time($start_date);

        $time_from_start = time() - $start_time;

        if ($music_secs_length > $time_from_start) {

            return $time_from_start;
        } else if ($music_secs_length < $time_from_start) {

            return $time_from_start % $music_secs_length;
        }
    }

}
