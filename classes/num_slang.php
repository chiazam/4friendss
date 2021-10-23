<?php

namespace num_slang;

class num_slang {

    public static function slanger(int $num) {
        if ($num >= 1000000000) {

            $num_ret = round(($num / 1000000000), 1) . " b";
        } else if ($num >= 1000000) {

            $num_ret = round(($num / 1000000), 1) . " m";
        } else if ($num >= 1000) {

            $num_ret = round(($num / 1000), 1) . " k";
        } else if ($num >= 100) {

            $num_ret = round(($num / 100), 1) . " h";
        } else {

            $num_ret = $num;
        }

        return $num_ret;
    }

}
