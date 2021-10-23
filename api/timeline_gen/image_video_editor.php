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

if (!check_post::check_isset_post(["blur", "brightness", "category", "grayscale", "invert", "hue-rotate", "saturate", "sepia", "opacity", "contrast"]) || !is_numeric($_post_["blur"]) || !is_numeric($_post_["brightness"]) || !is_numeric($_post_["contrast"]) || !is_numeric($_post_["grayscale"]) || !is_numeric($_post_["invert"]) || !is_numeric($_post_["hue-rotate"]) || !is_numeric($_post_["saturate"]) || !is_numeric($_post_["sepia"]) || !is_numeric($_post_["opacity"])) {

    new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
}

if ($_post_["category"] == "media_things" && !empty($_post_["media_key"]) && ($_post_["media_type"] == "images_media" || $_post_["media_type"] == "videos_media")) {

    if (checkist\num_of_data_in_table::num_of_data_in_table("media_styler", "*", ["media_key" => $_post_["media_key"], "media_types" => $_post_["media_type"]]) > 0) {

        checkist\update_data_in_table::update_data_in_table("media_styler", ["blur" => $_post_["blur"], "brightness" => $_post_["brightness"], "contrast" => $_post_["contrast"], "grayscale" => $_post_["grayscale"], "hue-rotate" => $_post_["hue-rotate"], "invert" => $_post_["invert"], "	opacity" => $_post_["opacity"], "saturate" => $_post_["saturate"], "sepia" => $_post_["sepia"]], ["media_key" => $_post_["media_key"], "media_types" => $_post_["media_type"]]);

        new returner\final_returner_json(['message' => ["success" => 'edited successfully']]);
    } else {
        checkist\add_data_in_table::add_data_in_table("media_styler", ["media_key" => $_post_["media_key"], "media_types" => $_post_["media_type"], "blur" => $_post_["blur"], "brightness" => $_post_["brightness"], "contrast" => $_post_["contrast"], "grayscale" => $_post_["grayscale"], "hue-rotate" => $_post_["hue-rotate"], "invert" => $_post_["invert"], "	opacity" => $_post_["opacity"], "saturate" => $_post_["saturate"], "sepia" => $_post_["sepia"]]);

        new returner\final_returner_json(['message' => ["success" => 'edited successfully']]);
    }
} else {
    new returner\final_returner_json(['mis_conduct' => 'wrong credentials', 'field' => 'all']);
}
