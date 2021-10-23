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

use files\file_features as file_s;
use check\if_files as file_checker;
use verify\file as file_verfier;
use check\if_post as check_post;
use check\data_in_table as checkist;
use img_processor as img_culu;

if (!check_post\check_isset_post::check_isset_post(["group_q"])) {

    new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
}

if (checkist\num_of_data_in_table::num_of_data_in_table('groups', '*', ['group_q' => $_post_['group_q'], 'creater_q' => $_session_['q']]) === 0) {

    new returner\final_returner_json(['permission' => 'denied due to lack of authorization']);
}

if (file_checker\check_isset_files::check_isset_files(["image"])) {

    $files_image = file_s::file_features_upload($_FILES['image']);

    if (file_verfier\file_verify_::image_file_verifier($files_image)) {

        $hasher__mite = hash_maker\hash_maker::post_file_hash($files_image['name']);

        $_hash_of_file = $hasher__mite["hash"];

        $path_file = "files/biz_cover/" . $hasher__mite["hash_name"] . "." . $files_image['extension'];

        if (!move_uploaded_file($files_image['temp'], "../../" . $path_file)) {

            new returner\final_returner_json(['failed' => 'upload was not successfull']);
        }
    } else {

        new returner\final_returner_json(['mis_conduct' => 'file verification failed', 'field' => 'image']);
    }
} else {

    new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
}

$biz_info = checkist\get_data_in_table::get_data_in_table('groups', '*', ['group_q' => $_post_['group_q'], 'creater_q' => $_session_['q']]);

if (file_exists("../../" . $biz_info['group_cover']) && $biz_info['group_cover'] !== "icons/biz_ikon.png") {

    unlink("../../" . $biz_info['group_cover']);
}

if (checkist\update_data_in_table::update_data_in_table("groups", ["group_cover" => $path_file], ['group_q' => $_post_['group_q'], 'creater_q' => $_session_['q']])) {

    img_culu\back_img_handler::add_back_color($_post_['group_q'], 'biz_cover', $path_file);

    new returner\final_returner_json(['message' => ["new_path" => $path_file]]);
}
