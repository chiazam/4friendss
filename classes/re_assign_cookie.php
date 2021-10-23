<?php

namespace re_assign\cookie;

class re_assign_cookie {

    static public function cookie_mover(array $cookie_from, array &$cookie_to) {

        if (!empty($cookie_from)) {

            foreach ($cookie_from as $key => $value) {

                $cookie_to[$key] = trim($value);
            }
        }
    }

}
