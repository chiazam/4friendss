<?php

require_once("./create_first_unsaved.php");

use check\data_in_table as checkist;
use check\if_post\check_isset_post as post_checker;
use notify_add as notify;

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


if (checkist\num_of_data_in_table::num_of_data_in_table("timeline", "*", ["saved" => 0, "key_link" => $key_link]) > 0) {

    notify\notification_maker::post_notifyer($key_link);

    notify\notification_maker::tag_notifyer($key_link);

    checkist\update_data_in_table::update_data_in_table("timeline", ["date" => time\time_to_string::time_to_string(time())], ["key_link" => $key_link]);
}

checkist\update_data_in_table::update_data_in_table("timeline", ["saved" => 1, "device" => $_post_['device']], ["key_link" => $key_link]);

new returner\final_returner_json(["success" => 'saved successfully']);
