<?Php

require_once './notify_owner.php';

if ($user === false) {

    new returner\final_returner_json(['mis_conduct' => 'empty', 'field' => 'key']);
}

use check\data_in_table as checkist;
use notify\get as notifyyer;
use check\if_get\check_isset_get as get_checker;

if (!get_checker::check_isset_get(["limit", "offset"])) {

    new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
}


if ($user !== false) {

    $offset = 0;
    $limit = 5;

    if (is_numeric($_GET["offset"])) {
        $offset = $_GET["offset"];
    }

    if (is_numeric($_GET["limit"])) {
        $limit = $_GET["limit"];
    }


    $data_me = checkist\get_data_in_table::get_data_in_table("users", "email,full,g,r,q,b,prof_pix,cover,act", ["b" => $_session_['b'], "g" => $_session_['g']]);

    $data_them = checkist\get_data_in_table::get_data_in_table("users", "full,email,g,r,q,b,prof_pix,cover,act,country,state", ["b" => $user['info']['b'], "q" => $user['info']['q']]);

    $beep = \persons\person_straight_hunter::human_full_presenter_($data_them, $data_me);


    new returner\final_returner_json(['message' => ['notifyer' => (new notifyyer\notify_getter('../../', [$beep], $_session_['g'], $_session_['q'], $limit, $offset))->get_helper_all_post_key()]]);
} else {

    new returner\final_returner_json(['mis_conduct' => 'wrong credentials', 'field' => 'all']);
}