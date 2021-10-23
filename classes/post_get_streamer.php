<?php

namespace post_timeline_stream;

use Sentiment\Analyzer as sentiment_analysis;
use img_processor as img_culu;
use check\data_in_table as checkist;
use time as time__;
use relate_and_how as relator;
use personal_style\personal_style_returner as person_style;
use post_react_stream as reactish;
use viewer_register as viewer;
use num_slang as slanger;
use prepare\trim as prep;
use querier as query__;
use exp_un_post_times as cont_exp;
use router\router_roll as route;
use extract\mention_hashtag as hash_tag;

require_once(route::get_document_root().'/classes/sentiment/Analyzer.php');

class post_get_streamer {

    // ..............................................................

    static public function validate_expiration(array $timeline_list, bool $expired = false) {

        $needed = [];

        for ($i = 0; $i < count($timeline_list); $i++) {

            $one_post = $timeline_list[$i];

            $timer_ = time__\date_diff_array::date_diff_array($one_post["date"], time__\time_to_string::time_to_string(time()));

            if ($expired === false) {

                if ($timer_["y"] == 0 && $timer_["m"] == 0 && $timer_["w"] == 0 && $timer_["d"] == 0) {

                    array_push($needed, $one_post);
                }
            } else if ($expired === true) {

                if ($timer_["y"] > 0 || $timer_["m"] > 0 || $timer_["w"] > 0 || $timer_["d"] > 0) {

                    array_push($needed, $one_post);
                }
            }
        }

        if (empty($needed)) {
            return (false);
        } else {

            return ($needed);
        }
    }

    // ..............................................................

    static public function validate_relationship_extra_return_tagged(string $key, string $g, string $q) {
        $tagged_ones = self::post_get_poster_taggers_infor($key);
        $info_right = false;

        if (!isset($tagged_ones['none'])) {
            for ($i = 0; $i < count($tagged_ones); $i++) {
                $_single_tagged_ones = $tagged_ones[$i];

                $relator_main_tagged = relator\relate_detect_how::relate_picker($_single_tagged_ones["info"]["g"], $_single_tagged_ones["info"]["q"], $g, $q);

                if ($relator_main_tagged["go"] == true) {

                    $info_right = true;

                    break;
                }
            }
        }

        return $info_right;
    }

    // ..............................................................

    static public function validate_relationship(array $needed, bool $related = true, string $g, string $q) {
        $needed_2 = [];

        for ($i = 0; $i < count($needed); $i++) {

            $one_post2 = $needed[$i];

            $relator_main = relator\relate_detect_how::relate_picker($one_post2["poster_g"], $one_post2["poster_q"], $g, $q);

            if ($related == true) {
                if ($relator_main["go"] == true) {

                    array_push($needed_2, $one_post2);
                } else if (self::validate_relationship_extra_return_tagged($one_post2["key_link"], $g, $q) == true) {

                    array_push($needed_2, $one_post2);
                }
            } else if ($related == false) {

                if ($relator_main["go"] == false) {

                    array_push($needed_2, $one_post2);
                }
            }
        }

        if (empty($needed_2)) {

            return (false);
        } else {
            return ($needed);
        }
    }

    // ..............................................................

    static public function validate_privacy(array $needed, string $g, string $q) {
        $needed_2 = [];

        for ($i = 0; $i < count($needed); $i++) {

            $one_post2 = $needed[$i];

              if ((new \privacy\privacy_validator($one_post2['key_link'], self::post_get_poster_cate_post($one_post2['key_link']), $one_post2["poster_g"], $one_post2["poster_q"], $g, $q))->verify_privacy() === true) {

                array_push($needed_2, $one_post2);
            }
        }

        if (empty($needed_2)) {

            return (false);
        } else {
            return ($needed);
        }
    }

    //................................................................__4o4___gist

    static public function post_get_relationships(string $poster_g, string $poster_q, string $my_g, string $my_q) {
        $relator_main = relator\relate_detect_how::relate_picker($poster_g, $poster_q, $my_g, $my_q);
        return $relator_main;
    }

    // ..............................................................

