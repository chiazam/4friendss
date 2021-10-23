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

if (!check_post\check_isset_post::check_isset_post(['group_bee'])) {

    new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
}

if (biz\finz\biz_finz::biz_is_valid_info(['group_b' => $_post_['group_bee']], ['b' => $_session_['b']]) === true) {

    new returner\final_returner_json(biz\finz\biz_finz::biz_add_remove_user($_post_['group_bee'], $_session_['b'], $_session_['q']));
} else {

    new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
}
