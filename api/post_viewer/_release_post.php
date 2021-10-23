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
use exp_un_post_times as exp_un;

if (!get_checker::check_isset_get(["offset", "how", "limit"])) {

    new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
} else {

    $limit = 5;
    $offset = 0;

    if (is_numeric($_GET["limit"])) {
        $limit = $_GET["limit"];
    }

    if (is_numeric($_GET["offset"])) {
        $offset = $_GET["offset"];
    }

    if ($_GET["how"] !== "timeline") {

        new returner\final_returner_json(['mis_conduct' => 'wrong credentials', 'field' => 'how']);
    }
}

// ............ get post timeliners ...............

$posts = exp_un\un_expire_times_post::get_times_unexpired_main($_session_['g'], $_session_['q'], $_session_['b'], $_session_['r'], '../../', true, 'post', $offset, $limit, false);

if (!isset($posts['none'])) {

    for ($i = 0; $i < count($posts); $i++) {

        $chunker = $posts[$i];

        \deleters\delete_except_one\delete_all_except_one::delete_all_save_one('timeline', ["key_link" => $chunker["key_link"]]);
    }
}


if (!isset($posts['none'])) {

    new returner\final_returner_json(['message' => ['post' => $posts]]);
} else {

    $posts = exp_un\un_expire_times_post::get_times_unexpired_main($_session_['g'], $_session_['q'], $_session_['b'], $_session_['r'], '../../', true, 'post', $offset, $limit, true);

    if (!isset($posts['none'])) {

        for ($i = 0; $i < count($posts); $i++) {

            $chunker = $posts[$i];

            \deleters\delete_except_one\delete_all_except_one::delete_all_save_one('timeline', ["key_link" => $chunker["key_link"]]);
        }
    }

    new returner\final_returner_json(['message' => ['post' => $posts]]);
}
