<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace try_catch;

/**
 * Description of try_catcher
 *
 * @author chiazam udekwe
 */
class try_catcher {

    public function __construct(\Exception $error, string $email) {

        $to = FRIENDS_EMAIL;
        $subject = 'Exception thrown';
        $body = "error found on line <b> '{$error->GetLine()}

' </b> in file <b> '{$error->GetFile()}' </b> and error is <b> '{$error->GetMessage()}' </b>";

        \mail\mail_maker::mailer__ward($to, $subject, $body);

        die($body);
    }

}
