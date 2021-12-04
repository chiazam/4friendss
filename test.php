<?php

require_once("./classes/sentiment/Analyzer.php");

require_once("./classes/router_roll.php");

require_once("./classes/get_mail_id.php");

require_once('./classes/extract_hashtag_mention.php');

require('classes\array_xml.php');

require('classes/curl_er.php');

use curl_er\curl_er;
Use Sentiment\Analyzer;

use name\mail_id as mail_id;

use router as router;

use extract\mention_hashtag as hash_tag;

// echo mail_id\get_mail_id::decode_user_name_to_email('@O.alegbe(edu)xed.aucegypt');

// @chijioke.justus(ng)lbs.net

// echo '</br>';

// echo mail_id\get_mail_id::user_name($_GET['email']);

// $analyzer = new Analyzer(); 

// $output_text = $analyzer->getSentiment("David is smart, handsome, and funny.");

// $output_emoji = $analyzer->getSentiment("😁");

// $output_text_with_emoji = $analyzer->getSentiment("joy everyday, Aproko doctor made me 🤣.");

// print_r($output_text);
// print_r($output_emoji);

// print_r($output_text_with_emoji);

// echo '</br>';


// print_r($_SERVER);

// die (router\router_roll::get_document_root());

// print_r (parse_url('https://store.com:5050/index.php?fool=us#dog=u'));

// echo('<br>');

// echo('<pre>');

// print_r(hash_tag\extract_hashtag_mention::array_mention_hashtags("@josh(com)gmail told @josh.paul(com)gmail.lim that he will die",false));

// echo('

// ');

// print_r(hash_tag\extract_hashtag_mention::array_mention_hashtags("#josh(com)gmail told #josh_paul(com)gmail_lim that he will die",true));

// echo('

// ');

// print_r(hash_tag\extract_hashtag_mention::string_mention_hashtags("@josh(com)gmail told @josh.paul(com)gmail.lim that he will die",false));

// echo('

// ');

// print_r(hash_tag\extract_hashtag_mention::string_mention_hashtags("#josh(com)gmail told #josh_paul(com)gmail_lim that he will die",true));

// echo('

// ');

// print_r(hash_tag\extract_hashtag_mention::link_mention_hashtags("@josh(com)gmail told @josh.paul(com)gmail.lim that he will die",'@',false));

// echo('

// ');

// print_r(hash_tag\extract_hashtag_mention::link_mention_hashtags("#josh(com)gmail told #josh_paul(com)gmail_lim that he will die",'#',true));



print_r(\curl_er\curl_er::request_er('https://f.test/api_2/show/view_show.php?key_viewer=98e2b9f2473e5a48cd11ec01fe71ddaa&api_xmla',['4friendss_user'=>'eyJyIjoiY2I0N2E5MDY2YTVlYzhhYjJlZTAxYjdkMzA5ZGIzOGIiLCJiIjoiYTI3MTE5ZTEzYmU5MGQ5ODY3Yjk2ZTAzYWQ2MjU5ZGUiLCJkb21haW4iOiJ3aGlyLnRlc3QiLCJleHBpcmVzX2RhdGUiOiIyMDIxLTEwLTIyIDIyOjQxOjAzIiwicmVmcmVzaF9leHBpcmVzIjoiMjAyMS0xMC0yMiAyMzoxMTowMyIsInN0YXJ0X2RhdGUiOiIyMDIxLTEwLTIyIDIxOjQxOjAzIiwibG9nZ2VkX2tleSI6ImVmMjhlNjgxZDcyMDEyYzU3NGE2OTBjZDMzMTU4YTkzIiwicmVmcmVzaF9rZXkiOiJlZjkzYWQzODVkNGFiMGZjYWUxZDEyOGI1ZDE2MjgwYiJ9','asker'=>'https://whir.test/']));


?>



<?php

// var_dump(file_exists('http://f.test/frontend/js/web_workers/ajax_worker.js?v=163198474641'));

// echo file_get_contents('http://f.test/frontend/js/web_workers/ajax_worker.js?v=163198474641');

// echo "<pre>";

// print_r($_SERVER);



