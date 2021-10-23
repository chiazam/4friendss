<?php

namespace time;

class date_create_array
{

    static public function date_create_array(string $timer)
    {

        return array(
            "d" => date_format(date_create($timer), "d"),
            "d_n" => date_format(date_create($timer), "l"),
            "d_n_s" => date_format(date_create($timer), "D"),
            "m" => date_format(date_create($timer), "m"),
            "m_n_s" => date_format(date_create($timer), "M"),
            "m_n" => date_format(date_create($timer), "F"),
            "h" => date_format(date_create($timer), "h"),
            "i" => date_format(date_create($timer), "i"),
            "s" => date_format(date_create($timer), "s"),
            "meridiam" => date_format(date_create($timer), "a"),
            "y" => date_format(date_create($timer), "y"),
            "Y" => date_format(date_create($timer), "Y"),
            "w" => date_format(date_create($timer), "W")
        );
    }
}
