<?php

require_once("../timeline_gen/create_first_unsaved.php");

use check\data_in_table as checkist;
use personal_style\personal_style_returner as person_style;

$key_occourence = checkist\num_of_data_in_table::num_of_data_in_table("post_tags", "tagged_r,tagged_q", ['post_key' => $key_link]);

if ($key_occourence == 0) {

    new returner\final_returner_json(['message' => ["none" => true]]);
} elseif ($key_occourence > 0) {

    $data = checkist\get_data_in_table::get_data_in_table_loop("post_tags", "tagged_r,tagged_q", ['post_key' => $key_link]);

    $repored_array = [];

    for ($i = 0; $i < count($data); $i++) {

        $element = $data[$i];

        $quams = checkist\get_data_in_table::get_data_in_table("users", "full,act,q,b,r,g,prof_pix", ["r" => $element["tagged_r"], "q" => $element["tagged_q"]]);

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
}
