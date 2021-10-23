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

if (checkist\num_of_data_in_table::num_of_data_in_table("new_messagers", "chat_key", ["q_sender" => $_session_["q"], "b_sender" => $_session_["b"]]) == 0) {

    $hash = hash_maker\hash_maker::post_times_hash_maker($_session_["b"], $_session_["q"]);

    checkist\add_data_in_table::add_data_in_table("new_messagers", ["q_sender" => $_session_["q"], "b_sender" => $_session_["b"], "chat_key" => $hash]);
}

$chat_key = checkist\get_data_in_table::get_data_in_table("new_messagers", "chat_key", ["q_sender" => $_session_["q"], "b_sender" => $_session_["b"]])["chat_key"];
