<?php

namespace files;

class file_features {

    public static function file_features_no_up($path) {

        if (file_exists($path)) {

            preg_match("|\.([a-zA-Z0-9]{2,5})$|i", $path, $fileSuffix);

            $name = explode("/", str_replace($fileSuffix[0], "", $path));

            $name = end($name);

            return array(
                'name' => $name,
                'extention' => $fileSuffix[1],
                'mime' => mime_content_type($path),
                'size' => filesize($path),
                'size_mb' => (filesize($path) / 1000000),
                "lastmod" => filemtime($path),
            );
        } else {
            return false;
        }
    }

    public static function file_features_upload($path) {

        preg_match("|\.([a-z0-9]{2,5})$|i", $path['name'], $fileSuffix);

        $name = explode("/", str_replace($fileSuffix[0], "", $path['name']));

        $name = end($name);

        return array(
            'name' => $name,
            'extension' => $fileSuffix[1],
            'mime' => mime_content_type($path['tmp_name']),
            'size' => $path['size'],
            'error' => $path['error'],
            'size_mb' => ($path['size'] / 1000000),
            "lastmod" => filemtime($path['tmp_name']),
            'temp' => $path['tmp_name']
        );
    }

    public static function file_features_upload_multiple($path) {

        $all_result = [];

        for ($i = 0; $i < count($path['name']); $i++) {

            preg_match("|\.([a-z0-9]{2,4})$|i", $path['name'][$i], $fileSuffix);

            $name = explode("/", str_replace($fileSuffix[0], "", $path['name'][$i]));

            $name = end($name);

            $latest = array(
                'name' => $name,
                'extension' => $fileSuffix[1],
                'mime' => mime_content_type($path['tmp_name'][$i]),
                'size' => $path['size'][$i],
                'error' => $path['error'][$i],
                'size_mb' => ($path['size'][$i] / 1000000),
                "lastmod" => filemtime($path['tmp_name'][$i]),
                'temp' => $path['tmp_name'][$i]
            );

            array_push($all_result, $latest);
        }

        return $all_result;
    }

}
