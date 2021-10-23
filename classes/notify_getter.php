<?php

namespace notify\get;

use audio_video as aud_vid;
use time as time__;
use check as checkist;
use post_timeline_stream as timestream;
use notify_seer as notif_see;
use prepare\trim as prep;
use querier as query__;

/**
 * Description of notify_getter
 *
 * @author chiazam udekwe
 */
class notify_getter {

    protected $g;
    protected $q;
    protected $path_finder;
    protected $limit;
    protected $offset;
    protected $persons;

    public function __construct(string $path_finder, array $persons, string $g, string $q, int $limit, int $offset = null) {
        $this->g = $g;
        $this->q = $q;
        $this->limit = $limit;
        $this->path_finder = $path_finder;
        $this->offset = $offset;
        $this->persons = $persons;
    }

    public function get_helper_all_post_key() {

        if (!empty($this->persons) && !isset($this->persons['none'])) {

            $ret_finally = [];

            for ($i = 0; $i < count($this->persons); $i++) {

                if (checkist\data_in_table\num_of_data_in_table::num_of_data_in_table('notify', '*', ['notifyer_q' => $this->persons[$i]['info']['q'], 'notifyer_g' => $this->persons[$i]['info']['g']], $this->offset, $this->limit, 'date', 'DESC') > 0) {

                    $ret_finally = array_merge($ret_finally, checkist\data_in_table\get_data_in_table::get_data_in_table_loop('notify', '*', ['notifyer_q' => $this->persons[$i]['info']['q'], 'notifyer_g' => $this->persons[$i]['info']['g']], $this->offset, $this->limit, 'date', 'DESC'));
                }
            }

            if (count($ret_finally) > 0) {

                $data_me = checkist\data_in_table\get_data_in_table::get_data_in_table("users", "email,full,g,r,q,b,prof_pix,cover,act", ["g" => $this->g, "q" => $this->q]);

                $yet_list_notify_needed = $ret_finally;

                $list_notify_needed = [];

                for ($i = 0; $i < count($yet_list_notify_needed); $i++) {

                    $element = $yet_list_notify_needed[$i];

                    if ($element['category'] === 'profile_viewed' && $element['key_holder'] !== $this->g) {
                        continue;
                    }

                    $data_them = checkist\data_in_table\get_data_in_table::get_data_in_table("users", "email,full,g,r,q,b,prof_pix,cover,act", ["g" => $element['notifyer_g'], "q" => $element['notifyer_q']]);
                    array_push($list_notify_needed, [
                        'persons' => \persons\person_straight_hunter::human_full_presenter_($data_them, $data_me),
                        'date' => time__\date_diff_array::displayable_time_format($element["date"], time__\date_diff_array::date_diff_array($element["date"], time__\time_to_string::time_to_string(time()))),
                        'category' => $element['category'],
//                        'notify_content' => self::notify_categories($element['key_holder'], $element['category'], $this->g, $this->q, $this->path_finder),
                        'seen' => notif_see\notify_see::is_notify_seen($this->g, $this->q, ($element['key_holder'])),
                        'notify_key' => $element['key_holder']
                    ]);

                    notif_see\notify_see::notif_see_all($this->g, $this->q, $element['key_holder']);
                }

                return $list_notify_needed;
            } else {
                return ['none' => true];
            }
        } else {

            return ['none' => true];
        }
    }

    static public function notify_categories(string $key, string $category, string $g, string $q, string $path_finder) {

        $data_me = checkist\data_in_table\get_data_in_table::get_data_in_table("users", "email,full,g,r,q,b,prof_pix,cover,act", ["q" => $q, "g" => $g]);

        if ($category === 'profile_viewed') {

            $data_them = checkist\data_in_table\get_data_in_table::get_data_in_table("users", "email,full,g,r,q,b,prof_pix,cover,act", ["g" => $key]);

            return \persons\person_straight_hunter::human_full_presenter_($data_them, $data_me);
        } else if ($category === "music") {

            return aud_vid\show\audio_video_mp_show::get_audio_key_album_info($key, $path_finder, $g, $data_me['b'], true);
        } else if ($category === "post_viewed" || $category === "tags" || $category === "post" || $category === "times") {

            if (checkist\data_in_table\num_of_data_in_table::num_of_data_in_table("timeline", "date,key_link,poster_g,poster_q,device", ["saved" => 1, "key_link" => $key]) > 0) {

                $list_time_line_needed = checkist\data_in_table\get_data_in_table::get_data_in_table_loop("timeline", "date,key_link,poster_g,poster_q,device", ["saved" => 1, "key_link" => $key]);

                return timestream\post_get_streamer::help_imbitween($list_time_line_needed, $data_me["g"], $data_me["q"], $data_me["r"], false, $path_finder, true, false, true);
            } else {
                return ['none' => true];
            }
        }
    }

    static public function _yes_notify(array $persons, string $g, string $q) {

        $q = prep\prepare_trim::return_prepare_trim($q);

        $g = prep\prepare_trim::return_prepare_trim($g);

        if (!empty($persons) && !isset($persons['none'])) {

            $ret_finally = false;

            $num = 0;

            for ($i = 0; $i < count($persons); $i++) {

                $element = $persons[$i];

                $query__ = "SELECT DISTINCT `" . DB . "`.`notify`.* FROM `" . DB . "`.`notify_seen`, `" . DB . "`.`notify` WHERE ((`" . DB . "`.`notify`.`key_holder` = `" . DB . "`.`notify_seen`.`key__` AND `" . DB . "`.`notify_seen`.`seer_g` = '{$g}' AND `" . DB . "`.`notify_seen`.`seer_q` = '{$q}' AND `" . DB . "`.`notify`.`notifyer_q` = '{$element['info']['q']}' AND `" . DB . "`.`notify`.`notifyer_g` = '{$element['info']['g']}' AND `" . DB . "`.`notify`.`date` > `" . DB . "`.`notify_seen`.`date_notify`) OR (`" . DB . "`.`notify`.`key_holder` = `" . DB . "`.`notify_seen`.`key__` AND `" . DB . "`.`notify_seen`.`seer_g` != '{$g}' AND `" . DB . "`.`notify_seen`.`seer_q` != '{$q}' AND `" . DB . "`.`notify`.`notifyer_q` != '{$element['info']['q']}' AND `" . DB . "`.`notify`.`notifyer_g` = '{$element['info']['g']}')) AND ((`" . DB . "`.`notify`.`category` != 'profile_viewed' AND `" . DB . "`.`notify`.`key_holder` != '{$g}')) ORDER BY `" . DB . "`.`notify`.`category` DESC";

                $num += query__\sql_querier::num_rows($query__);
            }

            if ($num > 0) {
                return ["is" => true, "num" => \num_slang\num_slang::slanger($num)];
            } else {
                return ["is" => false, "num" => 0];
            }

            return $ret_finally;
        } else {

            return ["is" => false, "num" => 0];
        }
    }

}
