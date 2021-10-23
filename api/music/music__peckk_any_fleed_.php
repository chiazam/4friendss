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
use audio\activities as music_active;

if (!get_checker::check_isset_get(["bip", "gip", "offset", "limit", "category"])) {

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

if ($_GET['category'] != "played" && $_GET['category'] != "playlist" && $_GET['category'] != "favourite") {

    header("location:../../");
    die();
}

new returner\final_returner_json(['message' => (new music_active\music_view_favour_play($_session_["g"], $_session_["b"], $_GET["gip"], $_GET["bip"], "../../", $_GET["category"], $limit, $offset))->get_wat_want()]);

