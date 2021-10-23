<?php

namespace perif_handle;

use re_assign\session as session_swiper;

/**
 * Description of account_periferry_handler
 *
 * @author chiazam udekwe
 */
class account_periferry_handler {

    static public function gender_returner(string $b, string $r) {
        $gender = \check\data_in_table\get_data_in_table::get_data_in_table('users', 'gender', ['r' => $r, 'b' => $b])['gender'];

        if (is_null($gender) || empty(trim($gender))) {

            return false;
        } else {
            return $gender;
        }
    }

    public static function origin_returner(string $b, string $r) {
        $origin = \check\data_in_table\get_data_in_table::get_data_in_table('users', 'country,state,city', ['r' => $r, 'b' => $b]);

        if ((is_null($origin['country']) || empty(trim($origin['country']))) || (is_null($origin['city']) || empty(trim($origin['city'])))) {

            return false;
        } else {
            return $origin;
        }
    }

    static function no_birth_days(string $r, string $b) {

        return (\check\data_in_table\num_of_data_in_table::num_of_data_in_table('users', 'date_birth', ['r' => $r, 'b' => $b], 0, 1, 'id', 'DESC', false, "AND ((`" . DB . "`.`users`.`date_birth` < '1900-01-01') OR (`" . DB . "`.`users`.`date_birth` >  '" . \time\time_to_string::date_only(time()) . "'))") > 0);
    }

    public function __construct(bool $real = false) {
        global $_login_info;

        if ($_login_info !== false) {

            $this->session_maker__();

            $stopper = self::return_gogo__fwipe($_login_info);

            if ($real === true && $stopper !== true) {
                new \returner\final_returner_json($stopper);
            }
        }
    }

    static function return_gogo__fwipe($_login_info) {

        if (((int) ($_login_info["logged_user"]['info']['act'])) === 0) {

            return(['account' => 'pending', 'mis_conduct' => 'unverified']);
        } else {

            if (self::no_birth_days($_login_info["logged_user"]['info']['r'], $_login_info["logged_user"]['info']['b'])) {
                return(['account' => 'pending', 'mis_conduct' => 'no birthdate']);
            } else {

                if (self::gender_returner($_login_info["logged_user"]['info']['b'], $_login_info["logged_user"]['info']['r']) === false) {

                    return(['account' => 'pending', 'mis_conduct' => 'no gender']);
                } else {

                    if (self::origin_returner($_login_info["logged_user"]['info']['b'], $_login_info["logged_user"]['info']['r']) === false) {

                        return(['account' => 'pending', 'mis_conduct' => 'no origin']);
                    } else {
                        return true;
                    }
                }
            }
        }
    }

    protected function session_maker__() {

        global $_session_;

        global $_login_info;

        if ($_login_info !== false) {
            $_my_thread_session = [];
            $_my_thread_session['r'] = $_login_info["logged_user"]['info']['r'];
            $_my_thread_session['g'] = $_login_info["logged_user"]['info']['g'];
            $_my_thread_session['b'] = $_login_info["logged_user"]['info']['b'];
            $_my_thread_session['q'] = $_login_info["logged_user"]['info']['q'];
            $_my_thread_session['logged_in'] = 1;

            session_swiper\re_assign_session::session_mover($_my_thread_session, $_session_);
        }
    }

}
