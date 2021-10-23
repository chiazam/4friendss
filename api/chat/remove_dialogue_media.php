<?php

require_once("./create_first_dialogue.php");

use check\data_in_table as checkist;
use check\if_post\check_isset_post as post_checker;
use img_processor as img_culu;
use chat_file_media_returner as chat_filer;

if (!post_checker::check_isset_post(["hash"])) {

    new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
}

chat_filer\chat_media_getter::delete_each_dialogue_file($chat_key, $_post_["hash"], "../../");

new returner\final_returner_json(['message' => ["success" => 'deleted successfully']]);
