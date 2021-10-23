<?php

namespace prepare\trim;

class prepare_trim {

    public static function return_prepare_trim(string $var_un_prepared) {

        global $conn;

        return (mysqli_real_escape_string($conn, ltrim(rtrim($var_un_prepared))));
    }

    public static function return_prepare_trim_array(array $var_un_prepared) {

        global $conn;

        $array_pimped = [];

        for ($i = 0; $i < count($var_un_prepared); $i++) {

            array_push($array_pimped, self::return_prepare_trim($var_un_prepared[$i]));
        }

        return($array_pimped);
    }

    public static function return_prepare_html_chars_special(string $var_un_prepared) {

        return ((htmlspecialchars($var_un_prepared)));
    }

}
