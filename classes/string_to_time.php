<?php

namespace time;

class string_to_time
{

    static public function string_to_time(string $timer)
    {

        return strtotime($timer);
    }
}
