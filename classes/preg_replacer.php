<?php

namespace preg_replacer__;

class preg_replacer
{

    public static function get_updated_string(string $string, array $preg_pattern, array $preg_replace)
    {
        return (preg_replace($preg_pattern, $preg_replace, $string));
    }
}
