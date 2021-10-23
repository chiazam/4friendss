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

use check\data_in_table as checkist;
use check\if_get\check_isset_get as get_checker;
use chat_file_media_returner as chat_filer;

if (!get_checker::check_isset_get(["media", "chat_key"])) {

    new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
}

if (checkist\num_of_data_in_table::num_of_data_in_table("chatings", "*", ["chat_key" => $_GET["chat_key"]]) > 0) {

    if ($_GET["media"] === "images") {
        $media_type = "image";
    } elseif ($_GET["media"] === "audios") {
        $media_type = "audio/mpeg";
    } elseif ($_GET["media"] === "videos") {
        $media_type = "video/mp4";
    }
    new returner\final_returner_json(['message' => (new chat_filer\chat_media_getter($_GET["chat_key"], $media_type, "../../", $_session_["g"], $_session_["b"]))->get_wanted_media()]);
} else {

    new returner\final_returner_json(['mis_conduct' => 'empty', 'field' => 'key']);
} 
