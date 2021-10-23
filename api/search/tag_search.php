<?php

require_once("../timeline_gen/create_first_unsaved.php");

use check\data_in_table as checkist;
use check\if_get\check_isset_get as get_checker;
use all_search as search;

if (!get_checker::check_isset_get(["hash", "offset", "limit"])) {

    new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
}

$offset = 0;

$limit = 10;

if (is_numeric($_GET["offset"])) {
    $offset = $_GET["offset"];
}

if (is_numeric($_GET["limit"])) {
    $limit = $_GET["limit"];
}


$repored_array = [];

$all_humman = search\main_all_search::persons_search($_GET["hash"], $_session_["g"], $_session_["q"], $offset, $limit);

if (!isset($all_humman["none"])) {

    for ($i = 0; $i < count($all_humman); $i++) {
        $click = $all_humman[$i];

        $click["online"] = online\online_teller::onliner($click["info"]["r"], $click["info"]['b']);

        if (checkist\num_of_data_in_table::num_of_data_in_table("post_tags", "tagged_r,tagged_q", ["tagged_r" => $click["info"]["r"], "tagged_q" => $click["info"]['q'], 'post_key' => $key_link]) > 0) {
            $click["tagged"] = true;
        } else {
            $click["tagged"] = false;
        }

        array_push($repored_array, $click);
    }

    new returner\final_returner_json(['message' => $repored_array]);
} else {

    new returner\final_returner_json(['message' => $all_humman]);
}
