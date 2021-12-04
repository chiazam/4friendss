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
use post_timeline_stream as timestream;
use check\data_in_table as checkist;
use viewer_register as viewer;

if (!get_checker::check_isset_get(["key_viewer"])) {

    new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
}

// ............ get show ...............

if (checkist\num_of_data_in_table::num_of_data_in_table("seasons","name_,show_,key_,create_date,desc_,cover,publish", ["key_" => $_GET["key_viewer"]]) > 0) {

    \deleters\delete_except_remain\delete_all_except_remain::delete_all_keep_remain("seasons", ["key_" => $_GET["key_viewer"]]);

    viewer\viewer_register::reg__viewer($_GET["key_viewer"], $_session_["q"], $_session_["b"], "season_viewed");

    notify_seer\notify_see::notif_see_all($_session_["g"], $_session_["q"], $_GET["key_viewer"]);

    new returner\final_returner_json(['message' => show\finz\get_show_info::get_full_season_info($_GET["key_viewer"], $_session_["g"], $_session_["q"], true,false)]);

} else {

    new returner\final_returner_json(['mis_conduct' => 'wrong credentials', 'field' => 'all']);

}

