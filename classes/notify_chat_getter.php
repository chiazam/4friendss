<?php

namespace notify\get;

use querier as query__;
use prepare\trim as prep;

/**
 * Description of notify_chat_getter
 *
 * @author chiazam udekwe
 */
class notify_chat_getter {

    static public function _yes_chat_notify(string $b, string $q) {

        $q = prep\prepare_trim::return_prepare_trim($q);

        $b = prep\prepare_trim::return_prepare_trim($b);

        $query__ = "SELECT DISTINCT `" . DB . "`.`chatings`.`q_sender`,`" . DB . "`.`chatings`.`b_sender` FROM `" . DB . "`.`chatings`,`" . DB . "`.`chat_seen`,`" . DB . "`.`chat_recievers` WHERE ((`" . DB . "`.`chat_recievers`.`q_reciever` = '{$q}' AND `" . DB . "`.`chat_recievers`.`b_reciever` = '{$b}') AND (`" . DB . "`.`chatings`.`sent` = '1') AND (`" . DB . "`.`chat_recievers`.`chat_key` = `" . DB . "`.`chatings`.`chat_key`)) AND ((`" . DB . "`.`chat_seen`.`seer_q` = '{$q}' AND `" . DB . "`.`chat_seen`.`seer_b` = '{$b}' AND `" . DB . "`.`chat_seen`.`seen_q` = `" . DB . "`.`chatings`.`q_sender` AND `" . DB . "`.`chat_seen`.`seen_b` = `" . DB . "`.`chatings`.`b_sender` AND `" . DB . "`.`chatings`.`date` > `" . DB . "`.`chat_seen`.`date`))";

        $num = query__\sql_querier::num_rows($query__);

        if ($num > 0) {
            return ["is" => true, "num" => \num_slang\num_slang::slanger($num)];
        } else {
            return ["is" => false, "num" => 0];
        }
    }

    static public function did_em_chet_me(string $my_b, string $my_q, string $b, string $q) {
        $q = prep\prepare_trim::return_prepare_trim($q);

        $b = prep\prepare_trim::return_prepare_trim($b);

        $my_q = prep\prepare_trim::return_prepare_trim($my_q);

        $my_b = prep\prepare_trim::return_prepare_trim($my_b);

        $query__ = "SELECT DISTINCT `" . DB . "`.`chatings`.`chat_key` FROM `" . DB . "`.`chatings`,`" . DB . "`.`chat_seen`,`" . DB . "`.`chat_recievers` WHERE (`" . DB . "`.`chat_recievers`.`q_reciever` = '{$my_q}' AND `" . DB . "`.`chat_recievers`.`b_reciever` = '{$my_b}' AND `" . DB . "`.`chatings`.`sent` = '1'  AND `" . DB . "`.`chatings`.`b_sender` = '{$b}' AND `" . DB . "`.`chatings`.`q_sender` = '{$q}') AND (`" . DB . "`.`chat_recievers`.`chat_key` = `" . DB . "`.`chatings`.`chat_key`) AND ((`" . DB . "`.`chat_seen`.`seer_q` = '{$my_q}' AND `" . DB . "`.`chat_seen`.`seer_b` = '{$my_b}' AND `" . DB . "`.`chat_seen`.`seen_q` = '{$q}' AND `" . DB . "`.`chat_seen`.`seen_b` = '{$b}' AND `" . DB . "`.`chat_seen`.`date` < `" . DB . "`.`chatings`.`date`))";

        $num = query__\sql_querier::num_rows($query__);

        if ($num > 0) {
            return ["is" => true, "num" => \num_slang\num_slang::slanger($num)];
        } else {
            return ["is" => false, "num" => \num_slang\num_slang::slanger($num)];
        }
    }

}
