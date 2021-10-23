<?php

require_once("../add_files/add.php");

use check\data_in_table as checkist;
use img_processor as img_culu;

$my_info = checkist\get_data_in_table::get_data_in_table("users", "*", ["r" => $_session_['r'], "g" => $_session_['g'], "b" => $_session_['b'], "q" => $_session_['q']]);

if (file_exists("../../" . $my_info['prof_pix']) && $my_info['prof_pix'] !== "icons/landscape-photography-of-green-grass-field-1461027.jpg") {

    unlink("../../" . $my_info['prof_pix']);
}

if (checkist\update_data_in_table::update_data_in_table("users", ["prof_pix" => $path_file], ["g" => $_session_['g'], "r" => $_session_['r']])) {

    img_culu\back_img_handler::add_back_color($_session_['g'], 'prof_pix', $path_file);

    new returner\final_returner_json(['message' => ["new_path" => $path_file]]);
}
