<?php

namespace persons;

use img_processor as img_culu;
use check as checkist;
use personal_style\personal_style_returner as person_style;
use relate_and_how as relator;
use exp_un_post_times as cont_exp;

class person_straight_hunter {

    static public function human_full_presenter_(array $data_them, array $my_info) {

        $array_cover_style = person_style::get_cover($data_them["b"], $data_them["q"]);

        if (is_array($array_cover_style)) {

            $cover_stylers = \array_handler\get_needed_in_array::get_keys_value_only($array_cover_style, ["pos-x", "pos-y", "blur", "brightness", "contrast", "grayscale", "hue-rotate", "invert", "opacity", "saturate", "sepia"]);
        } else {
            $cover_stylers = $array_cover_style;
        }

        $array_profile_style = person_style::get_prof_style($data_them["b"], $data_them["q"]);

        if (is_array($array_profile_style)) {

            $profile_stylers = \array_handler\get_needed_in_array::get_keys_value_only($array_profile_style, ["blur", "brightness", "contrast", "grayscale", "hue-rotate", "invert", "opacity", "saturate", "sepia"]);
        } else {

            $profile_stylers = $array_profile_style;
        }

        $data_them['first_namer'] = \name\first\get_firstname::get_first($data_them['full']);

        $data_them['last_namer'] = \name\last\get_lastname::get_last($data_them['full']);

        $data_them['username'] = \name\mail_id\get_mail_id::user_name($data_them['email']);

        unset($data_them['email']);

        $data_them['cover_backgrund'] = img_culu\back_img_handler::get_back_color($data_them["g"], 'cover');

        $data_them['prof_pix_backgrund'] = img_culu\back_img_handler::get_back_color($data_them["g"], 'prof_pix');

        $data_them['un_ex_time'] = cont_exp\un_expire_times_post::get_times_unexpired_num($data_them["g"], $data_them["q"], 'times', false);

        $data_them['un_ex_post'] = cont_exp\un_expire_times_post::get_times_unexpired_num($data_them['g'], $data_them['q'], 'post', false);

        $data_them['un_ex_blog'] = cont_exp\un_expire_times_post::get_times_unexpired_num($data_them['g'], $data_them['q'], 'blog', false);

        return [
            "info" => $data_them,
            "prof_styler" => $profile_stylers,
            "cover_styler" => $cover_stylers,
            "online" => \online\online_teller::onliner($data_them["r"], $data_them["b"]),
            "me" => ($my_info['r'] == $data_them["r"] && $my_info['g'] == $data_them["g"]),
            "contacted" => checkist\data_in_table\num_of_data_in_table::num_of_data_in_table("contact", "*", ["adder_b" => $my_info["b"], "added_b" => $data_them["b"]]),
            "relationship" => relator\relate_detect_how::relate_picker($data_them["g"], $data_them["q"], $my_info['g'], $my_info['q'])
        ];
    }

}
