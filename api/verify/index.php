<?php

use auto__loader as auto___load;
use mysqli__ as mysqli_conns;
use check\if_post\check_isset_post as post_checker;
use check\data_in_table as check_table_num;
use check\if_get as check_get;

require_once '../../classes/auto_loader_happener.php';

require_once '../../extra_script/first_action.php';

new auto___load\auto_loader_happener('../../');

new mysqli_conns\mysqli_connector(HOST, USERNAME, PASSWORD);

new malware\mal_ware();

if (!post_checker::check_isset_post(['verify'])) {

    new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
}

if (!post_checker::check_isset_post(['verify'])) {

    new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
}

if (!check_get\check_isset_get::check_isset_get(['beeip', 'geeip'])) {

    new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
}

if (empty(trim($_GET['beeip'])) || empty(trim($_GET['geeip']))) {

    new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
}

if (empty(trim($_post_['verify']))) {

    new returner\final_returner_json(['mis_conduct' => 'empty', 'field' => 'verify']);
}

if (check_table_num\num_of_data_in_table::num_of_data_in_table("users", '*', ["b" => $_GET['beeip'], "g" => $_GET['geeip']]) === 0) {

    new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
}

if (check_table_num\num_of_data_in_table::num_of_data_in_table("verify", '*', ["verify_key" => $_post_['verify'], "b" => $_GET['beeip'], "g" => $_GET['geeip']]) > 0) {

    if (check_table_num\update_data_in_table::update_data_in_table("users", ["act" => 1], ["b" => $_GET['beeip'], "g" => $_GET['geeip']]) && check_table_num\delete_data_in_table::delete_data_in_table("verify", ["verify_key" => $_post_['verify'], "b" => $_GET['beeip'], "g" => $_GET['geeip']])) {

        new returner\final_returner_json(['success' => 'account verification successfull']);
    } else {

        $to = FRIENDS_EMAIL;
        $subject = 'account verification error';
        $body = '
    <body>

       an error occoured in account verification script

    </body>

    ';

        mail\mail_maker::mailer__ward($to, $subject, $body);

        new returner\final_returner_json(['failed' => 'account verification unsuccessfull']);
    }
} else {
    new returner\final_returner_json(['mis_conduct' => 'invalid', 'field' => 'verify']);
}