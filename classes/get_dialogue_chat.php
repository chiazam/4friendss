<?php

namespace chat__get_dialogue;

use check\data_in_table as checkist;
use check as chichi;
use chat_changer\manipulate_text as chat_manipulator;
use prepare\trim as prep;
use router\router_roll as route;
use Sentiment\Analyzer as sentiment_analysis;
use extract\mention_hashtag as hash_tag;

require_once(route::get_document_root().'/classes/sentiment/Analyzer.php');

class get_dialogue_chat {

    protected $chatted_b;
    protected $chatted_q;
    protected $chatter_b;
    protected $chatter_q;
    protected $id_param;
    protected $dir_dialog;
    protected $hunt_limit;
    protected $path_finder;

    public function __construct(string $chatted_b, string $chatted_q, string $chatter_b, string $chatter_q, int $id_param, bool $dir_dialog, int $hunt_limit, string $path_finder) {
        $this->chatted_b = prep\prepare_trim::return_prepare_trim($chatted_b);
        $this->chatted_q = prep\prepare_trim::return_prepare_trim($chatted_q);
        $this->chatter_q = prep\prepare_trim::return_prepare_trim($chatter_q);
        $this->chatter_b = prep\prepare_trim::return_prepare_trim($chatter_b);
        $this->id_param = prep\prepare_trim::return_prepare_trim($id_param);
        $this->dir_dialog = $dir_dialog;
        $this->hunt_limit = prep\prepare_trim::return_prepare_trim($hunt_limit);
        $this->path_finder = $path_finder;
    }

    protected function get_negative_dialogue() {

        if ($this->id_param <= 1) {

            return ["none" => true];
        } else if ($this->id_param > 1) {

            if (checkist\get_data_in_table::get_data_in_table('chatings', 'date', ['id' => $this->id_param]) > 0) {

                $date_this_id = checkist\get_data_in_table::get_data_in_table('chatings', 'date', ['id' => $this->id_param, 'sent' => 1])['date'];

                $query__ = "SELECT `" . DB . "`.`chatings`.`q_sender`, `" . DB . "`.`chatings`.`b_sender`, `" . DB . "`.`chatings`.`word`, `" . DB . "`.`chatings`.`date`, `" . DB . "`.`chatings`.`device`,`" . DB . "`.`chatings`.`id`,`" . DB . "`.`chatings`.`chat_key`,`" . DB . "`.`chat_recievers`.`b_reciever`,`" . DB . "`.`chat_recievers`.`q_reciever` FROM `" . DB . "`.`chatings`,`" . DB . "`.`chat_recievers` WHERE (`" . DB . "`.`chatings`.`chat_key` = `" . DB . "`.`chat_recievers`.`chat_key` AND `" . DB . "`.`chatings`.`sent` = '1' AND `" . DB . "`.`chatings`.`date` < '{$date_this_id}') AND ((`" . DB . "`.`chatings`.`q_sender` = '{$this->chatter_q}' AND `" . DB . "`.`chatings`.`b_sender` = '{$this->chatter_b}' AND `" . DB . "`.`chat_recievers`.`q_reciever` = '{$this->chatted_q}' AND `" . DB . "`.`chat_recievers`.`b_reciever` = '{$this->chatted_b}') OR (`" . DB . "`.`chatings`.`q_sender` = '{$this->chatted_q}' AND `" . DB . "`.`chatings`.`b_sender` = '{$this->chatted_b}' AND `" . DB . "`.`chat_recievers`.`q_reciever` = '{$this->chatter_q}' AND `" . DB . "`.`chat_recievers`.`b_reciever` = '{$this->chatter_b}')) ORDER BY `" . DB . "`.`chatings`.`date` DESC LIMIT {$this->hunt_limit}";

                $num_table = \querier\sql_querier::num_rows($query__);

                if ($num_table === 0) {

                    return ["none" => true];
                } elseif ($num_table > 0) {

                    $chat_list = \querier\sql_querier::fetch_assoc_loop($query__);

                    for ($i = 0; $i < count($chat_list); $i++) {

                        $element = $chat_list[$i];

                        \deleters\delete_except_one\delete_all_except_one::delete_all_save_one('chatings', ["chat_key" => $element["chat_key"]]);
                    }

                    return array_reverse($chat_list);
                }
            } else {

                return ["none" => true];
            }
        }
    }

