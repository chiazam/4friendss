<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace mysqli__;

/**
 * Description of mysqli_connector
 *
 * @author chiazam udekwe
 */
class mysqli_connector {

    public function __construct($host, $username, $password) {

        global $conn;

        try {

            $conn = mysqli_connect($host, $username, $password);
        } catch (\Exception $e) {

            new \try_catch\try_catcher($e, FRIENDS_EMAIL);
        }

        if (!$conn) {

            $to = FRIENDS_EMAIL;
            $subject = 'Fault database conection error';
            $body = 'Incorrect database credentials';

            \mail\mail_maker::mailer__ward($to, $subject, $body);
        }
    }

}