    static public function post_get_images_and_styles(string $post_key, bool $minimal = false, string $root_faller) {

        if (checkist\num_of_data_in_table::num_of_data_in_table("post_images", "hash,path", ['post_key' => $post_key]) > 0) {

            if ($minimal === false) {
                $first_images = checkist\get_data_in_table::get_data_in_table_loop("post_images", "hash,path", ['post_key' => $post_key]);
            } else {
                $first_images = checkist\get_data_in_table::get_data_in_table_loop("post_images", "hash,path", ['post_key' => $post_key], null, 4, "RAND()");
            }

            $images_first_main = [];

            for ($i = 0; $i < count($first_images); $i++) {

                $dude = $first_images[$i];

                $styler = person_style::get_media_styler($dude["hash"], "images_media");

                $dude['img_background'] = img_culu\back_img_handler::get_back_color($dude['hash'], 'post_times_blog');

                $_show = ["file_info" => $dude, "style" => (is_array($styler)) ? (\array_handler\get_needed_in_array::get_keys_value_only($styler, ["blur", "brightness", "contrast", "grayscale", "hue-rotate", "invert", "opacity", "saturate", "sepia"])) : (false)];

                array_push($images_first_main, $_show);
            }
        } else {

            $images_first_main = ["none" => true];
        }

        return ($images_first_main);
    }

    // ..............................................................

    static public function get_post_words(string $post_key) {
        return (checkist\get_data_in_table::get_data_in_table("post", "word", ["keey" => $post_key])["word"]);
    }

    // ..............................................................

    static public function post_get_videos_and_styles(string $post_key, bool $minimal = false) {
        if (checkist\num_of_data_in_table::num_of_data_in_table("post_videos", "hash,path", ['post_key' => $post_key]) > 0) {

            if ($minimal === false) {
                $first_videos = checkist\get_data_in_table::get_data_in_table_loop("post_videos", "hash,path", ['post_key' => $post_key]);
            } else {
                $first_videos = checkist\get_data_in_table::get_data_in_table_loop("post_videos", "hash,path", ['post_key' => $post_key], null, 4, "RAND()");
            }

            $videos_first_main = [];

            for ($i = 0; $i < count($first_videos); $i++) {

                $dude = $first_videos[$i];

                $styler = person_style::get_media_styler($dude["hash"], "videos_media");

                $_show = ["file_info" => $dude, "style" => (is_array($styler)) ? (\array_handler\get_needed_in_array::get_keys_value_only($styler, ["blur", "brightness", "contrast", "grayscale", "hue-rotate", "invert", "opacity", "saturate", "sepia"])) : (false)];

                array_push($videos_first_main, $_show);
            }
        } else {

            $videos_first_main = ["none" => true];
        }

        return ($videos_first_main);
    }

    // ..............................................................

    static public function post_get_audios(string $post_key, string $finder_path, string $g, string $b, bool $minimal = false) {
        if (checkist\num_of_data_in_table::num_of_data_in_table("post_audios", "hash,path,audio_video_key", ['post_key' => $post_key]) > 0) {

            if ($minimal === false) {
                $first_audios = checkist\get_data_in_table::get_data_in_table_loop("post_audios", "hash,path,audio_video_key", ['post_key' => $post_key]);
            } else {
                $first_audios = checkist\get_data_in_table::get_data_in_table_loop("post_audios", "hash,path,audio_video_key", ['post_key' => $post_key], null, 4, "RAND()");
            }

            $audios_first_main = [];

            for ($i = 0; $i < count($first_audios); $i++) {

                $dude = $first_audios[$i];

                $_show = ["file_info" => $dude, "audio_info" => \audio_video\show\audio_video_mp_show::get_audio_key_album_info($dude["audio_video_key"], $finder_path, $g, $b, $minimal)];

                array_push($audios_first_main, $_show);
            }
        } else {

            $audios_first_main = ["none" => true];
        }

        return ($audios_first_main);
    }

    // ..............................................................

