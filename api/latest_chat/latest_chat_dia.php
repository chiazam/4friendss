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

if (!get_checker::check_isset_get(["limit", "offset", "id_marker", "start_end"])) {

    new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
}

$limit = 10;
$offset = 0;
$id_marker = 0;
$start_end = true;

if (is_numeric($_GET["offset"])) {

    $offset = $_GET["offset"];
}
if (is_numeric($_GET["limit"])) {

    $limit = $_GET["limit"];
}

if (is_numeric($_GET["id_marker"])) {

    $id_marker = $_GET["id_marker"];

}

if ($_GET["start_end"]=="false") {

    $start_end = false;

}

new returner\final_returner_json(['message' => ['latest_chat' => notify\get\__latest_chat_preview::get_preview_chat_crib($limit, $offset, $_session_['q'],$id_marker,$start_end, "../../")]]);
