<?php

namespace notify\get;

use check as checkist;
use querier as query__;
use time as time__;
use prepare\trim as prep;

class __latest_chat_preview {

    protected $limit;
    protected $offset;
    protected $q;
    protected $b;

    public function __construct(int $limit, int $offset, string $q, string $b) {

        $this->limit = prep\prepare_trim::return_prepare_trim($limit);
        $this->offset = prep\prepare_trim::return_prepare_trim($offset);
        $this->q = prep\prepare_trim::return_prepare_trim($q);
        $this->b = prep\prepare_trim::return_prepare_trim($b);
    }

    static public function chat_reciever_info(string $q, string $b, string $chat_key) {

        $b = prep\prepare_trim::return_prepare_trim($b);

        $q = prep\prepare_trim::return_prepare_trim($q);

        $chat_key = prep\prepare_trim::return_prepare_trim($chat_key);

        $data_me = checkist\data_in_table\get_data_in_table::get_data_in_table("users", "email,full,g,r,q,b,prof_pix,cover,act", ["b" => $b, "q" => $q]);

        $sender_info_from_chat = checkist\data_in_table\get_data_in_table::get_data_in_table_loop("chatings", "b_sender,q_sender", ["chat_key" => $chat_key]);

        for ($i = 0; $i < count($sender_info_from_chat); $i++) {
            $element = $sender_info_from_chat[$i];

            $data_them = checkist\data_in_table\get_data_in_table::get_data_in_table("users", "email,full,g,r,q,b,prof_pix,cover,act", ["b" => $element['b_sender'], "q" => $element['q_sender']]);

            $beep = \persons\person_straight_hunter::human_full_presenter_($data_them, $data_me);

            $beep['me_yet_see'] = \notify\get\notify_chat_getter::did_em_chet_me($data_me["b"], $data_me["q"], $data_them['b'], $data_them["q"]);

            $beep['them_yet_see'] = \notify\get\notify_chat_getter::did_em_chet_me($data_them['b'], $data_them["q"], $data_me["b"], $data_me["q"]);

            $sender_info_from_chat[$i] = $beep;
        }

        return $sender_info_from_chat;
    }

    static public function chat_ender_info(string $q, string $b, string $chat_key) {

        $b = prep\prepare_trim::return_prepare_trim($b);

        $q = prep\prepare_trim::return_prepare_trim($q);

        $chat_key = prep\prepare_trim::return_prepare_trim($chat_key);


        $data_me = checkist\data_in_table\get_data_in_table::get_data_in_table("users", "email,full,g,r,q,b,prof_pix,cover,act", ["b" => $b, "q" => $q]);

        $sender_info_from_chat = checkist\data_in_table\get_data_in_table::get_data_in_table("chatings", "b_sender,q_sender", ["chat_key" => $chat_key]);

        $data_them = checkist\data_in_table\get_data_in_table::get_data_in_table("users", "email,full,g,r,q,b,prof_pix,cover,act", ["b" => $sender_info_from_chat['b_sender'], "q" => $sender_info_from_chat['q_sender']]);

        $beep = \persons\person_straight_hunter::human_full_presenter_($data_them, $data_me);

        $beep['me_yet_see'] = \notify\get\notify_chat_getter::did_em_chet_me($data_me["b"], $data_me["q"], $data_them['b'], $data_them["q"]);

        $beep['them_yet_see'] = \notify\get\notify_chat_getter::did_em_chet_me($data_them['b'], $data_them["q"], $data_me["b"], $data_me["q"]);

        return $beep;
    }

    public function get_preview_chat_crib() {

        $query__ = "SELECT `" . DB . "`.`chatings`.`date`,`" . DB . "`.`chatings`.`word`,`" . DB . "`.`chatings`.`q_sender`,`" . DB . "`.`chatings`.`b_sender`,`" . DB . "`.`chatings`.`device`,`" . DB . "`.`chatings`.`chat_key` FROM `" . DB . "`.`chatings`,`" . DB . "`.`chat_recievers` WHERE (`" . DB . "`.`chatings`.`chat_key` = `" . DB . "`.`chat_recievers`.`chat_key` AND `" . DB . "`.`chatings`.`sent` = '1') AND ((`" . DB . "`.`chatings`.`q_sender` = '{$this->q}' AND `" . DB . "`.`chatings`.`b_sender` = '{$this->b}' AND `" . DB . "`.`chat_recievers`.`q_reciever` != '{$this->q}' AND `" . DB . "`.`chat_recievers`.`b_reciever` != '{$this->b}') OR (`" . DB . "`.`chatings`.`q_sender` != '{$this->q}' AND `" . DB . "`.`chatings`.`b_sender` != '{$this->b}' AND `" . DB . "`.`chat_recievers`.`q_reciever` = '{$this->q}' AND `" . DB . "`.`chat_recievers`.`b_reciever` = '{$this->b}')) ORDER BY `" . DB . "`.`chatings`.`date` DESC LIMIT {$this->limit} OFFSET {$this->offset}";

        if (query__\sql_querier::num_rows($query__) > 0) {

            $chats_hosted = query__\sql_querier::fetch_assoc_loop($query__);

            for ($i = 0; $i < count($chats_hosted); $i++) {

                $element = $chats_hosted[$i];

                $chats_hosted[$i]['word'] = \sensor\word\word_sensor::friends_rude_sensor(\chat_changer\manipulate_text\chat_encoder_decoder::decodeChat($element['word']));

                $chats_hosted[$i]['date'] = time__\date_diff_array::displayable_time_format($element["date"], time__\date_diff_array::date_diff_array($element["date"], time__\time_to_string::time_to_string(time())));

                if ($element['b_sender'] === $this->b && $element['q_sender'] === $this->q) {

                    $chats_hosted[$i]['sent_by_me'] = true;

                    $chats_hosted[$i]['reciever_info'] = self::chat_reciever_info($this->q, $this->b, $element['chat_key']);
                } elseif ($element['b_sender'] !== $this->b && $element['q_sender'] !== $this->q) {

                    $chats_hosted[$i]['sent_by_me'] = false;

                    $chats_hosted[$i]['sender_info'] = self::chat_ender_info($this->q, $this->b, $element['chat_key']);
                }
            }

            return $chats_hosted;
        } else {

            return ['none' => true];
        }
    }

}
