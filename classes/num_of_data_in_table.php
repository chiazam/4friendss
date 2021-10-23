<?php

namespace check\data_in_table;

use prepare\trim as prep;

class num_of_data_in_table {

    static public function num_of_data_in_table(string $table, string $items_needed, array $value_pair = null, int $offset = null, int $limit = null, string $order_by = null, string $order_dir = null, bool $or = false, string $sql_query = null, $db = DB) {
        global $conn;

        $query = "SELECT {$items_needed} FROM `{$db}`.`{$table}`";

        $count = 0;

        if ($value_pair !== null) {
            $query .= " WHERE (";
            foreach ($value_pair as $key => $value) {

                $prep_value = prep\prepare_trim::return_prepare_trim($value);
                $prep_key = prep\prepare_trim::return_prepare_trim($key);

                if ($count == 0) {
                    $query .= "{$prep_key}= '{$prep_value}'";
                } else {
                    if ($or === false) {
                        $query .= " AND {$prep_key}= '{$prep_value}'";
                    } else if ($or === true) {
                        $query .= " OR {$prep_key}= '{$prep_value}'";
                    }
                }

                $count++;
            }
        } else {

            $query .= " WHERE (1";
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


        if ($limit !== null) {
            $query .= " LIMIT {$limit}";
        }

        if ($offset !== null) {
            $query .= " OFFSET {$offset}";
        }

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
