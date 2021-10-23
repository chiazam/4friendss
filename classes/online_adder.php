<?php

namespace onliner;

use check\data_in_table as checkist;

/**
 * Description of online_adder
 *
 * @author chiazam udekwe
 */
class online_adder {

    static function add_online(string $r, string $b) {

        if (checkist\num_of_data_in_table::num_of_data_in_table("online", "*", ["r" => $r, "b" => $b]) == 0) {
            checkist\add_data_in_table::add_data_in_table("online", ["r" => $r, "b" => $b, "date" => \time\time_to_string::time_to_string(time())]);
        } else {
            checkist\update_data_in_table::update_data_in_table("online", ["date" => \time\time_to_string::time_to_string(time())], ["r" => $r, "b" => $b]);
        }
    }

}
