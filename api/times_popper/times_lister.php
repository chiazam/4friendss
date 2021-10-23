<?php

require_once './owner.php';

use check\if_get\check_isset_get as get_checker;
use person_profiler as prof_per;

if (!get_checker::check_isset_get(["limit", "offset"])) {

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

$times = prof_per\person_post_times_hunt::my_post_times_($user['info']['g'], $user['info']['q'], '../../', $_session_['r'], $_session_['q'], $_session_['g'], $offset, $limit, "times", true, false, false);

new returner\final_returner_json(['message' => ['times' => $times]]);
