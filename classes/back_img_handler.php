<?php

namespace img_processor;

use check\data_in_table as checkist;
use image_color as img_color;

class back_img_handler {

    static public function get_back_color(string $hash, string $category) {

        if (checkist\num_of_data_in_table::num_of_data_in_table("img_back_grond", "*", ['hash' => $hash, 'category' => $category]) > 0) {

            return checkist\get_data_in_table::get_data_in_table('img_back_grond', 'color', ['hash' => $hash, 'category' => $category])['color'];
        } else {

            return '';
        }
    }

    static public function add_back_color(string $hash, string $category, string $file_path) {

        if (checkist\num_of_data_in_table::num_of_data_in_table('img_back_grond', '*', ['category' => $category, 'hash' => $hash]) > 0) {

            self::remove_back_color($hash, $category);
        }

        $color_fweep = '#' . array_keys(img_color\get_most_color::trace_part($file_path, 2))[1];

        checkist\add_data_in_table::add_data_in_table('img_back_grond', ['category' => $category, 'color' => $color_fweep, 'hash' => $hash]);
    }

    static public function remove_back_color(string $hash, string $category) {

        if (checkist\num_of_data_in_table::num_of_data_in_table('img_back_grond', '*', ['category' => $category, 'hash' => $hash]) > 0) {

            checkist\delete_data_in_table::delete_data_in_table('img_back_grond', ['category' => $category, 'hash' => $hash]);
        }
    }

}
