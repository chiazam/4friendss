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

use files\file_features as file_s;
use check\if_files as file_checker;
use verify\file as file_verfier;

if (!file_checker\check_isset_files::check_isset_files(["audio_uploaded"])) {

    new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
}

$files_attach = file_s::file_features_upload_multiple($_FILES["audio_uploaded"]);

if (file_verfier\file_verify_::bulk_file_verify_audio($files_attach) === false) {

    new returner\final_returner_json(['mis_conduct' => 'verification failed', 'field' => 'audio_uploaded']);
}

for ($i = 0; $i < count($files_attach); $i++) {

    $hasher__mite = hash_maker\hash_maker::post_file_hash($files_attach[$i]['name']);

    $path_file = "files/audio_music/" . $hasher__mite["hash_name"] . "." . $files_attach[$i]['extension'];

    if (move_uploaded_file($files_attach[$i]['temp'], "../../" . $path_file)) {

        $audio_key_hash = audio_video\hash\audio_video_hash::audio_video_time_namer_hash($files_attach[$i]['name']);

        audio_video\show\audio_video_mp_show::save_audio_to_db_now($path_file, "../../", $path_file, $audio_key_hash, $files_attach[$i]['name'], $files_attach[$i]['size_mb'], $_session_['g'], $_session_['q']);
    }
}

new returner\final_returner_json(['success' => 'upload successfull']);
