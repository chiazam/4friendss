<?php

use auto__loader as auto___load;
use mysqli__ as mysqli_conns;

require_once '../../classes/auto_loader_happener.php';

require_once '../../extra_script/first_action.php';

requirer_bulk('../../', ['classes/php_lib/getid3/getid3.php']);

new auto___load\auto_loader_happener('../../');

new mysqli_conns\mysqli_connector(HOST, USERNAME, PASSWORD);

new malware\mal_ware(true);

if ($_login_info === false) {

    new returner\final_returner_json(['permission' => 'denied due to no account is logged in']);
}

use check\data_in_table as checkist;
use check\if_get\check_isset_get as get_checker;
use audio_video\show as audio_;

if (!get_checker::check_isset_get(["hash"])) {

    new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
}

if (checkist\num_of_data_in_table::num_of_data_in_table("audio__info", "*", ["hash" => $_GET["hash"]]) > 0) {

    $music_data = audio_\audio_video_mp_show::get_audio_key_album_info($_GET["hash"], "../../", $_session_['g'], $_session_['b']);

    $music_data['related'] = artist_songs\get_artist_songs::get_songs_needed__($music_data['artist_array'], '../../', $_session_['g'], $_session_['b'], $music_data['hash'], 5, 0, true);

    $music_data['played_by'] = artist_songs\get_artist_songs::people_who_played_a_song($_session_['g'], $_session_['q'], $music_data['hash'], 'played', 5, 0, true);

    $music_data['playlisted_by'] = artist_songs\get_artist_songs::people_who_played_a_song($_session_['g'], $_session_['q'], $music_data['hash'], 'playlist', 5, 0, true);

    $music_data['favourited_by'] = artist_songs\get_artist_songs::people_who_played_a_song($_session_['g'], $_session_['q'], $music_data['hash'], 'favourite', 5, 0, true);
} else {
    $music_data = false;
}
