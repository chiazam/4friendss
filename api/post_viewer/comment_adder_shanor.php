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

use check\if_post\check_isset_post as post_checker;
use check\data_in_table as checkist;
use time\time_to_string as time_string;
use post_timeline_stream as timestream;

if (!post_checker::check_isset_post(["word", "key", "device"])) {

    new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
}

if (empty(trim($_post_["word"]))) {

    new returner\final_returner_json(['mis_conduct' => 'empty', 'field' => 'word']);
} elseif (empty(trim($_post_["device"]))) {

    new returner\final_returner_json(['mis_conduct' => 'empty', 'field' => 'device']);
} elseif (empty(trim($_post_["key"]))) {

    new returner\final_returner_json(['mis_conduct' => 'empty', 'field' => 'key']);
}

if (timestream\post_get_streamer::is_comment_worthy($_post_["key"])|| checkist\num_of_data_in_table::num_of_data_in_table("comment_post", "*", ["key_main" => $_post_["key"]])) {

    $hash = md5(time_string::time_to_string(time()) . time_string::time_to_string(time()) . time_string::time_to_string(time()) . time_string::time_to_string(time()) . time_string::time_to_string(time()));

    checkist\add_data_in_table::add_data_in_table("comment_post", ["commenter_b" => $_session_["b"], "commenter_g" => $_session_["g"], "date" => time\time_to_string::time_to_string(time()), "comment_word" => ucfirst($_post_["word"]), "key_link" => $_post_["key"], "device" => $_post_["device"], "key_main" => $hash]);

    new returner\final_returner_json(['success' => 'comment successfully publish']);
} else {

    new returner\final_returner_json(['mis_conduct' => 'wrong credentials', 'field' => 'all']);
}
