<?php

use auto__loader as auto___load;
use mysqli__ as mysqli_conns;

require_once '../../classes/auto_loader_happener.php';

require_once '../../extra_script/first_action.php';

requirer_bulk('../../', ['classes/php_lib/getid3/getid3.php']);

new auto___load\auto_loader_happener('../../');

new mysqli_conns\mysqli_connector(HOST, USERNAME, PASSWORD);

new malware\mal_ware(true);

if ($_login_info === false) {

    new returner\final_returner_json(['permission' => 'denied due to no account is logged in']);
}

use check\data_in_table as checkist;
use check\if_post\check_isset_post as post_checker;

if (!post_checker::check_isset_post(["bic", "qic"])) {

    new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
}

if (($_post_["qic"] !== $_session_["q"] && $_post_["bic"] !== $_session_["b"]) && (checkist\num_of_data_in_table::num_of_data_in_table("users", "*", ["q" => $_post_["qic"], "b" => $_post_["bic"]]) > 0)) {

    if (checkist\get_data_in_table_compare::num_data_in_table(["chatings", "chat_recievers"], "chatings.chat_key", ["chatings.q_sender" => $_session_["q"], "chatings.b_sender" => $_session_["b"], "chatings.sent" => 0, "chat_recievers.q_reciever" => $_post_["qic"], "chat_recievers.b_reciever" => $_post_["bic"]], ["chatings.chat_key" => "chat_recievers.chat_key"]) == 0) {

        $hash = hash_maker\hash_maker::post_times_hash_maker($_post_["qic"], $_session_["q"]);

        checkist\add_data_in_table::add_data_in_table("chatings", ["q_sender" => $_session_["q"], "b_sender" => $_session_["b"], "chat_key" => $hash, "sent" => 0]);

        checkist\add_data_in_table::add_data_in_table("chat_recievers", ["q_reciever" => $_post_["qic"], "b_reciever" => $_post_["bic"], "chat_key" => $hash]);
    }

    $chat_key = checkist\get_data_in_table_compare::get_data_in_table(["chatings", "chat_recievers"], "chatings.chat_key", ["chatings.q_sender" => $_session_["q"], "chatings.b_sender" => $_session_["b"], "chatings.sent" => 0, "chat_recievers.q_reciever" => $_post_["qic"], "chat_recievers.b_reciever" => $_post_["bic"]], ["chatings.chat_key" => "chat_recievers.chat_key"])["chat_key"];
} else {

    new returner\final_returner_json(['mis_conduct' => 'wrong credentials', 'field' => 'all']);
}

 
