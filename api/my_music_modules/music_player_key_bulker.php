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

use check\if_get\check_isset_get as get_checker;
use audio\playist_render as render;

if (!get_checker::check_isset_get(["music_key"])) {

    new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
}

if (strtolower($_GET["music_key"]) !== "next") {

    new returner\final_returner_json(['message' => (new render\audio_playist_handle($_session_["g"], $_session_["b"], $_session_["r"], $_session_["q"], $_GET["music_key"], "../../"))->finally_info_next_retter()]);
} else {

    $next = render\audio_playist_handle::get_next_playist($_session_["g"], $_session_["b"], "../../");

    if (isset($next['none'])) {

        new returner\final_returner_json(['message' => ["present_song" => $next, "next_song" => $next]]);
    } else {

        new returner\final_returner_json(['message' => (new render\audio_playist_handle($_session_["g"], $_session_["b"], $_session_["r"], $_session_["q"], $next['hash'], "../../"))->finally_info_next_retter()]);
    }
}


