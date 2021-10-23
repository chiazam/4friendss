<?php

namespace suggesters;

use relate_and_how as relator;
use check as checkist;

class suggest_persons {

    static public function get_my_related_has_your_contacts(array $my_info, int $_skip = 0, int $_limit = 5) {

        if (checkist\data_in_table\num_of_data_in_table::num_of_data_in_table("contact", "adder_b", ["added_b" => $my_info['b']], $_skip, $_limit) > 0) {

            $array_final_people_info = [];

            $people_from_contact = checkist\rand_data_in_table\rand_data_table::get_data_in_table_loop("contact", "adder_b", ["added_b" => $my_info['b']], $_skip, $_limit);

            for ($q = 0; $q < count($people_from_contact); $q++) {

                $added_b_persons = $people_from_contact[$q]["adder_b"];

                if (!relator\relate_detect_how::my_contact($added_b_persons, $my_info['b'])) {

                    $data_present = checkist\data_in_table\get_data_in_table::get_data_in_table("users", "email,full,g,r,q,b,prof_pix,cover,act", ["b" => $added_b_persons]);

                    array_push($array_final_people_info, \persons\person_straight_hunter::human_full_presenter_($data_present, $my_info));
                }

                if (count($array_final_people_info) > 0) {

                    return $array_final_people_info;
                } else {
                    return false;
                }
            }
        } else {
            return false;
        }
    }

