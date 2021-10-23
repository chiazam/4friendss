<?php

require_once './music_first_info_er.php';

use viewer_register as viewer;

if ($music_data !== false) {

    viewer\viewer_register::reg__viewer($_GET["hash"], $_session_["q"], $_session_["b"], "music");

    new returner\final_returner_json(['message' => ["music_info" => $music_data]]);
} else {

    new returner\final_returner_json(['mis_conduct' => 'wrong information', 'field' => 'all']);
}


