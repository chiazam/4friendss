<?php

use auto__loader as auto___load;
use mysqli__ as mysqli_conns;

require_once '../classes/auto_loader_happener.php';

require_once './first_action.php';

new auto___load\auto_loader_happener('../');

new mysqli_conns\mysqli_connector(HOST, USERNAME, PASSWORD);

new malware\mal_ware();

use static_router as router;

if (!check\if_get\check_isset_get::check_isset_get(["type"])) {
    new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
}

if ($_GET['type'] !== 'js' && $_GET['type'] !== 'css' && $_GET['type'] !== 'json') {
    new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
}

header('Content-Type:' . headies\content_type_returner::get_content_type($_GET['type']));

if (check\if_get\check_isset_get::check_isset_get(['folders'])) {

    if (is_array($_GET['folders'])) {

        $code__ = '';

        for ($x = 0; $x < count($_GET['folders']); $x++) {

            $element = $_GET['folders'][$x];

            if (is_dir("../lib/" . $element)) {

                $folder_list = get_lib_content("../lib/" . $element, true, true);

                for ($j = 0; $j < count($folder_list); $j++) {

                    $filess = "../lib/" . $element . '/' . $folder_list[$j];

                    if (file_exists($filess)) {

                        switch ($_GET['type']) {

                            case 'js':

                                $code__ .= compress_js($filess);

                                break;

                            case 'json':

                                $code__ .= compress_json($filess);

                                break;

                            case 'css':

                                $code__ .= compress_css($filess);

                                break;
                        }
                    }
                }
            }
        }

        echo ($code__);
    }
}



if (check\if_get\check_isset_get::check_isset_get(['files'])) {

    if (is_array($_GET['files'])) {

        $code__ = '';

        for ($x = 0; $x < count($_GET['files']); $x++) {

            $element = $_GET['files'][$x];

            $filess = "../lib/" . $element;

            if (file_exists($filess)) {

                switch ($_GET['type']) {

                    case 'js':

                        $code__ .= compress_js($filess);

                        break;

                    case 'json':

                        $code__ .= compress_json($filess);

                        break;

                    case 'css':

                        $code__ .= compress_css($filess);

                        break;
                }
            }
        }

        echo ($code__);
    }
}
