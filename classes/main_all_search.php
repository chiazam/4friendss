<?php

namespace all_search;

use img_processor as img_culu;
use check as checkist;
use personal_style\personal_style_returner as person_style;
use dictionary_tins as dic;
use relate_and_how as relator;
use post_timeline_stream as timestream;
use exp_un_post_times as cont_exp;
use querier as query__;

class main_all_search {

    static public function dic_ready(string $word, string $path_finder) {

        return dic\dictionary_all::word_dics_find($word, $path_finder);
    }

    static public function _fumble_loop_person_search(array $people_data, string $g, string $q) {

        $repored_array = [];

        for ($i = 0; $i < count($people_data); $i++) {
            $element = $people_data[$i];

            if ($element['g'] !== $g && $element['q'] !== $q) {


                $element['first_namer'] = \name\first\get_firstname::get_first($element['full']);

                $element['last_namer'] = \name\last\get_lastname::get_last($element['full']);

                $element['username'] = \name\mail_id\get_mail_id::user_name($element['email']);

                unset($element['email']);

                $element['cover_backgrund'] = img_culu\back_img_handler::get_back_color($element['g'], 'cover');

                $element['prof_pix_backgrund'] = img_culu\back_img_handler::get_back_color($element['g'], 'prof_pix');

                $element['un_ex_times'] = cont_exp\un_expire_times_post::get_times_unexpired_num($element['g'], $element['q'], 'times', false);

                $element['un_ex_post'] = cont_exp\un_expire_times_post::get_times_unexpired_num($element['g'], $element['q'], 'post', false);

                $element['un_ex_blog'] = cont_exp\un_expire_times_post::get_times_unexpired_num($element['g'], $element['q'], 'blog', false);

                $array_profile_style = person_style::get_prof_style($element['b'], $element['q']);

                if (is_array($array_profile_style)) {

                    $profile_stylers = \array_handler\get_needed_in_array::get_keys_value_only($array_profile_style, ["blur", "brightness", "contrast", "grayscale", "hue-rotate", "invert", "opacity", "saturate", "sepia"]);
                } else {

                    $profile_stylers = $array_profile_style;
                }

                $relation = relator\relate_detect_how::relate_picker($element["g"], $element["q"], $g, $q);

                array_push($repored_array, ["info" => $element, "styler" => $profile_stylers, "relationship" => $relation, "online" => \online\online_teller::onliner($element["r"], $element['b'])]);
            }
        }

        return $repored_array;
    }

    static public function persons_search(string $word, string $g, string $q, int $offset = 0, int $limit = 5) {

        if (checkist\data_search_in_table\num_search_starts_ends::get_search_data_in_table_loop("users", "email,full,act,q,b,r,g,prof_pix,cover", ["full" => $word, "username" => $word], $offset, $limit) > 0) {

            $data = checkist\data_search_in_table\search_starts_ends::get_search_data_in_table_loop("users", "email,full,act,q,b,r,g,prof_pix,cover", ["full" => $word, "username" => $word], $offset, $limit);

            return self::_fumble_loop_person_search($data, $g, $q);
        } else {

            return ["none" => 1];
        }
    }

    static public function music_search(string $word, string $finder_path, string $g, string $q, int $offset = 0, int $limit = 5) {

        $data_viewer = timestream\post_get_streamer::post_get_poster_people_infor(["g" => $g, "q" => $q])["info"];

        if (checkist\data_search_in_table\num_search_starts_ends::get_search_data_in_table_loop("audio__info", "hash", ["name" => $word, "title" => $word, "year" => $word, "artist" => $word, "composer" => $word, "band" => $word, "album" => $word], $offset, $limit) > 0) {
            $repored_array = [];
            $data = checkist\data_search_in_table\search_starts_ends::get_search_data_in_table_loop("audio__info", "hash", ["name" => $word, "title" => $word, "year" => $word, "artist" => $word, "composer" => $word, "band" => $word, "album" => $word], $offset, $limit);

            for ($i = 0; $i < count($data); $i++) {

                $dude = $data[$i];

                array_push($repored_array, \audio_video\show\audio_video_mp_show::get_audio_key_album_info($dude["hash"], $finder_path, $g, $data_viewer["b"], true));
            }
            return $repored_array;
        } else {

            return ["none" => 1];
        }
    }

