<?php

require_once("./create_first_unsaved.php");

use check\data_in_table as checkist;

$images = checkist\num_of_data_in_table::num_of_data_in_table("post_images", "hash,path", ['post_key' => $key_link]);

$videos = checkist\num_of_data_in_table::num_of_data_in_table("post_videos", "hash,path", ['post_key' => $key_link]);

$audios = checkist\num_of_data_in_table::num_of_data_in_table("post_audios", "hash,path", ['post_key' => $key_link]);

new returner\final_returner_json(['message' => ["images" => $images, "videos" => $videos, "audios" => $audios]]);
