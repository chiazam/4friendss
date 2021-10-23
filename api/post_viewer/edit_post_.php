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

use check\if_post\check_isset_post as post_checker;
use check\data_in_table as checkist;

if (!post_checker::check_isset_post(["key"])) {

    new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
}

if (empty(trim($_post_["key"]))) {

    new returner\final_returner_json(['mis_conduct' => 'empty', 'field' => 'key']);
}

if (checkist\num_of_data_in_table::num_of_data_in_table('timeline', '*', ['key_link' => $_post_["key"], 'poster_q' => $_session_['q'], 'poster_g' => $_session_['g']]) > 0) {

    checkist\update_data_in_table::update_data_in_table('timeline', ["saved" => "2"], ['key_link' => $_post_["key"], 'poster_q' => $_session_['q'], 'poster_g' => $_session_['g']]);

    new returner\final_returner_json(['message' => ['action' => 'opening for editing successfull']]);
} else {

    new returner\final_returner_json(['permission' => 'denied due to wrong credentials']);
};
