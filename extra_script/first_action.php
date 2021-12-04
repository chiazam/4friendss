<?php
// ini_set('display_errors', 1);
// ini_set('display_startup_errors', 1);
// error_reporting(E_ALL);
declare(strict_types=1);
ob_start();
if ($_SERVER["REQUEST_SCHEME"] == 'http') {
    header("location:https://{$_SERVER["HTTP_HOST"]}{$_SERVER["REQUEST_URI"]}");
}
header('Cache-Control:no-store, no-cache, must-revalidate');
header('Pragma: no-cache');
header('Connection: Keep-Alive');
header('Content-Language:en');
header('X-Powered-By:' . $_SERVER['HTTP_HOST']);
header('Keep-Alive: timeout=5, max=99');
header('Expires: Thu, 19 Nov 1981 08:52:00 GMT');
header('Content-type: application/json');
define("HOST", "localhost");
define("USERNAME", "root");
define("PASSWORD", "");
define("DB", "friends");
define("COMPANY", "4friendss");
define("FRIENDS_EMAIL", "jochalazacub@gmail.com");
ignore_user_abort();
set_time_limit(60);
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
date_default_timezone_set("Africa/Lagos");
session_name(COMPANY);
$_my_platform = [$_SERVER["HTTP_HOST"], 'whir.test'];
$_request_domain = $_SERVER["HTTP_HOST"];
$_post_ = [];
$_session_ = [];
$conn;

$_login_info = false;

$malware_real = false;

$alphabet_array = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

function convert_base ($num ,$to=32, $from=10){

    return base_convert($num,$from,$to);

}

function random(){

    return mt_rand() / (mt_getrandmax() + 1);

}

function rand_hash($num=""){

 return @convert_base(($num.(time()*random())));

}

function get_num_array_range_list($num_start=0,$num_end=100) {

    $list = [];

    for ($i = $num_start; $i <= $num_end; $i++) {

        array_push($list,$i);

    }

    return $list; 
    
};

function requirer_bulk(string $path_root, array $required_files = []) {

    for ($q = 0; $q < count($required_files); $q++) {

        require_once $path_root . $required_files[$q];
    }
}

function addslashes_to_array(&$value, $key) {

//    ["&apos;", '&quot;', "&apos;", '&quot;'];
//    $value = preg_replace(["/(\\')+/", '/(\\")+/', "/(')+/", '/(")+/'], ["", '', "", ''], ($value . ""));
}

function preg_happener___yet_happening(array $pattern, array $replace, string $dom_string) {
    return (preg_replace($pattern, $replace, $dom_string));
}

function multi_line_comment_remover(string $text) {
    return preg_happener___yet_happening(["/^\/\*(.*|[a-zA-Z0-9 ]*)\*\/$/imu"], [""], preg_happener___yet_happening(["/\/\*(.*|[a-zA-Z0-9 ]*)\*\//imu"], [""], $text));
}

function multi_line_comment_html_remover(string $text) {
    return preg_happener___yet_happening(["/^<!--(.*|[a-zA-Z0-9 ]*)-->$/imu"], [""], preg_happener___yet_happening(["/<!--(.*|[a-zA-Z0-9 ]*)-->/imu"], [""], $text));
}

function strStartsWith($haystack, $needle, $caseSensitive=false) {

    $length = strlen(trim($needle));

    $startOfHaystack = substr($haystack, 0, $length);

    if ($caseSensitive) {

        if ($startOfHaystack === $needle) {
            return true;
        }
    } else {

        if (strcasecmp($startOfHaystack, $needle) == 0) {
            return true;
        }
    }

    return false;
}

