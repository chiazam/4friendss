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

use check\if_post\check_isset_post as check_post;
use viewer_register as viewer;
use check\data_in_table as checkist;

if (!check_post::check_isset_post(["key"])) {

    new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
}

if (!empty(trim($_post_["key"]))) {

    if (checkist\num_of_data_in_table::num_of_data_in_table("audio__info", "*", ["hash" => $_post_["key"]]) > 0) {

        viewer\viewer_register::reg__viewer($_post_["key"], $_session_["q"], $_session_["b"], "music");
        new returner\final_returner_json(['success' => 'audio saved successfully']);
    } else {

        new returner\final_returner_json(['mis_conduct' => 'wrong information', 'field' => 'all']);
    }
} else {

    new returner\final_returner_json(['mis_conduct' => 'empty', 'field' => 'key']);
} 
