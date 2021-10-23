<?php

namespace check\data_search_in_table;

use prepare\trim as prep;

class num_search_starts_ends {

    static public function get_search_data_in_table_loop(string $table, string $items_needed, array $value_pair, int $offset = null, int $limit = 10, string $order_by = null, string $order_dir = null, bool $or = true, string $sql_query = null, $db = DB) {

        global $conn;

        $query = "SELECT {$items_needed} FROM `{$db}`.`{$table}` WHERE (";

        $count = 0;

        foreach ($value_pair as $key => $value) {

            $prep_value = prep\prepare_trim::return_prepare_trim($value);
            $prep_key = prep\prepare_trim::return_prepare_trim($key);

            if ($count == 0) {
                $query .= "`{$prep_key}` LIKE '%{$prep_value}%'";
            } else {
                if ($or === false) {
                    $query .= " AND `{$prep_key}` LIKE '%{$prep_value}%'";
                } else if ($or === true) {
                    $query .= " OR `{$prep_key}` LIKE '%{$prep_value}%'";
                }
            }
            $count++;
        }

        $query .= ")";
        if ($sql_query !== null) {
            $query .= " {$sql_query}";
        }

        if ($order_by !== null) {

            $query .= " ORDER BY {$order_by}";
        }

        if ($order_by !== null && $order_dir !== null) {

            $query .= " {$order_dir}";
        }


        $query .= " LIMIT {$limit}";

        if ($offset !== null) {
            $query .= " OFFSET {$offset}";
        }

        // die($query);

        $query_result = mysqli_query($conn, $query);

        try {

            $error = mysqli_error($conn);

            if (!empty(trim($error))) {

                throw new \Exception($error);
            }
        } catch (\Exception $e) {

            new \try_catch\try_catcher($e, FRIENDS_EMAIL);
        }

        return mysqli_num_rows($query_result);
    }

}
