<?php

namespace hash_maker;

use time\time_to_string as time_string;

class hash_maker {

    public static function make_verify_cupon(string $fullname, string $email, string $password) {
        return $verify_cupon = md5(md5($email . $password . 'its lolo' . time()) . " " . md5($email . $password . 'its lolo' . time()) . " " . md5($email . $password . 'its lolo' . time()) . " " . md5($email . $password . 'its lolo' . time()) . md5(uniqid(time(), true)));
    }

    public static function sign_hash(string $fullname, string $email, string $password) {
        
        $r = substr(rand_hash(md5(md5($fullname . 'its friendly' . time()) . " " . md5($fullname . 'its friendly' . time()) . " " . md5($fullname . 'its friendly' . time()) . " " . md5($fullname . 'its friendly' . time()))),0,-10);

        $b = substr(rand_hash(md5(md5($email . 'its friendly' . time()) . " " . md5($email . 'its friendly' . time()) . " " . md5($email . 'its friendly' . time()) . " " . md5($email . 'its friendly' . time()) . md5(uniqid(time(), true)))),0,-10);

        $q = substr(rand_hash(md5(md5($fullname . 'its lolo' . time()) . " " . md5($fullname . 'its lolo' . time()) . " " . md5($fullname . 'its lolo' . time()) . " " . md5($fullname . 'its lolo' . time()))),0,-10);

        $g = substr(rand_hash(md5(md5($email . 'its lolo' . time()) . " " . md5($email . 'its lolo' . time()) . " " . md5($email . 'its lolo' . time()) . " " . md5($email . 'its lolo' . time()) . md5(uniqid(time(), true)))),0,-10);

        $verify_cupon = self::make_verify_cupon($fullname, $email, $password);

        return [
            "hash_r" => $r, "hash_b" => $b, "hash_q" => $q, "hash_g" => $g, "hash_verify" => $verify_cupon
        ];
    }

    static public function post_file_hash(string $file_name) {

        $file_hash = substr(rand_hash(md5(md5(time_string::time_to_string(time()) . $file_name . time_string::time_to_string(time())) . md5(uniqid(time(), true)))),0,-10);

        $file_name_hash = substr(rand_hash(md5(md5(time_string::time_to_string(time()) . md5($file_name . time_string::time_to_string(time()))) . md5(uniqid(time(), true)))),0,-10);

        return [
            "hash_name" => $file_name_hash, "hash" => $file_hash
        ];
    }

    public static function post_times_hash_maker(string $b, string $q) {
        $hasher = substr(rand_hash(md5(md5($b) . md5($q) . md5(time_string::time_to_string(time()) . time_string::time_to_string(time()) . time_string::time_to_string(time()) . time_string::time_to_string(time()) . time_string::time_to_string(time())) . md5(uniqid(time(), true)))),0,-10);

        return $hasher;
    }

}
