<?php

namespace online;

use check\data_in_table as checkist;

class online_teller
{

    public static function onliner(string $r, string $b)
    {

        if (checkist\num_of_data_in_table::num_of_data_in_table("online", "date", ["r" => $r, "b" => $b]) > 0) {

            $date_last = checkist\get_data_in_table::get_data_in_table("online", "date", ["r" => $r, "b" => $b])["date"];

            $date_diff_array = \time\date_diff_array::date_diff_array($date_last, \time\time_to_string::time_to_string(time()));

            if ($date_diff_array['i'] == 0 && $date_diff_array['h'] == 0 && $date_diff_array['d'] == 0 && $date_diff_array['w'] == 0 && $date_diff_array['m'] == 0 && $date_diff_array['y'] == 0 && $date_diff_array['s'] < 10) {
                $online___ = true;
            } else {
                $online___ = false;
            };
            return [
                "online" => $online___,
                "last" => \time\date_diff_array::displayable_time_format($date_last, $date_diff_array)
            ];
        } else {

            return ["online" => false];
        }
    }
}
