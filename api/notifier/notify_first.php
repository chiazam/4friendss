<?php

use auto__loader as auto___load;
use mysqli__ as mysqli_conns;

require_once '../../classes/auto_loader_happener.php';

require_once '../../extra_script/first_action.php';

requirer_bulk('../../', ['classes/php_lib/getid3/getid3.php']);

new auto___load\auto_loader_happener('../../');

new mysqli_conns\mysqli_connector(HOST, USERNAME, PASSWORD);

new malware\mal_ware(true);

if ($_login_info === false) {

    new returner\final_returner_json(['permission' => 'denied due to no account is logged in']);
}

use notify\get as notifyyer;
use check\if_get\check_isset_get as get_checker;

if (!get_checker::check_isset_get(["person_offset", "person_limit"])) {
    new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
}

$person_limit = 10;
$person_offset = 0;

if (is_numeric($_GET["person_offset"])) {
    $person_offset = $_GET["person_offset"];
}
if (is_numeric($_GET["person_limit"])) {
    $person_limit = $_GET["person_limit"];
}

new returner\final_returner_json(['message' => [
        'notify' => notifyyer\notify_getter::_yes_notify(suggesters\suggest_persons::suggest_gennerator($person_offset, $person_limit, $_session_['b'], true), $_session_['g'], $_session_['q']),
        'chaty' => notifyyer\notify_chat_getter::_yes_chat_notify($_session_['b'], $_session_['q'])
        ]]);
