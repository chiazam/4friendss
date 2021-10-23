<?php

require_once("./create_first_unsaved.php");

use deleters\content_media_deleter as media_deleter;
use check\if_post\check_isset_post as post_checker;

if (!post_checker::check_isset_post(["hash"])) {

    new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
}

if (empty(trim($_post_["hash"]))) {

    new returner\final_returner_json(['mis_conduct' => 'empty', 'field' => 'hash']);
}

(new media_deleter\delete_media_content($key_link, $_post_["hash"]))->remove_all_type_media();

new returner\final_returner_json(['message' => ["success" => 'deleted successfully']]);
