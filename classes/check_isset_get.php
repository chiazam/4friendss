<?php

namespace check\if_get;

class check_isset_get{

    static public function check_isset_get(array $get_var){

        $bool = true;

        foreach ($get_var as $key => $value) {

            if(!isset($_GET[$value])){

                $bool=false;

                break;

            }
            
        }

        return $bool;

    }

}