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

if (false === perif_handle\account_periferry_handler::no_birth_days($_session_['r'], $_session_['b'])) {
    new returner\final_returner_json(['permission' => 'denied due to presence of birth date']);
}

if (!check_post\check_isset_post::check_isset_post(["day", "month", "year"])) {

    new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
}
if (empty(trim($_post_['day']))) {

    new returner\final_returner_json(['mis_conduct' => 'empty', 'field' => 'day']);
} elseif (empty(trim($_post_['month']))) {

    new returner\final_returner_json(['mis_conduct' => 'empty', 'field' => 'month']);
} elseif (empty(trim($_post_['year']))) {

    new returner\final_returner_json(['mis_conduct' => 'empty', 'field' => 'year']);
} elseif (!is_numeric($_post_['day'])) {

    new returner\final_returner_json(['mis_conduct' => 'invalid', 'field' => 'day']);
} elseif (!is_numeric($_post_['month'])) {

    new returner\final_returner_json(['mis_conduct' => 'invalid', 'field' => 'month']);
} elseif (!is_numeric($_post_['year'])) {

    new returner\final_returner_json(['mis_conduct' => 'invalid', 'field' => 'year']);
} else if (!checkdate($_post_['month'], $_post_['day'], $_post_['year'])) {

    new returner\final_returner_json(['mis_conduct' => 'invalid date', 'field' => '']);
}

$date_birth = $_post_['year'] . "-" . $_post_['month'] . "-" . $_post_['day'];

if (\time\string_to_time::string_to_time($date_birth) < \time\string_to_time::string_to_time("1900-01-01")) {

    new returner\final_returner_json(['mis_conduct' => 'date cannot be before 1900', 'field' => '']);
} else if (\time\string_to_time::string_to_time($date_birth) > time()) {

    new returner\final_returner_json(['mis_conduct' => 'date cannot be a future date', 'field' => '']);
}

if (checkist\update_data_in_table::update_data_in_table("users", ["date_birth" => $date_birth], ["g" => $_session_['g'], "r" => $_session_['r']])) {

    new returner\final_returner_json(['success' => 'date of birth successfully added']);
} else {

    new returner\final_returner_json(['failed' => 'updating date of birth not successfull']);
}


