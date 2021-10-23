<?php

namespace re_assign\session;

class re_assign_session {

    static public function session_mover(array $session_from, array &$session_to) {

        if (!empty($session_from)) {

            foreach ($session_from as $key => $value) {

                $session_to[$key] = $value;
            }
        }
    }

}

