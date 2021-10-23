<?php

namespace exp_un_post_times;

use check\data_in_table as checkist;
use querier as q_querier;
use time as clock;
use post_timeline_stream as timestream;

class un_expire_times_post {

    static public function get_times_unexpired_num(string $g, string $q, string $category = 'times', bool $expired = null) {

        $category = \prepare\trim\prepare_trim::return_prepare_trim($category);

        if ($expired === null) {

            $num_stuff = checkist\num_of_data_in_table::num_of_data_in_table('timeline', 'date,key_link,poster_g,poster_q,device,category,tied', ['category' => $category, 'poster_g' => $g, 'poster_q' => $q, 'saved' => 1]);
        } elseif ($expired === true) {

            $past_day = clock\time_to_string::time_to_string(time() - (60 * 60 * 24));

            $num_stuff = q_querier\sql_querier::num_rows("SELECT date,key_link,poster_g,poster_q,device,category,tied FROM `" . DB . "`.`timeline` WHERE category = '{$category}' AND poster_g = '{$g}' AND poster_q = '{$q}' AND saved = '1' AND date < '{$past_day}'");
        } elseif ($expired === false) {

            $past_day = clock\time_to_string::time_to_string(time() - (60 * 60 * 24));

            $num_stuff = q_querier\sql_querier::num_rows("SELECT date,key_link,poster_g,poster_q,device,category,tied FROM `" . DB . "`.`timeline` WHERE category = '{$category}' AND poster_g = '{$g}' AND poster_q = '{$q}' AND saved = '1' AND date >= '{$past_day}'");
        }

        return \num_slang\num_slang::slanger($num_stuff);
    }

    static public function get_times_unexpired_persons(string $b, string $category = 'times', int $offset = 0, int $limit = 3, bool $expired = null) {

        if ($category === 'times') {

            if ($offset === 0) {

                $meee = true;
            } else if ($offset > 0) {

                $meee = false;
            }
        } else {

            $meee = true;
        }

        $person = \suggesters\suggest_persons::suggest_gennerator($offset, $limit, $b, true, false, $meee);

        if (!isset($person['none'])) {

            $array_persons = [];

            for ($i = 0; $i < count($person); $i++) {

                $element = $person[$i];

                if (self::get_times_unexpired_num($element['info']['g'], $element['info']['q'], $category, $expired) > 0) {

                    array_push($array_persons, $element);
                }
            }

            if (count($array_persons) > 0) {

                return $array_persons;
            } else {
                return['none' => true];
            }
        } else {
            return $person;
        }
    }

    static public function get_times_unexpired_contents(string $g, string $q, string $b, string $r, array $persons, string $finder_path, bool $minimal = true, string $category = 'times', int $offset = 0, int $limit = 3, bool $expired = null) {

        $category = \prepare\trim\prepare_trim::return_prepare_trim($category);

        if (!isset($persons['none'])) {

            $array_post = [];

            for ($i = 0; $i < count($persons); $i++) {

                $element = $persons[$i]['info'];

                if ($expired === null) {

                    if (q_querier\sql_querier::num_rows("SELECT date,key_link,poster_g,poster_q,device,category,tied FROM `" . DB . "`.`timeline` WHERE category = '{$category}' AND poster_g = '{$element['g']}' AND poster_q = '{$element['q']}' AND saved = '1' ORDER BY RAND() LIMIT {$limit} OFFSET {$offset}") > 0) {

                        $main_stuff = q_querier\sql_querier::fetch_assoc("SELECT date,key_link,poster_g,poster_q,device,category,tied FROM `" . DB . "`.`timeline` WHERE category = '{$category}' AND poster_g = '{$element['g']}' AND poster_q = '{$element['q']}' AND saved = '1' ORDER BY RAND() LIMIT {$limit} OFFSET {$offset}");

                        array_push($array_post, $main_stuff);
                    }
                } elseif ($expired === true) {

                    $past_day = clock\time_to_string::time_to_string(time() - (60 * 60 * 24));

                    if (q_querier\sql_querier::num_rows("SELECT date,key_link,poster_g,poster_q,device,category,tied FROM `" . DB . "`.`timeline` WHERE category = '{$category}' AND poster_g = '{$element['g']}' AND poster_q = '{$element['q']}' AND saved = '1' AND date < '{$past_day}' ORDER BY RAND() LIMIT {$limit} OFFSET {$offset}") > 0) {

                        $main_stuff = q_querier\sql_querier::fetch_assoc("SELECT date,key_link,poster_g,poster_q,device,category,tied FROM `" . DB . "`.`timeline` WHERE category = '{$category}' AND poster_g = '{$element['g']}' AND poster_q = '{$element['q']}' AND saved = '1' AND date < '{$past_day}' ORDER BY RAND() LIMIT {$limit} OFFSET {$offset}");

                        array_push($array_post, $main_stuff);
                    }
                } elseif ($expired === false) {

                    $past_day = clock\time_to_string::time_to_string(time() - (60 * 60 * 24));

                    if (q_querier\sql_querier::num_rows("SELECT date,key_link,poster_g,poster_q,device,category,tied FROM `" . DB . "`.`timeline` WHERE category = '{$category}' AND poster_g = '{$element['g']}' AND poster_q = '{$element['q']}' AND saved = '1' AND date >= '{$past_day}' ORDER BY RAND() LIMIT {$limit} OFFSET {$offset}") > 0) {

                        $main_stuff = q_querier\sql_querier::fetch_assoc("SELECT date,key_link,poster_g,poster_q,device,category,tied FROM `" . DB . "`.`timeline` WHERE category = '{$category}' AND poster_g = '{$element['g']}' AND poster_q = '{$element['q']}' AND saved = '1' AND date >= '{$past_day}' ORDER BY RAND() LIMIT {$limit} OFFSET {$offset}");

                        array_push($array_post, $main_stuff);
                    }
                }
            }

            if (count($array_post) > 0) {

                return timestream\post_get_streamer::help_imbitween($array_post, $g, $q, $r, false, $finder_path, false, false, $minimal);
            } else {

                return ['none' => true];
            }
        } else {
            return $persons;
        }
    }

    static public function get_times_unexpired_main(string $g, string $q, string $b, string $r, string $finder_path, bool $minimal = true, string $category = 'times', int $offset = 0, int $limit = 3, bool $expired = null) {

        $persons = self::get_times_unexpired_persons($b, $category, $offset, $limit, $expired);

        return self::get_times_unexpired_contents($g, $q, $b, $r, $persons, $finder_path, $minimal, $category, $offset, $limit, $expired);
    }

}
