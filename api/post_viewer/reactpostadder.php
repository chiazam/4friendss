<?php

use auto__loader as auto___load;
use mysqli__ as mysqli_conns;
use post_react_stream as reactish;
use post_timeline_stream as time_line;
use num_slang as slanger;

require_once '../../classes/auto_loader_happener.php';

require_once '../../extra_script/first_action.php';

requirer_bulk('../../', ['classes/php_lib/getid3/getid3.php']);

new auto___load\auto_loader_happener('../../');

new mysqli_conns\mysqli_connector(HOST, USERNAME, PASSWORD);

new malware\mal_ware(true);

if ($_login_info === false) {

    new returner\final_returner_json(['permission' => 'denied due to no account is logged in']);
}

use check\if_post\check_isset_post as post_checker;
use check\data_in_table as checkist;

if (!post_checker::check_isset_post(["react", "key__", "device"])) {

    new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
}

if (empty(trim($_post_["react"]))) {

    new returner\final_returner_json(['mis_conduct' => 'empty', 'field' => 'react']);
} elseif (empty(trim($_post_["device"]))) {

    new returner\final_returner_json(['mis_conduct' => 'empty', 'field' => 'device']);
} elseif (empty(trim($_post_["key__"]))) {

    new returner\final_returner_json(['mis_conduct' => 'empty', 'field' => 'key__']);
}

if (!in_array(strtolower($_post_["react"]), ["love", "rate", "like", "dislike"])) {

    new returner\final_returner_json(['mis_conduct' => 'wrong credentials', 'field' => 'react']);
}

if (checkist\num_of_data_in_table::num_of_data_in_table("timeline", "*", ["saved" => 1, "key_link" => $_post_["key__"]]) > 0) {

    if (checkist\num_of_data_in_table::num_of_data_in_table("react_post", "*", ["key_link" => $_post_["key__"], "reacter_r" => $_session_['r'], "reacter_q" => $_session_['q']]) > 0) {

        if (checkist\get_data_in_table::get_data_in_table("react_post", "*", ["key_link" => $_post_["key__"], "reacter_r" => $_session_['r'], "reacter_q" => $_session_['q']])["react"] != $_post_["react"]) {

            checkist\update_data_in_table::update_data_in_table("react_post", ["react" => $_post_["react"]], ["key_link" => $_post_["key__"], "reacter_r" => $_session_['r'], "reacter_q" => $_session_['q']]);

            new returner\final_returner_json(['success' => [
                    'action' => 'reaction successfully updated',
                    "did_i_react" => reactish\react_num_realeaser::react_me_($_post_["key__"], $_session_['r'], $_session_['q']),
                    "love" => slanger\num_slang::slanger(reactish\react_num_realeaser::react_nums($_post_["key__"], 'love')),
                    "like" => slanger\num_slang::slanger(reactish\react_num_realeaser::react_nums($_post_["key__"], 'like')),
                    "dislike" => slanger\num_slang::slanger(reactish\react_num_realeaser::react_nums($_post_["key__"], 'dislike')),
                    "rate" => slanger\num_slang::slanger(reactish\react_num_realeaser::react_nums($_post_["key__"], 'rate')),
                    'react' => slanger\num_slang::slanger(time_line\post_get_streamer::num_react($_post_["key__"]))
            ]]);
        } elseif (checkist\get_data_in_table::get_data_in_table("react_post", "*", ["key_link" => $_post_["key__"], "reacter_r" => $_session_['r'], "reacter_q" => $_session_['q']])["react"] == $_post_["react"]) {
            checkist\delete_data_in_table::delete_data_in_table("react_post", ["key_link" => $_post_["key__"], "reacter_r" => $_session_['r'], "reacter_q" => $_session_['q']]);

            new returner\final_returner_json(['success' => [
                    'action' => 'reaction successfully deleted',
                    "did_i_react" => reactish\react_num_realeaser::react_me_($_post_["key__"], $_session_['r'], $_session_['q']),
                    "love" => slanger\num_slang::slanger(reactish\react_num_realeaser::react_nums($_post_["key__"], 'love')),
                    "like" => slanger\num_slang::slanger(reactish\react_num_realeaser::react_nums($_post_["key__"], 'like')),
                    "dislike" => slanger\num_slang::slanger(reactish\react_num_realeaser::react_nums($_post_["key__"], 'dislike')),
                    "rate" => slanger\num_slang::slanger(reactish\react_num_realeaser::react_nums($_post_["key__"], 'rate')),
                    'react' => slanger\num_slang::slanger(time_line\post_get_streamer::num_react($_post_["key__"]))
            ]]);
        }
    } else {
        checkist\add_data_in_table::add_data_in_table("react_post", ["key_link" => $_post_["key__"], "react" => $_post_["react"], "reacter_r" => $_session_['r'], "reacter_q" => $_session_['q'], "date" => time\time_to_string::time_to_string(time()), "device" => $_post_["device"]]);

        new returner\final_returner_json(['success' => [
                'action' => 'reaction successfully added',
                "did_i_react" => reactish\react_num_realeaser::react_me_($_post_["key__"], $_session_['r'], $_session_['q']),
                "love" => slanger\num_slang::slanger(reactish\react_num_realeaser::react_nums($_post_["key__"], 'love')),
                "like" => slanger\num_slang::slanger(reactish\react_num_realeaser::react_nums($_post_["key__"], 'like')),
                "dislike" => slanger\num_slang::slanger(reactish\react_num_realeaser::react_nums($_post_["key__"], 'dislike')),
                "rate" => slanger\num_slang::slanger(reactish\react_num_realeaser::react_nums($_post_["key__"], 'rate')),
                'react' => slanger\num_slang::slanger(time_line\post_get_streamer::num_react($_post_["key__"]))
        ]]);
    }
} else {
    new returner\final_returner_json(['mis_conduct' => 'wrong credentials', 'field' => 'all']);
}
