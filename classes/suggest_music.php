<?php

namespace suggesters;

use prepare\trim as prep;
use querier as query__;

/**
 * Description of suggest_music
 *
 * @author chiazam udekwe
 */
class suggest_music {

    private $list_array_people;
    private $path_finder;
    private $minimal;
    private $limit;
    private $offset;
    private $b;
    private $g;

    public function __construct(array $list_array_people, bool $minimal, string $path_finder, int $limit, string $b, string $g, int $offset = null) {

        $this->list_array_people = $list_array_people;
        $this->offset = prep\prepare_trim::return_prepare_trim($offset);
        $this->b = prep\prepare_trim::return_prepare_trim($b);
        $this->g = prep\prepare_trim::return_prepare_trim($g);
        $this->limit = prep\prepare_trim::return_prepare_trim($limit);
        $this->path_finder = $path_finder;
        $this->minimal = $minimal;
    }

    public function _suggest_music_now() {

        if (!isset($this->list_array_people['none'])) {

            $looper_querier = '';

            $offe_set = '';

            if ($this->offset !== null) {
                $offe_set = " OFFSET {$this->offset}";
            }

            for ($i = 0; $i < count($this->list_array_people); $i++) {

                if ($i > 0) {
                    $looper_querier .= " OR ";
                }

                $looper_querier .= "(`" . DB . "`.`music_listening`.`lisner_b` = '{$this->list_array_people[$i]['info']['b']}' AND `" . DB . "`.`music_listening`.`lisner_g` = '{$this->list_array_people[$i]['info']['g']}')";
            }

            $query__ = "SELECT DISTINCT `" . DB . "`.`audio__info`.`hash` FROM `" . DB . "`.`music_listening`,`" . DB . "`.`audio__info` WHERE (`" . DB . "`.`audio__info`.`hash` = `" . DB . "`.`music_listening`.`music_key`) AND ({$looper_querier}) ORDER BY RAND() LIMIT {$this->limit}{$offe_set}";

            if (query__\sql_querier::num_rows($query__) > 0) {

                $array__musicals = query__\sql_querier::fetch_assoc_loop($query__);

                $finally_discarder = [];

                for ($q = 0; $q < count($array__musicals); $q++) {

                    array_push($finally_discarder, \audio_video\show\audio_video_mp_show::get_audio_key_album_info($array__musicals[$q]['hash'], $this->path_finder, $this->g, $this->b, $this->minimal));
                }

                return $finally_discarder;
            } else {

                return ['none' => true];
            }
        } else {

            return ['none' => true];
        }
    }

}
