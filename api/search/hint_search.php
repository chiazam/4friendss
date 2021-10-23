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
use all_search as search;

if (!get_checker::check_isset_get(["word", "type", "offset", "limit"])) {

    new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
}
$offset = 0;

$limit = 5;
if (is_numeric($_GET["offset"])) {
    $offset = $_GET["offset"];
}

if (is_numeric($_GET["limit"])) {
    $limit = $_GET["limit"];
}

$creata_b = '';

if (get_checker::check_isset_get(["creata_b"])) {

    $creata_b = $_GET["creata_b"];

}

if (!empty(trim($_GET["word"]))) {
    new returner\final_returner_json(['message' => search\main_all_search::finally_returner(strtolower(trim($_GET["word"])), trim($_GET["type"]), $_session_['g'], $_session_['q'], "../../", $offset, $limit, $creata_b)]);
} else {
    new returner\final_returner_json(['message' => search\main_all_search::finally_returner_empty(trim($_GET["type"]), $_session_['g'], $_session_['q'], "../../", $offset, $limit, $creata_b)]);
}
