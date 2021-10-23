<?php

namespace screenshot;


class screen_shot 
{

    static public function fullscreen_shot(string $save_path)
    {

        if(!is_dir($save_path)){

            mkdir($save_path,0777,true);

        }

        $hash_namer = \hash_maker\hash_maker::post_file_hash($save_path)["hash_name"];

        $file_path = $save_path+$hash_namer+".jpeg";

        $im = imagegrabscreen();
        imagejpeg($im, $file_path);
        imagedestroy($im);

        return $file_path;
        
    }
    
}
