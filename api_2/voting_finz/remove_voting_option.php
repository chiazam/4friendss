<?php

require_once("../../api/timeline_gen/create_first_unsaved.php");

use check\if_post\check_isset_post as post_checker;

if (!post_checker::check_isset_post(['option_key'])) {

    new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
}

voting\finz\voting_finz::remove_options($key_link, $_post_['option_key']);

new returner\final_returner_json(['success' => 'Option deleted successfully', 'poll_info' => voting\finz\voting_finz::get_voting_options($key_link, false)]);
