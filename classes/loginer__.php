<?php

namespace logger_in;

use check\data_in_table as checkist;

/**
 * Description of loginer__
 *
 * @author chiazam udekwe
 */
class loginer__ {

    public function loginner_verify(string $jwt_key) {

        global $_request_domain;
        global $_my_platform;
        global $_login_info;

        $_login_info = false;

        $jwt_class_instance = new \auth_jwt\logger_in_jwt();

        $jwt_array = $jwt_class_instance->jwt_decoder($jwt_key);

        if (is_array($jwt_array)) {
            $num_person = (checkist\num_of_data_in_table::num_of_data_in_table('users', '*', ['r' => $jwt_array['r'], 'b' => $jwt_array['b']]) > 0);

            if (($jwt_class_instance->jwt_check_validity($jwt_array) === true) && ($num_person)) {

                \onliner\online_adder::add_online($jwt_array['r'], $jwt_array['b']);

                $my_data = checkist\get_data_in_table::get_data_in_table("users", "full,email,act,r,g,q,b,date,date_birth,cover,prof_pix,country,state,city,LGA,gender,phone,status,theme", ['r' => $jwt_array['r'], 'b' => $jwt_array['b']]);

                $_login_info = ['login_token' => $jwt_key, 'logged_user' => \persons\person_straight_hunter::human_full_presenter_($my_data, $my_data), "updated_login_token" => false];

                $_login_info['account_ist'] = \perif_handle\account_periferry_handler::return_gogo__fwipe($_login_info);
            } elseif (($jwt_class_instance->jwt_check_validity($jwt_array) === 'partially') && ($num_person)) {

                $this->login_starter($jwt_array['b'], $jwt_array['r']);
            } else {

                $this->logout_user($jwt_array['b'], $jwt_array['r']);
            }
        }
    }

    public function logout_user(string $b, string $r) {

        global $_request_domain;

        if (checkist\num_of_data_in_table::num_of_data_in_table('oauth_people', '*', ['r' => $r, 'b' => $b, 'domain' => $_request_domain]) > 0) {

            checkist\delete_data_in_table::delete_data_in_table('oauth_people', ['r' => $r, 'b' => $b, 'domain' => $_request_domain]);
        }
    }

    public function login_starter(string $b, string $r) {

        global $_request_domain;
        global $_my_platform;
        global $_login_info;

        $_login_info = false;

        if (in_array($_request_domain, $_my_platform)) {

            if (checkist\num_of_data_in_table::num_of_data_in_table('users', '*', ['r' => $r, 'b' => $b]) > 0) {

                $this->logout_user($b, $r);

                \onliner\online_adder::add_online($r, $b);

                $my_data = checkist\get_data_in_table::get_data_in_table("users", "full,email,act,r,g,q,b,date,date_birth,cover,prof_pix,country,state,city,LGA,gender,phone,status,theme", ['r' => $r, 'b' => $b]);

                $_login_info = ['login_token' => (new \auth_jwt\logger_in_jwt())->create_all_needed_jwt($my_data['r'], $my_data['b'], $my_data['q'], $my_data['g'], $_request_domain), 'logged_user' => \persons\person_straight_hunter::human_full_presenter_($my_data, $my_data), "updated_login_token" => true];

                $_login_info['account_ist'] = \perif_handle\account_periferry_handler::return_gogo__fwipe($_login_info);

                return true;
            }
        }
    }

}
