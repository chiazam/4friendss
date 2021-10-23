<?php

use auto__loader as auto___load;
use mysqli__ as mysqli_conns;
use check\if_post as check_post;
use check\data_in_table as checkist;

require_once '../../classes/auto_loader_happener.php';

require_once '../../extra_script/first_action.php';

requirer_bulk('../../', ['classes/php_lib/getid3/getid3.php']);

new auto___load\auto_loader_happener('../../');

new mysqli_conns\mysqli_connector(HOST, USERNAME, PASSWORD);

new malware\mal_ware();

if ($_login_info === false) {

    new returner\final_returner_json(['permission' => 'denied due to no account is logged in']);
}

if (false !== perif_handle\account_periferry_handler::gender_returner($_session_['b'], $_session_['r'])) {
    new returner\final_returner_json(['permission' => 'denied due to presence of gender']);
}

if (!check_post\check_isset_post::check_isset_post(["gender"]) && !check_post\check_isset_post::check_isset_post(["phone"])) {

    new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
}

if (check_post\check_isset_post::check_isset_post(["gender"])) {



    if (empty(trim($_post_['gender']))) {

        new returner\final_returner_json(['mis_conduct' => 'empty', 'field' => 'gender']);
    } elseif ($_post_['gender'] !== "male" && $_post_['gender'] !== "female") {

        new returner\final_returner_json(['mis_conduct' => 'invalid', 'field' => 'gender']);
    } else {
        $gather_array = ["gender" => $_post_['gender']];
    }
}

if (check_post\check_isset_post::check_isset_post(["phone"])) {

    if (!empty(trim($_post_['phone']))) {
        $gather_array['phone'] = $_post_['phone'];
    }
}

if (check_post\check_isset_post::check_isset_post(["gender"]) || check_post\check_isset_post::check_isset_post(["phone"])) {

    if (checkist\update_data_in_table::update_data_in_table("users", $gather_array, ["g" => $_session_['g'], "r" => $_session_['r']])) {

        if (check_post\check_isset_post::check_isset_post(["phone"])) {

            new returner\final_returner_json(['success' => 'phone and gender successfully updated']);
        } else if (check_post\check_isset_post::check_isset_post(["gender"])) {

            new returner\final_returner_json(['success' => 'gender successfully updated']);
        }
    } else {

        if (check_post\check_isset_post::check_isset_post(["phone"])) {

            new returner\final_returner_json(['failed' => 'phone and gender update was not successfull']);
        } else if (check_post\check_isset_post::check_isset_post(["gender"])) {

            new returner\final_returner_json(['success' => 'gender update was not successfull']);
        }
    }
}