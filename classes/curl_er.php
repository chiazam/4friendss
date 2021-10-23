<?php

namespace curl_er;

class curl_er
{

    static public function request_er(string $url, array $postfield = [], string $method = "POST",bool $ssl=false, array $httpheader = [], int $timeout = 30, int $max_redir = 10)
    {
        $curl = curl_init();

        curl_setopt_array($curl, array(
            CURLOPT_URL => $url,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => $max_redir,
            CURLOPT_TIMEOUT => $timeout,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => $method,
            CURLOPT_POSTFIELDS => $postfield,
            CURLOPT_HTTPHEADER => $httpheader,
            CURLOPT_SSL_VERIFYHOST=> $ssl,
            CURLOPT_SSL_VERIFYPEER=> $ssl
        ));

        $response = curl_exec($curl);
        $httpcode = curl_getinfo($curl, CURLINFO_HTTP_CODE);
        $err = curl_error($curl);

        curl_close($curl);

        if ($err) {

            return ['req'=>false, 'error'=>$err];
            
        } else {

            return ['req'=>true, 'resp'=>$response, 'code'=>$httpcode,'method'=>$method];
            
        }
    }
}
