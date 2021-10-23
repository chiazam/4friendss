<?php

namespace chat_file_media_returner;

use img_processor as img_culu;
use check as chichi;

class chat_media_getter {

    protected $chat_key;
    protected $media_type = "image";
    protected $finder_path;
    protected $my_g;
    protected $my_b;

    public function __construct($chat_key, $media_type, $finder_path, $my_g, $my_b) {

        $this->finder_path = $finder_path;

        $this->chat_key = $chat_key;

        if ($media_type === "audio/mpeg" || $media_type === "video/mp4" || $media_type === "image") {

            $this->media_type = $media_type;
        }

        $this->my_b = $my_b;

        $this->my_g = $my_g;
    }

    static public function process_array_audio(array $audio_pile, string $path_finder, string $my_g, string $my_b) {

        $audios_first_main = [];

        for ($i = 0; $i < count($audio_pile); $i++) {

            $dude = $audio_pile[$i];

            $_show = ["file_info" => $dude, "audio_info" => \audio_video\show\audio_video_mp_show::get_audio_key_album_info($dude["audio_video_key__"], $path_finder, $my_g, $my_b, true)];

            array_push($audios_first_main, $_show);
        }

        return $audios_first_main;
    }

    public function get_wanted_media() {
        if ($this->media_type === "image") {

            $images_list = chichi\data_search_in_table\search_startswith::get_search_data_in_table_loop("chatings_file", "chat_file_hash,chat_file_path,chat_file_type", ["chat_key" => $this->chat_key, "chat_file_type" => $this->media_type], null, 10, null, null, false);

            for ($i = 0; $i < count($images_list); $i++) {

                $dude = $images_list[$i];

                $images_list[$i]['img_background'] = img_culu\back_img_handler::get_back_color($dude['chat_file_hash'], 'dialogue_attach');
            }

            return ["{$this->media_type}" => $images_list];
        } else if ($this->media_type !== "image") {

            if (chichi\data_in_table\num_of_data_in_table::num_of_data_in_table("chatings_file", "audio_video_key__,chat_file_hash,chat_file_path,chat_file_type", ["chat_key" => $this->chat_key, "chat_file_type" => $this->media_type]) > 0) {

                if ($this->media_type === "video/mp4") {

                    return ["{$this->media_type}" => chichi\data_in_table\get_data_in_table::get_data_in_table_loop("chatings_file", "chat_file_hash,chat_file_path,chat_file_type", ["chat_key" => $this->chat_key, "chat_file_type" => $this->media_type])];
                } else if ($this->media_type === "audio/mpeg") {

                    return ["{$this->media_type}" => self::process_array_audio(chichi\data_in_table\get_data_in_table::get_data_in_table_loop("chatings_file", "audio_video_key__,chat_file_hash,chat_file_path,chat_file_type", ["chat_key" => $this->chat_key, "chat_file_type" => $this->media_type]), $this->finder_path, $this->my_g, $this->my_b)];
                }
            } else {

                return ["none" => true];
            };
        }
    }

    static public function delete_all_dialogue_file(string $chat_key, string $file_path) {

        if (chichi\data_in_table\num_of_data_in_table::num_of_data_in_table('chatings_file', '*', ["chat_key" => $chat_key]) > 0) {

            $all_media = chichi\data_in_table\get_data_in_table::get_data_in_table_loop('chatings_file', '*', ["chat_key" => $chat_key]);

            for ($i = 0; $i < count($all_media); $i++) {

                $element = $all_media[$i];

                self::delete_each_dialogue_file($chat_key, $element['chat_file_hash'], $file_path);
            }
        }
    }

    static public function delete_each_dialogue_file(string $chat_key, string $chat_file_hash, string $file_path) {

        if (chichi\data_in_table\num_of_data_in_table::num_of_data_in_table("chatings_file", "*", ["chat_key" => $chat_key, "chat_file_hash" => $chat_file_hash])) {

            $file_path = chichi\data_in_table\get_data_in_table::get_data_in_table("chatings_file", "*", ["chat_key" => $chat_key, "chat_file_hash" => $chat_file_hash])["chat_file_path"];

            if (file_exists($file_path . $file_path)) {
                unlink($file_path . $file_path);
            }

            chichi\data_in_table\delete_data_in_table::delete_data_in_table("chatings_file", ["chat_key" => $chat_key, "chat_file_hash" => $chat_file_hash]);

            img_culu\back_img_handler::remove_back_color($chat_file_hash, 'dialogue_attach');
        }
    }

}
