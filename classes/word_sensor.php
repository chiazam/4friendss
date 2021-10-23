<?php

namespace sensor\word;

class word_sensor {

//    "/\bf[uao]+[c]+k\b/i", "/\bd[i]+[c]+k\b/i", "/\bp[u]+[s]+y\b/i", "/\bb[i]+[t]+ch\b/i","/\bc[u]+nt\b/i"
//    "f**k", "d**k", "p**y", "b**ch", 'c*nt'

    static public $rude_words = [];
    static public $rude_words_replace = [];

    public static function preg_happener___yet_happening(array $pattern, array $replace, string $dom_string) {
        return (preg_replace($pattern, $replace, $dom_string));
    }

    public static function friends_rude_sensor(string $word) {
        return (self::preg_happener___yet_happening(self::$rude_words, self::$rude_words_replace, $word));
    }

}
