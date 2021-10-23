<?php

namespace time;

class time_to_string {

    static public function date_only(int $timer) {

        return date("Y-m-d", $timer);
    }

    static public function time_to_string(int $timer) {

        return date("Y-m-d H:i:s", $timer);
    }

}
