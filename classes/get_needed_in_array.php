<?php

namespace array_handler;

class get_needed_in_array {

    static public function get_keys_value_only(array $main_array, array $needed_key_array) {

        $new_array = [];

        for ($z = 0; $z < count($needed_key_array); $z++) {

            $element = $needed_key_array[$z];

            if (isset($main_array[$element])) {

                $new_array[$element] = $main_array[$element];
            }
        }
        return $new_array;
    }

}
