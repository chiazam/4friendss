<?php

namespace audio\playist_render;

use check\data_in_table as checkist;
use viewer_register as viewer;
use audio_video as aud_vid;

class audio_playist_handle
{

    protected $g;
    protected $r;
    protected $q;
    protected $b;
    protected $music_hash;
    protected $path_finder;

    public function __construct(string $g, string $b, string $r, string $q, string $music_hash, string $path_finder)
    {

        $this->g = $g;
        $this->b = $b;
        $this->r = $r;
        $this->q = $q;
        $this->music_hash = $music_hash;
        $this->path_finder = $path_finder;
    }

    public function music_get_this_info()
    {

        if (checkist\num_of_data_in_table::num_of_data_in_table("audio__info", "*", ["hash" => $this->music_hash]) > 0) {

            viewer\viewer_register::reg__viewer($this->music_hash, $this->q, $this->b, "music");

            if (checkist\num_of_data_in_table::num_of_data_in_table("music_listening", "*", ["music_key" => $this->music_hash, "lisner_g" => $this->g, "lisner_b" => $this->b]) > 0) {

                checkist\update_data_in_table::update_data_in_table("music_listening", ["date" => \time\time_to_string::time_to_string(time())], ["music_key" => $this->music_hash, "lisner_g" => $this->g, "lisner_b" => $this->b]);
            } else {

                checkist\add_data_in_table::add_data_in_table("music_listening", ["lisner_g" => $this->g, "lisner_b" => $this->b, "music_key" => $this->music_hash, "date" => \time\time_to_string::time_to_string(time())]);
            }

            if (checkist\num_of_data_in_table::num_of_data_in_table("music_playist", "*", ["player_g" => $this->g, "player_b" => $this->b, "hash" => $this->music_hash]) > 0) {

                checkist\delete_data_in_table::delete_data_in_table("music_playist", ["player_g" => $this->g, "player_b" => $this->b, "hash" => $this->music_hash]);
            }

            return aud_vid\show\audio_video_mp_show::get_audio_key_album_info($this->music_hash, $this->path_finder, $this->g, $this->b);
        } else {
            return ["none" => true];
        }
    }

    static function get_next_playist(string $g, string $b, string $path_finder)
    {

        if (checkist\num_of_data_in_table::num_of_data_in_table("music_playist", "*", ["player_g" => $g, "player_b" => $b]) > 0) {

            return aud_vid\show\audio_video_mp_show::get_audio_key_album_info((checkist\get_data_in_table::get_data_in_table("music_playist", "*", ["player_g" => $g, "player_b" => $b])["hash"]), $path_finder, $g, $b);
        } else {

            return ["none" => true];
        }
    }

    public function finally_info_next_retter()
    {

        return ["present_song" => $this->music_get_this_info(), "next_song" => self::get_next_playist($this->g, $this->b, $this->path_finder)];
    }
}
