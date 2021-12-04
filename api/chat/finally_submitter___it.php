<?php

require_once("./create_first_reciepient.php");

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

if (checkist\num_of_data_in_table::num_of_data_in_table("chat_recievers", "q_reciever,b_reciever", ["chat_key" => $chat_key]) > 0) {
    $encoded_word = chat_man\chat_encoder_decoder::encodeChat($_post_["chat_word"]);

    $new_messager = checkist\get_data_in_table::get_data_in_table("new_messagers", "*", ["chat_key" => $chat_key]);

    checkist\add_data_in_table::add_data_in_table("chatings", ["q_sender" => $new_messager["q_sender"], "b_sender" => $new_messager["b_sender"], "word" => $encoded_word, "chat_key" => $new_messager["chat_key"], "date" => time_string::time_to_string(time()), "device" => $_post_["device"], "sent" => "1"]);

    
if(checkist\num_of_data_in_table::num_of_data_in_table("chat_recievers", "*", ["chat_key" => $chat_key])>0){

    $chat_recievers = checkist\get_data_in_table::get_data_in_table_loop("chat_recievers", "*", ["chat_key" => $chat_key]);
    
    for ($i=0; $i < count($chat_recievers); $i++) {

        notify\get\__latest_chat_preview::save_latest_chat_preview($_session_["q"],$chat_recievers[$i]['q_reciever'],$new_messager["chat_key"]);

    }

}

    checkist\delete_data_in_table::delete_data_in_table("new_messagers", ["chat_key" => $new_messager["chat_key"]]);

    new returner\final_returner_json(["success" => 'chat was sent successfull']);
} else {

    new returner\final_returner_json(['mis_conduct' => 'empty', 'field' => 'key']);
} 

