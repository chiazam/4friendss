<?php

require_once("../../api/timeline_gen/create_first_unsaved.php");

use check\if_post\check_isset_post as post_checker;

if (!post_checker::check_isset_post(["option"])) {

    new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
}

voting\finz\voting_finz::add_options($key_link, $_post_['option']);

new returner\final_returner_json(['success' => 'Option added successfully', 'poll_info' => voting\finz\voting_finz::get_voting_options($key_link, false)]);
