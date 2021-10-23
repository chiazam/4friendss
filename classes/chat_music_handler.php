<?php

namespace music\chat_background;

use querier as query__;
use prepare\trim as prep;
use check\data_in_table as checkist;
use post_timeline_stream as timestream;

class chat_music_handler {

    public static function add_delete_chat_music(string $my_b, string $em_b, string $music_hash, $my_q) {

        $music_hash = prep\prepare_trim::return_prepare_trim($music_hash);
        $em_b = prep\prepare_trim::return_prepare_trim($em_b);
        $my_b = prep\prepare_trim::return_prepare_trim($my_b);
        $my_q = prep\prepare_trim::return_prepare_trim($my_q);

        global $conn;

        $query__ = "SELECT * FROM `" . DB . "`.`music_chat` WHERE ((`b` = '{$my_b}' AND `_b` = '{$em_b}') OR (`_b` = '{$my_b}' AND `b` = '{$em_b}')) AND `music_hash` = '{$music_hash}'";

        if (query__\sql_querier::num_rows($query__) > 0) {

            $query__1 = "DELETE FROM `" . DB . "`.`music_chat` WHERE ((`b` = '{$my_b}' AND `_b` = '{$em_b}') OR (`_b` = '{$my_b}' AND `b` = '{$em_b}')) AND `music_hash` = '{$music_hash}'";

            if (!query__\sql_querier::querier($query__1)) {

                return true;
            }
        } else {

            $query__1 = "SELECT * FROM `" . DB . "`.`music_chat` WHERE (`b` = '{$my_b}' AND `_b` = '{$em_b}') OR (`_b` = '{$my_b}' AND `b` = '{$em_b}')";

            if (query__\sql_querier::num_rows($query__1) > 0) {

                $query_____2 = "DELETE FROM `" . DB . "`.`music_chat` WHERE (`b` = '{$my_b}' AND `_b` = '{$em_b}') OR (`_b` = '{$my_b}' AND `b` = '{$em_b}')";

                if (!query__\sql_querier::querier($query_____2)) {

                    return false;
                }
            }


            if (!checkist\add_data_in_table::add_data_in_table('music_chat', ['b' => $my_b, '_b' => $em_b, 'changer_q' => $my_q, 'music_hash' => $music_hash, 'date' => \time\time_to_string::time_to_string(time())])) {

                return false;
            } else {
                return true;
            }
        }
    }

    static public function is_this_music_chat_added(string $my_b, string $em_b, string $music_hash) {

        $music_hash = prep\prepare_trim::return_prepare_trim($music_hash);
        $em_b = prep\prepare_trim::return_prepare_trim($em_b);
        $my_b = prep\prepare_trim::return_prepare_trim($my_b);

        $query__ = "SELECT * FROM `" . DB . "`.`music_chat` WHERE ((`b` = '{$my_b}' AND `_b` = '{$em_b}') OR (`_b` = '{$my_b}' AND `b` = '{$em_b}')) AND `music_hash` = '{$music_hash}'";

        if (query__\sql_querier::num_rows($query__) > 0) {
            return true;
        } else {
            return false;
        }
    }

    static public function get_music_chat(string $my_b, string $em_b, string $path_finder, string $my_g) {

        $em_b = prep\prepare_trim::return_prepare_trim($em_b);
        $my_b = prep\prepare_trim::return_prepare_trim($my_b);

        $query__ = "SELECT * FROM `" . DB . "`.`music_chat` WHERE ((`b` = '{$my_b}' AND `_b` = '{$em_b}') OR (`_b` = '{$my_b}' AND `b` = '{$em_b}'))";

        if (query__\sql_querier::num_rows($query__) > 0) {

            $data__ = query__\sql_querier::fetch_assoc($query__);

            $music_info = \audio_video\show\audio_video_mp_show::get_audio_key_album_info($data__["music_hash"], $path_finder, $my_g, $my_b, true);

            return [
                'music' => $music_info,
                'changer' => timestream\post_get_streamer::post_get_poster_people_infor(["q" => $data__["changer_q"]]),
                'date_change' => \time\date_diff_array::displayable_time_format($data__["date"], \time\date_diff_array::date_diff_array(\time\time_to_string::time_to_string(time()), $data__["date"])),
                'music_currentTimer' => \audio_video\show\audio_video_mp_show::music_currentTime($data__["date"], $music_info['duration_secs'])
            ];
        } else {
            return ['none' => true];
        }
    }

}
