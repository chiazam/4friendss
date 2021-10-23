<?php

namespace personal_style;

use check\data_in_table as checkist;

class personal_style_returner {

    static public function get_prof_style($b, $q) {

        if (checkist\num_of_data_in_table::num_of_data_in_table("prof_pics_styler", "*", ["b" => $b, "q" => $q]) == 0) {

            return false;
        } else {

            return checkist\get_data_in_table::get_data_in_table("prof_pics_styler", "*", ["b" => $b, "q" => $q]);
        }
    }

    static public function get_cover($b, $q) {

        if (checkist\num_of_data_in_table::num_of_data_in_table("cover_styler", "*", ["b" => $b, "q" => $q]) == 0) {

            return false;
        } else {

            return checkist\get_data_in_table::get_data_in_table("cover_styler", "*", ["b" => $b, "q" => $q]);
        }
    }

    static public function get_media_styler($media_key, $media_types) {

        if (checkist\num_of_data_in_table::num_of_data_in_table("media_styler", "*", ["media_key" => $media_key, "media_types" => $media_types]) == 0) {

            return false;
        } else {

            return checkist\get_data_in_table::get_data_in_table("media_styler", "*", ["media_key" => $media_key, "media_types" => $media_types]);
        }
    }

}
