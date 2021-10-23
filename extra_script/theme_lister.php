<?php

use auto__loader as auto___load;
use mysqli__ as mysqli_conns;

require_once '../classes/auto_loader_happener.php';

require_once './first_action.php';

new auto___load\auto_loader_happener('../');

new mysqli_conns\mysqli_connector(HOST, USERNAME, PASSWORD);

new malware\mal_ware();

header('Content-Type: application/javascript');

echo compress_js(' 
    
var theme={};

theme.theme_list=' . json_encode(get_lib_content("../lib/theme", true)) . ';


   theme.send_theme = function(e) {
                theme.theme_list_formatted = `<section data-value="auto" class="butt_selector">auto (am = light, pm = dark)</section>`;

                    for (let q = 0; q < theme.theme_list.length; q++) {

                       theme.theme_list_formatted += `<section data-value="${theme.theme_list[q]}" class="butt_selector">${theme.theme_list[q]}</section>`;

    }
    
     self.postMessage(theme.theme_list_formatted);
     
         }
         
        self.addEventListener("message", theme.send_theme, 1);

', false);
