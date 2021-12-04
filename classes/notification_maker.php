<?php

namespace notify_add;

use check\data_in_table as checkist;

use post_timeline_stream as timestream;

class notification_maker
{

    static public function post_notifyer(string $key)
    {

        if (checkist\num_of_data_in_table::num_of_data_in_table("timeline", "*", ["key_link" => $key])>0) {

            $data_post =  checkist\get_data_in_table::get_data_in_table("timeline", "*", ["key_link" => $key]);

            checkist\add_data_in_table::add_data_in_table("notify", ["notifyer_q"  => $data_post["poster_q"], "notifyer_g" => $data_post["poster_g"], "key_holder" => $key, "date" => \time\time_to_string::time_to_string(time()), "category" => $data_post["category"]]);
           
        }

    }

    static public function show_season_notifyer(string $key, string $type,string $g, string $q)
    {

        if (checkist\num_of_data_in_table::num_of_data_in_table($type, "*", ["key_" => $key])>0) {

            checkist\add_data_in_table::add_data_in_table("notify", ["notifyer_q"  => $q, "notifyer_g" => $g, "key_holder" => $key, "date" => \time\time_to_string::time_to_string(time()), "category" => $type]);

        }
        
    }

    public static function tag_notifyer(string $key)
    {

        $tagged_array = timestream\post_get_streamer::post_get_poster_taggers_infor($key);

        if (!isset($tagged_array["none"])) {
            for ($i = 0; $i < count($tagged_array); $i++) {

                $element = $tagged_array[$i];

                checkist\add_data_in_table::add_data_in_table("notify", ["notifyer_q"  => $element["info"]["q"], "notifyer_g" => $element["info"]["g"], "key_holder" => $key, "date" => \time\time_to_string::time_to_string(time()), "category" => "tags"]);
            }
        }
    }

    public static function views_notifyer(string $q, string $b, string $key, string $view_wat)
    {

        $data_viewer = timestream\post_get_streamer::post_get_poster_people_infor(["b" => $b, "q" => $q])["info"];

        if (checkist\num_of_data_in_table::num_of_data_in_table("notify", "*", ["notifyer_q"  => $data_viewer["q"], "notifyer_g" => $data_viewer["g"], "key_holder" => $key, "category" => $view_wat]) == 0) {

            checkist\add_data_in_table::add_data_in_table("notify", ["notifyer_q"  => $data_viewer["q"], "notifyer_g" => $data_viewer["g"], "key_holder" => $key, "date" => \time\time_to_string::time_to_string(time()), "category" => $view_wat]);
        } else {
            if ($view_wat = "profile_viewed") {

                checkist\update_data_in_table::update_data_in_table("notify", ["date" => \time\time_to_string::time_to_string(time())],  ["notifyer_q"  => $data_viewer["q"], "notifyer_g" => $data_viewer["g"], "key_holder" => $key, "category" => $view_wat]);
            }
        }
    }
}
