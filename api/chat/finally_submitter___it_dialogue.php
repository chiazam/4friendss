<?php

require_once("./create_first_dialogue.php");

use check\data_in_table as checkist;
use check\if_post\check_isset_post as post_checker;
use time\time_to_string as time_string;
use chat_changer\manipulate_text as chat_man;

if (!post_checker::check_isset_post(["chat_word", "device"])) {

    new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
}

if (empty(trim($_post_["chat_word"]))) {

    new returner\final_returner_json(['mis_conduct' => 'empty', 'field' => 'chat_word']);
} elseif (empty(trim($_post_["device"]))) {

    new returner\final_returner_json(['mis_conduct' => 'empty', 'field' => 'device']);
}

$encoded_word = chat_man\chat_encoder_decoder::encodeChat($_post_["chat_word"]);

checkist\update_data_in_table::update_data_in_table("chatings", ["word" => $encoded_word, "date" => time_string::time_to_string(time()), "device" => $_post_["device"], "sent" => "1"], ["b_sender" => $_session_["b"], "q_sender" => $_session_["q"], "chat_key" => $chat_key]);

notify\get\__latest_chat_preview::save_latest_chat_preview($_session_["q"],$_post_["qic"],$chat_key);

new returner\final_returner_json(['success' => 'chat was sent successfull']);
