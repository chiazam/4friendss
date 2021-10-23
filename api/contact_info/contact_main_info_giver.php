<?php

require_once './contact_owner_info.php';

use check\if_get\check_isset_get as get_checker;
use check as checkist;

if (!get_checker::check_isset_get(["category", "limit", "offset"])) {

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

$my_info = checkist\data_in_table\get_data_in_table::get_data_in_table("users", "full,email,g,r,q,b,prof_pix,cover,act,country,state", ["b" => $user['info']['b']]);


new returner\final_returner_json(['message' => ['persons' => contact_info\contact_info_bind::contact_bind_existence($my_info, $user['info']['b'], $_GET['category'], $limit, $offset)]]);
