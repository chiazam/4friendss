<?php

require_once("./create_first_dialogue.php");

use check\data_in_table as checkist;
use check\if_get\check_isset_get as get_checker;
use chat_file_media_returner as chat_filer;

if (!get_checker::check_isset_get(["media"])) {

    new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
}

if (checkist\num_of_data_in_table::num_of_data_in_table("chatings", "*", ["chat_key" => $chat_key]) > 0) {

    if ($_GET["media"] === "images") {
        $media_type = "image";
    } elseif ($_GET["media"] === "audios") {
        $media_type = "audio/mpeg";
    } elseif ($_GET["media"] === "videos") {
        $media_type = "video/mp4";
    }
    new returner\final_returner_json(['message' => (new chat_filer\chat_media_getter($chat_key, $media_type, "../../", $_session_["g"], $_session_["b"]))->get_wanted_media()]);
} else {

    new returner\final_returner_json(['mis_conduct' => 'empty', 'field' => 'key']);
} 

