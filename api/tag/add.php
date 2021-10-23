<?php

require_once("../timeline_gen/create_first_unsaved.php");

use check\data_in_table as checkist;
use check\if_post\check_isset_post as post_checker;

if (!post_checker::check_isset_post(["hash"])) {

    new returner\final_returner_json(['permission' => 'denied due to insuffiecient credentials']);
}

if (checkist\num_of_data_in_table::num_of_data_in_table("users", "r,q", ["q" => $_post_["hash"]]) > 0) {

    $data = checkist\get_data_in_table::get_data_in_table("users", "r,q", ["q" => $_post_["hash"]]);

    if (checkist\num_of_data_in_table::num_of_data_in_table("post_tags", "*", ["post_key" => $key_link, "tagged_r" => $data["r"], "tagged_q" => $data["q"]]) > 0) {

        checkist\delete_data_in_table::delete_data_in_table("post_tags", ["post_key" => $key_link, "tagged_r" => $data["r"], "tagged_q" => $data["q"]]);

        new returner\final_returner_json(['message' => ["tagged" => false]]);
    } else {

        if (checkist\num_of_data_in_table::num_of_data_in_table("post_tags", "*", ["post_key" => $key_link]) < 10) {

            checkist\add_data_in_table::add_data_in_table("post_tags", ["post_key" => $key_link, "tagged_r" => $data["r"], "tagged_q" => $data["q"]]);

            new returner\final_returner_json(['message' => ["tagged" => true]]);
        } else {

            new returner\final_returner_json(['message' => ["tagged" => false]]);
        }
    }
} else {

    new returner\final_returner_json(['mis_conduct' => 'wrong information', 'field' => 'all']);
}
