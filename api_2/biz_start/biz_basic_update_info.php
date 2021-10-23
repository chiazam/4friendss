<?php

use auto__loader as auto___load;
use mysqli__ as mysqli_conns;
use check\if_post as check_post;
use check\data_in_table as checkist;

require_once '../../classes/auto_loader_happener.php';

require_once '../../extra_script/first_action.php';

requirer_bulk('../../', ['classes/php_lib/getid3/getid3.php']);

new auto___load\auto_loader_happener('../../');

new mysqli_conns\mysqli_connector(HOST, USERNAME, PASSWORD);

new malware\mal_ware(true);

if ($_login_info === false) {

    new returner\final_returner_json(['permission' => 'denied due to no account is logged in']);
}

if (!check_post\check_isset_post::check_isset_post(["privacy", "description", 'group_b'])) {

    new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
}


if (biz\finz\biz_finz::biz_owner_admin($_post_['group_b'], $_session_['b']) === false) {

    new returner\final_returner_json(['permission' => 'denied due to lack of authorization']);
}

if (!is_numeric($_post_['privacy']) || ($_post_['privacy'] > 1)) {

    new returner\final_returner_json(['mis_conduct' => 'invalid', 'field' => 'privacy']);
}

if (empty(trim($_post_['description']))) {

    new returner\final_returner_json(['mis_conduct' => 'empty', 'field' => 'description']);
}

checkist\update_data_in_table::update_data_in_table("groups", ["private" => trim($_post_['privacy']), "desc" => trim($_post_['description'])], ['group_b' => $_post_['group_b'], 'creater_b' => $_session_['b']]);

new returner\final_returner_json(['message' => ["success" => 'information updated successfully']]);



