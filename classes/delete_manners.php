<?php

namespace deleters\manners_delete;

use check\data_in_table as checkist;

class delete_manners {

    static public function delete_all(string $key_link) {

        self::delete_notify($key_link);
        self::delete_bookmark($key_link);
        self::delete_privacy($key_link);
        self::delete_react($key_link);
        self::delete_tied($key_link);
        self::delete_views($key_link);
    }

    static public function delete_tied(string $key_link) {

        checkist\update_data_in_table::update_data_in_table('timeline', ['tied' => ''], ['tied' => $key_link]);
    }

    static public function delete_bookmark(string $key_link) {

        checkist\delete_data_in_table::delete_data_in_table("view_later", ["key_id" => $key_link]);
    }

    static public function delete_react(string $key_link) {

        checkist\delete_data_in_table::delete_data_in_table("react_post", ["key_link" => $key_link]);
    }

    static public function delete_privacy(string $key_link) {

        checkist\delete_data_in_table::delete_data_in_table("privacy", ["hash" => $key_link]);
    }

    static public function delete_views(string $key_link) {

        checkist\delete_data_in_table::delete_data_in_table("views_post", ["key_post" => $key_link]);
    }

    static public function delete_notify(string $key_link) {

        checkist\delete_data_in_table::delete_data_in_table("notify", ["key_holder" => $key_link]);

        checkist\delete_data_in_table::delete_data_in_table("notify_seen", ["key__" => $key_link]);
    }

}
