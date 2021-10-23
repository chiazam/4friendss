<?php

require_once("./create_first_reciepient.php");

use check\if_get\check_isset_get as get_checker;
use chat_file_media_returner as chat_filer;

if (!get_checker::check_isset_get(["media"])) {

    new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
}

if ($_post_["media"] === "images") {
    $media_type = "image";
} elseif ($_post_["media"] === "audios") {
    $media_type = "audio/mpeg";
} elseif ($_post_["media"] === "videos") {
    $media_type = "video/mp4";
}
new returner\final_returner_json(['message' => (new chat_filer\chat_media_getter($chat_key, $media_type, "../../", $_session_["g"], $_session_["b"]))->get_wanted_media()]);


