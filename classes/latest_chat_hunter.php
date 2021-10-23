<?php

namespace latest\chat_hunter;

use prepare\trim as prep;
/**
 * Description of latest_chat_hunter
 *
 * @author chiazam udekwe
 */


class latest_chat_hunter {

    protected $limit;
    protected $offset;
    protected $dialogued_q;
    protected $dialogued_b;

    public function __construct($limit, $offset, $dialogued_q, $dialogued_b) {

        $this->limit = prep\prepare_trim::return_prepare_trim($limit);
        $this->offset = prep\prepare_trim::return_prepare_trim($offset);
        $this->dialogued_q = prep\prepare_trim::return_prepare_trim($dialogued_q);
        $this->dialogued_b = prep\prepare_trim::return_prepare_trim($dialogued_b);
    }

    public function get_latest_messages__() {

    }

}
