<?php

use auto__loader as auto___load;
use mysqli__ as mysqli_conns;

require_once '../../classes/auto_loader_happener.php';

require_once '../../extra_script/first_action.php';

requirer_bulk('../../', ['classes/php_lib/getid3/getid3.php']);

new auto___load\auto_loader_happener('../../');

new mysqli_conns\mysqli_connector(HOST, USERNAME, PASSWORD);

new malware\mal_ware(true);

if ($_login_info === false) {

    new returner\final_returner_json(['permission' => 'denied due to no account is logged in']);
}

require_once("../timeline_gen/create_first_unsaved.php");

use check\data_in_table as checkist;
use files\file_features as file_s;
use check\if_files as file_checker;
use verify\file as file_verfier;
use img_processor as img_culu;

if (!file_checker\check_isset_files::check_isset_files(["post_attach_files"])) {

    new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
}

$max_verify = file_verfier\file_verify_::max_content_file_exceed($key_link);

if ((!$max_verify['accept']) || (count($_FILES["post_attach_files"]['name']) + ($max_verify['total'])) > 4) {

    new returner\final_returner_json(['mis_conduct' => 'max-exceeded', 'field' => 'max file upload for this content is 4 and its exceeded']);
}

$files_attach = file_s::file_features_upload_multiple($_FILES["post_attach_files"]);

if (file_verfier\file_verify_::bulk_file_verify($files_attach) === false) {

    new returner\final_returner_json(['mis_conduct' => 'file verification failed', 'field' => 'post_attach_files']);
}

for ($i = 0; $i < count($files_attach); $i++) {

    $hasher__mite = hash_maker\hash_maker::post_file_hash($files_attach[$i]['name']);

    $hash = $hasher__mite["hash"];

    $path_file = "files/attached/" . $hasher__mite["hash_name"] . "." . $files_attach[$i]['extension'];

    if (move_uploaded_file($files_attach[$i]['temp'], "../../" . $path_file)) {

        if (file_verfier\file_verify_::image_file_verifier($files_attach[$i]) === true) {

            checkist\add_data_in_table::add_data_in_table("post_images", ["hash" => $hash, "path" => $path_file, "post_key" => $key_link]);

            img_culu\back_img_handler::add_back_color($hash, 'post_times_blog', $path_file);
        } else if (file_verfier\file_verify_::video_file_verifier($files_attach[$i]) === true) {

            checkist\add_data_in_table::add_data_in_table("post_videos", ["post_key" => $key_link, "hash" => $hash, "path" => $path_file]);
        } else if (file_verfier\file_verify_::audio_file_verifier($files_attach[$i]) === true) {

            $audio_key_hash = audio_video\hash\audio_video_hash::audio_video_time_namer_hash($files_attach[$i]['name']);

            checkist\add_data_in_table::add_data_in_table("post_audios", ["post_key" => $key_link, "hash" => $hash, "path" => $path_file, "audio_video_key" => $audio_key_hash]);

            $path_copied = "files/audio_music/" . $hasher__mite["hash_name"] . "." . $files_attach[$i]['extension'];

            audio_video\show\audio_video_mp_show::save_audio_to_db_now($path_file, "../../", $path_copied, $audio_key_hash, $files_attach[$i]['name'], $files_attach[$i]['size_mb'], $_session_['g'], $_session_['q']);
        }
    }
}

new returner\final_returner_json(['success' => 'upload was successfull']);