    static public function post_times_get__comment(string $key_link, string $my_g, string $my_q, int $id_offset = 0, int $_limit = 3, bool $stream = false, bool $top = true) {

        if ($stream === true) {
            if ($id_offset !== 0) {

                if ($top === true) {
                    $order_direct = "ASC";
                    $id_pocker = ">";
                } elseif ($top === false) {

                    $id_pocker = "<";
                    $order_direct = "DESC";
                }

                $query______ = "SELECT * FROM `" . DB . "`.`comment_post` WHERE `key_link` = '" . prep\prepare_trim::return_prepare_trim($key_link) . "' AND `id` {$id_pocker} '{$id_offset}' ORDER BY `id` {$order_direct} LIMIT {$_limit}";
            }
        }

        if ($stream === false) {
            $num_getable_comment = checkist\num_of_data_in_table::num_of_data_in_table("comment_post", "*", ["key_link" => $key_link], $id_offset, $_limit);
        } elseif ($stream === true) {

            if ($id_offset !== 0) {

                $num_getable_comment = query__\sql_querier::num_rows($query______);
            } elseif ($id_offset === 0) {

                $num_getable_comment = checkist\num_of_data_in_table::num_of_data_in_table("comment_post", "*", ["key_link" => $key_link], $id_offset, $_limit, 'id', 'DESC');
            }
        }

        if ($num_getable_comment > 0) {

            if ($stream === false) {
                $data_people = checkist\get_data_in_table::get_data_in_table_loop("comment_post", "*", ["key_link" => $key_link], $id_offset, $_limit, 'id', 'DESC');
            } elseif ($stream === true) {

                if ($id_offset !== 0) {

                    $data_people = query__\sql_querier::fetch_assoc_loop($query______);
                } elseif ($id_offset === 0) {

                    $data_people = checkist\get_data_in_table::get_data_in_table_loop("comment_post", "*", ["key_link" => $key_link], $id_offset, $_limit, 'id', 'DESC');
                }
            }

            $final_array_pump = [];

            for ($i = 0; $i < count($data_people); $i++) {
                $haha_persons = $data_people[$i];

                $each_formatted_info = array(
                    "person" => self::post_get_poster_people_infor(["g" => $haha_persons["commenter_g"], "b" => $haha_persons["commenter_b"]]),
                    "word" => htmlspecialchars(\sensor\word\word_sensor::friends_rude_sensor($haha_persons["comment_word"])),
                    "word_analysis" =>  (new sentiment_analysis())->getSentiment($haha_persons["comment_word"]),
                    "key" => $haha_persons["key_link"],
                    "key_main" => $haha_persons["key_main"],
                    "device" => $haha_persons["device"],
                    "id" => $haha_persons["id"],
                    "date" => time__\date_diff_array::displayable_time_format($haha_persons["date"], time__\date_diff_array::date_diff_array(time__\time_to_string::time_to_string(time()), $haha_persons["date"])),
                    "reply_num" => slanger\num_slang::slanger(self::num_comment($haha_persons["key_main"])),
                    'is_post_comment_reply' => self::is_post_comment_reply($haha_persons["key_main"]),
                    "hash_tags"=>hash_tag\extract_hashtag_mention::array_mention_hashtags($haha_persons["comment_word"],true),
                    "mentions"=>hash_tag\extract_hashtag_mention::array_mention_hashtags($haha_persons["comment_word"],false)
                );

                $each_formatted_info['person']["relationship"] = self::post_get_relationships($each_formatted_info['person']['info']['g'], $each_formatted_info['person']['info']['q'], $my_g, $my_q);

                array_push($final_array_pump, $each_formatted_info);
            }

            return array_reverse($final_array_pump);
        } else {
            return ["none" => true];
        }
    }
	
	static public function is_comment_worthy(string $key__){
		
		return ((checkist\num_of_data_in_table::num_of_data_in_table('timeline', '*', ['key_link' => $key__]) > 0)||(checkist\num_of_data_in_table::num_of_data_in_table('users', '*', ['g' => $key__]) > 0)||(checkist\num_of_data_in_table::num_of_data_in_table("audio__info", "*", ["hash" => $key__]) > 0));
		
	}

