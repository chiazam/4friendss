<?php

require_once("./create_first_reciepient.php");

use check\if_get\check_isset_get as get_checker;
use all_search as search;
use check\data_in_table as checkist;

if (!get_checker::check_isset_get(["hash"])) {

    new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
}


$offset = 0;

$limit = 5;

if (post_checker::check_isset_post(["offset", "limit"])) {

    if (is_numeric($_GET["offset"])) {
        $offset = $_GET["offset"];
    }

    if (is_numeric($_GET["limit"])) {
        $limit = $_GET["limit"];
    }
}


$repored_array = [];

$all_humman = search\main_all_search::persons_search($_GET["hash"], $_session_["g"], $_session_["q"], $offset, $limit);

if (!isset($all_humman["none"])) {

    for ($i = 0; $i < count($all_humman); $i++) {
        $click = $all_humman[$i];

        $click["online"] = online\online_teller::onliner($click["info"]["r"], $click["info"]['b']);

        if (checkist\num_of_data_in_table::num_of_data_in_table("chat_recievers", "*", ["chat_key" => $chat_key, "b_reciever" => $click["info"]["b"], "q_reciever" => $click["info"]['q']]) > 0) {
            $click["added"] = true;
        } else {
            $click["added"] = false;
        }

        array_push($repored_array, $click);
    }

    new returner\final_returner_json(['message' => $repored_array]);
} else {

    new returner\final_returner_json(['message' => $all_humman]);
}