    static public function get_my_related_contacts_contact(array $my_info, int $_skip = 0, int $_limit = 5) {

        $array_final_people_info = [];

        if (checkist\data_in_table\num_of_data_in_table::num_of_data_in_table("contact", "added_b", ["adder_b" => $my_info['b']]) > 0) {

            $people_from_contact = checkist\rand_data_in_table\rand_data_table::get_data_in_table_loop("contact", "added_b", ["adder_b" => $my_info['b']], $_skip, $_limit);

            for ($q = 0; $q < count($people_from_contact); $q++) {

                $added_b_persons = $people_from_contact[$q]["added_b"];

                if (checkist\data_in_table\num_of_data_in_table::num_of_data_in_table("contact", "added_b", ["adder_b" => $added_b_persons, "added_b !" => $my_info["b"]])) {

                    $added_b_persons_added_b_persons = checkist\rand_data_in_table\rand_data_table::get_data_in_table_loop("contact", "added_b", ["adder_b" => $added_b_persons, "added_b !" => $my_info["b"]]);



                    for ($z = 0; $z < count($added_b_persons_added_b_persons); $z++) {

                        $added_b_persons_persons = $added_b_persons_added_b_persons[$z]["added_b"];

                        if (!relator\relate_detect_how::my_contact($added_b_persons_persons, $my_info['b'])) {

                            if (checkist\data_in_table\num_of_data_in_table::num_of_data_in_table("users", "email,full,g,r,q,b,prof_pix,cover,act", ["b" => $added_b_persons_persons]) > 0) {

                                $data_present = checkist\data_in_table\get_data_in_table::get_data_in_table("users", "email,full,g,r,q,b,prof_pix,cover,act", ["b" => $added_b_persons_persons]);

                                array_push($array_final_people_info, \persons\person_straight_hunter::human_full_presenter_($data_present, $my_info));


                            }
                        }
                    }
                }
            }

            if (count($array_final_people_info) > 0) {

                return $array_final_people_info;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    static public function get_my_related_mutual_contacts(array $my_info, int $_skip = 0, int $_limit = 5) {

        $array_final_people_info = [];

        if (checkist\data_in_table\num_of_data_in_table::num_of_data_in_table("contact", "added_b", ["adder_b" => $my_info['b']]) > 0) {

            $people_from_contact = checkist\rand_data_in_table\rand_data_table::get_data_in_table_loop("contact", "added_b", ["adder_b" => $my_info['b']], $_skip, $_limit);

            for ($q = 0; $q < count($people_from_contact); $q++) {

                $added_b_persons = $people_from_contact[$q]["added_b"];

                if (checkist\data_in_table\num_of_data_in_table::num_of_data_in_table("contact", "adder_b", ["added_b" => $added_b_persons, "adder_b !" => $my_info["b"]]) > 0) {

                    $persons_tier = checkist\data_in_table\get_data_in_table::get_data_in_table_loop("contact", "adder_b", ["added_b" => $added_b_persons, "adder_b !" => $my_info["b"]]);

                    for ($b = 0; $b < count($persons_tier); $b++) {

                        $mutual_suggest_persons = $persons_tier[$b]["adder_b"];

                        if (!relator\relate_detect_how::my_contact($mutual_suggest_persons, $my_info['b'])) {

                            $data_present = checkist\data_in_table\get_data_in_table::get_data_in_table("users", "email,full,g,r,q,b,prof_pix,cover,act", ["b" => $mutual_suggest_persons]);

                            array_push($array_final_people_info, \persons\person_straight_hunter::human_full_presenter_($data_present, $my_info));
                        }
                    }
                }
            }

            if (count($array_final_people_info) > 0) {

                return $array_final_people_info;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    static public function get_my_related_same_state(array $my_info, int $_skip = 0, int $_limit = 5, string $b) {

        $array_final_people_info = [];

        if (checkist\data_in_table\num_of_data_in_table::num_of_data_in_table("users", "email,full,g,r,q,b,prof_pix,cover,act", ["country" => $my_info['country'], "state" => $my_info['state'], "b !" => $b], $_skip, $_limit) > 0) {

            $people_same_origin = checkist\rand_data_in_table\rand_data_table::get_data_in_table_loop("users", "email,full,g,r,q,b,prof_pix,cover,act", ["country" => $my_info['country'], "state" => $my_info['state'], "b !" => $b], $_skip, $_limit);

            for ($i = 0; $i < count($people_same_origin); $i++) {

                $data_present = $people_same_origin[$i];

                if (!relator\relate_detect_how::my_contact($data_present["b"], $my_info['b'])) {

                    array_push($array_final_people_info, \persons\person_straight_hunter::human_full_presenter_($data_present, $my_info));
                }
            }

            if (count($array_final_people_info) > 0) {

                return $array_final_people_info;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    static public function suggest_strangers_gennerator(array $my_info, int $_skip = 0, int $_limit = 5) {

        $array_final_people_info = [];

        if (checkist\data_in_table\num_of_data_in_table::num_of_data_in_table("users", "email,full,g,r,q,b,prof_pix,cover,act", ["b !" => $my_info["b"], "r !" => $my_info["r"], "g !" => $my_info["g"], "q !" => $my_info["q"]], $_skip, $_limit)) {

            $present_people = checkist\rand_data_in_table\rand_data_table::get_data_in_table_loop("users", "email,full,g,r,q,b,prof_pix,cover,act", ["b !" => $my_info["b"], "r !" => $my_info["r"], "g !" => $my_info["g"], "q !" => $my_info["q"]], $_skip, $_limit);

            for ($i = 0; $i < count($present_people); $i++) {

                $data_present = $present_people[$i];

                if (relator\relate_detect_how::relate_picker($data_present["g"], $data_present["q"], $my_info["g"], $my_info["q"])["go"] === false) {

                    array_push($array_final_people_info, \persons\person_straight_hunter::human_full_presenter_($data_present, $my_info));
                }
            }

            if (count($array_final_people_info) > 0) {

                return $array_final_people_info;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    static public function get_my_related_visited_profile(array $my_info, int $_skip = 0, int $_limit = 5) {

        $array_final_people_info = [];

        if (checkist\data_in_table\num_of_data_in_table::num_of_data_in_table("views_post", "key_post", ["category" => "profile_viewed", "q" => $my_info["q"], "b" => $my_info["b"]], $_skip, $_limit) > 0) {

            $g_me_g = checkist\rand_data_in_table\rand_data_table::get_data_in_table_loop("views_post", "key_post", ["category" => "profile_viewed", "q" => $my_info["q"], "b" => $my_info["b"], "key_post !" => $my_info["g"]], $_skip, $_limit);

            for ($i = 0; $i < count($g_me_g); $i++) {

                $mutual_suggest_persons = $g_me_g[$i]["key_post"];

                if (checkist\data_in_table\num_of_data_in_table::num_of_data_in_table("users", "email,full,g,r,q,b,prof_pix,cover,act", ["g" => $mutual_suggest_persons]) > 0) {
                    $data_present = checkist\data_in_table\get_data_in_table::get_data_in_table("users", "email,full,g,r,q,b,prof_pix,cover,act", ["g" => $mutual_suggest_persons]);

                    if (!relator\relate_detect_how::my_contact($data_present["b"], $my_info['b'])) {
                        array_push($array_final_people_info, \persons\person_straight_hunter::human_full_presenter_($data_present, $my_info));
                    }
                }
            }

            if (count($array_final_people_info) > 0) {

                return $array_final_people_info;
            } else {
                return false;
            }
        } else {

            return false;
        }
    }

    static public function get_my_related_visited_my_own_profile(array $my_info, int $_skip = 0, int $_limit = 5) {

        $array_final_people_info = [];

        if (checkist\data_in_table\num_of_data_in_table::num_of_data_in_table("views_post", "q,b", ["category" => "profile_viewed", "key_post" => $my_info["g"]], $_skip, $_limit) > 0) {

            $g_me_g = checkist\rand_data_in_table\rand_data_table::get_data_in_table_loop("views_post", "q,b", ["category" => "profile_viewed", "key_post" => $my_info["g"]], $_skip, $_limit);

            for ($i = 0; $i < count($g_me_g); $i++) {

                $mutual_suggest_persons = $g_me_g[$i];

                if (checkist\data_in_table\num_of_data_in_table::num_of_data_in_table("users", "email,full,g,r,q,b,prof_pix,cover,act", ["q" => $mutual_suggest_persons["q"], "b" => $mutual_suggest_persons["b"]]) > 0) {
                    $data_present = checkist\data_in_table\get_data_in_table::get_data_in_table("users", "email,full,g,r,q,b,prof_pix,cover,act", ["q" => $mutual_suggest_persons["q"], "b" => $mutual_suggest_persons["b"]]);

                    if (!relator\relate_detect_how::my_contact($data_present["b"], $my_info['b'])) {

                        array_push($array_final_people_info, \persons\person_straight_hunter::human_full_presenter_($data_present, $my_info));
                    }
                }
            }

            if (count($array_final_people_info) > 0) {

                return $array_final_people_info;
            } else {
                return false;
            }
        } else {

            return false;
        }
    }

    static public function get_contacts(string $b, int $limit, int $offset) {

        if (checkist\data_in_table\num_of_data_in_table::num_of_data_in_table('contact', 'added_b', ['adder_b' => $b], $offset, $limit) > 0) {

            $list_list_of_people = checkist\data_in_table\get_data_in_table::get_data_in_table_loop('contact', 'added_b', ['adder_b' => $b], $offset, $limit, 'RAND()');

            $data_me = checkist\data_in_table\get_data_in_table::get_data_in_table("users", "email,full,g,r,q,b,prof_pix,cover,act", ["b" => $b]);

            $contacted_folks = [];

            for ($i = 0; $i < count($list_list_of_people); $i++) {
                
                if(checkist\data_in_table\num_of_data_in_table::num_of_data_in_table("users", "email,full,g,r,q,b,prof_pix,cover,act", ["b" => $list_list_of_people[$i]['added_b']])>0){
                    
                    $data_them = checkist\data_in_table\get_data_in_table::get_data_in_table("users", "email,full,g,r,q,b,prof_pix,cover,act", ["b" => $list_list_of_people[$i]['added_b']]);

                    array_push($contacted_folks, \persons\person_straight_hunter::human_full_presenter_($data_them, $data_me));
                    
                }

               
            }

            return $contacted_folks;
        } else {
            return false;
        }
    }

    static public function suggest_gennerator(int $_skip = 0, int $_limit = 5, $b, bool $contact = false, bool $strangers = false, bool $me_ = false) {

        $my_info = checkist\data_in_table\get_data_in_table::get_data_in_table("users", "email,full,g,r,q,b,prof_pix,cover,act,country,state", ["b" => $b]);

        $array_final_people_info = [];

        if ($contact === true) {

            $contact__ = self::get_contacts($b, $_limit, $_skip);

            if (is_array($contact__)) {

                for ($i = 0; $i < count($contact__); $i++) {

                    array_push($array_final_people_info, $contact__[$i]);
                }
            }
        }

        if ($strangers === true) {

            $strangers__ = self::suggest_strangers_gennerator($my_info, $_skip, $_limit);

            if (is_array($strangers__)) {

                for ($i = 0; $i < count($strangers__); $i++) {

                    array_push($array_final_people_info, $strangers__[$i]);
                }
            }
        }

        $has_your_contact = self::get_my_related_has_your_contacts($my_info, $_skip, $_limit);

        if (is_array($has_your_contact)) {

            for ($i = 0; $i < count($has_your_contact); $i++) {

                array_push($array_final_people_info, $has_your_contact[$i]);
            }
        }

        $contact_contact = self::get_my_related_contacts_contact($my_info, $_skip, $_limit);

        if (is_array($contact_contact)) {

            for ($i = 0; $i < count($contact_contact); $i++) {

                array_push($array_final_people_info, $contact_contact[$i]);
            }
        }
        $mutual = self::get_my_related_mutual_contacts($my_info, $_skip, $_limit);

        if (is_array($mutual)) {

            for ($i = 0; $i < count($mutual); $i++) {

                array_push($array_final_people_info, $mutual[$i]);
            }
        }

        $state = self::get_my_related_same_state($my_info, $_skip, $_limit, $b);

        if (is_array($state)) {

            for ($i = 0; $i < count($state); $i++) {

                array_push($array_final_people_info, $state[$i]);
            }
        }

        $visit_profile = self::get_my_related_visited_profile($my_info, $_skip, $_limit, $b);

        if (is_array($visit_profile)) {

            for ($i = 0; $i < count($visit_profile); $i++) {

                array_push($array_final_people_info, $visit_profile[$i]);
            }
        }

        $visit_profile_my_own = self::get_my_related_visited_my_own_profile($my_info, $_skip, $_limit, $b);

        if (is_array($visit_profile_my_own)) {

            for ($i = 0; $i < count($visit_profile_my_own); $i++) {

                array_push($array_final_people_info, $visit_profile_my_own[$i]);
            }
        }

        $array_finally__wager__outer = [];

        $array_tax_collector__is = [];

        for ($i = 0; $i < count($array_final_people_info); $i++) {

            if ((!in_array($array_final_people_info[$i]['info']['r'], $array_tax_collector__is)) && (($array_final_people_info[$i]['me'] === false))) {

                array_push($array_tax_collector__is, $array_final_people_info[$i]['info']['r']);

                array_push($array_finally__wager__outer, $array_final_people_info[$i]);
            }
        }


        if ($me_ === true) {

            array_push($array_finally__wager__outer, \persons\person_straight_hunter::human_full_presenter_($my_info, $my_info));
        }

        if (count($array_finally__wager__outer) > 0) {

            return $array_finally__wager__outer;
        } else {

            return ['none' => true];
        }
    }

}