    static public function is_post_comment_reply(string $key) {

        if (self::is_comment_worthy($key)) {

            return 'timeline';
        } else {

            if (checkist\num_of_data_in_table::num_of_data_in_table('comment_post', 'key_link', ['key_main' => $key]) > 0) {

                $key__ = (checkist\get_data_in_table::get_data_in_table('comment_post', 'key_link', ['key_main' => $key])['key_link']);

                if (self::is_comment_worthy($key__)) {

                    return 'comment';
                } else if (checkist\num_of_data_in_table::num_of_data_in_table('comment_post', 'key_link', ['key_main' => $key__]) > 0) {

                    return 'reply';
                } else {
                    return false;
                }
            } else {
                return false;
            }
        }
    }

    static public function post_get_poster_people_infor(array $person_data) {

        if (checkist\num_of_data_in_table::num_of_data_in_table("users", "full,act,r,g,q,b,cover,prof_pix", $person_data) > 0) {

            $data = checkist\get_data_in_table::get_data_in_table("users", "email,full,act,r,g,q,b,cover,prof_pix", $person_data);

            $array_cover_style = person_style::get_cover($data['b'], $data['q']);

            if (is_array($array_cover_style)) {

                $cover_stylers = \array_handler\get_needed_in_array::get_keys_value_only($array_cover_style, ["pos-x", "pos-y", "blur", "brightness", "contrast", "grayscale", "hue-rotate", "invert", "opacity", "saturate", "sepia"]);
            } else {
                $cover_stylers = $array_cover_style;
            }

            $array_profile_style = person_style::get_prof_style($data['b'], $data['q']);

            if (is_array($array_profile_style)) {

                $profile_stylers = \array_handler\get_needed_in_array::get_keys_value_only($array_profile_style, ["blur", "brightness", "contrast", "grayscale", "hue-rotate", "invert", "opacity", "saturate", "sepia"]);
            } else {
                $profile_stylers = $array_profile_style;
            }

            $data['first_namer'] = \name\first\get_firstname::get_first($data['full']);

            $data['last_namer'] = \name\last\get_lastname::get_last($data['full']);

            $data['username'] = \name\mail_id\get_mail_id::user_name($data['email']);

            unset($data['email']);

            $data['cover_backgrund'] = img_culu\back_img_handler::get_back_color($data['cover'], 'cover');

            $data['prof_pix_backgrund'] = img_culu\back_img_handler::get_back_color($data['prof_pix'], 'prof_pix');

            $data['un_ex_time'] = cont_exp\un_expire_times_post::get_times_unexpired_num($data['g'], $data['q'], 'times', false);
            $data['un_ex_post'] = cont_exp\un_expire_times_post::get_times_unexpired_num($data['g'], $data['q'], 'post', false);

            $data['un_ex_blog'] = cont_exp\un_expire_times_post::get_times_unexpired_num($data['g'], $data['q'], 'blog', false);

            return ([
                "info" => $data,
                "prof_styler" => $profile_stylers,
                "cover_styler" => $cover_stylers,
                "online" => \online\online_teller::onliner($data["r"], $data['b'])
            ]);
        } else {
            return ['none'=>true];
        }
    }

    // ..............................................................

    static public function post_get_poster_taggers_infor(string $key) {

        if (checkist\num_of_data_in_table::num_of_data_in_table("post_tags", "tagged_r,tagged_q", ["post_key" => $key]) > 0) {

            $persons_info = [];

            $tagged_person = checkist\get_data_in_table::get_data_in_table_loop("post_tags", "tagged_r,tagged_q", ["post_key" => $key]);

            for ($i = 0; $i < count($tagged_person); $i++) {

                $tagged_single = $tagged_person[$i];

                $person_sisis = self::post_get_poster_people_infor(["r" => $tagged_single['tagged_r'], "q" => $tagged_single['tagged_q']]);

                array_push($persons_info, $person_sisis);
            }

            return $persons_info;
        } else {
            return ["none" => true];
        }
    }

    // ..............................................................

