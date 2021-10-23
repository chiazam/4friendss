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
use post_timeline_stream as timestream;
use check\if_get\check_isset_get as get_checker;
use relate_and_how as relator;

if (!get_checker::check_isset_get(["bike"])) {

    new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
}

if (checkist\num_of_data_in_table::num_of_data_in_table("users", "*", ["b" => $_GET["bike"]]) > 0) {

    $data = checkist\get_data_in_table::get_data_in_table("users", "*", ["b" => $_GET["bike"]]);

    $user = timestream\post_get_streamer::post_get_poster_people_infor(["g" => $data["g"], "r" => $data["r"]]);

    $user["relationship"] = relator\relate_detect_how::relate_picker($data["g"], $data["q"], $_session_["g"], $_session_["q"]);
} else {

    new returner\final_returner_json(['mis_conduct' => 'wrong credentials', 'field' => 'bike']);
}
