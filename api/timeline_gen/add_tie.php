<?php

require_once("./create_first_unsaved.php");

use check\data_in_table as checkist;
use check\if_post\check_isset_post as post_checker;

if (!post_checker::check_isset_post(["tie_key"])) {

    new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
}

if (empty(trim($_post_["tie_key"]))) {

    new returner\final_returner_json(['mis_conduct' => 'empty', 'field' => 'tie_key']);
}

if ((checkist\num_of_data_in_table::num_of_data_in_table("timeline", "*", ["key_link" => $_post_["tie_key"]]) > 0) || (checkist\num_of_data_in_table::num_of_data_in_table("audio__info", "*", ["hash" => $_post_["tie_key"]]) > 0)|| (checkist\num_of_data_in_table::num_of_data_in_table("users", "*", ["g" => $_post_["tie_key"]]) > 0)) {

    checkist\update_data_in_table::update_data_in_table('timeline', ["tied" => $_post_["tie_key"]], ['key_link' => $key_link]);

    new returner\final_returner_json(['message' => ['action' => 'content tied']]);
} else if ($_post_["tie_key"] === 'untie') {

    checkist\update_data_in_table::update_data_in_table('timeline', ["tied" => ''], ['key_link' => $key_link]);

    new returner\final_returner_json(['message' => ['action' => 'content untied']]);
} else {

    new returner\final_returner_json(['permission' => 'denied due to wrong credentials']);
};
