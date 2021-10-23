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
use time\time_to_string as time_string;
use check\if_post\check_isset_post as post_checker;

if (!post_checker::check_isset_post(['cate_post'])) {

    new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
}

$array_content = ["post", "times", "blog", 'event', 'poll', 'cinema'];

if (!in_array($_post_['cate_post'], $array_content)) {

    new returner\final_returner_json(['mis_conduct' => 'wrong credentials', 'field' => 'cate_post']);
}

if (checkist\num_of_data_in_table::num_of_data_in_table("timeline", "key_link", ["saved" => "0", "poster_g" => $_session_["g"], "poster_q" => $_session_["q"], "category" => $_post_['cate_post']]) === 0) {

    $hash = md5(time_string::time_to_string(time()) . time_string::time_to_string(time()) . time_string::time_to_string(time()) . time_string::time_to_string(time()) . time_string::time_to_string(time()));

    checkist\add_data_in_table::add_data_in_table("timeline", ["key_link" => $hash, "saved" => 0, "poster_g" => $_session_["g"], "poster_q" => $_session_["q"], "category" => $_post_['cate_post'],"tied" => ""]);
}

if (checkist\num_of_data_in_table::num_of_data_in_table("timeline", "key_link", ["saved" => "2", "poster_g" => $_session_["g"], "poster_q" => $_session_["q"], "category" => $_post_['cate_post']]) > 0) {

    $_unsaved_post = checkist\get_data_in_table::get_data_in_table("timeline", "key_link,tied", ["saved" => "2", "poster_g" => $_session_["g"], "poster_q" => $_session_["q"], "category" => $_post_['cate_post']]);
} elseif (checkist\num_of_data_in_table::num_of_data_in_table("timeline", "key_link", ["saved" => "0", "poster_g" => $_session_["g"], "poster_q" => $_session_["q"], "category" => $_post_['cate_post']]) > 0) {

    $_unsaved_post = checkist\get_data_in_table::get_data_in_table("timeline", "key_link,tied", ["saved" => "0", "poster_g" => $_session_["g"], "poster_q" => $_session_["q"], "category" => $_post_['cate_post']]);
}

$key_link = $_unsaved_post["key_link"];

$tiedd__ = $_unsaved_post["tied"];

$post_typerrrrr = $_post_['cate_post'];

if (checkist\num_of_data_in_table::num_of_data_in_table("post", "*", ["keey" => $key_link]) === 0) {

    checkist\add_data_in_table::add_data_in_table("post", ["keey" => $key_link]);
}
