<?php

require_once("./create_first_unsaved.php");

use router\router_roll as route;
use check\data_in_table as checkist;
use post_timeline_stream as timestream;
use Sentiment\Analyzer as sentiment_analysis;

require_once(route::get_document_root().'/classes/sentiment/Analyzer.php');

$data = checkist\get_data_in_table::get_data_in_table("post", "word", ["keey" => $key_link]);

if ($data['word'] === null) {

    $data['word'] = '';
}

$data['privacy'] = \privacy\privacy_helper::privacy_returner($key_link, $post_typerrrrr);

$data['topic'] = topics_handlers\topic_handler::get_topic($key_link);

$data["word_analysis"] =  (new sentiment_analysis())->getSentiment($data['word']);

if (isset($tiedd__)) {

    $data["tied_info"] = timestream\post_get_streamer::get_tied($tiedd__, $_session_["g"], $_session_["q"], $_session_["r"], $_session_['b'], '../../');
} else {

    $data["tied_info"] = ['none' => true];
}

if ($_post_['cate_post'] === 'event'||$_post_['cate_post'] === 'poll') {

    $data['event_date'] = event_handler\date_event_handler::get_event($key_link);
}

new returner\final_returner_json(['message' => $data]);
