<?php

namespace artist_songs;

use prepare\trim as prep;
use preg_spliter__ as splitter;
use check as checkist;
use preg_replacer__ as replacer__;
use querier as query__;
use audio_video\show as audio_;
use img_processor as img_culu;
use post_timeline_stream as timestream;
use num_slang as slanger;

class get_artist_songs {

    public static function get_songs_needed__(array $artist_array, string $path_finder, string $g, string $b, string $unwanted_music_key = null, int $limit = 10, int $offset = null, bool $num = false) {

        $b = prep\prepare_trim::return_prepare_trim($b);

        $g = prep\prepare_trim::return_prepare_trim($g);

        $unwanted_music_key = prep\prepare_trim::return_prepare_trim($unwanted_music_key);

        $limit = prep\prepare_trim::return_prepare_trim($limit);

        $offset = prep\prepare_trim::return_prepare_trim($offset);

        if (count($artist_array) === 0) {

            return ["none" => true];
        } else {

            $artist_array = prep\prepare_trim::return_prepare_trim_array($artist_array);

            $value_pair = '(';

            for ($i = 0; $i < count($artist_array); $i++) {

                $each_artist = $artist_array[$i];

                if ($i == 0) {
                    $value_pair .= "`" . DB . "`.`audio__info`.`artist` LIKE '%{$each_artist}%'";
                } else {

                    $value_pair .= " OR `" . DB . "`.`audio__info`.`artist` LIKE '%{$each_artist}%'";
                }
            }

            $value_pair .= ")";

            if ($unwanted_music_key !== null) {

                $value_pair .= " AND (`" . DB . "`.`audio__info`.`hash` != '{$unwanted_music_key}')";
            }

            if ($num === true) {

                $query__ = "SELECT `" . DB . "`.`audio__info`.`hash` FROM `" . DB . "`.`audio__info` WHERE {$value_pair}";
                return ['num' => slanger\num_slang::slanger(query__\sql_querier::num_rows($query__))];
            }


            $offset_adder = "";

            if ($offset !== null) {
                $offset_adder = " OFFSET {$offset}";
            }

            $query__ = "SELECT `" . DB . "`.`audio__info`.`hash` FROM `" . DB . "`.`audio__info` WHERE {$value_pair} ORDER BY RAND() LIMIT {$limit}{$offset_adder}";

            $num_table = query__\sql_querier::num_rows($query__);

            if ($num_table === 0) {

                return ["none" => true];
            } elseif ($num_table > 0) {

                $data_audio_whole = query__\sql_querier::fetch_assoc_loop($query__);

                $finally_up_array = [];

                for ($i = 0; $i < count($data_audio_whole); $i++) {

                    $hash = $data_audio_whole[$i]['hash'];

                    $data_audio = audio_\audio_video_mp_show::get_audio_key_album_info($hash, $path_finder, $g, $b, true);

                    array_push($finally_up_array, $data_audio);
                }

                return $finally_up_array;
            }
        }
    }

    /* ............  ............  ............
      ............  ............  ............
      ............  ............  ............
      ............  ............  ............ */

