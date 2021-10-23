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

if (!get_checker::check_isset_get(["geef", "qeef", "type", "offset", "limit"])) {

    new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
}
$offset = 0;

$limit = 3;
if (is_numeric($_GET["offset"])) {
    $offset = $_GET["offset"];
}

if (is_numeric($_GET["limit"])) {
    $limit = $_GET["limit"];
}

if ($_GET["type"] === "posted" || $_GET["type"] === "tagged") {

    new returner\final_returner_json(['message' => person_profiler\person_post_times_hunt::general_post_times_($_GET["type"], $_GET["geef"], $_GET["qeef"], "../../", $_session_["r"], $_session_["q"], $_session_["g"], $offset, $limit)]);
} else {

    new returner\final_returner_json(['mis_conduct' => 'wrong credentials', 'field' => 'all']);
}
