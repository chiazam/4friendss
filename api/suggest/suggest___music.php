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
use check as checkist;

if (!get_checker::check_isset_get(["skip", "limit"])) {

    new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
}


$_limit = 10;
$_skip = 0;

if (is_numeric($_GET["skip"])) {
    $_skip = $_GET["skip"];
}
if (is_numeric($_GET["limit"])) {
    $_limit = $_GET["limit"];
}


$my_info = checkist\data_in_table\get_data_in_table::get_data_in_table("users", "*", ["r" => $_session_['r'], "g" => $_session_['g'], "b" => $_session_['b'], "q" => $_session_['q']]);

new returner\final_returner_json(['message' => (new suggesters\suggest_music(suggesters\suggest_persons::suggest_gennerator($_skip, $_limit, $_session_['b'], true), true, '../../', $_limit, $_session_['b'], $_session_['g'], $_skip))->_suggest_music_now()]);