    protected function get_postive_dialogue() {

        if ($this->id_param == 0) {

            $query__ = "SELECT `" . DB . "`.`chatings`.`q_sender`, `" . DB . "`.`chatings`.`b_sender`, `" . DB . "`.`chatings`.`word`, `" . DB . "`.`chatings`.`date`, `" . DB . "`.`chatings`.`device`,`" . DB . "`.`chatings`.`id`,`" . DB . "`.`chatings`.`chat_key`,`" . DB . "`.`chat_recievers`.`b_reciever`,`" . DB . "`.`chat_recievers`.`q_reciever` FROM `" . DB . "`.`chatings`,`" . DB . "`.`chat_recievers` WHERE `" . DB . "`.`chatings`.`chat_key` = `" . DB . "`.`chat_recievers`.`chat_key` AND `" . DB . "`.`chatings`.`sent` = '1' AND ((`" . DB . "`.`chatings`.`q_sender` = '{$this->chatter_q}' AND `" . DB . "`.`chatings`.`b_sender` = '{$this->chatter_b}' AND `" . DB . "`.`chat_recievers`.`q_reciever` = '{$this->chatted_q}' AND `" . DB . "`.`chat_recievers`.`b_reciever` = '{$this->chatted_b}') OR (`" . DB . "`.`chatings`.`q_sender` = '{$this->chatted_q}' AND `" . DB . "`.`chatings`.`b_sender` = '{$this->chatted_b}' AND `" . DB . "`.`chat_recievers`.`q_reciever` = '{$this->chatter_q}' AND `" . DB . "`.`chat_recievers`.`b_reciever` = '{$this->chatter_b}')) ORDER BY `" . DB . "`.`chatings`.`date` DESC LIMIT {$this->hunt_limit}";
        } else if ($this->id_param > 0) {


            if (checkist\get_data_in_table::get_data_in_table('chatings', 'date', ['id' => $this->id_param]) > 0) {

                $date_this_id = checkist\get_data_in_table::get_data_in_table('chatings', 'date', ['id' => $this->id_param, 'sent' => 1])['date'];

                $query__ = "SELECT `" . DB . "`.`chatings`.`q_sender`, `" . DB . "`.`chatings`.`b_sender`, `" . DB . "`.`chatings`.`word`, `" . DB . "`.`chatings`.`date`, `" . DB . "`.`chatings`.`device`,`" . DB . "`.`chatings`.`id`,`" . DB . "`.`chatings`.`chat_key`,`" . DB . "`.`chat_recievers`.`b_reciever`,`" . DB . "`.`chat_recievers`.`q_reciever` FROM `" . DB . "`.`chatings`,`" . DB . "`.`chat_recievers` WHERE `" . DB . "`.`chatings`.`chat_key` = `" . DB . "`.`chat_recievers`.`chat_key` AND `" . DB . "`.`chatings`.`sent` = '1' AND `" . DB . "`.`chatings`.`date` > '{$date_this_id}' AND ((`" . DB . "`.`chatings`.`q_sender` = '{$this->chatter_q}' AND `" . DB . "`.`chatings`.`b_sender` = '{$this->chatter_b}' AND `" . DB . "`.`chat_recievers`.`q_reciever` = '{$this->chatted_q}' AND `" . DB . "`.`chat_recievers`.`b_reciever` = '{$this->chatted_b}') OR (`" . DB . "`.`chatings`.`q_sender` = '{$this->chatted_q}' AND `" . DB . "`.`chatings`.`b_sender` = '{$this->chatted_b}' AND `" . DB . "`.`chat_recievers`.`q_reciever` = '{$this->chatter_q}' AND `" . DB . "`.`chat_recievers`.`b_reciever` = '{$this->chatter_b}')) ORDER BY `" . DB . "`.`chatings`.`date` DESC LIMIT {$this->hunt_limit}";
            } else {

                return ["none" => true];
            }
        }

        $num_table = \querier\sql_querier::num_rows($query__);

        if ($num_table === 0) {

            return ["none" => true];
        } elseif ($num_table > 0) {

            $chat_list = \querier\sql_querier::fetch_assoc_loop($query__);

            for ($i = 0; $i < count($chat_list); $i++) {

                $element = $chat_list[$i];

                \deleters\delete_except_one\delete_all_except_one::delete_all_save_one('chatings', ["chat_key" => $element["chat_key"]]);
            }

            return $chat_list;
        }
    }

    public function final_retter_chat_array() {
        if ($this->dir_dialog === true) {

            $chat_list = $this->get_postive_dialogue();
        } elseif ($this->dir_dialog === false) {

            $chat_list = $this->get_negative_dialogue();
        } else {
            throw new \Exception("false parameters no access", 9000);
        }

        if (!isset($chat_list["none"])) {

            for ($i = 0; $i < count($chat_list); $i++) {

                $word_chatt= chat_manipulator\chat_encoder_decoder::decodeChat($chat_list[$i]["word"]);

                $chat_list[$i]["hash_tags"] = hash_tag\extract_hashtag_mention::array_mention_hashtags($word_chatt,true);

                $chat_list[$i]["mentions"] = hash_tag\extract_hashtag_mention::array_mention_hashtags($word_chatt,false);

                $chat_list[$i]["word"] = htmlspecialchars(\sensor\word\word_sensor::friends_rude_sensor($word_chatt));

                $chat_list[$i]["word_analysis"] =  (new sentiment_analysis())->getSentiment($word_chatt);

                $array_diff_time = \time\date_diff_array::date_diff_array(\time\time_to_string::time_to_string(time()), $chat_list[$i]["date"]);

                $chat_list[$i]["date"] = \time\date_diff_array::displayable_time_format($chat_list[$i]["date"], $array_diff_time);

                $images = chichi\data_search_in_table\num_search_startswith::get_search_data_in_table_loop("chatings_file", "*", ["chat_key" => $chat_list[$i]['chat_key'], "chat_file_type" => "image"], null, 100, null, null, false);

                $videos = checkist\num_of_data_in_table::num_of_data_in_table("chatings_file", "*", ["chat_key" => $chat_list[$i]['chat_key'], "chat_file_type" => "video/mp4"]);

                $audios = checkist\num_of_data_in_table::num_of_data_in_table("chatings_file", "*", ["chat_key" => $chat_list[$i]['chat_key'], "chat_file_type" => "audio/mpeg"]);

                $chat_list[$i]["files_num"] = [];
                $chat_list[$i]["files_num"]["images"] = $images;
                $chat_list[$i]["files_num"]["audios"] = $audios;
                $chat_list[$i]["files_num"]["videos"] = $videos;
            }
        }



        return (array_reverse($chat_list));
    }

}
