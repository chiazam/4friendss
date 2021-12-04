<?php

namespace privacy;

use check\data_in_table as checkist;

/**
 * Description of privacy_helper
 *
 * @author chiazam udekwe
 */
class privacy_helper {

    protected $hash;
    protected $category;
    protected $folk;
    protected $q;
    protected $g;

    public function __construct(string $hash, string $category, string $folk, string $q, string $g) {

        $this->hash = $hash;
        $this->category = $category;
        $this->folk = $folk;
        $this->q = $q;
        $this->g = $g;
    }

    public function post_handle_manipulator_privacy() {

        if (checkist\num_of_data_in_table::num_of_data_in_table('timeline', '*', ['poster_g' => $this->g, 'poster_q' => $this->q, 'key_link' => $this->hash, 'category' => $this->category]) > 0) {

            if ($this->folk === 'public') {

                checkist\delete_data_in_table::delete_data_in_table('privacy', ['hash' => $this->hash, 'category' => $this->category]);
            } else {

                if (checkist\num_of_data_in_table::num_of_data_in_table('privacy', '*', ['hash' => $this->hash, 'category' => $this->category]) > 0) {

                    checkist\update_data_in_table::update_data_in_table('privacy', ['folks' => $this->folk], ['hash' => $this->hash, 'category' => $this->category]);
                } else {

                    checkist\add_data_in_table::add_data_in_table('privacy', ['folks' => $this->folk, 'hash' => $this->hash, 'category' => $this->category]);
                }
            }

            return true;
        } else {

            return false;
        }
    }

    public function handle_manipulator_privacy() {

        if (in_array($this->category,\gen_vars\gen_vars::$array_content)&&in_array($this->folk,\gen_vars\gen_vars::$privacy_list)) {

            return $this->post_handle_manipulator_privacy();
        } else {
            return false;
        }
    }

    static public function privacy_returner(string $hash, string $category) {

        if (checkist\num_of_data_in_table::num_of_data_in_table('privacy', 'folks', ['hash' => $hash, 'category' => $category]) > 0) {

            return checkist\get_data_in_table::get_data_in_table('privacy', 'folks', ['hash' => $hash, 'category' => $category])['folks'];
        } else {
            return 'public';
        }
    }

}
