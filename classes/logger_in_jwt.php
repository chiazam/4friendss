<?php

namespace auth_jwt;

use check\data_in_table as checkist;

class logger_in_jwt {

    static function token_info_compera(array $data_db_jwt, array $jwt_array) {
        return ((($jwt_array['start_date'] === $data_db_jwt['start_date']) && ($jwt_array['start_date'] === $data_db_jwt['start_date']) && (\time\string_to_time::string_to_time($data_db_jwt['start_date']) <= time())) && (($jwt_array['expires_date'] === $data_db_jwt['expires_date']) && (\time\string_to_time::string_to_time($data_db_jwt['refresh_expires']) >= time()) && ($data_db_jwt['refresh_expires'] === $jwt_array['refresh_expires'])) && (($jwt_array['refresh_key'] === $data_db_jwt['refresh_key']) && ($jwt_array['logged_key'] === $data_db_jwt['logged_key'])));
    }

    public function jwt_check_validity(array $jwt_array) {

        global $_request_domain;

        if (is_array($jwt_array) && isset($jwt_array['r']) && isset($jwt_array['domain']) && isset($jwt_array['b'])) {

            if (checkist\num_of_data_in_table::num_of_data_in_table('oauth_people', '*', ['r' => $jwt_array['r'], 'b' => $jwt_array['b'], 'domain' => $_request_domain]) > 0) {

                $data_db_jwt = checkist\get_data_in_table::get_data_in_table('oauth_people', '*', ['r' => $jwt_array['r'], 'b' => $jwt_array['b'], 'domain' => $_request_domain]);

                if (self::token_info_compera($data_db_jwt, $jwt_array) === true) {

                    if (time() < \time\string_to_time::string_to_time($data_db_jwt['expires_date'])) {
                        return true;
                    } elseif ((\time\string_to_time::string_to_time($data_db_jwt['refresh_expires']) > time()) && (\time\string_to_time::string_to_time($data_db_jwt['expires_date']) < time())) {

                        return 'partially';
                    }
                } else {
                    return false;
                }
            }
        }
    }

    public function jwt_encoder(array $_jwt) {

        return base64_encode(json_encode($_jwt));
    }

    public function jwt_decoder(string $_jwt) {

        return json_decode(base64_decode($_jwt), true);
    }

    public function create_all_needed_jwt(string $r, string $b, string $q, string $g, string $domain) {

        $logged_key = \hash_maker\hash_maker::make_verify_cupon($r, $b, $q);

        $refresh_key = \hash_maker\hash_maker::make_verify_cupon($g, $q, $r);

        $time = time();

        $start_time = \time\time_to_string::time_to_string($time);

        $end_time = \time\time_to_string::time_to_string($time + 3600);

        $end_finally = \time\time_to_string::time_to_string($time + (3600 + 1800));

        $array_jwt = ['r' => $r, 'b' => $b, 'domain' => $domain, 'expires_date' => $end_time, 'refresh_expires' => $end_finally, 'start_date' => $start_time, 'logged_key' => $logged_key, 'refresh_key' => $refresh_key];

        checkist\add_data_in_table::add_data_in_table('oauth_people', $array_jwt);

        return $this->jwt_encoder($array_jwt);
    }

}