    static public function post_get_poster_timer_formater(string $key) {

        if (checkist\num_of_data_in_table::num_of_data_in_table("timeline", "date", ["key_link" => $key]) > 0) {

            $timer = checkist\get_data_in_table::get_data_in_table("timeline", "date", ["key_link" => $key])["date"];

            $array_diff_time = time__\date_diff_array::date_diff_array(time__\time_to_string::time_to_string(time()), $timer);

            return time__\date_diff_array::displayable_time_format($timer, $array_diff_time);
        } else {
            return ["none" => true];
        }
    }

    // ..............................................................

    static public function num_react(string $key) {
        $num_react = checkist\num_of_data_in_table::num_of_data_in_table("react_post", "*", ["key_link" => $key]);

        return $num_react;
    }

    // ..............................................................

    static public function num_comment(string $key) {
        $num_comment = checkist\num_of_data_in_table::num_of_data_in_table("comment_post", "*", ["key_link" => $key]);

        return $num_comment;
    }

    // ..............................................................

    static public function num_tiers(string $key) {
        $num_tiers = checkist\num_of_data_in_table::num_of_data_in_table("timeline", "*", ["tied" => $key, 'saved' => 1]);

        return $num_tiers;
    }

    // ..............................................................

    static public function post_get_poster_cate_post(string $key) {

        if (checkist\num_of_data_in_table::num_of_data_in_table("timeline", "category", ["key_link" => $key]) > 0) {

            $category = checkist\get_data_in_table::get_data_in_table("timeline", "category", ["key_link" => $key])["category"];

            return $category;
        } else {
            return ["none" => true];
        }
    }

    // ..............................................................

    static public function get_if_saved_post(string $key, string $category, string $q, string $r) {

        if (checkist\num_of_data_in_table::num_of_data_in_table("view_later", "*", ["category" => $category, "key_id" => $key, "saver_q" => $q, "saver_r" => $r]) > 0) {

            return true;
        } else {

            return false;
        }
    }

//    ..................................................................

