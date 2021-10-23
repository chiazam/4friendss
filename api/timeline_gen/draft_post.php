<?php

require_once("./create_first_unsaved.php");

use router\router_roll as route;
use check\data_in_table as checkist;
use check\if_post\check_isset_post as post_checker;
use Sentiment\Analyzer as sentiment_analysis;

require_once(route::get_document_root().'/classes/sentiment/Analyzer.php');

if (!post_checker::check_isset_post(["wisdom", "device"])) {

    new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
}

if (empty(trim($_post_["wisdom"]))) {

    new returner\final_returner_json(['mis_conduct' => 'empty', 'field' => 'wisdom']);
} elseif (empty(trim($_post_["device"]))) {

    new returner\final_returner_json(['mis_conduct' => 'empty', 'field' => 'device']);
}

if (($_post_['cate_post'] === 'event'||$_post_['cate_post'] === 'poll') && post_checker::check_isset_post(["event_end", "event_start"])) {

    $adder_indic = event_handler\date_event_handler::add_event($key_link, $_post_["event_start"], $_post_["event_end"]);

    if (isset($adder_indic['mis_conduct'])) {

        new returner\final_returner_json($adder_indic);
    }
} else if (($_post_['cate_post'] === 'event'||$_post_['cate_post'] === 'poll') && !post_checker::check_isset_post(["event_end", "event_start"])) {

    new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
}

if (post_checker::check_isset_post(["topic"])) {

    topics_handlers\topic_handler::regulate_topic($_post_["topic"], $key_link);
}

checkist\update_data_in_table::update_data_in_table("post", ["word" => ucfirst($_post_["wisdom"])], ["keey" => $key_link]);

new returner\final_returner_json(["success" => 'saved successfully', 'message' => ["word_analysis" =>  (new sentiment_analysis())->getSentiment($_post_["wisdom"])]]);
