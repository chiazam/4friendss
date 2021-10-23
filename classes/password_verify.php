<?php

namespace password\verify;

class password_verify{

    static public function password_verify(string $hash, $password){

     return password_verify(md5($password).md5($password).md5($password).md5($password), $hash);

    }

}