    static public function help_imbitween(array $list_time_line, string $g, string $q, string $r, bool $want_shit = true, string $root_faller, bool $related = true, bool $expiration = false, bool $minimal = false, bool $tied = true) {

        $looker = self::post_get_poster_people_infor(["g" => $g, "q" => $q, "r" => $r])["info"];

        if ($want_shit === true) {
            //............ validate expiration fa ...............
            $needed = self::validate_expiration($list_time_line, $expiration);

            if ($needed === false) {

                return (["none" => true]);
            }

            // ............ validate relationship ...............

            $needed_2 = self::validate_relationship($needed, $related, $g, $q);

            if ($needed_2 === false) {

                return (["none" => true]);
            }
        } else if ($want_shit === false) {
            $needed_2 = $list_time_line;
        }

        // ............ validate privacy ...............

        $needed_2 = self::validate_privacy($needed_2, $g, $q);

        if ($needed_2 === false) {

            return (["none" => true]);
        }

        // ............ get post content fa ...............

        $needed_3 = [];

        for ($i = 0; $i < count($needed_2); $i++) {

            $one_post3 = $needed_2[$i];

            // ........... add description...........

            $one_post3["word"] = htmlspecialchars(\sensor\word\word_sensor::friends_rude_sensor(self::get_post_words($one_post3["key_link"])));

            // ........ add sentiment analysis .........

            $one_post3["word_analysis"] =  (new sentiment_analysis())->getSentiment(self::get_post_words($one_post3["key_link"]));

            $one_post3["hash_tags"] = hash_tag\extract_hashtag_mention::array_mention_hashtags(self::get_post_words($one_post3["key_link"]),true);

            $one_post3["mentions"] = hash_tag\extract_hashtag_mention::array_mention_hashtags(self::get_post_words($one_post3["key_link"]),false);

            // ........... add topic ...........

            $one_post3['topic'] = htmlspecialchars(\sensor\word\word_sensor::friends_rude_sensor(\topics_handlers\topic_handler::get_topic($one_post3["key_link"])));

            // .......... add media_start .........

            $one_post3['media_stats'] = [
                'audios' => checkist\num_of_data_in_table::num_of_data_in_table("post_audios", "hash,path,audio_video_key", ['post_key' => $one_post3["key_link"]]),
                'videos' => checkist\num_of_data_in_table::num_of_data_in_table("post_videos", "hash,path", ['post_key' => $one_post3["key_link"]]),
                'images' => checkist\num_of_data_in_table::num_of_data_in_table("post_images", "hash,path", ['post_key' => $one_post3["key_link"]])
            ];

            // ...........add poster .....................

            $one_post3["poster"] = self::post_get_poster_people_infor(["g" => $one_post3["poster_g"], "q" => $one_post3["poster_q"]]);

// ...........add relationship .....................

            $one_post3["poster"]["relationship"] = self::post_get_relationships($one_post3["poster_g"], $one_post3["poster_q"], $g, $q);

            // ...........add category .....................

            $one_post3["cate_post"] = self::post_get_poster_cate_post($one_post3["key_link"]);

            // ...........check if an event and return date.....................

            if ($one_post3['cate_post'] === 'event') {

                $one_post3['event_date'] = \event_handler\date_event_handler::get_event($one_post3["key_link"]);
            }

//            ...............add if saved or not ............

            $one_post3["saved"] = self::get_if_saved_post($one_post3["key_link"], $one_post3["cate_post"], $q, $r);


//            
            // ...........add real time diff .....................

            $one_post3["date"] = self::post_get_poster_timer_formater($one_post3["key_link"]);

            //........add num of tiers.......

            $one_post3["num_tiers"] = slanger\num_slang::slanger(self::num_tiers($one_post3["key_link"]));

            // ...........add view info .....................

            $one_post3["view_info"] = [
                // ...........add num viewers .....................

                "views_num" => slanger\num_slang::slanger(viewer\viewer_register::get_num_viewer($one_post3["key_link"], "post_viewed"))
            ];

            //            add privacy if any

            $one_post3['privacy'] = \privacy\privacy_helper::privacy_returner($one_post3["key_link"], $one_post3["cate_post"]);

            // ...........add react info .....................

            $one_post3['react_info'] = [
                //            add react love if any

                "love" => slanger\num_slang::slanger(reactish\react_num_realeaser::react_nums($one_post3["key_link"], "love")),
                //            add react rate if any
                "rate" => slanger\num_slang::slanger(reactish\react_num_realeaser::react_nums($one_post3["key_link"], "rate")),
                //            add react like if any
                "like" => slanger\num_slang::slanger(reactish\react_num_realeaser::react_nums($one_post3["key_link"], "like")),
                //            add react dislike if any
                "dislike" => slanger\num_slang::slanger(reactish\react_num_realeaser::react_nums($one_post3["key_link"], "dislike")),
                // ...........add num of react .....................
                "react" => slanger\num_slang::slanger(self::num_react($one_post3["key_link"])),
                // ...........add my react .....................
                "did_i_react" => reactish\react_num_realeaser::react_me_($one_post3["key_link"], $r, $q)
            ];

            // ...........add comment info .....................

            $one_post3["comment_info"] = [
                // ...........add num of comment .....................

                "comment_num" => slanger\num_slang::slanger(self::num_comment($one_post3["key_link"]))
            ];

            // .......... add images .................

            $one_post3["images"] = self::post_get_images_and_styles($one_post3["key_link"], $minimal, $root_faller);

            // .......... add videos .........

            $one_post3["videos"] = self::post_get_videos_and_styles($one_post3["key_link"], $minimal);

            // .......... add audios .........

            $one_post3["audios"] = self::post_get_audios($one_post3["key_link"], $root_faller, $looker["g"], $looker["b"], $minimal);

            // ...........add tagged_persons .....................

            $one_post3["tagger"] = self::post_get_poster_taggers_infor($one_post3["key_link"]);

            if ($tied === true) {

//                ...........add some viewers .....................
                $one_post3["view_info"]["views_persons"] = viewer\viewer_register::get_persons_viewer($one_post3["key_link"], "post_viewed", 0, 5);


//                ...........add react hint.....................
                $one_post3['react_info']["react_tip_people"] = reactish\react_num_realeaser::react_data($one_post3["key_link"], 0);

//            ...........add some comment .....................
                $one_post3["comment_info"]["comment_sample"] = self::post_times_get__comment($one_post3["key_link"], $g, $q);
//                 ...........add tie .....................

                if (isset($one_post3["tied"])) {

                    $one_post3["tied_info"] = self::get_tied($one_post3['tied'], $g, $q, $r, $looker['b'], $root_faller);
                } else {

                    $one_post3["tied_info"] = ['none' => true];
                }
            }

            array_push($needed_3, $one_post3);
        }

        return ($needed_3);
    }

//    ............tied returner ...............

