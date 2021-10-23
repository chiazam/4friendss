<?php

namespace audio_video\hash;

use time\time_to_string as time_string;

class audio_video_hash
{

    static public function audio_video_time_namer_hash($name)
    {

        return  md5(md5(time_string::time_to_string(time()) . md5($name . time_string::time_to_string(time()))) . md5(time_string::time_to_string(time()) . md5($name . time_string::time_to_string(time()))) . md5(uniqid(time(), true)));
    }
}
