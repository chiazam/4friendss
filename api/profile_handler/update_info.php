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

use location as locate;
use check\data_in_table as checkist;
use check\if_post\check_isset_post as check_post;

if (!check_post::check_isset_post(["country", "state", "city", "LGA", "phone", "status", "theme"])) {

    new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
}

if (empty($_post_['country'])) {

    new returner\final_returner_json(['mis_conduct' => 'empty', 'field' => 'country']);
} elseif (empty($_post_['city'])) {

    new returner\final_returner_json(['mis_conduct' => 'empty', 'field' => 'city']);
} elseif (empty($_post_['LGA'])) {

    new returner\final_returner_json(['mis_conduct' => 'empty', 'field' => 'LGA']);
} elseif (empty($_post_['theme'])) {

    new returner\final_returner_json(['mis_conduct' => 'empty', 'field' => 'theme']);
} elseif (is_numeric($_post_['country'])) {

    new returner\final_returner_json(['mis_conduct' => 'invalid', 'field' => 'country']);
} elseif (is_numeric($_post_['city'])) {

    new returner\final_returner_json(['mis_conduct' => 'invalid', 'field' => 'city']);
} elseif (is_numeric($_post_['LGA'])) {

    new returner\final_returner_json(['mis_conduct' => 'invalid', 'field' => 'LGA']);
} elseif (is_numeric($_post_['theme'])) {

    new returner\final_returner_json(['mis_conduct' => 'invalid', 'field' => 'theme']);
}

if (locate\location_clearer::country_true($_post_["country"]) == false) {

    new returner\final_returner_json(['mis_conduct' => 'invalid', 'field' => 'country']);
}
if (locate\location_clearer::state_true($_post_['state'], $_post_["country"]) == false) {

    new returner\final_returner_json(['mis_conduct' => 'invalid', 'field' => 'state']);
}
if (checkist\update_data_in_table::update_data_in_table("users", ["status" => $_post_["status"], "country" => $_post_["country"], "state" => $_post_["state"], "city" => $_post_["city"], "LGA" => $_post_["LGA"], "theme" => $_post_["theme"], "phone" => $_post_["phone"]], ["g" => $_session_['g'], "r" => $_session_['r']])) {

    new returner\final_returner_json(['success' => 'profile successfully updated']);
} else {

    new returner\final_returner_json(['failed' => 'profile update was not successfull']);
}



//fleurdf69@hotmail.com
