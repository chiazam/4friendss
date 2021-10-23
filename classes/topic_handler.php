<?php

namespace topics_handlers;

use check\data_in_table as checkist;

class topic_handler {

    static public function regulate_topic(string $topic, string $key_link) {

        if (empty(trim($topic))) {

            checkist\delete_data_in_table::delete_data_in_table('topics', ['key_link' => $key_link]);
        } else {

            if (checkist\num_of_data_in_table::num_of_data_in_table('topics', '*', ['key_link' => $key_link]) > 0) {

                checkist\update_data_in_table::update_data_in_table('topics', ['word' => ucfirst($topic)], ['key_link' => $key_link]);
            } else {

                checkist\add_data_in_table::add_data_in_table('topics', ['word' => ucfirst($topic), 'key_link' => $key_link]);
            }
        }
    }

    static public function get_topic(string $key_link) {

        if (checkist\num_of_data_in_table::num_of_data_in_table('topics', '*', ['key_link' => $key_link]) > 0) {

            return checkist\get_data_in_table::get_data_in_table('topics', '*', ['key_link' => $key_link])['word'];
        } else {

            return '';
        }
    }

}
