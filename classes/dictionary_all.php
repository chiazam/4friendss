<?php

namespace dictionary_tins;

class dictionary_all {

    static public function word_dics_find(string $word, string $path_finder) {
        $json_array = json_decode(file_get_contents("{$path_finder}lib/words_dix/dictionary.json"), true);

        if (isset($json_array[trim($word)])) {

            return [$word => $json_array[trim($word)]];
        } else {
            return ["none" => true];
        }
    }

}
