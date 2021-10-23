<?php

namespace mail;

class mail_maker {

    public static function mailer__ward($to, $subject, $body) {

        $headers = 'From: Team@4friends.com' . "\r\n";
        $headers .= 'Reply-To: Team@4friendss.com' . "\r\n";
        $headers .= 'Return-Path: Team@4friendss.com' . "\r\n";
        $headers .= 'X-Mailer: PHP' . phpversion() . "\n";
        $headers .= 'MIME-Version: 1.0' . "\n";
        $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
        if (mail($to, $subject, "<b>please if this mail in spam, help us tag it not spam</b>" . $body, $headers, "-fTeam@4friendss.com")) {

            return true;
        } else {

            return false;
        }
    }

    public static function mix_mailer__ward($from, $to, $subject, $body) {

        $headers = 'From: ' . $from . "\r\n";
        $headers .= 'Reply-To: ' . $from . "\r\n";
        $headers .= 'Return-Path: ' . $from . "\r\n";
        $headers .= 'X-Mailer: PHP' . phpversion() . "\n";
        $headers .= 'MIME-Version: 1.0' . "\n";
        $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

        if (mail($to, $subject, "<b>please if this mail in spam, help us tag it not spam</b>" . $body, $headers, "-f${$from}")) {

            return true;
        } else {

            return false;
        }
    }

}
