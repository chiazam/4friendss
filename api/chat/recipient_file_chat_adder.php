<?php

require_once("./create_first_reciepient.php");

use check\data_in_table as checkist;
use files\file_features as file_s;
use check\if_files as file_checker;
use verify\file as file_verfier;
use img_processor as img_culu;

if (!file_checker\check_isset_files::check_isset_files(["message_attach_files"])) {

    new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
}

$files_attach = file_s::file_features_upload_multiple($_FILES["message_attach_files"]);

if (file_verfier\file_verify_::bulk_file_verify($files_attach) === false) {
    new returner\final_returner_json(['mis_conduct' => 'file verification failed', 'field' => 'message_attach_files']);
}


for ($i = 0; $i < count($files_attach); $i++) {

    $hasher__mite = hash_maker\hash_maker::post_file_hash($files_attach[$i]['name']);

    $path_file = "files/chat_attached/" . $hasher__mite["hash_name"] . "." . $files_attach[$i]['extension'];

    if (move_uploaded_file($files_attach[$i]['temp'], "../../" . $path_file)) {

        if (($files_attach[$i]['mime'] !== "audio/mpeg")) {
            checkist\add_data_in_table::add_data_in_table("chatings_file", ["chat_key" => $chat_key, "chat_file_type" => $files_attach[$i]['mime'], "chat_file_path" => $path_file, "chat_file_hash" => $hasher__mite["hash"]]);

            if (file_verfier\file_verify_::image_file_verifier($files_attach[$i]) === true) {

                img_culu\back_img_handler::add_back_color($hasher__mite["hash"], 'dialogue_attach', $path_file);
            }
        } else if (($files_attach[$i]['mime'] == "audio/mpeg")) {
            $audio_key_hash = audio_video\hash\audio_video_hash::audio_video_time_namer_hash($files_attach[$i]['name']);

            checkist\add_data_in_table::add_data_in_table("chatings_file", ["chat_key" => $chat_key, "chat_file_type" => $files_attach[$i]['mime'], "chat_file_path" => $path_file, "chat_file_hash" => $hasher__mite["hash"], "audio_video_key__" => $audio_key_hash]);

            $path_copied = "files/audio_music/" . $hasher__mite["hash_name"] . "." . $files_attach[$i]['extension'];

            audio_video\show\audio_video_mp_show::save_audio_to_db_now($path_file, "../../", $path_copied, $audio_key_hash, $files_attach[$i]['name'], $files_attach[$i]['size_mb']);
        }
    }
}


new returner\final_returner_json(['success' => 'upload was successfull']);
