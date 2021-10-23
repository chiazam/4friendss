<?php

namespace name\last;

class get_lastname {

    static public function get_last(string $fullname) {

        $names = explode(" ", $fullname);

        return ((isset($names[1]) === true) ? ($names[1]) : (''));
    }

}
