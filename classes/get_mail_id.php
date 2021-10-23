<?php

namespace name\mail_id;

class get_mail_id{
    static public function user_name(string $email){

        $identity_mail = explode(".",trim($email));

        $forgotten=array_pop($identity_mail);

        $identity_mail = explode("@",implode('.',$identity_mail));

        $identity_mail = implode("({$forgotten})",$identity_mail);

        return "@".$identity_mail;

    }

    static public function decode_user_name_to_email(string $user_name){

        $email = explode("@",trim($user_name));

        $email = explode("(",$email[1]);

        $email_ = explode(")",$email[1]);

        $bage = implode("@",[$email[0],$email_[1]]);

        $bage = implode(".",[$bage,$email_[0]]);

        return $bage;

    }
    
}