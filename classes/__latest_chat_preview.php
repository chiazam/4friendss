<?php

namespace notify\get;

use check as checkist;
use chat__get_dialogue as chat;

class __latest_chat_preview
{

    static public function chat_reciever_info(string $q, string $b, string $chat_key)
    {

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

    static public function chat_sender_info(string $q, string $b, string $chat_key)
    {

        $data_me = checkist\data_in_table\get_data_in_table::get_data_in_table("users", "email,full,g,r,q,b,prof_pix,cover,act", ["b" => $b, "q" => $q]);

        $sender_info_from_chat = checkist\data_in_table\get_data_in_table::get_data_in_table("chatings", "b_sender,q_sender", ["chat_key" => $chat_key]);

        $data_them = checkist\data_in_table\get_data_in_table::get_data_in_table("users", "email,full,g,r,q,b,prof_pix,cover,act", ["b" => $sender_info_from_chat['b_sender'], "q" => $sender_info_from_chat['q_sender']]);

        $beep = \persons\person_straight_hunter::human_full_presenter_($data_them, $data_me);

        $beep['me_yet_see'] = \notify\get\notify_chat_getter::did_em_chet_me($data_me["b"], $data_me["q"], $data_them['b'], $data_them["q"]);

        $beep['them_yet_see'] = \notify\get\notify_chat_getter::did_em_chet_me($data_them['b'], $data_them["q"], $data_me["b"], $data_me["q"]);

        return $beep;
    }

    static public function get_preview_chat_crib(int $limit, int $offset, string $q, int $id_param, bool $dir_dialog, string $path_finder)
    {

        if($id_param===0){

            $query = '';

            $dir_order = "DESC";

        }elseif($dir_dialog===true&&$id_param>0){

            $query = "AND id > {$id_param}";

            $dir_order = "DESC";

        }elseif($dir_dialog===false&&$id_param>0){

            $query = "AND id < {$id_param}";

            $dir_order = "DESC";

        }else{

            return ['none' => true];

        }

        if (checkist\data_in_table\num_of_data_in_table::num_of_data_in_table("latest_chat_preview", "*", ["sender_q" => $q, "reciever_q" => $q], $offset, $limit, 'id', $dir_order, true,$query) > 0) {

            $chats_hosted = checkist\data_in_table\get_data_in_table::get_data_in_table_loop("latest_chat_preview", "*", ["sender_q" => $q, "reciever_q" => $q], $offset, $limit, 'id', $dir_order, true,$query);

            $latest_prev_chat = [];

            for ($i = 0; $i < count($chats_hosted); $i++) {

                $element = $chats_hosted[$i];

                if($element['sender_q']===$q){

                    $data_me = checkist\data_in_table\get_data_in_table::get_data_in_table("users", "email,full,g,r,q,b,prof_pix,cover,act", ["q" => $element['sender_q']]);

                    $data_them = checkist\data_in_table\get_data_in_table::get_data_in_table("users", "email,full,g,r,q,b,prof_pix,cover,act", ["q" => $element['reciever_q']]);

                }elseif($element['sender_q']!==$q){

                    $data_them = checkist\data_in_table\get_data_in_table::get_data_in_table("users", "email,full,g,r,q,b,prof_pix,cover,act", ["q" => $element['sender_q']]);

                    $data_me = checkist\data_in_table\get_data_in_table::get_data_in_table("users", "email,full,g,r,q,b,prof_pix,cover,act", ["q" => $element['reciever_q']]);

                }
                
                $other_person = \persons\person_straight_hunter::human_full_presenter_($data_them, $data_me);

                $other_person['me_yet_see'] = \notify\get\notify_chat_getter::did_em_chet_me($data_me["b"], $data_me["q"], $data_them['b'], $data_them["q"]);

                $other_person['them_yet_see'] = \notify\get\notify_chat_getter::did_em_chet_me($data_them['b'], $data_them["q"], $data_me["b"], $data_me["q"]);

                $dialogues = (new chat\get_dialogue_chat($data_them["b"], $data_them["q"], $data_me["b"], $data_me["q"], 0, true, 1, $path_finder))->final_retter_chat_array();

                $preview_chat=["person"=>$other_person,"chat" =>$dialogues,"preview_chat_id"=>$element['id']];

                array_push($latest_prev_chat,$preview_chat);

            }

            return $latest_prev_chat;

        } else {

            return ['none' => true];
        }
    }

    static public function save_latest_chat_preview(string $sender_q, string $reciever_q, string $chat_key)
    {

        checkist\data_in_table\delete_data_in_table::delete_data_in_table("latest_chat_preview", ["sender_q" => $sender_q, "reciever_q" => $reciever_q, "chat_key" => $chat_key]);

        checkist\data_in_table\delete_data_in_table::delete_data_in_table("latest_chat_preview", ["sender_q" => $reciever_q, "reciever_q" => $sender_q, "chat_key" => $chat_key]);

        checkist\data_in_table\add_data_in_table::add_data_in_table("latest_chat_preview", ["sender_q" => $sender_q, "reciever_q" => $reciever_q, "chat_key" => $chat_key]);
    }
}
