<?php

namespace deleters\delete_timeliner;

use deleters\comment_deleter as comment_del;
use deleters\manners_delete as manner_del;
use deleters\content_media_deleter as media_del;
use check\data_in_table as checkist;
use event_handler as event;

class delete_timeline {

    static public function timeline_delete(string $key, string $deleter_g, string $deleter_q) {

        if (checkist\num_of_data_in_table::num_of_data_in_table('timeline', '*', ['key_link' => $key, 'poster_g' => $deleter_g, 'poster_q' => $deleter_q]) > 0) {

            event\date_event_handler::delete_event($key);

            comment_del\delete_comment::recursive_comment_deleter($key);

            manner_del\delete_manners::delete_all($key);

            (new media_del\delete_media_content($key))->remove_all_content_media();

            checkist\delete_data_in_table::delete_data_in_table("timeline", ["key_link" => $key]);
        }
    }

}