    static public function post_search_hunter_(string $word, string $finder_path, string $g, string $q, int $offset = 0, int $limit = 5) {

        if (checkist\data_search_in_table\num_search_starts_ends::get_search_data_in_table_loop("post", "DISTINCT keey", ["word" => $word], $offset, $limit) > 0) {

            $data_viewer = timestream\post_get_streamer::post_get_poster_people_infor(["g" => $g, "q" => $q])["info"];

            $posts_keys = checkist\data_search_in_table\search_starts_ends::get_search_data_in_table_loop("post", "DISTINCT keey", ["word" => $word], $offset, $limit);

            $timeline_gen = [];

            for ($i = 0; $i < count($posts_keys); $i++) {
                $element_post_key_each = $posts_keys[$i]["keey"];

                if (checkist\data_in_table\num_of_data_in_table::num_of_data_in_table("timeline", "*", ["key_link" => $element_post_key_each, "saved" => 1]) > 0) {

                    array_push($timeline_gen, checkist\data_in_table\get_data_in_table::get_data_in_table("timeline", "DISTINCT *", ["key_link" => $element_post_key_each, "saved" => 1]));

                }
            }

            if (!empty($timeline_gen)) {

                return timestream\post_get_streamer::help_imbitween($timeline_gen, $data_viewer["g"], $data_viewer["q"], $data_viewer["r"], false, $finder_path, true, false, true);

            } else {
                return ["none" => true];
            }
        } else {
            return ["none" => true];
        }
    }

    static public function show_search(string $word, string $g, string $q, int $offset = 0, int $limit = 5, $creata_b=null) {

        $owner_b = $creata_b;

        if($creata_b == null || empty(trim($creata_b))){

            $owner_b = '';

        }

        $query__ = "SELECT name_,owner_b,key_,create_date,desc_,cover,publish FROM `" . DB . "`.`shows` WHERE (`name_` LIKE '%{$word}%' OR `desc_` LIKE '%{$word}%') AND (`owner_b` LIKE '%{$owner_b}%') LIMIT {$limit} OFFSET {$offset}";

        if (query__\sql_querier::num_rows($query__) > 0) {

            $data = query__\sql_querier::fetch_assoc_loop($query__);

            return \show\finz\get_show_info::bulk_show_info($data, $g, $q, true);

        } else {

            return ["none" => 1];
            
        }
    }

    static public function season_search(string $word, string $g, string $q, int $offset = 0, int $limit = 5, $creata_b=null) {

        $owner_b = $creata_b;

        if($creata_b == null || empty(trim($creata_b))){

            $owner_b = '';

        }

        $query__ = "SELECT seasons.name_,seasons.show_,seasons.key_,seasons.create_date,seasons.desc_,seasons.cover,seasons.publish FROM `" . DB . "`.`shows`,`" . DB . "`.`seasons` WHERE (seasons.name_ LIKE '%{$word}%' OR seasons.desc_ LIKE '%{$word}%') AND (shows.key_ = seasons.show_) AND (shows.owner_b LIKE '%{$owner_b}%') LIMIT {$limit} OFFSET {$offset}";

        if (query__\sql_querier::num_rows($query__) > 0) {

            $data = query__\sql_querier::fetch_assoc_loop($query__);

            return \show\finz\get_show_info::bulk_season_info($data, $g, $q, true);

        } else {

            return ["none" => 1];
            
        }
    }

