<?php

use auto__loader as auto___load;
use mysqli__ as mysqli_conns;
use check\if_post\check_isset_post as post_checker;
use check\data_in_table as checkist;
use password\hash as hasher;

require_once '../../classes/auto_loader_happener.php';

require_once '../../extra_script/first_action.php';

new auto___load\auto_loader_happener('../../');

new mysqli_conns\mysqli_connector(HOST, USERNAME, PASSWORD);

new malware\mal_ware();


if ($_login_info === false) {

    if (!post_checker::check_isset_post(['email', 'fullname', 'password'])) {

        new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
    }

    if (empty(trim($_post_["fullname"]))) {

        new returner\final_returner_json(['mis_conduct' => 'empty', 'field' => 'fullname']);
    } else if (!preg_match("/^[a-zA-Z0-9]{2,14}[ ]{1}[a-zA-Z0-9]{2,14}[ ]{0,1}$/i", trim($_post_['fullname']))) {

        new returner\final_returner_json(['mis_conduct' => 'invalid', 'field' => 'fullname']);
    } elseif (empty(trim($_post_["email"]))) {

        new returner\final_returner_json(['mis_conduct' => 'empty', 'field' => 'email']);
    } else if (!filter_var(trim($_post_["email"]), FILTER_VALIDATE_EMAIL)) {

        new returner\final_returner_json(['mis_conduct' => 'invalid', 'field' => 'email']);
    } elseif (checkist\num_of_data_in_table::num_of_data_in_table("users", "email", ["email" => $_post_["email"]]) !== 0) {

        new returner\final_returner_json(['mis_conduct' => 'already registered', 'field' => 'email']);
    } elseif (empty(trim($_post_["password"]))) {

        new returner\final_returner_json(['mis_conduct' => 'empty', 'field' => 'password']);
    } else if (strlen(trim($_post_["password"])) < 10) {

        new returner\final_returner_json(['mis_conduct' => 'invalid', 'field' => 'password']);
    }

    $uid = trim($_post_["email"]);

    $full = htmlspecialchars(ucwords(trim($_post_["fullname"])));

    $hasher = hash_maker\hash_maker::sign_hash($full, $uid, $_post_['password']);

    $r = $hasher["hash_r"];

    $b = $hasher["hash_b"];

    $q = $hasher["hash_q"];

    $g = $hasher["hash_g"];

    $verify_cupon = substr($hasher["hash_verify"], 2, 5);

    $profile_pix = "icons/landscape-photography-of-green-grass-field-1461027.jpg";

    $cover_pix = "icons/working-in-a-group-6224.jpg";

    $pass = hasher\password_hash::password_hash($_post_['password']);


    if (checkist\add_data_in_table::add_data_in_table("users", ["full" => $full, "username" => \name\mail_id\get_mail_id::user_name($uid), "email" => $uid, "hash" => $pass, "act" => 0, "r" => $r, "q" => $q, "g" => $g, "b" => $b, "date" => time\time_to_string::time_to_string(time()), "prof_pix" => $profile_pix, "date_birth" => "1700-01-01", "cover" => $cover_pix, "theme" => "pure"]) && checkist\add_data_in_table::add_data_in_table("verify", ["verify_key" => $verify_cupon, "g" => $g, "b" => $b])) {

        $to = $_post_['email'];
        $subject = 'Verify your the ' . COMPANY . ' account';
        $body = '
    <body>

        <section>

        <h3>Verify your ' . COMPANY . ' account</h3>

        <p><b>' . $full . '</b> you signed up for an account with <b>' . COMPANY . '</b> on <b>' . time\time_to_string::time_to_string(time()) . '</b> .<br> Please we would like you to verify your account</p>

        <div>Your verification token is :</div>
        
            <h3>' . $verify_cupon . '</h3>

        </section>

    </body>

    ';

        mail\mail_maker::mailer__ward($to, $subject, $body);

        new returner\final_returner_json(['success' => 'account created successfully']);
    } else {

        mail\mail_maker::mailer__ward(FRIENDS_EMAIL, 'Registration error', '<body> an error occoured in sign up script </body>');

        new returner\final_returner_json(['failed' => 'signing up was not successfull, try again after 30 seconds']);
    }
} else {
    new returner\final_returner_json(['permission' => 'denied due to another account is logged in']);
}
