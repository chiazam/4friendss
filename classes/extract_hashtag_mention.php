<?php

namespace extract\mention_hashtag;

class extract_hashtag_mention
{

    // const regex_hash_tag = '/#(\w+)/';

    // const regex_tag = '/@(\w+)/';

    const regex_hash_tag = '/#([A-Za-z0-9\_\(\)]+)/';

    const regex_tag = '/@([A-Za-z0-9\_\(\)\.]+)/';


    public static function regex_returner($bool_string=true) {

        if(is_bool($bool_string)){

            if($bool_string){

                return self::regex_hash_tag;

            }else{

                return self::regex_tag;

            }

        }else{

            return $bool_string;

        }

    }

    public static function array_mention_hashtags(string $string, $bool_string=true) {

        /* Match hashtags */

        $keywords = [];

        preg_match_all(self::regex_returner($bool_string), $string, $matches);
       
         /* Add all matches to array */
         foreach ($matches[1] as $match) {

           array_push($keywords, $match);

         }

         if(count($keywords)===0){

            return ['none'=>true];

         }else if(count($keywords) > 0){
       
            return ($keywords);

         }

    }


    public static function string_mention_hashtags(string $string, $bool_string=true) {

        /* Match hashtags */
       
        $keywords="";
       
        preg_match_all(self::regex_returner($bool_string), $string, $matches);

        $count = 0;
       
         /* Add all matches to array */
         foreach ($matches[1] as $match) {

            $comma ="";

            if($count > 0){

                $comma = ", ";

            }

           $keywords .= $comma.$match;

           $count++;

         }
       
        return trim($keywords);

    }

    public static function link_mention_hashtags(string $string, string $preffix, $bool_string=true) {

        preg_match_all(self::regex_returner($bool_string), $string, $matches);
        foreach ($matches[1] as $match) {
           $string = str_replace($preffix.$match, "<a href='{$match}'>{$preffix}{$match}</a>", $string);
        }
       
        return $string;

    }
    
}
