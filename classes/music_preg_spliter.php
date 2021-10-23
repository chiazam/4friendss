<?php

namespace preg_spliter__\music_artist;

use preg_spliter__ as splitter;

use preg_replacer__ as replacer__;

class music_preg_spliter
{

    const preg_pattern = "/(\s(feat|ft|&|,|x)\s|&|,)+/im";

    const preg_replaceable = ["/(\s\.|\.\s|\s\.\s)+/imu", "/(\|\|.*)+/imu", "/(\|.*)+/imu", "/(via:.*)+/imu", "/(\(.*\))+/imu"];

    const preg_replacers = [' ', '', '', '', ''];


    public static function get_all_artist(string $artist_string)
    {
        return splitter\preg_spliter::get_array(replacer__\preg_replacer::get_updated_string($artist_string, self::preg_replaceable, self::preg_replacers), self::preg_pattern);
    }
}
