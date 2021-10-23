<?php

require_once './dialogue_create_first_message.php';

use check\data_in_table as checkist;
use check\if_post\check_isset_post as post_checker;
use chat_file_media_returner as chat_filer;

if (!post_checker::check_isset_post(["chat_key"])) {

    new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
}

if (empty(trim($_post_["chat_key"]))) {

    new returner\final_returner_json(['mis_conduct' => 'empty', 'field' => 'chat_key']);
}


if (checkist\num_of_data_in_table::num_of_data_in_table('chatings', '*', ['chat_key' => $_post_['chat_key']]) > 0) {

    checkist\delete_data_in_table::delete_data_in_table('chat_recievers', ['b_reciever' => $_GET['bic'], 'q_reciever' => $_GET['qic'], 'chat_key' => $_post_['chat_key']]);

    if (checkist\num_of_data_in_table::num_of_data_in_table('chat_recievers', '*', ['chat_key' => $_post_['chat_key']]) === 0) {
        chat_filer\chat_media_getter::delete_all_dialogue_file($_post_['chat_key'], "../../");

        checkist\delete_data_in_table::delete_data_in_table('chatings', ['chat_key' => $_post_['chat_key']]);
    }

    new returner\final_returner_json(['message' => ["success" => 'deleted successfully']]);
} else {

    new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
}

