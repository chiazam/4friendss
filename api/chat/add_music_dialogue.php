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
use music\chat_background as bacg_music;

if (!post_checker::check_isset_post(["hash", 'big'])) {

    new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
}

if ($_post_['big'] === 'profile' || checkist\num_of_data_in_table::num_of_data_in_table("users", "g,r", ["b" => $_post_['big']]) > 0) {

    bacg_music\chat_music_handler::add_delete_chat_music($_session_["b"], $_post_['big'], $_post_['hash'], $_session_["q"]);

    new returner\final_returner_json(['message' => ['added' => bacg_music\chat_music_handler::is_this_music_chat_added($_session_["b"], $_post_['big'], $_post_['hash'])]]);
} else {
    new returner\final_returner_json(['mis_conduct' => 'wrong credentials', 'field' => 'big']);
}
