<?php

namespace check\data_in_table;

use prepare\trim as prep;

class update_data_in_table {

    static public function update_data_in_table(string $table, array $value_pair_update, array $true_params, bool $or = false, string $sql_query = null, $db = DB) {
        global $conn;

        $query = "UPDATE `{$db}`.`{$table}` SET ";

        $count = 0;

        foreach ($value_pair_update as $key => $value) {

            $prep_value = prep\prepare_trim::return_prepare_trim($value);
            $prep_key = prep\prepare_trim::return_prepare_trim($key);

            if ($count == 0) {
                $query .= "`{$prep_key}` = '{$prep_value}' ";
            } else {
                $query .= ", `{$prep_key}` = '{$prep_value}'";
            }

            $count++;
        }

        $query .= " WHERE (";

        $count = 0;

        foreach ($true_params as $key => $value) {

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

        $query .= ")";
        if ($sql_query !== null) {
            $query .= " {$sql_query}";
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

        if ($query_result) {
            return true;
        } else {
            return false;
        }
    }

}
