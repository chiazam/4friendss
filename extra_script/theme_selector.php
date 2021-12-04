<?php

use auto__loader as auto___load;
use mysqli__ as mysqli_conns;

require_once '../classes/auto_loader_happener.php';

require_once './first_action.php';

new auto___load\auto_loader_happener('../');

new mysqli_conns\mysqli_connector(HOST, USERNAME, PASSWORD);

new malware\mal_ware();

header('Content-Type: text/css');

$meriden_position = time\date_create_array::date_create_array(time\time_to_string::time_to_string(time()))["meridiam"];

if (check\if_get\check_isset_get::check_isset_get(['theme'])) {

    if (in_array($_GET['theme'], get_lib_content("../lib/theme", true))) {

        $meriden_position = $_GET['theme'];
    }
}


switch ($meriden_position) {
    case "pm":

        die(compress_css('../lib/theme/hole.css'));

        break;

    case "am":

        die(compress_css('../lib/theme/pure.css'));

        break;

    default :

        die(compress_css("../lib/theme/{$meriden_position}.css"));

        break;
}

