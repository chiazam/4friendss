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
use audio\activities as music_active;

if (!get_checker::check_isset_get(["bip", "gip"])) {

    new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
}

if (checkist\num_of_data_in_table::num_of_data_in_table("users", "*", ["g" => $_GET["gip"], "b" => $_GET["bip"]]) > 0) {

    $data = checkist\get_data_in_table::get_data_in_table("users", "*", ["g" => $_GET["gip"], "b" => $_GET["bip"]]);

    $user = timestream\post_get_streamer::post_get_poster_people_infor(["g" => $data["g"], "r" => $data["r"]]);

    $user["relationship"] = relator\relate_detect_how::relate_picker($data["g"], $data["q"], $_session_["g"], $_session_["q"]);

    $user["played"] = ((new music_active\music_view_favour_play($_session_["g"], $_session_["b"], $data["g"], $data["b"], "../../", 'played', 5, 0, true))->get_wat_want());

    $user["favourite"] = ((new music_active\music_view_favour_play($_session_["g"], $_session_["b"], $data["g"], $data["b"], "../../", 'favourite', 5, 0, true))->get_wat_want());

    $user["playlist"] = ((new music_active\music_view_favour_play($_session_["g"], $_session_["b"], $data["g"], $data["b"], "../../", 'playlist', 5, 0, true))->get_wat_want());
} else {

    $user = false;
}
