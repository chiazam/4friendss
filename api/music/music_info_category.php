<?php

require_once './music_first_info_er.php';

use check\if_get\check_isset_get as get_checker;

if (!get_checker::check_isset_get(["category", "limit", "offset"])) {

    new returner\final_returner_json(['permission' => 'denied due to no account is logged in']);
}

if ($music_data !== false) {

    $offset = 0;
    $limit = 5;

    if (is_numeric($_GET["offset"])) {
        $offset = $_GET["offset"];
    }

    if (is_numeric($_GET["limit"])) {
        $limit = $_GET["limit"];
    }

    if ($_GET['category'] === 'related') {

        new returner\final_returner_json(['message' => artist_songs\get_artist_songs::get_songs_needed__($music_data['artist_array'], '../../', $_session_['g'], $_session_['b'], $music_data['hash'], $limit, $offset)]);
    } else if ($_GET['category'] === 'played') {

        new returner\final_returner_json(['message' => artist_songs\get_artist_songs::people_who_played_a_song($_session_['g'], $_session_['q'], $music_data['hash'], 'played', $limit, $offset)]);
    } else if ($_GET['category'] === 'playlist') {

        new returner\final_returner_json(['message' => artist_songs\get_artist_songs::people_who_played_a_song($_session_['g'], $_session_['q'], $music_data['hash'], 'playlist', $limit, $offset)]);
    } else if ($_GET['category'] === 'favourite') {

        new returner\final_returner_json(['message' => artist_songs\get_artist_songs::people_who_played_a_song($_session_['g'], $_session_['q'], $music_data['hash'], 'favourite', $limit, $offset)]);
    }
} else {

    new returner\final_returner_json(['mis_conduct' => 'wrong information', 'field' => 'all']);
}
