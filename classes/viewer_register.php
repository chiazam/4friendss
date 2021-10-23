<?php

namespace viewer_register;

use check\data_in_table as checkist;
use post_timeline_stream as streamer;
use notify_add as notifyer;

class viewer_register
{

    static public function reg__viewer(string $key, string $q, string $b, string $category)
    {

        if (checkist\num_of_data_in_table::num_of_data_in_table("views_post", "*", ["key_post" => $key, "q" => $q, "b" => $b, "category" => $category]) == 0) {

            checkist\add_data_in_table::add_data_in_table("views_post", ["key_post" => $key, "q" => $q, "b" => $b, "date" => \time\time_to_string::time_to_string(time()), "category" => $category]);

            if ($category !== "dictionary") {

                notifyer\notification_maker::views_notifyer($q, $b, $key, $category);
            }
        } else {

            $updatable_array = ["post_viewed", "profile_viewed", "dictionary", "music"];

            if (in_array($category, $updatable_array)) {

                checkist\update_data_in_table::update_data_in_table("views_post", ["date" => \time\time_to_string::time_to_string(time())], ["key_post" => $key, "q" => $q, "b" => $b, "category" => $category]);

                $updatable_array_2 = ["post_viewed", "dictionary"];

                if (!in_array($category, $updatable_array_2)) {

                    notifyer\notification_maker::views_notifyer($q, $b, $key, $category);
                }
            }
        }
    }

    static public function get_num_viewer(string $_key, string $category)
    {
        return checkist\num_of_data_in_table::num_of_data_in_table("views_post", "*", ["key_post" => $_key, "category" => $category]);
    }

    static public function get_persons_viewer(string $_key, string $category, int $offset = 0, int $limit = 10)
    {
        if (checkist\num_of_data_in_table::num_of_data_in_table("views_post", "*", ["key_post" => $_key, "category" => $category], $offset, $limit) == 0) {

            return ["none" => true];
        } else {
            $persons_info = [];

            $persons_viewed = checkist\get_data_in_table::get_data_in_table_loop("views_post", "q,b", ["key_post" => $_key, "category" => $category], $offset, $limit);

            for ($i = 0; $i < count($persons_viewed); $i++) {

                $view_single = $persons_viewed[$i];

                $person_sisis = streamer\post_get_streamer::post_get_poster_people_infor(["q" => $view_single['q'], "b" => $view_single['b']]);

                array_push($persons_info, $person_sisis);
            }

            return $persons_info;
        };
    }
}
