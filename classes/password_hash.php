<?php

namespace password\hash;

class password_hash
{

    static public function password_hash($password)
    {

        return password_hash(md5($password) . md5($password) . md5($password) . md5($password), PASSWORD_DEFAULT);
    }
}
