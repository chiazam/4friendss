<?php

namespace relate_and_how;

use post_timeline_stream as timeline_stream;
use check\data_in_table as checkers;
use all_search as search;

class relate_detect_how {

    static public function relate_picker(string $he_g, string $he_q, string $me_g, string $me_q) {

        if ($he_q !== $me_q && $he_g !== $me_g) {

            if (checkers\num_of_data_in_table::num_of_data_in_table("users", "*", ["g" => $he_g, "q" => $he_q]) > 0 && checkers\num_of_data_in_table::num_of_data_in_table("users", "*", ["g" => $me_g, "q" => $me_q]) > 0) {

                $he = checkers\get_data_in_table::get_data_in_table("users", "*", ["g" => $he_g, "q" => $he_q]);

                $me = checkers\get_data_in_table::get_data_in_table("users", "*", ["g" => $me_g, "q" => $me_q]);

                if (checkers\num_of_data_in_table::num_of_data_in_table("contact", "*", ["adder_b" => $me["b"], "added_b" => $he["b"]]) > 0) {

                    return ["relationship" => "contact", "go" => true];
                } else if (checkers\num_of_data_in_table::num_of_data_in_table("contact", "*", ["added_b" => $me["b"], "adder_b" => $he["b"]]) > 0) {

                    return ["relationship" => "has contact", "go" => true];
                } else {

                    if (checkers\num_of_data_in_table::num_of_data_in_table("contact", "*", ["adder_b" => $me["b"]]) > 0) {

                        $data_contacts = checkers\get_data_in_table::get_data_in_table_loop("contact", "added_b", ["adder_b" => $me["b"]]);

                        for ($i = 0; $i < count($data_contacts); $i++) {
                            $added_contact_b = $data_contacts[$i]["added_b"];

                            if (checkers\num_of_data_in_table::num_of_data_in_table("contact", "*", ["adder_b" => $added_contact_b, "added_b" => $he["b"]]) > 0) {

                                return ["relationship" => "contact contact", "go" => true];
                            } else if (checkers\num_of_data_in_table::num_of_data_in_table("contact", "*", ["added_b" => $added_contact_b, "adder_b" => $he["b"]]) > 0) {

                                return ["relationship" => "same contact", "go" => true];
                            }
                        }
                    }
                    if (strtolower($he["country"]) == strtolower($me['country']) && strtolower($he["state"]) == strtolower($me['state'])) {

                        return ["relationship" => "same state", "go" => true];
                    }

                    if (checkers\num_of_data_in_table::num_of_data_in_table("views_post", "*", ["key_post" => $he["g"], "category" => "profile_viewed", "q" => $me["q"], "b" => $me["b"]]) > 0) {

                        return ["relationship" => "passed by", "go" => true];
                    }

                    if (checkers\num_of_data_in_table::num_of_data_in_table("views_post", "*", ["key_post" => $me["g"], "category" => "profile_viewed", "q" => $he["q"], "b" => $he["b"]]) > 0) {

                        return ["relationship" => "passers by", "go" => true];
                    } else {

                        return ["relationship" => false, "go" => false];
                    }
                }
            } else {

                return ["relationship" => false, "go" => false];
            }
        } else {
            return ["relationship" => "this is you", "go" => true];
        }
    }

    static public function my_contact(string $_there_b, string $_my_b) {
        if (checkers\num_of_data_in_table::num_of_data_in_table("contact", "*", ["adder_b" => $_my_b, "added_b" => $_there_b]) == 0) {
            return false;
        } else {
            return true;
        }
    }

}
