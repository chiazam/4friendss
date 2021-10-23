<?php

require_once("./create_first_reciepient.php");

use check\data_in_table as checkist;
use personal_style\personal_style_returner as person_style;

$oocurence_chat = checkist\num_of_data_in_table::num_of_data_in_table("chat_recievers", "q_reciever,b_reciever", ["chat_key" => $chat_key]);

if ($oocurence_chat == 0) {

    die(json_encode(["none" => true]));
} elseif ($oocurence_chat > 0) {

    $data = checkist\get_data_in_table::get_data_in_table_loop("chat_recievers", "q_reciever,b_reciever", ["chat_key" => $chat_key]);

    $repored_array = [];

    for ($i = 0; $i < count($data); $i++) {

        $element = $data[$i];

        $quams = checkist\get_data_in_table::get_data_in_table("users", "full,act,q,b,r,g,prof_pix", ["q" => $element["q_reciever"], "b" => $element["b_reciever"]]);

        $array_profile_style = person_style::get_prof_style($quams["b"], $quams["q"]);

        if (is_array($array_profile_style)) {

            $profile_stylers = array_handler\get_needed_in_array::get_keys_value_only($array_profile_style, ["blur", "brightness", "contrast", "grayscale", "hue-rotate", "invert", "opacity", "saturate", "sepia"]);
        } else {

            $profile_stylers = $array_profile_style;
        }

        $array_now = ["info" => $quams, "styler" => $profile_stylers, "online" => online\online_teller::onliner($quams["r"], $quams["b"])];

        array_push($repored_array, $array_now);
    }

    new returner\final_returner_json(['message' => $repored_array]);
} else {

    new returner\final_returner_json(['mis_conduct' => 'wrong credentials', 'field' => 'key']);
}
