<?php

use auto__loader as auto___load;
use mysqli__ as mysqli_conns;
use check\if_post as check_post;
use check\data_in_table as checkist;
use time\time_to_string as time_string;
use notify_add as notify;
use hash_maker as hasher;

require_once '../../classes/auto_loader_happener.php';

require_once '../../extra_script/first_action.php';

requirer_bulk('../../', ['classes/php_lib/getid3/getid3.php']);

new auto___load\auto_loader_happener('../../');

new mysqli_conns\mysqli_connector(HOST, USERNAME, PASSWORD);

new malware\mal_ware(true);

if ($_login_info === false) {

    new returner\final_returner_json(['permission' => 'denied due to no account is logged in']);
}

if (!check_post\check_isset_post::check_isset_post(["desc", "_name"])) {

    new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
}

if (empty(trim($_post_["_name"]))) {

    new returner\final_returner_json(['mis_conduct' => 'empty', 'field' => '_name']);

} elseif (empty(trim($_post_["desc"]))) {

    new returner\final_returner_json(['mis_conduct' => 'empty', 'field' => 'desc']);
}

if (checkist\num_of_data_in_table::num_of_data_in_table("shows", "*", ["name_" => $_post_["_name"]]) > 0) {

    new returner\final_returner_json(['mis_conduct' => 'Show name already exists', 'field' => '']);
    
}

$hash =hasher\hash_maker::post_times_hash_maker($_session_["b"],$_session_["g"]);

checkist\add_data_in_table::add_data_in_table("shows",["name_" => $_post_["_name"], 'owner_b' => $_session_['b'], 'key_' => $hash,'create_date'=> time_string::time_to_string(time()), 'desc_'=>$_post_["desc"], 'cover'=>"icons/show_cover.jpeg","publish" => 0]);

// notify\notification_maker::show_season_notifyer($hash,'shows',$_session_['g'],$_session_['q']);

new returner\final_returner_json(["success" => 'show created successfully']);