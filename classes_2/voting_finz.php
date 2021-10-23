<?php

namespace voting\finz;

use check\data_in_table as checkist;
use num_slang as slanger;
use post_timeline_stream as timestream;
use time as time__;

class voting_finz {

    static public function delete_voting(string $key_link) {

        checkist\delete_data_in_table::delete_data_in_table('voting_options', ['key_link' => $key_link]);

        checkist\delete_data_in_table::delete_data_in_table('voting_census', ['key_link' => $key_link]);
    }

    static public function get_voting_num_census(string $key_link) {

        return checkist\num_of_data_in_table::num_of_data_in_table('voting_census', '*', ['key_link' => $key_link]);
    }

    static public function get_voting_option_num_census(string $key_link, string $option_key) {

        return checkist\num_of_data_in_table::num_of_data_in_table('voting_census', '*', ['key_link' => $key_link, 'option_key' => $option_key]);
    }

    static public function get_voting_option_list_census(string $key_link, string $option_key) {

        if (self::get_voting_option_num_census($key_link, $option_key) === 0) {

            return ['none' => true];
        } else {

            $census_list = checkist\get_data_in_table::get_data_in_table_loop('voting_census', 'key_link,voter_b,voter_q,option_key,date', ['key_link' => $key_link, 'option_key' => $option_key]);

            $data_dumper = [];

            for ($i = 0; $i < count($census_list); $i++) {

                $single_data = $census_list[$i];

                $coined_array = [
                    'key_link' => $key_link,
                    'option_key' => $option_key,
                    "date" => time__\date_diff_array::displayable_time_format($single_data["date"], time__\date_diff_array::date_diff_array(time__\time_to_string::time_to_string(time()), $single_data["date"])),
                    "person" => timestream\post_get_streamer::post_get_poster_people_infor(["b" => $single_data["voter_b"], "q" => $single_data["voter_q"]])
                ];

                array_push($data_dumper, $coined_array);
            }

            return $data_dumper;
        }
    }

    static public function get_option_info(string $key_link, string $option_key, bool $census_list = true) {

        if (checkist\num_of_data_in_table::num_of_data_in_table('voting_options', 'key_link,word,option_key', ['key_link' => $key_link, 'option_key' => $option_key]) === 0) {

            return ['none' => true];
        } else {

            $option_data = checkist\get_data_in_table::get_data_in_table('voting_options', 'key_link,word,option_key', ['key_link' => $key_link, 'option_key' => $option_key]);

            $option_data['num_census'] = slanger\num_slang::slanger(self::get_voting_option_num_census($option_data['key_link'], $option_data['option_key']));

            $option_data['census_list'] = (($census_list === true) ? (self::get_voting_option_list_census($option_data['key_link'], $option_data['option_key'])) : (['none' => true]));
        }
    }

    static public function get_voting_options(string $key_link, bool $census_list = true) {

        if (checkist\num_of_data_in_table::num_of_data_in_table('voting_options', '*', ['key_link' => $key_link]) === 0) {

            return ['none' => true];
        } else {

            $options_data = checkist\get_data_in_table::get_data_in_table_loop('voting_options', 'key_link,option_key', ['key_link' => $key_link]);

            $options = [];

            for ($i = 0; $i < count($options_data); $i++) {

                $element = $options_data[$i];

                array_push($options, self::get_option_info($key_link, $element['option_key'], $census_list));
            }

            return [
                'options' => $options,
                'num_census' => slanger\num_slang::slanger(self::get_voting_num_census($key_link))
            ];
        }
    }

    static public function remove_options(string $key_link, string $option_key) {

        checkist\delete_data_in_table::delete_data_in_table('voting_options', ['key_link' => $key_link, 'option_key' => $option_key]);

        self::remove_options_census_all($key_link, $option_key);
    }

    static public function remove_options_census_all(string $key_link, string $option_key) {

        checkist\delete_data_in_table::delete_data_in_table('voting_census', ['key_link' => $key_link, 'option_key' => $option_key]);
    }

    static public function remove_options_census(string $b, string $q, string $key_link, string $option_key) {

        checkist\delete_data_in_table::delete_data_in_table('voting_census', ['voter_b' => $b, 'voter_q' => $q, 'key_link' => $key_link, 'option_key' => $option_key]);
    }

    static public function add_census(string $b, string $q, string $key_link, string $option_key) {

        self::remove_options_census($b, $q, $key_link, $option_key);

        checkist\add_data_in_table::add_data_in_table('voting_census', ['voter_b' => $b, 'voter_q' => $q, 'key_link' => $key_link, 'option_key' => $option_key, 'date' => \time\time_to_string::time_to_string(time())]);
    }

    static public function add_options(string $key_link, string $word) {

        $option_key = \hash_maker\hash_maker::post_file_hash($word . $key_link);

        checkist\add_data_in_table::add_data_in_table('voting_options', ['key_link' => $key_link, 'word' => $word, 'option_key' => $option_key]);
    }

}
