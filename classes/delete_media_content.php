<?php

namespace deleters\content_media_deleter;

use check\data_in_table as checkist;
use img_processor as img_culu;

class delete_media_content {

    protected $key_link;
    protected $hash;

    public function __construct(string $key_link, string $hash = null) {

        $this->key_link = $key_link;
        $this->hash = $hash;
    }

    public function remove_all_content_media() {

        $images_array = [];

        $videos_array = [];

        $audios_array = [];

        if (checkist\num_of_data_in_table::num_of_data_in_table("post_images", "hash,path", ['post_key' => $this->key_link]) > 0) {

            $images_array = checkist\get_data_in_table::get_data_in_table_loop("post_images", "hash,path", ['post_key' => $this->key_link]);
        }

        if (checkist\num_of_data_in_table::num_of_data_in_table("post_videos", "hash,path", ['post_key' => $this->key_link]) > 0) {

            $videos_array = checkist\get_data_in_table::get_data_in_table_loop("post_videos", "hash,path", ['post_key' => $this->key_link]);
        }

        if (checkist\num_of_data_in_table::num_of_data_in_table("post_audios", "hash,path", ['post_key' => $this->key_link]) > 0) {

            $audios_array = checkist\get_data_in_table::get_data_in_table_loop("post_audios", "hash,path", ['post_key' => $this->key_link]);
        }


        $all_array_type = array_merge($audios_array, $videos_array, $images_array);

        for ($i = 0; $i < count($all_array_type); $i++) {

            $element = $all_array_type[$i];

            $this->hash = $element['hash'];

            $this->remove_all_type_media();
        }
    }

    public function remove_images_type_media() {

        if (checkist\num_of_data_in_table::num_of_data_in_table("post_images", "hash,path", ["hash" => $this->hash, 'post_key' => $this->key_link]) > 0) {

            $images = checkist\get_data_in_table::get_data_in_table("post_images", "hash,path", ["hash" => $this->hash, 'post_key' => $this->key_link]);

            if (file_exists("../../" . $images['path'])) {

                unlink("../../" . $images['path']);
            }

            checkist\delete_data_in_table::delete_data_in_table("media_styler", ["media_key" => $images["hash"]]);

            checkist\delete_data_in_table::delete_data_in_table("post_images", ["hash" => $images["hash"], 'post_key' => $this->key_link]);

            img_culu\back_img_handler::remove_back_color($images["hash"], 'post_times_blog');
        }
    }

    public function remove_videos_type_media() {

        if (checkist\num_of_data_in_table::num_of_data_in_table("post_videos", "hash,path", ["hash" => $this->hash, 'post_key' => $this->key_link]) > 0) {

            $videos = checkist\get_data_in_table::get_data_in_table("post_videos", "hash,path", ["hash" => $this->hash, 'post_key' => $this->key_link]);

            if (file_exists("../../" . $videos['path'])) {

                unlink("../../" . $videos['path']);
            }

            checkist\delete_data_in_table::delete_data_in_table("media_styler", ["media_key" => $videos["hash"]]);

            checkist\delete_data_in_table::delete_data_in_table("post_videos", ["hash" => $videos["hash"], 'post_key' => $this->key_link]);
        }
    }

    public function remove_audios_type_media() {

        if (checkist\num_of_data_in_table::num_of_data_in_table("post_audios", "hash,path", ["hash" => $this->hash, 'post_key' => $this->key_link]) > 0) {

            $audios = checkist\get_data_in_table::get_data_in_table("post_audios", "hash,path", ["hash" => $this->hash, 'post_key' => $this->key_link]);

            if (file_exists("../../" . $audios['path'])) {

                unlink("../../" . $audios['path']);
            }

            checkist\delete_data_in_table::delete_data_in_table("post_audios", ["hash" => $audios["hash"], 'post_key' => $this->key_link]);
        }
    }

    public function remove_all_type_media() {

        if (checkist\num_of_data_in_table::num_of_data_in_table("post_images", "hash,path", ["hash" => $this->hash, 'post_key' => $this->key_link]) > 0) {

            $this->remove_images_type_media();
        } else if (checkist\num_of_data_in_table::num_of_data_in_table("post_videos", "hash,path", ["hash" => $this->hash, 'post_key' => $this->key_link]) > 0) {

            $this->remove_videos_type_media();
        } else if (checkist\num_of_data_in_table::num_of_data_in_table("post_audios", "hash,path", ["hash" => $this->hash, 'post_key' => $this->key_link]) > 0) {

            $this->remove_audios_type_media();
        }
    }

}
