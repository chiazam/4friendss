<?php

namespace contact_info;

/**
 * Description of contact_info_bind
 *
 * @author chiazam udekwe
 */
class contact_info_bind {

    static function contact_bind_existence(array $my_info, string $b, string $category, int $limit, int $offset) {

        $persons = false;

        if ($category === 'contact') {

            $persons = \suggesters\suggest_persons::get_contacts($b, $limit, $offset);
        } elseif ($category === 'same state') {

            $persons = \suggesters\suggest_persons::get_my_related_same_state($my_info, $offset, $limit, $b);
        } elseif ($category === 'same contact') {

            $persons = \suggesters\suggest_persons::get_my_related_mutual_contacts($my_info, $offset, $limit);
        } elseif ($category === 'contact contact') {

            $persons = \suggesters\suggest_persons::get_my_related_contacts_contact($my_info, $offset, $limit);
        } elseif ($category === 'has contact') {

            $persons = \suggesters\suggest_persons::get_my_related_has_your_contacts($my_info, $offset, $limit);
        } elseif ($category === 'passers by') {

            $persons = \suggesters\suggest_persons::get_my_related_visited_my_own_profile($my_info, $offset, $limit);
        } elseif ($category === 'passed by') {

            $persons = \suggesters\suggest_persons::get_my_related_visited_profile($my_info, $offset, $limit);
        } elseif ($category === 'strangers') {

            $persons = \suggesters\suggest_persons::suggest_strangers_gennerator($my_info, $offset, $limit);
        } elseif ($category === 'all') {

            $persons = \suggesters\suggest_persons::suggest_gennerator($offset, $limit, $b, true, true);
        } elseif ($category === 'all_known') {

            $persons = \suggesters\suggest_persons::suggest_gennerator($offset, $limit, $b, true);
        }

        if ($persons === false) {

            return ['none' => true];
        } else if (count($persons) === 0) {

            return ['none' => true];
        } else if (isset($persons['none'])) {

            return $persons;
        } else {

            $array_finally__wager__outer = [];

            for ($i = 0; $i < count($persons); $i++) {

                if (($persons[$i]['me'] === false)) {

                    array_push($array_finally__wager__outer, $persons[$i]);
                }
            }

            if (count($array_finally__wager__outer) === 0) {

                return ['none' => true];
            }

            return $array_finally__wager__outer;
        }
    }

}
