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
use post_timeline_stream as timestream;

if (!get_checker::check_isset_get(["offset", "limit", "key", "top", "stream"])) {

    new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
}

$offset = 0;
$limit = 3;
$top = true;
$stream = true;

if (is_numeric($_GET["offset"])) {

    $offset = $_GET["offset"];
}

if (is_numeric($_GET["limit"])) {

    $limit = $_GET["limit"];
}

if ($_GET["top"] == "false") {

    $top = false;
}

if ($_GET["stream"] == "false") {

    $stream = false;
}

new returner\final_returner_json(['message' => timestream\post_get_streamer::post_times_get__comment($_GET["key"], $_session_['g'], $_session_['q'], $offset, $limit, $stream, $top), 'is_post_comment_reply' => timestream\post_get_streamer::is_post_comment_reply($_GET["key"])]);
