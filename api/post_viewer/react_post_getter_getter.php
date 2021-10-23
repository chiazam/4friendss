<?php

use auto__loader as auto___load;
use mysqli__ as mysqli_conns;

require_once '../../classes/auto_loader_happener.php';

require_once '../../extra_script/first_action.php';

requirer_bulk('../../', ['classes/php_lib/getid3/getid3.php']);

new auto___load\auto_loader_happener('../../');

new mysqli_conns\mysqli_connector(HOST, USERNAME, PASSWORD);

new malware\mal_ware(true);

if ($_login_info === false) {

    new returner\final_returner_json(['permission' => 'denied due to no account is logged in']);
}

use check\if_get\check_isset_get as get_checker;
use check\data_in_table as checkist;
use post_react_stream as reactish;
use num_slang as slanger;
use viewer_register as viewer;

if (!get_checker::check_isset_get(["key__"])) {

    new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
}

if (checkist\num_of_data_in_table::num_of_data_in_table("timeline", "*", ["saved" => 1, "key_link" => $_post_["key__"]]) > 0) {

    new returner\final_returner_json(['message' => [
            "love" => slanger\num_slang::slanger(reactish\react_num_realeaser::react_nums($_post_["key__"], "love")),
            "rate" => slanger\num_slang::slanger(reactish\react_num_realeaser::react_nums($_post_["key__"], "rate")),
            "like" => slanger\num_slang::slanger(reactish\react_num_realeaser::react_nums($_post_["key__"], "like")),
            "dislike" => slanger\num_slang::slanger(reactish\react_num_realeaser::react_nums($_post_["key__"], "dislike")),
            "did_i_react" => reactish\react_num_realeaser::react_me_($_post_["key__"], $_session_['r'], $_session_['q']),
            "tip_people" => reactish\react_num_realeaser::react_data($_post_["key__"], 0, 3),
            "views_num_post" => slanger\num_slang::slanger(viewer\viewer_register::get_num_viewer($_post_["key__"], "post_viewed")),
            "views_persons_post" => viewer\viewer_register::get_persons_viewer($_post_["key__"], "post_viewed", 0, 5)
    ]]);
} else {

    new returner\final_returner_json(['mis_conduct' => 'wrong credentials', 'field' => 'all']);
}
