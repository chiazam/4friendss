<?php

use auto__loader as auto___load;
use mysqli__ as mysqli_conns;
use check\if_post as check_post;
use check\data_in_table as checkist;
use password\verify as verifyer_key;

require_once '../../classes/auto_loader_happener.php';

require_once '../../extra_script/first_action.php';

new auto___load\auto_loader_happener('../../');

new mysqli_conns\mysqli_connector(HOST, USERNAME, PASSWORD);

new malware\mal_ware();

if ($_login_info === false) {

    if (!check_post\check_isset_post::check_isset_post(["email", "password"])) {

        new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
    }

    if (empty(trim($_post_["email"]))) {

        new returner\final_returner_json(['mis_conduct' => 'empty', 'field' => 'email']);
    } elseif (empty(trim($_post_["password"]))) {

        new returner\final_returner_json(['mis_conduct' => 'empty', 'field' => 'password']);
    } else if (!filter_var(trim($_post_["email"]), FILTER_VALIDATE_EMAIL)) {

        new returner\final_returner_json(['mis_conduct' => 'invalid', 'field' => 'email']);
    } else if (strlen(trim($_post_["password"])) < 6) {

        new returner\final_returner_json(['mis_conduct' => 'invalid length', 'field' => 'password']);
    }

    if (checkist\num_of_data_in_table::num_of_data_in_table("users", "email", ["email" => $_post_["email"]]) == 0) {

        new returner\final_returner_json(['mis_conduct' => 'unregistered', 'field' => 'email']);
    }

    $password_array_hash = checkist\get_data_in_table::get_data_in_table("users", "*", ["email" => $_post_["email"]]);

    if (verifyer_key\password_verify::password_verify($password_array_hash['hash'], $_post_["password"])) {

        $device = (check_post\check_isset_post::check_isset_post(['device'])) ? ($_post_['device']) : ('');

        checkist\add_data_in_table::add_data_in_table("logins", ["r" => $password_array_hash['r'], "g" => $password_array_hash['g'], "b" => $password_array_hash['b'], "q" => $password_array_hash['q'], "time" => time\time_to_string::time_to_string(time()), "device" => $device]);


        if ((new logger_in\loginer__())->login_starter($password_array_hash['b'], $password_array_hash['r']) === true) {
            $returner = ['success' => 'logged in successfull'];
        } else {

            $returner = ['failed' => 'login was not successfull, try again after 10 minutes'];
        }

        new returner\final_returner_json($returner);
    } else {

        new returner\final_returner_json(['mis_conduct' => 'invalid', 'field' => 'password']);
    }
} else {
    new returner\final_returner_json(['permission' => 'denied due to another account is logged in']);
}
