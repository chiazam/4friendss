<?php

use auto__loader as auto___load;
use mysqli__ as mysqli_conns;
use check\data_in_table as check_table_num;
use check\if_post as check_post;

require_once '../../classes/auto_loader_happener.php';

require_once '../../extra_script/first_action.php';

new auto___load\auto_loader_happener('../../');

new mysqli_conns\mysqli_connector(HOST, USERNAME, PASSWORD);

new malware\mal_ware();

if ($_login_info === true) {

    new returner\final_returner_json(['permission' => 'denied due to another account is logged in']);
}

if (!check_post\check_isset_post::check_isset_post(['email'])) {

    new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
}

if (empty(trim($_post_['email']))) {

    new returner\final_returner_json(['mis_conduct' => 'empty', 'field' => 'email']);
}

if (check_table_num\num_of_data_in_table::num_of_data_in_table("users", '*', ["email" => $_post_['email']]) === 0) {

    new returner\final_returner_json(['mis_conduct' => 'unregistered', 'field' => 'email']);
}

$data_em = check_table_num\get_data_in_table::get_data_in_table("users", '*', ["email" => $_post_['email']]);

$verify_cupon = substr(hash_maker\hash_maker::make_verify_cupon($data_em['full'], $data_em['email'], $data_em['hash']), 2, 5);

if (check_table_num\update_data_in_table::update_data_in_table("users", ["reset_pass_key" => $verify_cupon], ["email" => $_post_['email']])) {

    $to = $data_em['email'];

    $subject = 'Reset your the ' . COMPANY . ' account';
    $body = '
    <body>

        <section>

        <h3>Reset your ' . COMPANY . ' account</h3>

        <p><b>' . $data_em['full'] . '</b> you requested for account reset <b>' . COMPANY . '</b> on <b>' . time\time_to_string::time_to_string(time()) . '</b> .</p>

        <div>Your new account reset token is :</div>
        
            <h3>' . $verify_cupon . '</h3>

        </section>

    </body>

    ';

    mail\mail_maker::mailer__ward($to, $subject, $body);

    new returner\final_returner_json(['success' => 'Verification code sent to your email or email spam, please if in spam help us tag it not spam.']);
} else {

    $to = FRIENDS_EMAIL;
    $subject = 'resend verify token error';
    $body = '
    <body>

       an error occoured in resend verify token script

    </body>

    ';

    mail\mail_maker::mailer__ward($to, $subject, $body);

    new returner\final_returner_json(['failed' => 'unsuccessfull']);
}

