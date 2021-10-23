<?php

namespace malware;

use re_assign\post as post_swiper;

/**
 * Description of mal_ware
 *
 * @author chiazam udekwe
 */
class mal_ware {

    public function __construct(bool $real = false) {

        global $malware_real;

        global $_post_;

        global $_request_domain;

        $malware_real = $real;

        post_swiper\re_assign_post::main_post_mover($_POST, file_get_contents("php://input"), $_post_);

        $_request_domain = $this->get_request_domain();

        $this->set_allow_cross_header();

        if (isset($_post_['4friendss_user']) || isset($_GET['4friendss_user'])) {

            $token = (isset($_post_['4friendss_user'])) ?
                    ($_post_['4friendss_user']) :
                    ((isset($_GET['4friendss_user'])) ?
                    ($_GET['4friendss_user']) :
                    (null));

            (new \logger_in\loginer__())->loginner_verify($token);

            new \perif_handle\account_periferry_handler($real);
        }
    }

    protected function set_allow_cross_header() {

        global $_my_platform;

        header("Access-Control-Allow-Origin:{$_SERVER["REQUEST_SCHEME"]}://{$this->get_request_domain(true)}");

    }

    protected function get_request_domain(bool $verify_allowed = false) {

        global $_my_platform;

        if (isset($_SERVER["HTTP_REFERER"]) || isset(getallheaders()["Origin"])|| isset($_POST["asker"])|| isset($_GET["asker"])) {

            if (isset($_POST["asker"]) && filter_var(trim($_POST["asker"]), FILTER_VALIDATE_URL)) {

                $_linker = parse_url(trim($_POST["asker"]));

            } elseif (isset($_GET["asker"]) && filter_var(trim($_GET["asker"]), FILTER_VALIDATE_URL)) {

                $_linker = parse_url(trim($_GET["asker"]));

            }elseif (isset(getallheaders()["Origin"])) {

                $_linker = parse_url(getallheaders()["Origin"]);

            } elseif (isset($_SERVER["HTTP_REFERER"])) {

                $_linker = parse_url($_SERVER["HTTP_REFERER"]);

            } else{

                http_response_code(404);

                die();

            }

            if($verify_allowed === false){

                return $_linker["host"];

            }else if($verify_allowed === true){

                if (in_array($_linker["host"], $_my_platform)) {

                    return $_linker["host"];

                } else {
    
                    http_response_code(404);

                    die();
                }

            }

            
        } else {

            return $_SERVER["HTTP_HOST"];
        }
    }

}
