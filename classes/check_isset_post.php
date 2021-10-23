<?php

namespace check\if_post;

class check_isset_post {

    static public function check_isset_post(array $post_var) {

        global $_post_;

        $bool = true;

        foreach ($post_var as $key => $value) {

            if (!isset($_post_[$value])) {

                $bool = false;

                break;
            }
        }

        return $bool;
    }

}
