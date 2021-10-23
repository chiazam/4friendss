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
use check\if_post\check_isset_post as check_post;
use personal_style\personal_style_returner as person_style;

if (!check_post::check_isset_post(["posY"]) || !is_numeric($_post_["posY"])) {

    new returner\final_returner_json(['mis_conduct' => 'wrong credentials', 'field' => 'posY']);
}

if (!person_style::get_cover($_session_['b'], $_session_['q'])) {

    checkist\add_data_in_table::add_data_in_table("cover_styler", ["b" => $_session_['b'], "q" => $_session_['q'], "pos-x" => "50", "pos-y" => $_post_["posY"]]);

    new returner\final_returner_json(['message' => ["success" => 'cover image successfully adjusted']]);
} else {

    checkist\update_data_in_table::update_data_in_table("cover_styler", ["pos-x" => "50", "pos-y" => $_post_["posY"]], ["b" => $_session_['b'], "q" => $_session_['q']]);

    new returner\final_returner_json(['message' => ["success" => 'cover image successfully adjusted']]);
}
