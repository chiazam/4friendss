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
use deleters\delete_timeliner as timeline_del;

if (!post_checker::check_isset_post(["key"])) {

    new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
}

if (empty(trim($_post_["key"]))) {

    new returner\final_returner_json(['mis_conduct' => 'empty', 'field' => 'key']);
}

timeline_del\delete_timeline::timeline_delete($_post_["key"], $_session_['g'], $_session_['q']);

new returner\final_returner_json(['message' => ['action' => 'content deleted successfully']]);
