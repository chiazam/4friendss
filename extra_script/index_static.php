<?php

use auto__loader as auto___load;
use mysqli__ as mysqli_conns;

require_once '../classes/auto_loader_happener.php';

require_once './first_action.php';

new auto___load\auto_loader_happener('../');

new mysqli_conns\mysqli_connector(HOST, USERNAME, PASSWORD);

new malware\mal_ware();

use static_router as router;

if (!check\if_get\check_isset_get::check_isset_get(["file"])) {
    new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
}

$file = explode("?", $_GET["file"])[0];

if (file_exists("../lib/" . $file)) {
    router\routing_static::kick_routing_off("../lib/" . $file);
} else {
    
    http_response_code(404);

    die();

}
