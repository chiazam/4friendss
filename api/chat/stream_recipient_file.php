<?php

require_once("./create_first_reciepient.php");

use check as chichi;
use check\data_in_table as checkist;

$images = chichi\data_search_in_table\num_search_startswith::get_search_data_in_table_loop("chatings_file", "*", ["chat_key" => $chat_key, "chat_file_type" => "image"], null, 10, null, null, false);

$videos = checkist\num_of_data_in_table::num_of_data_in_table("chatings_file", "*", ["chat_key" => $chat_key, "chat_file_type" => "video/mp4"]);

$audios = checkist\num_of_data_in_table::num_of_data_in_table("chatings_file", "*", ["chat_key" => $chat_key, "chat_file_type" => "audio/mpeg"]);

new returner\final_returner_json(['message' => ["images" => $images, "videos" => $videos, "audios" => $audios]]);
