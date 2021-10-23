<?php

namespace re_assign\post;

class re_assign_post {

    static public function post_mover(array $post_from, array &$post_to) {

        if (!empty($post_from) && empty($post_to)) {

            foreach ($post_from as $key => $value) {

                $post_to[$key] = $value;
            }
        }
    }

    static public function post_mover_2(string $post_from, array &$post_to) {

        if (!empty(trim($post_from)) && empty($post_to)) {

            $post_array = json_decode($post_from, true);

            if (is_array($post_array)) {

                foreach ($post_array as $key => $value) {

                    $post_to[$key] = $value;
                }
            }
        }
    }

    static public function main_post_mover(array $post_from, string $post_json, array &$post_to) {

        if (empty($post_to) && !empty($post_from)) {

            self::post_mover($post_from, $post_to);
        } elseif (empty($post_to) && !empty($post_json)) {

            self::post_mover_2($post_json, $post_to);
        }
    }

}