    public static function finally_returner(string $word, string $type, string $g, string $q, string $finder_path, int $offset = 0, int $limit = 5,string $creata_b=null) {

        $dict = ['none' => true];
        $person = ['none' => true];
        $post = ['none' => true];
        $music = ['none' => true];
        $show = ['none' => true];
        $season = ['none' => true];

        $owner_b = $creata_b;

        if($creata_b == null || empty(trim($creata_b))){

            $owner_b = null;

        }

        if ($offset == 0) {

            if (($owner_b==null && $type=="show_all") || $type == "all" || $type == "dictionary") {

                $dict_reter = self::dic_ready($word, $finder_path);

                if (isset($dict_reter["none"])) {

                    $dict = $dict_reter;
                } else {
                    $dict = [$dict_reter];
                }
            }

        } else {
            $dict = ["none" => true];
        }

        if (($owner_b==null && $type=="show_all") || $type == "all" || $type == "people") {

            $person = self::persons_search($word, $g, $q, $offset, $limit);

        }

        if ($type == "all" || $type == "music") {

            $music = self::music_search($word, $finder_path, $g, $q, $offset, $limit);
        }

        if ($type == "all" || $type == "post") {
            $post = self::post_search_hunter_($word, $finder_path, $g, $q, $offset, $limit);
        }

        if ($type == "show_all" || $type == "show") {

            $show = self::show_search($word, $g, $q, $offset, $limit, $owner_b);

        }


        if ($type == "show_all" || $type == "season") {

            $season = self::season_search($word, $g, $q, $offset, $limit, $owner_b);

        }

        return ["dictionary" => $dict, "people" => $person, "music" => $music, "post" => $post, "show"=> $show,'season'=>$season];
    }

    // ...................empty................

    public static function get_searched_dicted_words(string $g, string $q, int $offset = 0, int $limit = 5, string $finder_path) {

        $data_viewer = timestream\post_get_streamer::post_get_poster_people_infor(["g" => $g, "q" => $q])["info"];

        if (checkist\data_in_table\num_of_data_in_table::num_of_data_in_table("views_post", "key_post", ["q" => $data_viewer["q"], "b" => $data_viewer["b"], "category" => "dictionary"], $offset, $limit) > 0) {

            $word_data = checkist\data_in_table\get_data_in_table::get_data_in_table_loop("views_post", "key_post", ["q" => $data_viewer["q"], "b" => $data_viewer["b"], "category" => "dictionary"], $offset, $limit, "date", "DESC");

            if (isset($word_data["none"])) {

                $total_wordix = $word_data;
            } else {

                $total_wordix = array();

                for ($i = 0; $i < count($word_data); $i++) {

                    $eacher_word = $word_data[$i]["key_post"];

                    array_push($total_wordix, self::dic_ready($eacher_word, $finder_path));
                }
            }

            return $total_wordix;
        } else {

            return ["none" => 1];
        }
    }

    static public function get_searched_persons_search(string $g, string $q, int $offset = 0, int $limit = 5) {

        $data_viewer = timestream\post_get_streamer::post_get_poster_people_infor(["g" => $g, "q" => $q])["info"];

        if (checkist\data_in_table\num_of_data_in_table::num_of_data_in_table("views_post", "key_post", ["q" => $data_viewer["q"], "b" => $data_viewer["b"], "category" => "profile_viewed"], $offset, $limit) > 0) {

            $word_data = checkist\data_in_table\get_data_in_table::get_data_in_table_loop("views_post", "key_post", ["q" => $data_viewer["q"], "b" => $data_viewer["b"], "category" => "profile_viewed"], $offset, $limit, "date", "DESC");

            $data_personeeer = [];

            for ($i = 0; $i < count($word_data); $i++) {

                $person_each = $word_data[$i]["key_post"];

                if (checkist\data_in_table\num_of_data_in_table::num_of_data_in_table("users", "email,full,act,q,b,r,g,prof_pix,cover", ["g" => $person_each]) > 0) {

                    $data_personeeer_each = checkist\data_in_table\get_data_in_table::get_data_in_table("users", "email,full,act,q,b,r,g,prof_pix,cover", ["g" => $person_each]);
                    array_push($data_personeeer, $data_personeeer_each);
                }
            }

            return self::_fumble_loop_person_search($data_personeeer, $g, $q);
        } else {

            return ["none" => 1];
        }
    }

