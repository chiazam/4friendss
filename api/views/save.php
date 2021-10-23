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
use post_timeline_stream as time_liner;

if (!post_checker::check_isset_post(['category', 'key'])) {

    new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
}

if (empty(trim($_post_["category"]))) {

    new returner\final_returner_json(['mis_conduct' => 'empty', 'field' => 'category']);
} elseif (empty(trim($_post_["key"]))) {

    new returner\final_returner_json(['mis_conduct' => 'empty', 'field' => 'key']);
}

if (checkist\num_of_data_in_table::num_of_data_in_table("timeline", "*", ["saved" => 1, "key_link" => $_post_["key"], 'category' => $_post_["category"]]) > 0) {

    if (time_liner\post_get_streamer::get_if_saved_post($_post_["key"], $_post_["category"], $_session_["q"], $_session_["r"]) === false) {

        if (checkist\add_data_in_table::add_data_in_table("view_later", ["key_id" => $_post_["key"], "category" => $_post_["category"], "saver_r" => $_session_["r"], "saver_q" => $_session_["q"]])) {

            new returner\final_returner_json(['success' => 'bookmarked successfully']);
        } else {

            new returner\final_returner_json(['failed' => 'bookmarking was not successfull']);
        }
    } else {

        new returner\final_returner_json(['mis_conduct' => 'wrong information', 'field' => 'all']);
    }
} else {

    new returner\final_returner_json(['mis_conduct' => 'wrong information', 'field' => 'all']);
}

