<?php

namespace router;

class router_roll {

    static public function get_document_root() {

        if (filter_var($_SERVER['HTTP_HOST'], FILTER_VALIDATE_IP)) {

            return $_SERVER['DOCUMENT_ROOT'] . '/f/';
        } else {

            return $_SERVER['DOCUMENT_ROOT'] . '/';
        }
    }

    static public function get_document_root_http() {
        if (!filter_var($_SERVER['HTTP_HOST'], FILTER_VALIDATE_IP)) {

            return "{$_SERVER['REQUEST_SCHEME']}://{$_SERVER['HTTP_HOST']}/";
        } else {

            return "{$_SERVER['REQUEST_SCHEME']}://{$_SERVER['HTTP_HOST']}/f/";
        };
    }

}
