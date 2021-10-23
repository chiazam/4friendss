<?php

require_once("./create_first_unsaved.php");

use check\data_in_table as checkist;
use check\if_post\check_isset_post as post_checker;

if (!post_checker::check_isset_post(["privacy"])) {

    new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
}

if (empty(trim($_post_["privacy"]))) {

    new returner\final_returner_json(['mis_conduct' => 'empty', 'field' => 'privacy']);
}

new returner\final_returner_json(["success" => (new \privacy\privacy_helper($key_link, $post_typerrrrr, $_post_["privacy"], $_session_['q'], $_session_['g']))->handle_manipulator_privacy(), 'privacy' => $_post_["privacy"]]);
