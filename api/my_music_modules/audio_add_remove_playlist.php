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

use check\data_in_table as checkist;
use check\if_post\check_isset_post as post_checker;

if (!post_checker::check_isset_post(["music_hash"])) {

    new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
}

if (checkist\num_of_data_in_table::num_of_data_in_table("audio__info", "*", ["hash" => $_post_["music_hash"]]) > 0) {

    if (checkist\num_of_data_in_table::num_of_data_in_table("music_playist", "*", ["hash" => $_post_["music_hash"], "player_g" => $_session_['g'], "player_b" => $_session_['b']]) > 0) {

        checkist\delete_data_in_table::delete_data_in_table("music_playist", ["hash" => $_post_["music_hash"], "player_g" => $_session_['g'], "player_b" => $_session_['b']]);

        new returner\final_returner_json(['message' => ["favourite" => false]]);
    } else {

        checkist\add_data_in_table::add_data_in_table("music_playist", ["hash" => $_post_["music_hash"], "player_g" => $_session_['g'], "player_b" => $_session_['b']]);

        new returner\final_returner_json(['message' => ["favourite" => true]]);
    }
} else {

    new returner\final_returner_json(['mis_conduct' => 'wrong credentials', 'field' => 'key']);
} 
