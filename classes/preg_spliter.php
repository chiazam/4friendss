<?php

namespace preg_spliter__;

class preg_spliter
{

    public static function get_array(string $string, string $preg_pattern)
    {
        return preg_split($preg_pattern, $string);
    }

}
