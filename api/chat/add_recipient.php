<?php

require_once("./create_first_reciepient.php");

use check\data_in_table as checkist;
use check\if_post\check_isset_post as post_checker;

if (!post_checker::check_isset_post(["hash"])) {

    new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
}

if (checkist\num_of_data_in_table::num_of_data_in_table("users", "b,q", ["q" => $_post_["hash"]]) > 0) {

    $data = checkist\get_data_in_table::get_data_in_table("users", "b,q", ["q" => $_post_["hash"]]);

    if (checkist\num_of_data_in_table::num_of_data_in_table("chat_recievers", "*", ["chat_key" => $chat_key, "b_reciever" => $data["b"], "q_reciever" => $data['q']]) > 0) {

        checkist\delete_data_in_table::delete_data_in_table("chat_recievers", ["chat_key" => $chat_key, "b_reciever" => $data["b"], "q_reciever" => $data['q']]);

        new returner\final_returner_json(['message' => ["added" => false]]);
    } else {

        if (checkist\num_of_data_in_table::num_of_data_in_table("chat_recievers", "*", ["chat_key" => $chat_key]) >= 30) {

            new returner\final_returner_json(['message' => ["added" => false]]);
        } else {

            checkist\add_data_in_table::add_data_in_table("chat_recievers", ["chat_key" => $chat_key, "b_reciever" => $data["b"], "q_reciever" => $data['q']]);

            new returner\final_returner_json(['message' => ["added" => true]]);
        }
    }
} else {
    new returner\final_returner_json(['mis_conduct' => 'wrong credentials', 'field' => 'key']);
}
