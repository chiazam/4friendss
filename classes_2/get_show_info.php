<?php

namespace show\finz;

use img_processor as img_culu;
use check as checkist;
use time as time__;
use relate_and_how as relator;
use post_timeline_stream as timestream;
use extract\mention_hashtag as hash_tag;
use Sentiment\Analyzer as sentiment_analysis;

class get_show_info 
{

    static public function is_published(string $key, string $table){

        $published = checkist\data_in_table\get_data_in_table::get_data_in_table($table,"publish", ["key_" => $key])["publish"];

        if($published==1){

            return true;

        }else{

            return false;

        }

    }

    static public function get_full_season_info(string $key, string $g, string $q, bool $publish = false, bool $minimal=true)
    {

        if (checkist\data_in_table\num_of_data_in_table::num_of_data_in_table("seasons","name_,show_,key_,create_date,desc_,cover,publish", ["key_" => $key]) > 0) {

            $season_info=checkist\data_in_table\get_data_in_table::get_data_in_table("seasons","name_,show_,key_,create_date,desc_,cover,publish", ["key_" => $key]);
    
            return self::single_season_info($season_info, $g, $q, $publish, $minimal);
        
        }else{

            return ['none'=>true];
            
        }
        
    }

    static public function get_full_show_info(string $key, string $g, string $q, bool $publish = false, bool $minimal=true)
    {

        if (checkist\data_in_table\num_of_data_in_table::num_of_data_in_table("shows","name_,owner_b,key_,create_date,desc_,cover,publish", ["key_" => $key]) > 0) {

            $show_info=checkist\data_in_table\get_data_in_table::get_data_in_table("shows","name_,owner_b,key_,create_date,desc_,cover,publish", ["key_" => $key]);
    
            return self::single_show_info($show_info, $g, $q, $publish, $minimal);
        
        }else{

            return ['none'=>true];
            
        }
        
    }

    static public function single_show_info(array $show_info, string $g, string $q, bool $publish = false, bool $minimal=true)
    {

        if (checkist\data_in_table\num_of_data_in_table::num_of_data_in_table("shows","*", ["key_" => $show_info['key_'], 'owner_b'=>$show_info['owner_b']]) > 0) {

            \deleters\delete_except_remain\delete_all_except_remain::delete_all_keep_remain("shows", ["key_" => $show_info['key_'], 'owner_b'=>$show_info['owner_b']]);

            $full_show_info = $show_info;

            unset($full_show_info['owner_b']);

            $full_show_info['owner'] = timestream\post_get_streamer::post_get_poster_people_infor(['b'=>$show_info['owner_b']]);

            if($publish===true&&$full_show_info['owner']['info']["g"]!=$g&&$full_show_info['owner']['info']["q"]!=$q){

                if(self::is_published($show_info['key_'], 'shows')===false){

                    return ['none'=>true];

                }

            }

            if((new \privacy\privacy_validator($show_info['key_'],'shows',$full_show_info['owner']['info']["g"],$full_show_info['owner']['info']["q"],$g,$q))===false){

                return ['none'=>true];

            }

            $full_show_info['owner']["relationship"] = relator\relate_detect_how::relate_picker($full_show_info['owner']['info']["g"], $full_show_info['owner']['info']["q"], $g, $q);

            $full_show_info['cover_backgrund'] = img_culu\back_img_handler::get_back_color($show_info['key_'], 'show_cover');

            $array_diff_time = time__\date_diff_array::date_diff_array(time__\time_to_string::time_to_string(time()), $show_info['create_date']);

            $full_show_info['create_date'] = time__\date_diff_array::displayable_time_format($show_info['create_date'], $array_diff_time);

            $full_show_info["hash_tags"] = hash_tag\extract_hashtag_mention::array_mention_hashtags($show_info["desc_"],true);

            $full_show_info["mentions"] = hash_tag\extract_hashtag_mention::array_mention_hashtags($show_info["desc_"],false);

            $full_show_info["desc_"] = htmlspecialchars(\sensor\word\word_sensor::friends_rude_sensor(ucfirst($show_info["desc_"])));

            $full_show_info["name_"] = htmlspecialchars(ucfirst($show_info["name_"]));

            $full_show_info["word_analysis"] =  (new sentiment_analysis())->getSentiment($show_info["desc_"]);

            return $full_show_info;

        }else{

            return ['none'=>true];

        }

    }

