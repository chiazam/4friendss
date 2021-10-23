<?php

require_once("./create_first_reciepient.php");

use check\data_in_table as checkist;
use check\if_post\check_isset_post as post_checker;
use img_processor as img_culu;

if (!post_checker::check_isset_post(["hash"])) {

    new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
}

if (checkist\num_of_data_in_table::num_of_data_in_table("chatings_file", "*", ["chat_key" => $chat_key, "chat_file_hash" => $_post_["hash"]])) {

    checkist\num_of_data_in_table::num_of_data_in_table("chatings_file", "*", ["chat_key" => $chat_key, "chat_file_hash" => $_post_["hash"]]);
    $file_path = checkist\get_data_in_table::get_data_in_table("chatings_file", "*", ["chat_key" => $chat_key, "chat_file_hash" => $_post_["hash"]])["chat_file_path"];

    if (file_exists("../../" . $file_path)) {
        unlink("../../" . $file_path);
    }

    checkist\delete_data_in_table::delete_data_in_table("chatings_file", ["chat_key" => $chat_key, "chat_file_hash" => $_post_["hash"]]);

    img_culu\back_img_handler::remove_back_color($_post_["hash"], 'dialogue_attach');
}

new returner\final_returner_json(['message' => ["success" => 'deleted successfully']]);
