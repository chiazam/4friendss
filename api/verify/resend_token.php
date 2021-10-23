<?php

use auto__loader as auto___load;
use mysqli__ as mysqli_conns;

require_once '../../classes/auto_loader_happener.php';

require_once '../../extra_script/first_action.php';

new auto___load\auto_loader_happener('../../');

new mysqli_conns\mysqli_connector(HOST, USERNAME, PASSWORD);

new malware\mal_ware();

use check\data_in_table as check_table_num;
use check\if_get as check_get;

if (!check_get\check_isset_get::check_isset_get(['beeip', 'geeip'])) {

    new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
}

if (empty(trim($_GET['beeip'])) || empty(trim($_GET['geeip']))) {

    new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
}

if (check_table_num\num_of_data_in_table::num_of_data_in_table("users", '*', ["b" => $_GET['beeip'], "g" => $_GET['geeip']]) === 0) {

    new returner\final_returner_json(['permission' => 'denied wrong credentials']);
}

$data_em = check_table_num\get_data_in_table::get_data_in_table("users", '*', ["b" => $_GET['beeip'], "g" => $_GET['geeip']]);

$verify_cupon = substr(hash_maker\hash_maker::make_verify_cupon($data_em['full'], $data_em['email'], $data_em['hash']), 2, 5);

if (check_table_num\num_of_data_in_table::num_of_data_in_table("verify", '*', ["b" => $_GET['beeip'], "g" => $_GET['geeip']]) > 0) {

    if (check_table_num\update_data_in_table::update_data_in_table("verify", ["verify_key" => $verify_cupon], ["b" => $_GET['beeip'], "g" => $_GET['geeip']])) {

        $to = $data_em['email'];
        $subject = 'Verify your the ' . COMPANY . ' account';
        $body = '
    <body>

        <section>

        <h3>Verify your ' . COMPANY . ' account</h3>

        <p><b>' . $data_em['full'] . '</b> you requested for another verify token from <b>' . COMPANY . '</b> on <b>' . time\time_to_string::time_to_string(time()) . '</b> .<br><br> Please we would like you to verify your account</p>

        <div>Your new verification token is :</div>
        
            <h3>' . $verify_cupon . '</h3>

        </section>

    </body>

    ';

        mail\mail_maker::mailer__ward($to, $subject, $body);

        new returner\final_returner_json(['success' => 'token resent to email or email sppam, please if in spam help us tag it not spam.']);
    } else {

        $to = FRIENDS_EMAIL;
        $subject = 'resend verify token error';
        $body = '
    <body>

       an error occoured in resend verify token script

    </body>

    ';

        mail\mail_maker::mailer__ward($to, $subject, $body);

        new returner\final_returner_json(['failed' => 'sorry an error occoured, try again after 10 minutes']);
    }
} else {
    new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
}
