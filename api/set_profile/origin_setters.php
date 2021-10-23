<?php

use auto__loader as auto___load;
use mysqli__ as mysqli_conns;
use location as locate;
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

if (false !== perif_handle\account_periferry_handler::origin_returner($_session_['b'], $_session_['r'])) {
    new returner\final_returner_json(['permission' => 'denied due to presence of origin']);
}

if (!check_post\check_isset_post::check_isset_post(["country", "city", "state", "LGA"])) {

    new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
}

if (empty($_post_['country'])) {

    new returner\final_returner_json(['mis_conduct' => 'empty', 'field' => 'country']);
} elseif (empty(trim($_post_['city']))) {

    new returner\final_returner_json(['mis_conduct' => 'empty', 'field' => 'city']);
} elseif (empty(trim($_post_['LGA']))) {

    new returner\final_returner_json(['mis_conduct' => 'empty', 'field' => 'LGA']);
} elseif (is_numeric(trim($_post_['city']))) {

    new returner\final_returner_json(['mis_conduct' => 'invalid', 'field' => 'city']);
} elseif (is_numeric(trim($_post_['LGA']))) {

    new returner\final_returner_json(['mis_conduct' => 'invalid', 'field' => 'LGA']);
}

if (locate\location_clearer::country_true($_post_["country"]) == false) {

    new returner\final_returner_json(['mis_conduct' => 'invalid', 'field' => 'country']);
}
if (locate\location_clearer::state_true($_post_['state'], $_post_["country"]) == false) {

    new returner\final_returner_json(['mis_conduct' => 'invalid', 'field' => 'state']);
}

if (checkist\update_data_in_table::update_data_in_table("users", ["country" => $_post_['country'], "state" => $_post_['state'], "city" => $_post_['city'], "LGA" => $_post_['LGA']], ["g" => $_session_['g'], "r" => $_session_['r']])) {

    new returner\final_returner_json(['success' => 'origin successfully updated']);
} else {

    new returner\final_returner_json(['failed' => 'origin update was not successfull']);
}