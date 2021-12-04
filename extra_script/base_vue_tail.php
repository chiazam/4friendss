<?php

$root_ = router\router_roll::get_document_root();

global $_my_platform;

global $api_path;

global $full_loader;

$full_loader = '<section class="p-1 text-8xl text-center text-blue-500">

<i class="bi bi-arrow-repeat animate-spin mt-10"></i>

</section>

<section class="p-1 text-lg font-bold text-center text-blue-500">Loading...</section>';

?>

<meta name="robots" content="ALL" />
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="application-name" content="friends">
<meta name="theme-color" content="rgb(0, 0, 0)">
<meta name="msapplication-navbutton-color" content="rgb(0, 0, 0)">
<meta name="msapplication-starturl" content="/">
<meta name="Content-Type" content="text/html">
<meta name="apple-mobile-web-app-status-bar-style" content="rgb(0, 0, 0)" />
<meta name="apple-mobile-web-app-title" content="friends" />
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1,maximum-scale=1,user-scalable=no,minimum-scale=1,shrink-to-fit=no" />
<meta http-equiv="X-UA-Compatible" content="ie=edge" />
<meta name="Connection" content="Keep-Alive" />
<meta name="Cache-Control" content="no-store, no-cache, must-revalidate" />
<meta name="Pragma" content="no-cache" />
<meta name="Expires" content="Thu, 19 Nov 1981 08:52:00 GMT" />
<meta name="MobileOptimized" content="width" />
<meta name="HandheldFriendly" content="true" />
<meta name="Apple-mobileweb-app-capable" content="yes" />
<meta name="Formatdetection" content="telephone=yes" />
<meta name="mobile-web-app-capable" content="yes">
<title id="my_title"> </title>

<link rel="icon" id="rel__page_icon" type="image/*" sizes="192x192" href="<?php echo $api_path; ?>extra_script/image_static.php?file=icons/friends_wee.jpg&width=100&height=100&quality=100&percent=1">

<script>
    let my_our_platforms = <?php echo json_encode($_my_platform); ?>;
    let year = <?php echo date("Y"); ?>;
    let full_loader = `<?php echo $full_loader; ?>`;
</script>

<script>
    const api = "<?php echo $api_path ?>";
</script>

<script>
    let theme = <?php echo json_encode(get_lib_content($root_ . "/lib/theme", true)); ?>;
</script>

<link rel="stylesheet" href="<?php echo $api_path; ?>lib/tail_vue/tailwind.css">

<link rel="stylesheet" href="<?php echo $api_path; ?>lib/tail_vue/animation.min.css">

<link rel="stylesheet" href="<?php echo $api_path; ?>extra_script/folder_static.php?folders[]=css&type=css">

<link rel="stylesheet" href="<?php echo $api_path; ?>lib/a/font/bootstrap-icons.css">

<link rel="stylesheet" id="theme_css_great" href="<?php echo $api_path; ?>extra_script/theme_selector.php?theme=light">

<script>
    let theme_css_holder = "theme_css_great";
</script>

<script src="<?php echo $api_path; ?>lib/tail_vue/react@16.14.0.production.min.js"></script>

<script src="<?php echo $api_path; ?>lib/tail_vue/react-dom@16.14.0.production.min.js"></script>

<script src="<?php echo $api_path; ?>lib/tail_vue/babel@6.26.0.min.js"></script>

<script defer src="<?php echo $api_path; ?>extra_script/folder_static.php?folders[]=js/a&folders[]=js/matters_arising&folders[]=array_looper&type=js"></script>

<script type="text/babel" defer>let comp = {};</script>

<script type="text/babel" defer src="<?php echo $api_path; ?>extra_script/folder_static.php?folders[]=js/components&type=js"></script>

<input class="hidden" type="file" id="empty_inp_file">