<?php

namespace check\if_files;

class check_isset_files{

    static public function check_isset_files(array $post_var){

        $bool = true;

        foreach ($post_var as $key => $value) {

            if(!isset($_FILES[$value])){

                $bool=false;

                break;

            }
            
        }

        return $bool;

    }

}