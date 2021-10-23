<?php

namespace tied_things;

use check as checkist;
use post_timeline_stream as timestream;

class tied_spiller
{

    static public function get_tie_all(string $key, string $finder_path, string $my_r, string $my_q, string $my_g, int $offset=0, int $limit=3, bool $minimal = true, bool $validator = false, bool $expired = false)
    {

        return[

            'post'=> self::get_tie($key, $finder_path, $my_r, $my_q, $my_g, "post", $offset, $limit, $minimal, $validator, $expired),

            'blog'=> self::get_tie($key, $finder_path, $my_r, $my_q, $my_g, "blog", $offset, $limit, $minimal, $validator, $expired),

            'times'=> self::get_tie($key, $finder_path, $my_r, $my_q, $my_g, "times", $offset, $limit, $minimal, $validator, $expired)

        ];

    }


    static public function get_tie(string $key, string $finder_path, string $my_r, string $my_q, string $my_g, string $type="post", int $offset=0, int $limit=3, bool $minimal = true, bool $validator = false, bool $expired = false)
    {

        if (checkist\data_in_table\num_of_data_in_table::num_of_data_in_table("timeline", "DISTINCT date,key_link,poster_g,poster_q,device,category,tied", ['tied'=>$key, "saved" => 1, "category" => $type], $offset, $limit, "date", "DESC") > 0) {

            $list_time_line_needed = checkist\data_in_table\get_data_in_table::get_data_in_table_loop("timeline", "DISTINCT date,key_link,poster_g,poster_q,device,category,tied", ['tied'=>$key, "saved" => 1, "category" => $type], $offset, $limit, "date", "DESC");

            return timestream\post_get_streamer::help_imbitween($list_time_line_needed, $my_g, $my_q, $my_r, $validator, $finder_path, false, $expired, $minimal);
        } else {
            return ["none" => 1];
        }
        
    }
    
}
