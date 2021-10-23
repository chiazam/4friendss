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

if (!check_post\check_isset_post::check_isset_post(["email", "phone", "website", 'group_b'])) {

    new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
}

if (biz\finz\biz_finz::biz_owner_admin($_post_['group_b'], $_session_['b']) === false) {

    new returner\final_returner_json(['permission' => 'denied due to lack of authorization']);
}

if (!empty(trim($_post_['email']))) {

    if (!filter_var(trim($_post_["email"]), FILTER_VALIDATE_EMAIL)) {

        new returner\final_returner_json(['mis_conduct' => 'invalid', 'field' => 'email']);
    }
}

if (!empty(trim($_post_['website']))) {

    if (!filter_var(trim($_post_["website"]), FILTER_VALIDATE_URL)) {

        new returner\final_returner_json(['mis_conduct' => 'invalid', 'field' => 'website']);
    }
}

if (checkist\num_of_data_in_table::num_of_data_in_table('group_info', '*', ['group_b' => $_post_['group_b']]) === 0) {

    $group_info_ = checkist\get_data_in_table::get_data_in_table('groups', '*', ['group_b' => $_post_['group_b'], 'creater_b' => $_session_['b']]);

    checkist\add_data_in_table::add_data_in_table('group_info', ['group_b' => $group_info_['group_b'], 'group_q' => $group_info_['group_q'], 'email' => trim($_post_['email']), 'phone' => trim($_post_['phone']), 'website' => trim($_post_['website'])]);

    new returner\final_returner_json(['message' => ["success" => 'information added successfully']]);
} else {

    checkist\update_data_in_table::update_data_in_table("group_info", ['email' => trim($_post_['email']), 'phone' => trim($_post_['phone']), 'website' => trim($_post_['website'])], ['group_b' => $_post_['group_b']]);

    new returner\final_returner_json(['message' => ["success" => 'information updated successfully']]);
}
