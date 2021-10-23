<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace check\if_cookie;

/**
 * Description of check_isset_cookie
 *
 * @author chiazam udekwe
 */
class check_isset_cookie {

    static public function check_isset_cookie(array $cookie_var) {

        $bool = true;

        global $_cookie_;

        foreach ($cookie_var as $key => $value) {

            if (!isset($_cookie_[$value])) {

                $bool = false;

                break;
            }
        }

        return $bool;
    }

}