    static public function get_tied(string $key_tie, string $g, string $q, string $r, string $b, string $finder_path) {

        if ($key_tie !== null || $key_tie !== "") {

            if (checkist\num_of_data_in_table::num_of_data_in_table("timeline", "date,key_link,poster_g,poster_q,category,device", ["saved" => 1, "key_link" => $key_tie]) > 0) {

                $list_time_line_needed = checkist\get_data_in_table::get_data_in_table_loop("timeline", "date,key_link,poster_g,category,poster_q,device", ["saved" => 1, "key_link" => $key_tie]);

                return self::help_imbitween($list_time_line_needed, $g, $q, $r, false, $finder_path, false, false, true, false);
            } else if (checkist\num_of_data_in_table::num_of_data_in_table("audio__info", "*", ["hash" => $key_tie]) > 0) {

                return \audio_video\show\audio_video_mp_show::get_audio_key_album_info($key_tie, $finder_path, $g, $b, true);
				
            }else if(checkist\num_of_data_in_table::num_of_data_in_table("users", "email,full,g,r,q,b,prof_pix,cover,act", ["g" => $key_tie]) > 0){
				
				
                $data_present = checkist\get_data_in_table::get_data_in_table("users", "email,full,g,r,q,b,prof_pix,cover,act", ["g" => $key_tie]);
				
				$my_info = checkist\get_data_in_table::get_data_in_table("users", "email,full,g,r,q,b,prof_pix,cover,act,country,state", ["g" => $g]);

                return \persons\person_straight_hunter::human_full_presenter_($data_present, $my_info);
				
			}else {

                return ['none' => true];
            }
        }
    }

    // ..............................................................

    static public function get_post_now(array $list_time_line, string $g, string $q, string $r, bool $relate, bool $expired, string $root_finder, bool $minimal = false, bool $tied = true) {

        $mink__ing = self::help_imbitween($list_time_line, $g, $q, $r, true, $root_finder, $relate, $expired, $minimal);

        return $mink__ing;
    }

    static public function final_post_remover_outer__rude_(array $list_time_line_needed, string $root_finder, string $g, string $q, string $r, bool $minimal = false, bool $tied = true) {

        $post_one_rel = self::get_post_now($list_time_line_needed, $g, $q, $r, true, false, $root_finder, $minimal);

        if (!isset($post_one_rel["none"])) {
            return ["post" => $post_one_rel, "how" => $_GET["how"]];
        } else {

            $post_one_rel = self::get_post_now($list_time_line_needed, $g, $q, $r, false, false, $root_finder, $minimal);

            if (!isset($post_one_rel["none"])) {
                return ["post" => $post_one_rel, "how" => $_GET["how"]];
            } else {

                $post_one_rel = self::get_post_now($list_time_line_needed, $g, $q, $r, true, true, $root_finder, $minimal);

                if (!isset($post_one_rel["none"])) {
                    return ["post" => $post_one_rel, "how" => $_GET["how"]];
                } else {

                    $post_one_rel = self::get_post_now($list_time_line_needed, $g, $q, $r, false, true, $root_finder, $minimal);

                    if (!isset($post_one_rel["none"])) {
                        return ["post" => $post_one_rel, "how" => $_GET["how"]];
                    } else {

                        return ["none" => true];
                    }
                }
            }
        }
    }

}
