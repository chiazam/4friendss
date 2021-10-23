<?php

namespace views\save_later;

use check as check;
use post_timeline_stream as timestream;

/**
 * Description of view_save_later
 * @copyright (c) 2020, friends inc
 * @author chiazam udekwe
 */
class view_save_later {

    protected $offset;
    protected $limit;
    protected $saver_q;
    protected $saver_r;
    protected $finder_path;
    protected $my_g;
    protected $my_r;
    protected $my_q;

    public function __construct(string $saver_q, string $saver_r, string $my_g, string $my_q, string $my_r, string $finder_path, int $offset = 0, int $limit = 3) {
        $this->limit = $limit;
        $this->saver_r = $saver_r;
        $this->saver_q = $saver_q;
        $this->offset = $offset;
        $this->finder_path = $finder_path;
        $this->my_g = $my_g;
        $this->my_q = $my_q;
        $this->my_r = $my_r;
    }

    public function get_saved_all_category(string $category = 'all') {

        if ($category === 'all') {
            return ["times" => $this->get_saved_post_times_category("times"), "post" => $this->get_saved_post_times_category("post"), "blog" => $this->get_saved_post_times_category("blog")];
        } else {
            return [$category => $this->get_saved_post_times_category($category)];
        }
    }

    public function get_saved_post_times_category(string $category) {

        if (check\data_in_table\num_of_data_in_table::num_of_data_in_table("view_later", "*", ["category" => $category, "saver_r" => $this->saver_r, "saver_q" => $this->saver_q], $this->offset, $this->limit) > 0) {

            $list_time_line_needed = check\data_in_table\get_data_in_table_compare::get_data_in_table_loop(["view_later", "timeline"], "timeline.date,timeline.key_link,timeline.poster_g,timeline.poster_q,timeline.device,timeline.tied", ["timeline.saved" => 1, "timeline.category" => $category, "view_later.category" => $category, "view_later.saver_r" => $this->saver_r, "view_later.saver_q" => $this->saver_q], ["view_later.key_id" => "timeline.key_link", "view_later.category" => "timeline.category"], $this->offset, $this->limit, "view_later.id", "DESC");

            return timestream\post_get_streamer::help_imbitween($list_time_line_needed, $this->my_g, $this->my_q, $this->my_r, false, $this->finder_path);
        } else {

            return["none" => true];
        }
    }

}
