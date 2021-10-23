<?php

require_once("./create_first_unsaved.php");

use check\if_get\check_isset_get as get_checker;
use post_timeline_stream as timestream;

if (!get_checker::check_isset_get(["kind"])) {

    new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
}
if ($_GET["kind"] == "images") {

    $package = timestream\post_get_streamer::post_get_images_and_styles($key_link, false, "../../");
} else if ($_GET["kind"] == "videos") {

    $package = timestream\post_get_streamer::post_get_videos_and_styles($key_link);
} else if ($_GET["kind"] == "audios") {

    $package = timestream\post_get_streamer::post_get_audios($key_link, "../../", $_session_["g"], $_session_["b"]);
}

new returner\final_returner_json(['message' => ["answers" => $package]]);
