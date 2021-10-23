<?php

namespace person_profiler;

use post_timeline_stream as timestream;
use check as checkist;

class person_post_times_hunt {

    static public function my_post_times_(string $g, string $q, string $finder_path, string $my_r, string $my_q, string $my_g, int $offset = 0, int $limit = 3, string $type = "post", bool $minimal = true, bool $validator = false, bool $expired = false) {

        $data_viewer = timestream\post_get_streamer::post_get_poster_people_infor(["g" => $g, "q" => $q])["info"];

        if (checkist\data_in_table\num_of_data_in_table::num_of_data_in_table("timeline", "DISTINCT date,key_link,poster_g,poster_q,device,category,tied", ["poster_g" => $data_viewer["g"], "poster_q" => $data_viewer["q"], "saved" => 1, "category" => $type], $offset, $limit, "date", "DESC") > 0) {

            $list_time_line_needed = checkist\data_in_table\get_data_in_table::get_data_in_table_loop("timeline", "DISTINCT date,key_link,poster_g,poster_q,device,category,tied", ["poster_g" => $data_viewer["g"], "poster_q" => $data_viewer["q"], "saved" => 1, "category" => $type], $offset, $limit, "date", "DESC");

            return timestream\post_get_streamer::help_imbitween($list_time_line_needed, $my_g, $my_q, $my_r, $validator, $finder_path, false, $expired, $minimal);
        } else {
            return ["none" => 1];
        }
    }

    static public function tagged_post_times_(string $g, string $q, string $finder_path, string $my_r, string $my_q, string $my_g, int $offset = 0, int $limit = 3, string $type = "post", bool $minimal = true, bool $validator = false, bool $expired = false) {

        $data_viewer = timestream\post_get_streamer::post_get_poster_people_infor(["g" => $g, "q" => $q])["info"];

        if (checkist\data_in_table\get_data_in_table_compare::num_data_in_table(["post_tags", "timeline"], "DISTINCT timeline.date,timeline.key_link,timeline.poster_g,timeline.poster_q,timeline.device,timeline.category,timeline.tied", ["timeline.saved" => 1, "timeline.category" => $type, "post_tags.tagged_r" => $data_viewer["r"], "post_tags.tagged_q" => $data_viewer["q"]], ["post_tags.post_key" => "timeline.key_link"], $offset, $limit, "timeline.date", "DESC") > 0) {

            $list_time_line_needed = checkist\data_in_table\get_data_in_table_compare::get_data_in_table_loop(["post_tags", "timeline"], "DISTINCT timeline.date,timeline.key_link,timeline.poster_g,timeline.poster_q,timeline.device,timeline.category,timeline.tied", ["timeline.saved" => 1, "timeline.category" => $type, "post_tags.tagged_r" => $data_viewer["r"], "post_tags.tagged_q" => $data_viewer["q"]], ["post_tags.post_key" => "timeline.key_link"], $offset, $limit, "timeline.date", "DESC");

            return timestream\post_get_streamer::help_imbitween($list_time_line_needed, $my_g, $my_q, $my_r, $validator, $finder_path, false, $expired, $minimal);
        } else {
            return ["none" => 1];
        }
    }

    static public function general_post_times_(string $type = "posted", string $g, string $q, string $finder_path, string $my_r, string $my_q, string $my_g, int $offset = 0, int $limit = 3, bool $minimal = true, bool $validator = false, bool $expired = false) {
        if ($type == "posted") {

            return [
                "post" => self::my_post_times_($g, $q, $finder_path, $my_r, $my_q, $my_g, $offset, $limit, "post", $minimal, $validator, $expired),
                "times" => self::my_post_times_($g, $q, $finder_path, $my_r, $my_q, $my_g, $offset, $limit, "times", $minimal, $validator, $expired),
                "blog" => self::my_post_times_($g, $q, $finder_path, $my_r, $my_q, $my_g, $offset, $limit, "blog", $minimal, $validator, $expired)
            ];
        } elseif ($type == "tagged") {

            return [
                "post" => self::tagged_post_times_($g, $q, $finder_path, $my_r, $my_q, $my_g, $offset, $limit, "post", $minimal, $validator, $expired),
                "times" => self::tagged_post_times_($g, $q, $finder_path, $my_r, $my_q, $my_g, $offset, $limit, "times", $minimal, $validator, $expired),
                "blog" => self::tagged_post_times_($g, $q, $finder_path, $my_r, $my_q, $my_g, $offset, $limit, "blog", $minimal, $validator, $expired)
            ];
        }
    }

}
