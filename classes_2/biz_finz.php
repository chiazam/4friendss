<?php

namespace biz\finz;

use post_timeline_stream as timestream;
use check\data_in_table as checkist;
use time as time__;
use num_slang as slanger;
use relate_and_how as relator;

class biz_finz {

    public static function biz_remove_user(string $group_b, string $my_b) {
        checkist\delete_data_in_table::delete_data_in_table('group_members', ['b' => $my_b, 'group_b' => $group_b, 'allowed' => 1]);
    }

    public static function biz_remove_admin(string $group_b, string $my_b) {
        checkist\update_data_in_table::update_data_in_table('group_members', ['admin' => 0], ['b' => $my_b, 'group_b' => $group_b]);
    }

    public static function biz_add_admin(string $group_b, string $my_b) {
        checkist\update_data_in_table::update_data_in_table('group_members', ['admin' => 1], ['b' => $my_b, 'group_b' => $group_b, 'allowed' => 1]);
    }

    public static function biz_add_remove_admin(string $group_b, string $my_b) {

        if (self::biz_owner_admin($group_b, $my_b, false) === true) {

            self::biz_remove_admin($group_b, $my_b);

            return ['remove' => 'successfully'];
        } else {

            self::biz_add_admin($group_b, $my_b);

            return ['added' => 'successfully'];
        }
    }

    public static function biz_add_user(string $group_b, string $my_b, string $my_q) {

        $group_info = self::biz_is_valid_info(['group_b' => $group_b], ['b' => $my_b], false);

        if ($group_info['info']['private'] == 0) {

            $allow = 1;
        } else if ($group_info['info']['private'] == 1) {

            $allow = 0;
        }

        checkist\add_data_in_table::add_data_in_table('group_members', ['q' => $my_q, 'b' => $my_b, 'admin' => '0', 'group_b' => $group_b, 'group_q' => $group_info['info']['group_q'], 'allowed' => $allow, "date" => \time\time_to_string::time_to_string(time())]);
    }

    public static function biz_owner_admin(string $group_b, string $b, bool $owner = true) {

        if ($owner === true) {

            if (checkist\num_of_data_in_table::num_of_data_in_table('groups', '*', ['group_b' => $group_b, 'creater_b' => $b]) > 0) {

                return true;
            } else {

                return false;
            }
        } elseif ($owner === false) {

            if ((checkist\num_of_data_in_table::num_of_data_in_table('groups', '*', ['group_b' => $group_b, 'creater_b' => $b]) > 0) || (checkist\num_of_data_in_table::num_of_data_in_table('group_members', '*', ['group_b' => $group_b, 'b' => $b, 'admin' => 1, 'allowed' => 1]) > 0)) {

                return true;
            } else {

                return false;
            }
        }
    }

    public static function biz_is_member(string $group_b, string $my_b) {

        if (checkist\num_of_data_in_table::num_of_data_in_table('group_members', '*', ['group_b' => $group_b, 'b' => $my_b, 'allowed' => 1]) > 0) {
            return true;
        } else {

            return false;
        }
    }

    public static function biz_add_remove_user(string $group_b, string $my_b, string $my_q) {

        if (self::biz_is_member($group_b, $my_b) === true) {
            self::biz_remove_user($group_b, $my_b);

            return ['remove' => 'successfully'];
        } else {

            self::biz_add_user($group_b, $my_b, $my_q);

            return ['added' => 'successfully'];
        }
    }

    public static function biz_valid_type(string $type, bool $valid = true) {

        $array_type = ['fashion', 'blog', 'podcast', 'tv show', 'music', 'photograph', 'politics'];

        if ($valid === true) {

            return in_array($type, $array_type, true);
        } else if ($valid === false) {

            return $array_type;
        }
    }

    public static function num_members(string $group_b) {

        return checkist\num_of_data_in_table::num_of_data_in_table('group_members', '*', ['group_b' => $group_b, 'allowed' => 1]);
    }

    public static function biz_is_valid_info(array $info_true, array $veiwer_info_true, bool $validate = true) {

        if (checkist\num_of_data_in_table::num_of_data_in_table('groups', '*', $info_true) > 0) {

            if ($validate === true) {

                return true;
            } elseif ($validate === false) {

                $group_info = checkist\get_data_in_table::get_data_in_table('groups', '*', $info_true);

                $group_info['num_members'] = slanger\num_slang::slanger(self::num_members($group_info['group_b']));

                $group_info['date_create'] = time__\date_diff_array::displayable_time_format($group_info['date_create'], time__\date_diff_array::date_diff_array(time__\time_to_string::time_to_string(time()), $group_info['date_create']));

                $data_me = timestream\post_get_streamer::post_get_poster_people_infor($veiwer_info_true)["info"];

                $data_them = timestream\post_get_streamer::post_get_poster_people_infor(["b" => $group_info['creater_b'], "q" => $group_info['creater_q']]);

                $data_them["relationship"] = relator\relate_detect_how::relate_picker($data_them["info"]["g"], $data_them["info"]["q"], $data_me['g'], $data_me['q']);

                $extra_group_info = checkist\num_of_data_in_table::num_of_data_in_table('group_info', 'phone,website,email', $info_true);

                return[
                    'info' => $group_info,
                    'extra_info' => $extra_group_info,
                    'creater' => $data_them
                ];
            }
        } else {

            if ($validate === true) {

                return false;
            } elseif ($validate === false) {

                return ['none' => true];
            }
        }
    }

    public static function biz_valid_name(string $name) {

        if (checkist\num_of_data_in_table::num_of_data_in_table('groups', '*', ['group_name' => $name]) > 0) {

            return false;
        } else {

            return true;
        }
    }

}
