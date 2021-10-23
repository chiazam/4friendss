<?php

namespace notify_seer;

use check\data_in_table as checkist;

/**
 * Description of notify_see
 *
 * @author chiazam udekwe
 */
class notify_see {

    static public function notif_see_all(string $g, string $q, string $key) {
        if ((checkist\num_of_data_in_table::num_of_data_in_table('notify', '*', ['key_holder' => $key]) > 0) && (checkist\num_of_data_in_table::num_of_data_in_table('notify_seen', '*', ['seer_g' => $g, 'seer_q' => $q, 'key__' => $key]) === 0)) {

            checkist\add_data_in_table::add_data_in_table('notify_seen', ['seer_g' => $g, 'seer_q' => $q, 'key__' => $key, 'date_notify' => \time\time_to_string::time_to_string(time())]);
        } else {

            checkist\update_data_in_table::update_data_in_table('notify_seen', ['date_notify' => \time\time_to_string::time_to_string(time())], ['seer_g' => $g, 'seer_q' => $q, 'key__' => $key]);
        }
    }

    static public function is_notify_seen(string $g, string $q, string $key) {

        if (checkist\get_data_in_table_compare::num_data_in_table(['notify_seen', 'notify'], 'notify_seen.*', ['notify.key_holder' => $key, 'notify_seen.key__' => $key, 'notify_seen.seer_g' => $g, 'notify_seen.seer_q' => $q], ['notify_seen.key__' => 'notify.key_holder'], 0,1, 'notify_seen.id', 'DESC', false, "AND (notify.date <= notify_seen.date_notify)") === 0) {

            return false;
        } else {

            return true;
        }
    }

}
