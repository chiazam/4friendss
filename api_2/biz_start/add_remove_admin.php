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

use check\if_post as check_post;

if (!check_post\check_isset_post::check_isset_post(["group_b", 'b'])) {

    new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
}


if (biz\finz\biz_finz::biz_owner_admin($_post_['group_b'], $_session_['b']) === false) {

    new returner\final_returner_json(['permission' => 'denied due to lack of authorization']);
}

if (biz\finz\biz_finz::biz_is_member($_post_['group_b'], $_post_['b']) === false) {

    new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
}

new returner\final_returner_json(biz\finz\biz_finz::biz_add_remove_admin($_post_['group_b'], $_post_['b']));