    public static function get_songs_(array $artist_array, string $b, string $q, string $unwanted_music_key = null, int $limit = 10, int $offset = null) {

        $data_viewer = timestream\post_get_streamer::post_get_poster_people_infor(["b" => $b, "q" => $q])["info"];

        if (count($artist_array) === 0) {

            return ["none" => true];
        } else {

            $artist_array = prep\prepare_trim::return_prepare_trim_array($artist_array);

            $value_pair = '(';

            for ($i = 0; $i < count($artist_array); $i++) {

                $each_artist = $artist_array[$i];

                if ($i == 0) {
                    $value_pair .= "`" . DB . "`.`audio__info`.`artist` LIKE '%{$each_artist}%'";
                } else {

                    $value_pair .= " OR `" . DB . "`.`audio__info`.`artist` LIKE '%{$each_artist}%'";
                }
            }

            $value_pair .= ")";

            $value_pair .= " AND (`" . DB . "`.`views_post`.`q` != '{$q}' AND `" . DB . "`.`views_post`.`b` != '{$b}' AND `" . DB . "`.`views_post`.`category` = 'music' AND (`" . DB . "`.`views_post`.`key_post` = `" . DB . "`.`audio__info`.`hash` OR `" . DB . "`.`views_post`.`key_post` != `" . DB . "`.`audio__info`.`hash`))";

            if ($unwanted_music_key !== null) {

                $value_pair .= " AND (`" . DB . "`.`audio__info`.`hash` != '{$unwanted_music_key}')";
            }

            $offset_adder = "";

            if ($offset !== null) {
                $offset_adder = " OFFSET {$offset}";
            }

            $query__ = "SELECT DISTINCT `" . DB . "`.`audio__info`.`hash`, `" . DB . "`.`audio__info`.`path`, `" . DB . "`.`audio__info`.`name`,`" . DB . "`.`audio__info`.`title`, `" . DB . "`.`audio__info`.`artist`,`" . DB . "`.`audio__info`.`year`,`" . DB . "`.`audio__info`.`album` FROM `" . DB . "`.`audio__info`, `" . DB . "`.`views_post` WHERE {$value_pair} ORDER BY RAND() LIMIT {$limit}{$offset_adder}";

            $num_table = query__\sql_querier::num_rows($query__);

            if ($num_table === 0) {

                return ["none" => true];
            } elseif ($num_table > 0) {

                $data_audio_whole = query__\sql_querier::fetch_assoc_loop($query__);

                $finally_up_array = [];

                for ($i = 0; $i < count($data_audio_whole); $i++) {

                    $data_audio = $data_audio_whole[$i];

                    $data_audio["uploader"] = audio_\audio_video_mp_show::get_music_uploader($data_audio["hash"], $data_viewer['g'], $data_viewer['b']);
					
					$data_audio["num_tiers"] = slanger\num_slang::slanger(\post_timeline_stream\post_get_streamer::num_tiers($data_audio["hash"]));
			
					$data_audio["comment_num"] = slanger\num_slang::slanger(\post_timeline_stream\post_get_streamer::num_comment($data_audio["hash"]));

                    $data_audio['title'] = replacer__\preg_replacer::get_updated_string($data_audio['title'], splitter\music_artist\music_preg_spliter::preg_replaceable, splitter\music_artist\music_preg_spliter::preg_replacers);

                    $data_audio['name'] = replacer__\preg_replacer::get_updated_string($data_audio['name'], splitter\music_artist\music_preg_spliter::preg_replaceable, splitter\music_artist\music_preg_spliter::preg_replacers);

                    $data_audio['img_background'] = img_culu\back_img_handler::get_back_color($data_audio['hash'], 'music');

                    $data_audio['artist'] = replacer__\preg_replacer::get_updated_string($data_audio['artist'], splitter\music_artist\music_preg_spliter::preg_replaceable, splitter\music_artist\music_preg_spliter::preg_replacers);

                    $data_audio['artist_array'] = splitter\music_artist\music_preg_spliter::get_all_artist($data_audio['artist']);

                    $data_audio["favourite"] = (checkist\data_in_table\num_of_data_in_table::num_of_data_in_table("music_favourite", "*", ["hash" => $data_audio["hash"], "favour_g" => $data_viewer['g'], "favour_b" => $data_viewer['b']]) > 0);

                    $data_audio["playlist"] = (checkist\data_in_table\num_of_data_in_table::num_of_data_in_table("music_playist", "*", ["hash" => $data_audio["hash"], "player_g" => $data_viewer['g'], "player_b" => $data_viewer['b']]) > 0);

                    array_push($finally_up_array, $data_audio);
                }

                return $finally_up_array;
            }
        }
    }

    /* ............  ............  ............
      ............  ............  ............
      ............  ............  ............
      ............  ............  ............ */

    public static function people_who_played_a_song(string $g, string $q, string $unwanted_music_key, string $category, int $limit = 10, int $offset = null, bool $num = false) {

        $table = 'music_listening';
        $table_g = 'lisner_g';
        $table_b = 'lisner_b';
        $song_key = 'music_key';

        if ($category === 'playlist') {

            $table = 'music_playist';
            $table_g = 'player_g';
            $table_b = 'player_b';
            $song_key = 'hash';
        } else if ($category === 'favourite') {

            $table = 'music_favourite';
            $table_g = 'favour_g';
            $table_b = 'favour_b';
            $song_key = 'hash';
        }

        if ($num === true) {

            return ['num' => slanger\num_slang::slanger(checkist\data_in_table\num_of_data_in_table::num_of_data_in_table($table, "{$table_g},{$table_b}", [$song_key => $unwanted_music_key]))];
        }

        if (checkist\data_in_table\num_of_data_in_table::num_of_data_in_table($table, "{$table_g},{$table_b}", [$song_key => $unwanted_music_key], $offset, $limit) > 0) {

            $list_listeners = checkist\data_in_table\get_data_in_table::get_data_in_table_loop($table, "{$table_g},{$table_b}", [$song_key => $unwanted_music_key], $offset, $limit);

            $list_persons_carrier = [];

            for ($i = 0; $i < count($list_listeners); $i++) {

                $element = $list_listeners[$i];

                if (checkist\data_in_table\num_of_data_in_table::num_of_data_in_table("users", "full,email,act,q,b,r,g,prof_pix", ["g" => $element[$table_g], "b" => $element[$table_b]]) > 0) {

                    array_push($list_persons_carrier, checkist\data_in_table\get_data_in_table::get_data_in_table("users", "full,email,act,q,b,r,g,prof_pix", ["g" => $element[$table_g], "b" => $element[$table_b]]));
                }
            }

            if (count($list_persons_carrier) === 0) {

                return ['none' => true];
            } else {
                return \all_search\main_all_search::_fumble_loop_person_search($list_persons_carrier, $g, $q);
            }
        } else {
            return ['none' => true];
        }
    }

}
