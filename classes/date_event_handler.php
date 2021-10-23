<?php

namespace event_handler;

use check as chichi;

class date_event_handler {

    static public function add_event(string $key_link, string $date_start, string $date_end) {

        if (\time\string_to_time::string_to_time($date_start) <= time()) {

            return ['mis_conduct' => 'Event should start with a future date', 'field' => ''];
        } else if (\time\string_to_time::string_to_time($date_start) >= \time\string_to_time::string_to_time($date_end)) {

            return ['mis_conduct' => 'End date should be later than start date', 'field' => ''];
        } else {

            self::delete_event($key_link);

            chichi\data_in_table\add_data_in_table::add_data_in_table('event_info', ['key_link' => $key_link, 'date_start' => $date_start, 'date_end' => $date_end]);

            return ['success' => 'event successfully added'];
        }
    }

    static public function delete_event(string $key_link) {

        chichi\data_in_table\delete_data_in_table::delete_data_in_table('event_info', ['key_link' => $key_link]);
    }

    static public function get_event(string $key_link) {

        if (chichi\data_in_table\num_of_data_in_table::num_of_data_in_table('event_info', 'date_start,date_end', ['key_link' => $key_link]) > 0) {

            return chichi\data_in_table\get_data_in_table::get_data_in_table('event_info', 'date_start,date_end', ['key_link' => $key_link]);
        } else {
            return ['none' => true];
        }
    }

}
