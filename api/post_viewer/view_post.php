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

if (!get_checker::check_isset_get(["key_viewer", "how"])) {

    new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
} else {
    if ($_GET["how"] !== "seer") {

        new returner\final_returner_json(['mis_conduct' => 'wrong credentials', 'field' => 'how']);
    }
}

// ............ get times_post ...............

if (checkist\num_of_data_in_table::num_of_data_in_table("timeline", "date,key_link,poster_g,poster_q,device,category,tied", ["saved" => 1, "key_link" => $_GET["key_viewer"]]) > 0) {

    $list_time_line_needed = checkist\get_data_in_table::get_data_in_table_loop("timeline", "date,key_link,poster_g,poster_q,device,category,tied", ["saved" => 1, "key_link" => $_GET["key_viewer"]]);

    for ($i = 0; $i < count($list_time_line_needed); $i++) {

        $chunker = $list_time_line_needed[$i];

        \deleters\delete_except_remain\delete_all_except_remain::delete_all_keep_remain('timeline', ["key_link" => $chunker["key_link"]]);
    }

    $post_born = timestream\post_get_streamer::help_imbitween($list_time_line_needed, $_session_["g"], $_session_["q"], $_session_["r"], false, "../../");

    viewer\viewer_register::reg__viewer($_GET["key_viewer"], $_session_["q"], $_session_["b"], "post_viewed");

    notify_seer\notify_see::notif_see_all($_session_["g"], $_session_["q"], $_GET["key_viewer"]);

    new returner\final_returner_json(['message' => ["post" => $post_born, "how" => $_GET["how"]]]);
} else {

    new returner\final_returner_json(['mis_conduct' => 'wrong credentials', 'field' => 'all']);
}
