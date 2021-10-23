<?php

namespace deleters\comment_deleter;

use check as chichi;

/**
 * Description of delete_comment
 *
 * @author chiazam udekwe
 */
class delete_comment {

    protected $key;
    protected $deleter_b;
    protected $deleter_g;
    protected $deleter_q;

    public function __construct(string $key, string $deleter_b, string $deleter_g, string $deleter_q) {

        $this->key = $key;
        $this->deleter_b = $deleter_b;
        $this->deleter_g = $deleter_g;
        $this->deleter_q = $deleter_q;
    }

    static public function recursive_comment_deleter(string $key) {

        if (chichi\data_in_table\num_of_data_in_table::num_of_data_in_table('comment_post', '*', ['key_link' => $key]) > 0) {

            $list_reply = chichi\data_in_table\get_data_in_table::get_data_in_table_loop('comment_post', '*', ['key_link' => $key]);

            for ($i = 0; $i < count($list_reply); $i++) {

                $present_reply = $list_reply[$i];

                self::recursive_comment_deleter($present_reply['key_main']);
            }
        }

        chichi\data_in_table\delete_data_in_table::delete_data_in_table('comment_post', ['key_main' => $key]);
    }

    public function comment_main_deleter() {

        if (chichi\data_in_table\num_of_data_in_table::num_of_data_in_table('comment_post', '*', ['key_main' => $this->key, 'commenter_b' => $this->deleter_b, 'commenter_g' => $this->deleter_g]) > 0 || chichi\data_in_table\num_of_data_in_table::num_of_data_in_table('timeline', '*', ['key_link' => $this->key, 'poster_q' => $this->deleter_q, 'poster_g' => $this->deleter_g]) > 0) {

            self::recursive_comment_deleter($this->key);
        }
    }

}
