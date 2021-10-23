<?php

namespace name\first;

class get_firstname{
    static public function get_first(string $fullname){

        return explode(" ",$fullname)[0];

    }
}