function compress_js($path, $path__ = true) {

    if ($path__ === true) {
        $file = file_get_contents($path);
    } else {
        $file = $path;
    }

    $file = multi_line_comment_remover($file);

    $file = multi_line_comment_html_remover($file);

    $first_com = str_replace(";
", ";", $file);

    $first_com = str_replace(";\n", ";", $first_com);

    $second_com = str_replace("}
", "};", $first_com);

    $second_com = str_replace("}\n", "};", $second_com);

    $third_com = str_replace("{
", "{", $second_com);

    $third_com = str_replace("{\n", "{", $third_com);

    $fourth_com = str_replace(")
", ");", $third_com);

    $fourth_com = str_replace(")\n", ");", $fourth_com);

    $fifth_com = str_replace("
", " ", $fourth_com);

    $fifth_com = str_replace("\n", " ", $fifth_com);

    $sixth_com = str_replace("  ", "", $fifth_com);

    $second_com = str_replace("../", router\router_roll::get_document_root_http() . "extra_script/index_static.php?file=", $sixth_com);

    $second_com = str_replace("./", router\router_roll::get_document_root_http() . "extra_script/index_static.php?file=", $sixth_com);

    return $second_com;
}

function compress_css($path, $path__ = true) {

    if ($path__ === true) {
        $file = file_get_contents($path);
    } else {
        $file = $path;
    }

    $file = multi_line_comment_remover($file);

    $first_com = str_replace(",
", ",", $file);

    $first_com = str_replace("}
", "}", $first_com);

    $first_com = str_replace("
", "", $first_com);

    $first_com = str_replace(";
", ";", $first_com);

    $first_com = str_replace(",\n", ",", $first_com);

    $first_com = str_replace("}\n", "}", $first_com);

    $first_com = str_replace("\n", "", $first_com);

    $first_com = str_replace(";\n", ";", $first_com);

    $second_com = str_replace("  ", "", $first_com);

    $second_com = str_replace("../", router\router_roll::get_document_root_http() . "extra_script/index_static.php?file=", $second_com);

    $second_com = str_replace("./", router\router_roll::get_document_root_http() . "extra_script/index_static.php?file=", $second_com);

    return $second_com;
}

function compress_json($path, $path__ = true) {

    if ($path__ === true) {
        $file = file_get_contents($path);
    } else {
        $file = $path;
    }

    $first_com = str_replace(",
", ",", $file);

    $first_com = str_replace("}
", "}", $first_com);

    $first_com = str_replace("{
", "{", $first_com);

    $first_com = str_replace("
", "", $first_com);

    $first_com = str_replace(",
", ",", $file);

    $first_com = str_replace("}\n", "}", $first_com);

    $first_com = str_replace("{\n", "{", $first_com);

    $first_com = str_replace("\n", "", $first_com);

    $first_com = str_replace(",\n", ",", $first_com);

    $second_com = str_replace("  ", "", $first_com);

    $third_com = str_replace("  ", "", $second_com);

    $second_com = str_replace("../", router\router_roll::get_document_root_http() . "extra_script/index_static.php?file=", $third_com);

    $second_com = str_replace("./", router\router_roll::get_document_root_http() . "extra_script/index_static.php?file=", $third_com);

    return $second_com;
}

function compress_html($path, $path__ = true) {

    if ($path__ === true) {
        $file = file_get_contents($path);
    } else {
        $file = $path;
    }

    $file = multi_line_comment_html_remover($file);

    $compressed = str_replace("
", "", $file);

    $compressed = str_replace("\n", "", $compressed);

    $compressed_2 = str_replace(" > ", ">", $compressed);

    $compressed_3 = str_replace(" < ", "<", $compressed_2);

    $compressed_4 = str_replace("< ", "<", $compressed_3);

    $compressed_5 = str_replace(" <", "<", $compressed_4);

    $compressed_6 = str_replace("> ", ">", $compressed_5);

    $compressed_7 = str_replace(" >", ">", $compressed_6);

    $compressed_8 = str_replace("  ", " ", $compressed_7);

    $compressed_9 = str_replace(">", "> ", $compressed_8);

    $compressed_10 = str_replace("<", " <", $compressed_9);

    $compressed_11 = str_replace(">  <", "> <", $compressed_10);

    $compressed_12 = str_replace(">  <", "> <", $compressed_11);

    $compressed_13 = str_replace("   ", " ", $compressed_12);

    $compressed_14 = str_replace("  ", " ", $compressed_13);

    $compressed_15 = str_replace("  ", " ", $compressed_14);

    $compressed_16 = str_replace("  ", " ", $compressed_15);


    $second_com = str_replace("../", router\router_roll::get_document_root_http() . "extra_script/index_static.php?file=", $compressed_16);

    $second_com = str_replace("./", router\router_roll::get_document_root_http() . "extra_script/index_static.php?file=", $compressed_16);

    return $second_com;
}

function css_64($path) {

    return "data:text/css;base64," . base64_encode(compress_css($path));
}

function js_64($path) {

    return "data:" . mime_content_type($path) . ";base64," . base64_encode(compress_js($path));
}

function vid_64($path) {

    return "data:" . mime_content_type($path) . ";base64," . base64_encode(file_get_contents($path));
}

function pic_64($path) {

    return "data:" . mime_content_type($path) . ";base64," . base64_encode(file_get_contents($path));
}

function aud_64($path) {

    return "data:" . mime_content_type($path) . ";base64," . base64_encode(file_get_contents($path));
}

function isMobileDevice() {
    if (preg_match("/(android|avantgo|blackberry|bolt|boost|cricket|docomo|fone|hiptop|mini|mobi|palm|phone|pie|tablet|up\.browser|up\.link|webos|wos)/i", $_SERVER["HTTP_USER_AGENT"])) {
        return 2;
    } else {

        function deviceVAL($desktopVAL = 1, $mobileVAL = 2, $tabletVAL = 3, $ipadVAL = 4) {

            function is_desktop() {
                $useragent = $_SERVER['HTTP_USER_AGENT'];
                return stripos($useragent, 'mobile') === false && stripos($useragent, 'tablet') === false && stripos($useragent, 'ipad') === false;
            }

            function is_tablet() {
                $useragent = $_SERVER['HTTP_USER_AGENT'];
                return stripos($useragent, 'tablet') !== false || stripos($useragent, 'tab') !== false;
            }

            function is_ipad() {
                $useragent = $_SERVER['HTTP_USER_AGENT'];
                return stripos($useragent, 'ipad') !== false;
            }

            function is_mobile() {
                $useragent = $_SERVER['HTTP_USER_AGENT'];
                return stripos($useragent, 'mobile') !== false || stripos($useragent, 'nokia') !== false || stripos($useragent, 'phone') !== false;
            }

            if (is_desktop()) {
                return $desktopVAL;
            } else if (is_tablet()) {
                return $tabletVAL;
            } else if (is_ipad()) {
                return $ipadVAL != null ? $ipadVAL : $tabletVAL;
            } else if (is_mobile()) {
                return $mobileVAL;
            }
        }

        return deviceVAL();
    }
}

function array_key_length(array $array__) {

    return count(array_keys($array__));
}

function return_dir_files($folder) {

    $file_namess = [];

    $handle = opendir($folder);

    while ($var = readdir($handle)) {

        if ($var !== "." && $var !== ".htaccess" && $var !== "..") {

            array_push($file_namess, $var);
        }
    }

    sort($file_namess);

    return $file_namess;
}

function get_lib_content($folder, $lister = false, $ext = false) {

    if ($lister === false) {

        $filecontent = "";
    } else if ($lister === true) {

        $filecontent = [];
    }


    for ($i = 0; $i < count(return_dir_files($folder)); $i++) {

        if ($lister === false) {
            $filecontent .= file_get_contents($folder . "/" . return_dir_files($folder)[$i]);
        } else if ($lister === true) {

            if ($ext === false) {
                $list_explodes = explode('.', return_dir_files($folder)[$i]);

                array_pop($list_explodes);

                array_push($filecontent, implode('.', $list_explodes));
            } elseif ($ext === true) {
                array_push($filecontent, return_dir_files($folder)[$i]);
            }
        }
    }

    return $filecontent;
}

function get_server_uri() {

    return ((isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]");
}

function get_post_get_field() {

    global $_post_;

    $get__ = array_keys($_GET);

    $post__ = array_keys($_post_);

    return ['get' => $get__, 'post' => $post__];
}

function toRGB_color($Hex) {

    if (substr($Hex, 0, 1) === "#") {

        $Hex = substr($Hex, 1);

        $R = hexdec(substr($Hex, 0, 2));
        $G = hexdec(substr($Hex, 2, 2));
        $B = hexdec(substr($Hex, 4, 2));

        return [
            'r' => $R,
            'g' => $G,
            'b' => $B,
            'color' => "rgb({$R}, {$G}, {$B})"
        ];
    } else {

        return null;
    }
}

function toHEX_color($R, $G, $B) {

    If (strlen(dechex($R)) < 2) {
        $R = '0' . dechex($R);
    }

    If (strlen(dechex($G)) < 2) {
        $G = '0' . dechex($G);
    }

    If (strlen(dechex($B)) < 2) {
        $B = '0' . dechex($B);
    }


    return [
        'r' => $R,
        'g' => $G,
        'b' => $B,
        'color' => '#' . $R . $G . $B
    ];
}
