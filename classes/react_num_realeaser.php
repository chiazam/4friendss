<?php

namespace post_react_stream;

use check\data_in_table as checkist;
use post_timeline_stream as timestream;
use time as time__;

class react_num_realeaser
{

    static public function react_nums(string $key, string $react)
    {

        $num_react = checkist\num_of_data_in_table::num_of_data_in_table("react_post", "*", ["key_link" => $key, "react" => $react]);

        return $num_react;
    }

    static public function react_me_(string $key, string $r, string $q)
    {

        if (checkist\num_of_data_in_table::num_of_data_in_table("react_post", "*", ["key_link" => $key, "reacter_r" => $r, "reacter_q" => $q]) > 0) {

            return ["yes" => checkist\get_data_in_table::get_data_in_table("react_post", "react", ["key_link" => $key, "reacter_r" => $r, "reacter_q" => $q])["react"]];
        } else {

            return ["not" => true];
        }
    }

    static public function react_data(string $key, int $offset = 0, int $limit = 10, bool $date_is = false)
    {

        $num_react = checkist\num_of_data_in_table::num_of_data_in_table("react_post", "*", ["key_link" => $key]);

        if ($num_react > 0) {

            $data_dumper = [];

            $data = checkist\get_data_in_table::get_data_in_table_loop("react_post", "*", ["key_link" => $key], $offset, $limit, "id", "DESC");

            for ($i = 0; $i < count($data); $i++) {
                $single_data = $data[$i];

                $ttttime = null;

                if ($date_is === true) {

                    $ttttime = time__\date_diff_array::displayable_time_format($single_data["date"], time__\date_diff_array::date_diff_array(time__\time_to_string::time_to_string(time()), $single_data["date"]));
                }

                $coined_array = [
                    "react" =>  $single_data["react"],
                    "device" => $single_data["device"],
                    "date" => $ttttime,
                    "person" => timestream\post_get_streamer::post_get_poster_people_infor(["r" => $single_data["reacter_r"], "q" => $single_data["reacter_q"]])
                ];

                array_push($data_dumper,  $coined_array);
            }

            return $data_dumper;
        } else {

            return ["none" => true];
        }
    }
}
