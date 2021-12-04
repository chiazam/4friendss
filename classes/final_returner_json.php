<?php

namespace returner;

use malware as malware_;

class final_returner_json {

    public function __construct(array $tobe_returned) {

        global $malware_real;

        new malware_\mal_ware($malware_real);

        global $_request_domain;

        global $_login_info;

        global $_post_;
        
        $fin_array = [
            "api_result" => $tobe_returned,
            'request_domain' => $_request_domain,
            'logged_in' => $_login_info,
            'exec_time' => (microtime(true) - $_SERVER["REQUEST_TIME_FLOAT"]),
            // 'request_uri' => get_server_uri(),          
            // 'form_field' => get_post_get_field(),
            // 'req_info' =>['get'=>$_GET,'post'=>$_post_]
        ];

        if (isset($_post_['api_xmla']) || isset($_GET['api_xmla'])) {

            $api_fin_out = \array_xml_fins\array_xml::convert_to_xml($fin_array, [
                'formatOutput' => false, // default - true
                'version' => '1.0', // default - "1.0"
                'rootName' => 'new-root', // default - "root"
            ]);

            header('Content-Type: application/xml; charset=utf-8');

        }else{

            $api_fin_out = json_encode($fin_array);

        }

        die($api_fin_out);
        
    }

}
