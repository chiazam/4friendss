<?php

use auto__loader as auto___load;
use mysqli__ as mysqli_conns;
use check\if_post\check_isset_post as post_checker;
use check\data_in_table as check_table_num;
use password\hash as hasher;

require_once '../../classes/auto_loader_happener.php';

require_once '../../extra_script/first_action.php';

new auto___load\auto_loader_happener('../../');

new mysqli_conns\mysqli_connector(HOST, USERNAME, PASSWORD);

new malware\mal_ware();

if ($_login_info === true) {

    new returner\final_returner_json(['permission' => 'denied due to another account is logged in']);
}

if (!post_checker::check_isset_post(['email', 'token', 'password'])) {

    new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
}

if (empty(trim($_post_["token"]))) {

    new returner\final_returner_json(['mis_conduct' => 'empty', 'field' => 'token']);
} elseif (empty(trim($_post_["email"]))) {

    new returner\final_returner_json(['mis_conduct' => 'empty', 'field' => 'email']);
} else if (!filter_var(trim($_post_["email"]), FILTER_VALIDATE_EMAIL)) {

    new returner\final_returner_json(['mis_conduct' => 'invalid', 'field' => 'email']);
} elseif (empty(trim($_post_["password"]))) {

    new returner\final_returner_json(['mis_conduct' => 'empty', 'field' => 'password']);
} else if (strlen(trim($_post_["password"])) < 10) {

    new returner\final_returner_json(['mis_conduct' => 'invalid', 'field' => 'password']);
}

$uid = trim($_post_["email"]);

$reset_token = htmlspecialchars(ucwords(trim($_post_["token"])));

$pass = hasher\password_hash::password_hash($_post_['password']);

if (check_table_num\num_of_data_in_table::num_of_data_in_table("users", '*', ["email" => $uid, "reset_pass_key" => $reset_token]) === 0) {

    new returner\final_returner_json(['mis_conduct' => 'this credentials are wrong', 'field' => '']);
}

$data_em = check_table_num\get_data_in_table::get_data_in_table("users", '*', ["email" => $uid, "reset_pass_key" => $reset_token]);

if (check_table_num\update_data_in_table::update_data_in_table("users", ["reset_pass_key" => '', 'hash' => $pass], ["email" => $uid, "reset_pass_key" => $reset_token])) {

    $to = $_post_['email'];
    $subject = 'password reset successfull';
    $body = '
    <body>

        <section>

        <h3>' . COMPANY . ' password reset successfull</h3>

        <p><b>' . $data_em['full'] . '</b> your ' . COMPANY . ' account password reset was successfull</p>

    </body>

    ';

    mail\mail_maker::mailer__ward($to, $subject, $body);

    new returner\final_returner_json(['success' => 'password reset successfully']);
} else {

    mail\mail_maker::mailer__ward(FRIENDS_EMAIL, 'password reset error', '<body> an error occoured in sign up script </body>');

    new returner\final_returner_json(['failed' => 'reset password was not successfull']);
}
