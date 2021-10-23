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
use check\if_post\check_isset_post as check_post;

if (!check_post::check_isset_post(["fr_b", 'add'])) {

    new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
}

if (checkist\num_of_data_in_table::num_of_data_in_table("users", "*", ["b" => $_post_["fr_b"]]) > 0) {

$occour_fwend = checkist\num_of_data_in_table::num_of_data_in_table("contact", "*", ["adder_b" => $_session_['b'], "added_b" => $_post_["fr_b"]]);

if ($_post_["add"] === false) {

if ($occour_fwend > 0) {

checkist\delete_data_in_table::delete_data_in_table("contact", ["adder_b" => $_session_['b'], "added_b" => $_post_["fr_b"]]);
}

new returner\final_returner_json(['message' => ["contacted" => 0]]);
} else if ($_post_["add"] === true) {

if ($occour_fwend === 0) {

checkist\add_data_in_table::add_data_in_table("contact", ["adder_b" => $_session_['b'], "added_b" => $_post_["fr_b"]]);
}

new returner\final_returner_json(['message' => ["contacted" => 1]]);
} else {

new returner\final_returner_json(['mis_conduct' => 'wrong credentials', 'field' => 'add']);
}
} else {

new returner\final_returner_json(['mis_conduct' => 'wrong credentials', 'field' => 'fr_b']);
}
