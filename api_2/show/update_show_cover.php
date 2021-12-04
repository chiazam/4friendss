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



if (!check_post\check_isset_post::check_isset_post(["key_", "type"])) {

    new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
}

if (empty(trim($_post_["key_"]))) {

    new returner\final_returner_json(['mis_conduct' => 'empty', 'field' => 'key_']);

} elseif (empty(trim($_post_["type"]))) {

    new returner\final_returner_json(['mis_conduct' => 'empty', 'field' => 'key_']);
}

if (checkist\num_of_data_in_table::num_of_data_in_table($_post_["type"], "*", ["key_" => $_post_["key_"]]) === 0) {

    new returner\final_returner_json(['mis_conduct' => 'Credentials are wrong', 'field' => 'all']);
    
}

if (!show\finz\get_show_info::is_mine($_post_["type"],$_post_["key_"],$_session_['g'],$_session_['q'])) {

    new returner\final_returner_json(['mis_conduct' => 'Creadentials are wrong', 'field' => 'all']);
    
}

if (file_checker\check_isset_files::check_isset_files(["image"])) {

    $files_image = file_s::file_features_upload($_FILES['image']);

    if (file_verfier\file_verify_::image_file_verifier($files_image)) {

        $hasher__mite = hash_maker\hash_maker::post_file_hash($files_image['name']);

        $_hash_of_file = $hasher__mite["hash"];

        $path_file = "files/show_cover/" . $hasher__mite["hash_name"] . "." . $files_image['extension'];

        if (!move_uploaded_file($files_image['temp'], "../../" . $path_file)) {

            new returner\final_returner_json(['failed' => 'upload was not successfull']);
        }
    } else {

        new returner\final_returner_json(['mis_conduct' => 'file verification failed', 'field' => 'image']);
    }
} else {

    new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
}

$show_info = checkist\get_data_in_table::get_data_in_table($_post_["type"], "*", ["key_" => $_post_["key_"]]);

if (file_exists("../../" . $show_info['cover']) && $show_info['cover'] !== "icons/show_cover.jpeg") {

    unlink("../../" . $show_info['cover']);
}

if (checkist\update_data_in_table::update_data_in_table($_post_["type"],['cover' => $path_file],["key_" => $_post_["key_"]])) {

    img_culu\back_img_handler::add_back_color($_post_["key_"], 'show_cover', $path_file);

    new returner\final_returner_json(['message' => ["new_path" => $path_file]]);
}