    static public function bulk_show_info(array $show_list, string $g, string $q, bool $publish = false, bool $minimal=true)
    {

        $info_show_list = [];

        for ($i=0; $i < count($show_list); $i++) { 

            $each_show = $show_list[$i];

            $main_show_each = self::single_show_info($each_show, $g, $q, $publish, $minimal);

            if (!isset($main_show_each['none'])) {

                array_push($info_show_list,$main_show_each);
              
            }

        }

        if(count($info_show_list)>0){

            return $info_show_list;

        }else{

            return ['none'=>true];

        }
        
    }


    // .............................................

    static public function single_season_info(array $season_info, string $g, string $q, bool $publish = false, bool $minimal=true)
    {

        if (checkist\data_in_table\num_of_data_in_table::num_of_data_in_table("seasons","*", ["key_" => $season_info['key_'], 'show_'=>$season_info['show_']]) > 0) {

            \deleters\delete_except_remain\delete_all_except_remain::delete_all_keep_remain("seasons", ["key_" => $season_info['key_'], 'show_'=>$season_info['show_']]);

            $full_season_info = $season_info;

            if (checkist\data_in_table\num_of_data_in_table::num_of_data_in_table("shows","*", ["key_" => $season_info['show_']]) === 0) {

                return ['none'=>true];

            }

            $show_info = checkist\data_in_table\get_data_in_table::get_data_in_table("shows","*", ["key_" => $season_info['show_']]);

            $full_show_info = self::single_show_info($show_info, $g, $q, $publish);

            if(isset($full_show_info['none'])){

                return ['none'=>true];

            }

            if($publish===true&&$full_show_info['owner']['info']["g"]!=$g&&$full_show_info['owner']['info']["q"]!=$q){

                if(self::is_published($season_info['key_'], 'seasons')===false){

                    return ['none'=>true];

                }

            }

            if((new \privacy\privacy_validator($season_info['key_'],'seasons',$full_show_info['owner']['info']["g"],$full_show_info['owner']['info']["q"],$g,$q))===false){

                return ['none'=>true];

            }

            $full_season_info['cover_backgrund'] = img_culu\back_img_handler::get_back_color($season_info['key_'], 'show_cover');

            $array_diff_time = time__\date_diff_array::date_diff_array(time__\time_to_string::time_to_string(time()), $season_info['create_date']);

            $full_season_info['create_date'] = time__\date_diff_array::displayable_time_format($season_info['create_date'], $array_diff_time);

            $full_season_info["hash_tags"] = hash_tag\extract_hashtag_mention::array_mention_hashtags($season_info["desc_"],true);

            $full_season_info["mentions"] = hash_tag\extract_hashtag_mention::array_mention_hashtags($season_info["desc_"],false);

            $full_season_info["desc_"] = htmlspecialchars(\sensor\word\word_sensor::friends_rude_sensor(ucfirst($season_info["desc_"])));

            $full_season_info["name_"] = htmlspecialchars(ucfirst($season_info["name_"]));

            $full_season_info["word_analysis"] =  (new sentiment_analysis())->getSentiment($season_info["desc_"]);

            if ($minimal===false) {

                $full_season_info['show_'] = $full_show_info;
                
            }

            return $full_season_info;

        }else{

            return ['none'=>true];

        }

    }

    static public function bulk_season_info(array $season_list, string $g, string $q, bool $publish = false, bool $minimal=true)
    {

        $info_season_list = [];

        for ($i=0; $i < count($season_list); $i++) { 

            $each_season = $season_list[$i];

            $main_season_each = self::single_season_info($each_season, $g, $q, $publish, $minimal);

            if (!isset($main_season_each['none'])) {

                array_push($info_season_list,$main_season_each);
              
            }

        }

        if(count($info_season_list)>0){

            return $info_season_list;

        }else{

            return ['none'=>true];

        }
        
    }

    static public function is_mine(string $type,string $key,string $g,string $q)
    {

        if (checkist\data_in_table\num_of_data_in_table::num_of_data_in_table($type, "*", ["key_" => $key]) === 0) {

            return false;
            
        }

        $info = checkist\data_in_table\get_data_in_table::get_data_in_table($type, "*", ["key_" => $key]);

        if($type==='seasons'){

           $uploader = self::single_season_info($info, $g, $q, true,false)['show_']['owner'];

        }else if($type==='shows'){

            $uploader = self::single_show_info($info, $g, $q, true)['owner'];
 
        }

        if($uploader['info']["g"]===$g&&$uploader['info']["q"]===$q){

            return true;

        }else{

            return false;
            
        }
        
    }
    
}
