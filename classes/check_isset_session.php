<?php

namespace check\if_session;

class check_isset_session {

    static public function check_isset_session(array $session_var) {

        $bool = true;

        global $_session_;

        foreach ($session_var as $key => $value) {

            if (!isset($_session_[$value])) {

                $bool = false;

                break;
            }
        }

        return $bool;
    }

}
