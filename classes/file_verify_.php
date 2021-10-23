<?php

namespace verify\file;

use check\data_in_table as checkist;

class file_verify_ {

    static public function image_file_verifier(array $files_image) {
        return ($files_image['size_mb'] <= 50 && $files_image['error'] == 0 && ($files_image['mime'] === "image/png" || $files_image['mime'] === "image/jpeg"));
    }

    static public function video_file_verifier(array $files_video) {
        return ($files_video["error"] === 0 && $files_video['size_mb'] <= 500 && ($files_video['mime'] === "video/mp4"));
    }

    static public function audio_file_verifier(array $files_audio) {
        return ($files_audio["error"] === 0 && $files_audio['size_mb'] <= 300 && ($files_audio['mime'] === "audio/mpeg" || $files_audio['mime'] === "audio/mp3"));
    }

    static public function bulk_file_verify(array $files_attach) {

        for ($i = 0; $i < count($files_attach); $i++) {

            if (!self::image_file_verifier($files_attach[$i]) && !self::video_file_verifier($files_attach[$i]) && !self::audio_file_verifier($files_attach[$i])) {

                return false;
            }
        }

        return true;
    }

    static public function bulk_file_verify_images(array $files_attach) {

        for ($i = 0; $i < count($files_attach); $i++) {

            if (!self::image_file_verifier($files_attach[$i])) {

                return false;
            }
        }

        return true;
    }

    static public function bulk_file_verify_audio(array $files_attach) {

        for ($i = 0; $i < count($files_attach); $i++) {

            if (!self::audio_file_verifier($files_attach[$i])) {

                return false;
            }
        }

        return true;
    }

    static public function bulk_file_verify_video(array $files_attach) {

        for ($i = 0; $i < count($files_attach); $i++) {

            if (!self::video_file_verifier($files_attach[$i])) {

                return false;
            }
        }

        return true;
    }

    static public function max_content_file_exceed(string $key_link, int $max = 4) {

        $num_all = (checkist\num_of_data_in_table::num_of_data_in_table("post_images", "hash,path", ['post_key' => $key_link]) + checkist\num_of_data_in_table::num_of_data_in_table("post_videos", "hash,path", ['post_key' => $key_link]) + checkist\num_of_data_in_table::num_of_data_in_table("post_audios", "hash,path", ['post_key' => $key_link]));

        return ['accept' => ($num_all < $max), 'total' => $num_all];
    }

}
