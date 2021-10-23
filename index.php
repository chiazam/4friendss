<?php

if ($_SERVER["REQUEST_SCHEME"] == 'http') {
    header("location:https://{$_SERVER["HTTP_HOST"]}{$_SERVER["REQUEST_URI"]}");
}

use auto__loader as auto___load;
use mysqli__ as mysqli_conns;

require_once './classes/auto_loader_happener.php';

require_once './extra_script/first_action.php';

new auto___load\auto_loader_happener('./');

new mysqli_conns\mysqli_connector(HOST, USERNAME, PASSWORD);

header('Content-type: text/html');

$api_path = router\router_roll::get_document_root_http();

?>
<!DOCTYPE html>

<html class='min-height-100-cent display-flex'>
    <head>

        <link rel="stylesheet" id="theme_css_great" href="<?php echo $api_path; ?>extra_script/theme_selector.php?theme=light">

        <link rel="stylesheet" href="<?php echo $api_path; ?>extra_script/folder_static.php?folders[]=fontawesome&folders[]=friends_css_lib&folders[]=static__front/css&files[]=fontello/animation.min.css&type=css"> 

        <script> const api = "<?php echo $api_path ?>"; </script>

        <script defer src="<?php echo $api_path; ?>extra_script/folder_static.php?folders[]=friends_js_lib&folders[]=static__front/js/whatsnew&folders[]=static__front/js/worker_consumer&folders[]=static__front/js/layout&folders[]=static__front/js/app_starter&folders[]=static__front/js/matters_arising&folders[]=static__front/js/worker_shotter&folders[]=static__front/js/selector_file&folders[]=static__front/js/controls&folders[]=static__front/js/profile_hustler&folders[]=static__front/js/search&folders[]=static__front/js/notify_handler&folders[]=static__front/js/dialogue&folders[]=static__front/js/tie&files[]=static__front/js/kick_off.js&type=js"></script>

        <link rel="icon" id="rel__page_icon" type="image/*" sizes="192x192" href="<?php echo $api_path; ?>extra_script/image_static.php?file=icons/friends_wee.jpg&width=100&height=100&quality=100&percent=1">
        <meta name="mobile-web-app-capable" content="yes">
        <meta name="description" content="A social platform for blogging and music streaming. Meet people, enlarge your contacts and get connected"/>
        <meta name = "robots" content = "ALL" />
        <meta name="keywords" content="socials, network, contact, friends, blog, gallery, image, audio ,music" />
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="application-name" content="friends">
        <meta name="theme-color" content="rgb(0, 0, 0)">
        <meta name="msapplication-navbutton-color" content="rgb(0, 0, 0)">
        <meta name="msapplication-starturl" content="/">
        <meta name="Content-Type" content="text/html">
        <meta name="apple-mobile-web-app-status-bar-style" content="rgb(0, 0, 0)"/>
        <meta name="apple-mobile-web-app-title" content="friends"/>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1,maximum-scale=1,user-scalable=no,minimum-scale=1,shrink-to-fit=no"/>
        <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
        <meta name="Connection" content="Keep-Alive"/>
        <meta name="Cache-Control" content="no-store, no-cache, must-revalidate"/>
        <meta name="Pragma" content="no-cache"/>
        <meta name="Expires" content="Thu, 19 Nov 1981 08:52:00 GMT"/>
        <meta name="MobileOptimized" content="width"/>
        <meta name="HandheldFriendly" content="true"/>
        <meta name="Apple-mobileweb-app-capable" content="yes"/>
        <meta name="Formatdetection" content="telephone=yes"/>
        <title id="my_title"> </title>

        <script defer src="<?php echo $api_path; ?>lib/ext_lib/datepicker.js"></script>

        <link rel="stylesheet" href="<?php echo $api_path; ?>lib/ext_lib/datepicker.css">

    </head>

    

    <body id="main_body_hanger" class='min-height-100-cent width-100-cent lighter'>


        <section class="display-flex height-100-cent align-items-center justify-content-center">

            <svg id="dots" width="20px" height="10px" viewBox="0 0 132 58" version="1.1" xmlns="http://www.w3.org/2000/svg"> <style>#dots #dot1{animation: load 1s infinite;} #dots #dot2{animation: load 1s infinite;animation-delay: 0.2s;} #dots #dot3{animation: load 1s infinite;animation-delay: 0.4s;} @keyframes load{0%{opacity: 0;}50%{opacity: 1;}100%{opacity: 0;}}</style><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="dots" sketch:type="MSArtboardGroup" fill="#0055c4"> <circle id="dot1" sketch:type="MSShapeGroup" cx="25" cy="30" r="13"></circle> <circle id="dot2" sketch:type="MSShapeGroup" cx="65" cy="30" r="13"></circle> <circle id="dot3" sketch:type="MSShapeGroup" cx="105" cy="30" r="13"></circle> </g> </g> </svg>

        </section> 

    </body>
</html>
