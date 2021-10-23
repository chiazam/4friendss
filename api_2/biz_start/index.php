<?php

use auto__loader as auto___load;
use mysqli__ as mysqli_conns;
use check\if_post as check_post;
use check\data_in_table as checkist;

require_once '../../classes/auto_loader_happener.php';

require_once '../../extra_script/first_action.php';

requirer_bulk('../../', ['classes/php_lib/getid3/getid3.php']);

new auto___load\auto_loader_happener('../../');

new mysqli_conns\mysqli_connector(HOST, USERNAME, PASSWORD);

new malware\mal_ware(true);

if ($_login_info === false) {

    new returner\final_returner_json(['permission' => 'denied due to no account is logged in']);
}

if (!check_post\check_isset_post::check_isset_post(["name", "type"])) {

    new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
}

if (empty(trim($_post_['name']))) {

    new returner\final_returner_json(['mis_conduct' => 'empty', 'field' => 'name']);
}

if (biz\finz\biz_finz::biz_valid_type($_post_['type']) !== true) {

    new returner\final_returner_json(['mis_conduct' => 'invalid', 'field' => 'type']);
} else if (biz\finz\biz_finz::biz_valid_name(trim($_post_['name'])) !== true) {

    new returner\final_returner_json(['mis_conduct' => 'already taken', 'field' => 'name']);
}

$group_b = hash_maker\hash_maker::post_times_hash_maker($_post_['name'], $_post_['type']);

$group_q = hash_maker\hash_maker::post_times_hash_maker($_post_['type'], $_post_['name']);

$cover = 'icons/biz_ikon.png';

if (checkist\add_data_in_table::add_data_in_table('groups', ['group_q' => $group_q, 'group_b' => $group_b, 'group_cover' => $cover, 'date_create' => time\time_to_string::time_to_string(time()), 'creater_q' => $_session_['q'], 'creater_b' => $_session_['b'], 'group_name' => trim($_post_['name']), 'type' => trim($_post_['type']), 'private' => 0])) {

    $data = checkist\get_data_in_table::get_data_in_table("users", "email", ['q' => $_session_['q'], 'b' => $_session_['b']]);

    $to = $data['email'];
    $subject = 'Business (<strong>' . $_post_['name'] . '</strong>) has been created';
    $body = '
    <body>

        <section>

            You created a business named <strong>' . $_post_['name'] . '</strong> with <b>' . COMPANY . '</b> platform, <b>' . time\time_to_string::time_to_string(time()) . '</b>. thats a great move.

        </section>

    </body>

    ';

    mail\mail_maker::mailer__ward($to, $subject, $body);

    new returner\final_returner_json(['success' => 'Business created successfully']);
} else {

    mail\mail_maker::mailer__ward(FRIENDS_EMAIL, 'Registration error', '<body> an error occoured in create biz script </body>');

    new returner\final_returner_json(['failed' => 'Creating business was not successfull, try again after 30 seconds']);
}

