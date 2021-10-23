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

use check\if_get\check_isset_get as get_checker;

if (!get_checker::check_isset_get(["skip", "limit"])) {

    new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
}

$_skip = $_GET["skip"];

$_limit = $_GET["limit"];

if (!is_numeric($_GET["skip"])) {
    $_skip = 0;
}

if (!is_numeric($_GET["limit"])) {
    $_limit = 5;
}

new returner\final_returner_json(['people' => suggesters\suggest_persons::suggest_gennerator($_skip, $_limit, $_session_['b'])]);
