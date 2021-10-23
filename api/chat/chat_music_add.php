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
use all_search as search;
use music\chat_background as bacg_music;

if (!get_checker::check_isset_get(["hash", 'big', 'qig'])) {

    new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
}

$offset = 0;

$limit = 5;

if (get_checker::check_isset_get(["offset", "limit"])) {

    if (is_numeric($_GET["offset"])) {
        $offset = $_GET["offset"];
    }

    if (is_numeric($_GET["limit"])) {
        $limit = $_GET["limit"];
    }
}

if (checkist\num_of_data_in_table::num_of_data_in_table("users", "g,r", ["b" => $_GET['big'], "q" => $_GET['qig']]) > 0) {

    $data_viewer = checkist\get_data_in_table::get_data_in_table("users", "g,r", ["b" => $_GET['big'], "q" => $_GET['qig']]);

    $repored_array = [];

    $all_humman = search\main_all_search::music_search($_GET["hash"], '../../', $_session_["g"], $_session_["q"], $offset, $limit);

    if (!isset($all_humman["none"])) {

        for ($i = 0; $i < count($all_humman); $i++) {
            $click = $all_humman[$i];

            $click["added"] = bacg_music\chat_music_handler::is_this_music_chat_added($_session_["b"], $_GET['big'], $click['hash']);

            array_push($repored_array, $click);
        }

        new returner\final_returner_json(['message' => $repored_array]);
    } else {

        new returner\final_returner_json(['message' => $all_humman]);
    }
} else {
    new returner\final_returner_json(['mis_conduct' => 'wrong credentials', 'field' => 'key']);
}
