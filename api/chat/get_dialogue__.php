<?php

require_once './dialogue_create_first_message.php';

use check\if_get\check_isset_get as get_checker;
use chat__get_dialogue as chat;
use check\data_in_table as checkist;
use time\time_to_string as time_string;
use music\chat_background as bacg_music;

if ((!get_checker::check_isset_get(["last_id"]) && !get_checker::check_isset_get(["first_id"]) || !get_checker::check_isset_get(["limit"]))) {

    new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
}

if (get_checker::check_isset_get(["last_id"])) {

    if (!is_numeric($_GET["last_id"])) {

        new returner\final_returner_json(['mis_conduct' => 'wrong credentials', 'field' => 'last_id']);
    }
} elseif (get_checker::check_isset_get(["first_id"])) {

    if (!is_numeric($_GET["first_id"])) {

        new returner\final_returner_json(['mis_conduct' => 'wrong credentials', 'field' => 'first_id']);
    }
}

$limit = 10;

if (is_numeric($_GET["limit"])) {
    $limit = $_GET["limit"];
}

if (get_checker::check_isset_get(["last_id"])) {
    $dialogues = new chat\get_dialogue_chat($_GET["bic"], $_GET["qic"], $_session_["b"], $_session_["q"], $_GET["last_id"], true, $limit, "../../");
} else if (get_checker::check_isset_get(["first_id"])) {

    $dialogues = new chat\get_dialogue_chat($_GET["bic"], $_GET["qic"], $_session_["b"], $_session_["q"], $_GET["first_id"], false, $limit, "../../");
}

if (get_checker::check_isset_get(["last_id"])) {

    if (checkist\num_of_data_in_table::num_of_data_in_table("chat_seen", "*", ["seer_q" => $_session_["q"], "seer_b" => $_session_["b"], "seen_q" => $_GET["qic"], "seen_b" => $_GET["bic"]]) > 0) {

        checkist\update_data_in_table::update_data_in_table("chat_seen", ["date" => time_string::time_to_string(time())], ["seer_q" => $_session_["q"], "seer_b" => $_session_["b"], "seen_q" => $_GET["qic"], "seen_b" => $_GET["bic"]]);
    } else {

        checkist\add_data_in_table::add_data_in_table("chat_seen", ["seer_q" => $_session_["q"], "seer_b" => $_session_["b"], "seen_q" => $_GET["qic"], "seen_b" => $_GET["bic"], "date" => time_string::time_to_string(time())]);
    }
}

new returner\final_returner_json(['message' => ["dialogue" => $dialogues->final_retter_chat_array(), "user" => $user, 'them_yet_see' => \notify\get\notify_chat_getter::did_em_chet_me($_GET['bic'], $_GET["qic"], $_session_["b"], $_session_["q"]), 'back_music' => bacg_music\chat_music_handler::get_music_chat($_session_["b"], $_GET["bic"], '../../', $_session_["g"])]]);



