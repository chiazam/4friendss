<?php

use auto__loader as auto___load;
use mysqli__ as mysqli_conns;
use num_slang as slanger;

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
use check\if_get\check_isset_get as get_checker;
use viewer_register as viewer;
use time as time__;

if (!get_checker::check_isset_get(["fr_r", "fr_g"]) && !get_checker::check_isset_get(["fr_user"])) {

    new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
}

if (get_checker::check_isset_get(["fr_r", "fr_g"])) {
    $array_ans = ["r" => urldecode($_GET["fr_r"]), "g" => urldecode($_GET["fr_g"])];
} else if (get_checker::check_isset_get(["fr_user"])) {

    $array_ans = ['username' => $_GET["fr_user"]];
}

if (checkist\num_of_data_in_table::num_of_data_in_table("users", "*", $array_ans) == 0) {

    new returner\final_returner_json(['mis_conduct' => 'wrong credentials', 'field' => 'all']);
} else {

    $data = checkist\get_data_in_table::get_data_in_table("users", "full,email,act,r,g,q,b,date,date_birth,cover,prof_pix,country,state,city,LGA,gender,phone,status,theme", $array_ans);

    $data_me = checkist\get_data_in_table::get_data_in_table("users", "email,full,g,r,q,b,prof_pix,cover,act", ["r" => $_session_['r'], "g" => $_session_['g']]);

    if ($data_me['g'] !== $data['g']) {
        viewer\viewer_register::reg__viewer($data["g"], $_session_["q"], $_session_["b"], "profile_viewed");
    }

    $beep = persons\person_straight_hunter::human_full_presenter_($data, $data_me);

    $beep['notify_unseen'] = notify\get\notify_getter::_yes_notify([$beep], $_session_['g'], $_session_['q']);

    $beep['info']["date_birth"] = time__\date_diff_array::displayable_time_format($beep['info']["date_birth"], time__\date_diff_array::date_diff_array(time__\time_to_string::time_to_string(time()), $beep['info']["date_birth"]), false);

    $beep['info']["date"] = time__\date_diff_array::displayable_time_format($beep['info']["date"], time__\date_diff_array::date_diff_array(time__\time_to_string::time_to_string(time()), $beep['info']["date"]));

    $beep['me_yet_see'] = notify\get\notify_chat_getter::did_em_chet_me($_session_["b"], $_session_["q"], $data['b'], $data["q"]);
	
	$beep["comment_num"] = slanger\num_slang::slanger(post_timeline_stream\post_get_streamer::num_comment($data['g']));
	
	$beep["num_tiers"] = slanger\num_slang::slanger(post_timeline_stream\post_get_streamer::num_tiers($data['g']));

    new returner\final_returner_json(['message' => $beep]);
}
