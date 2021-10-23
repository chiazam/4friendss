<?php

namespace audio\activities;

use check\data_in_table as checkist;
use audio_video as aud_vid;
use num_slang as slanger;

class music_view_favour_play {

    protected $my_g;
    protected $my_b;
    protected $path_finder;
    protected $g;
    protected $b;
    protected $category;
    protected $num;

    public function __construct(string $my_g, string $my_b, string $g, string $b, string $path_finder, string $category, int $limit = 5, int $offset = 0, bool $num = false) {
        $this->my_g = $my_g;
        $this->my_b = $my_b;
        $this->g = $g;
        $this->b = $b;
        $this->path_finder = $path_finder;
        $this->category = $category;
        $this->limit = $limit;
        $this->offset = $offset;
        $this->num = $num;
    }

    public function span_playlist_detailed() {

        if ($this->num === true) {

            return ['num' => slanger\num_slang::slanger(checkist\num_of_data_in_table::num_of_data_in_table("music_playist", "*", ["player_g" => $this->g, "player_b" => $this->b]))];
        }

        if (checkist\num_of_data_in_table::num_of_data_in_table("music_playist", "*", ["player_g" => $this->g, "player_b" => $this->b], $this->offset, $this->limit) > 0) {

            $musics_data = checkist\get_data_in_table::get_data_in_table_loop("music_playist", "*", ["player_g" => $this->g, "player_b" => $this->b], $this->offset, $this->limit);

            $musics = [];

            for ($i = 0; $i < count($musics_data); $i++) {

                $element_song = $musics_data[$i]["hash"];

                array_push($musics, aud_vid\show\audio_video_mp_show::get_audio_key_album_info($element_song, $this->path_finder, $this->my_g, $this->my_b, true));
            }

            return $musics;
        } else {
            return ["none" => true];
        }
    }

    public function span_favourite_detailed() {

        if ($this->num === true) {

            return ['num' => slanger\num_slang::slanger(checkist\num_of_data_in_table::num_of_data_in_table("music_favourite", "*", ["favour_g" => $this->g, "favour_b" => $this->b]))];
        }

        if (checkist\num_of_data_in_table::num_of_data_in_table("music_favourite", "*", ["favour_g" => $this->g, "favour_b" => $this->b], $this->offset, $this->limit) > 0) {

            $musics_data = checkist\get_data_in_table::get_data_in_table_loop("music_favourite", "*", ["favour_g" => $this->g, "favour_b" => $this->b], $this->offset, $this->limit);

            $musics = [];

            for ($i = 0; $i < count($musics_data); $i++) {

                $element_song = $musics_data[$i]["hash"];

                array_push($musics, aud_vid\show\audio_video_mp_show::get_audio_key_album_info($element_song, $this->path_finder, $this->my_g, $this->my_b));
            }

            return $musics;
        } else {
            return ["none" => true];
        }
    }

    public function span_played_detailed() {


        if ($this->num === true) {

            return ['num' => slanger\num_slang::slanger(checkist\num_of_data_in_table::num_of_data_in_table("music_listening", "*", ["lisner_g" => $this->g, "lisner_b" => $this->b]))];
        }

        if (checkist\num_of_data_in_table::num_of_data_in_table("music_listening", "*", ["lisner_g" => $this->g, "lisner_b" => $this->b], $this->offset, $this->limit) > 0) {

            $musics_data = checkist\get_data_in_table::get_data_in_table_loop("music_listening", "*", ["lisner_g" => $this->g, "lisner_b" => $this->b], $this->offset, $this->limit, 'date', 'DESC');

            $musics = [];

            for ($i = 0; $i < count($musics_data); $i++) {

                $element_song = $musics_data[$i]["music_key"];

                array_push($musics, aud_vid\show\audio_video_mp_show::get_audio_key_album_info($element_song, $this->path_finder, $this->my_g, $this->my_b, true));
            }

            return $musics;
        } else {
            return ["none" => true];
        }
    }

    public function get_wat_want() {

        if ($this->category === "played") {
            return $this->span_played_detailed();
        } elseif ($this->category === "favourite") {
            return $this->span_favourite_detailed();
        } elseif ($this->category === "playlist") {
            return $this->span_playlist_detailed();
        }
    }

}