    static public function get_searched_music_songs(string $g, string $q, string $finder_path, int $offset = 0, int $limit = 5) {
        $data_viewer = timestream\post_get_streamer::post_get_poster_people_infor(["g" => $g, "q" => $q])["info"];

        if (checkist\data_in_table\num_of_data_in_table::num_of_data_in_table("views_post", "key_post", ["q" => $data_viewer["q"], "b" => $data_viewer["b"], "category" => "music"], $offset, $limit) > 0) {

            $word_data = checkist\data_in_table\get_data_in_table::get_data_in_table_loop("views_post", "key_post", ["q" => $data_viewer["q"], "b" => $data_viewer["b"], "category" => "music"], $offset, $limit, "date", "DESC");

            $data_personeeer = [];
            for ($i = 0; $i < count($word_data); $i++) {

                $dude = $word_data[$i];

                array_push($data_personeeer, \audio_video\show\audio_video_mp_show::get_audio_key_album_info($dude["key_post"], $finder_path, $g, $data_viewer["b"], true));
            }
            return $data_personeeer;
        } else {

            return ["none" => 1];
        }
    }

    static public function get_searched_post_hunter_(string $finder_path, string $g, string $q, int $offset = 0, int $limit = 5) {
        $data_viewer = timestream\post_get_streamer::post_get_poster_people_infor(["g" => $g, "q" => $q])["info"];

        if (checkist\data_in_table\num_of_data_in_table::num_of_data_in_table("views_post", "DISTINCT key_post", ["q" => $data_viewer["q"], "b" => $data_viewer["b"], "category" => "post_viewed"], $offset, $limit) > 0) {

            $posts_keys = checkist\data_in_table\get_data_in_table::get_data_in_table_loop("views_post", "DISTINCT key_post, date", ["q" => $data_viewer["q"], "b" => $data_viewer["b"], "category" => "post_viewed"], $offset, $limit, 'date', 'DESC');
            $timeline_gen = [];

            for ($i = 0; $i < count($posts_keys); $i++) {
                $element_post_key_each = $posts_keys[$i]["key_post"];

                if (checkist\data_in_table\num_of_data_in_table::num_of_data_in_table("timeline", "*", ["key_link" => $element_post_key_each, "saved" => 1]) > 0) {
                    array_push($timeline_gen, checkist\data_in_table\get_data_in_table::get_data_in_table("timeline", "DISTINCT *", ["key_link" => $element_post_key_each, "saved" => 1]));
                }
            }

            if (!empty($timeline_gen)) {

                return timestream\post_get_streamer::help_imbitween($timeline_gen, $data_viewer["g"], $data_viewer["q"], $data_viewer["r"], false, $finder_path, true, false, true);
            } else {
                return ["none" => true];
            }
        } else {

            return ["none" => 1];
        }
    }

    public static function finally_returner_empty(string $type, string $g, string $q, string $finder_path, int $offset = 0, int $limit = 5,string $creata_b = null) {

        $dict = ['none' => true];
        $person = ['none' => true];
        $post = ['none' => true];
        $music = ['none' => true];
        $show = ['none' => true];
        $season = ['none' => true];
        
        $owner_b = $creata_b;

        if($creata_b == null || empty(trim($creata_b))){

            $owner_b = null;

        }

        if (($owner_b==null && $type=="show_all") || $type == "all" || $type == "dictionary") {

            $dict = self::get_searched_dicted_words($g, $q, $offset, $limit, $finder_path);
        }

        if (($owner_b==null && $type=="show_all") || $type == "all" || $type == "people") {

            $person = self::get_searched_persons_search($g, $q, $offset, $limit);
        }

        if ($type == "all" || $type == "music") {

            $music = self::get_searched_music_songs($g, $q, $finder_path, $offset, $limit);
        }

        if ($type == "all" || $type == "post") {
            $post = self::get_searched_post_hunter_($finder_path, $g, $q, $offset, $limit);
        }

        return ["dictionary" => $dict, "people" => $person, "music" => $music, "post" => $post, "show"=> $show,'season'=>$season];
    }

}
