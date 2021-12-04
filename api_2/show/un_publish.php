<?php

use auto__loader as auto___load;
use mysqli__ as mysqli_conns;
use check\if_post as check_post;
use check\data_in_table as checkist;
use time\time_to_string as time_string;
use notify_add as notify;

require_once '../../classes/auto_loader_happener.php';

require_once '../../extra_script/first_action.php';

requirer_bulk('../../', ['classes/php_lib/getid3/getid3.php']);

new auto___load\auto_loader_happener('../../');

new mysqli_conns\mysqli_connector(HOST, USERNAME, PASSWORD);

new malware\mal_ware(true);

if ($_login_info === false) {

    new returner\final_returner_json(['permission' => 'denied due to no account is logged in']);
}

if (!check_post\check_isset_post::check_isset_post(["key_", "type"])) {

    new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
}

if (empty(trim($_post_["key_"]))) {

    new returner\final_returner_json(['mis_conduct' => 'empty', 'field' => 'key_']);

} elseif (empty(trim($_post_["type"]))) {

    new returner\final_returner_json(['mis_conduct' => 'empty', 'field' => 'key_']);
}

if (checkist\num_of_data_in_table::num_of_data_in_table($_post_["type"], "*", ["key_" => $_post_["key_"]]) === 0) {

    new returner\final_returner_json(['mis_conduct' => 'Credentials are wrong', 'field' => 'all']);
    
}

if (!show\finz\get_show_info::is_mine($_post_["type"],$_post_["key_"],$_session_['g'],$_session_['q'])) {

    new returner\final_returner_json(['mis_conduct' => 'Creadentials are wrong', 'field' => 'all']);
    
}

if (checkist\num_of_data_in_table::num_of_data_in_table($_post_["type"], "*", ["key_" => $_post_["key_"],"publish" => '0']) > 0) {

    checkist\update_data_in_table::update_data_in_table($_post_["type"],['publish' => 1],["key_" => $_post_["key_"]]);

    new returner\final_returner_json(['message' =>['publish' => '1']]);
    
}else if (checkist\num_of_data_in_table::num_of_data_in_table($_post_["type"], "*", ["key_" => $_post_["key_"], "publish" => '1']) > 0) {

    checkist\update_data_in_table::update_data_in_table($_post_["type"],['publish' => 0],["key_" => $_post_["key_"]]);

    new returner\final_returner_json(['message' => ['publish' => '0']]);
    
}

