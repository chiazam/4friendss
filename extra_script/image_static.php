<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

use auto__loader as auto___load;
use mysqli__ as mysqli_conns;

require_once '../classes/auto_loader_happener.php';

require_once './first_action.php';

requirer_bulk('../', ['classes/php_lib/getid3/getid3.php']);

new auto___load\auto_loader_happener('../');

new mysqli_conns\mysqli_connector(HOST, USERNAME, PASSWORD);

new malware\mal_ware();

use image_optimizer as optimi;

// if (!check\if_get\check_isset_get::check_isset_get(["file", "quality", "width", "height", "percent"])) {
//     new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
// }

$file = explode("?", $_GET["file"])[0];
$quality = 100;
$width = 100;
$height = 100;
$percent = 1;

if (check\if_get\check_isset_get::check_isset_get(["quality"])&&is_numeric($_GET["quality"])) {
    $quality = $_GET["quality"];
}

if (check\if_get\check_isset_get::check_isset_get(["width"])&&is_numeric($_GET["width"])) {
    $width = $_GET["width"];
}

if (check\if_get\check_isset_get::check_isset_get(["height"])&&is_numeric($_GET["height"])) {
    $height = $_GET["height"];
}

if (check\if_get\check_isset_get::check_isset_get(["percent"])&&is_numeric($_GET["percent"])) {
    $percent = $_GET["percent"];
}

if (file_exists("../" . $file)) {

    optimi\image_optimizer::start_optimi("../" . $file, $quality, $width, $height, $percent, "../");
} else {
    http_response_code(404);
}
