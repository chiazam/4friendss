<?php

namespace check\data_in_table;

use prepare\trim as prep;

class delete_data_in_table {

    static public function delete_data_in_table(string $table, array $value_pair, bool $or = false, string $sql_query = null, $db = DB) {
        global $conn;

        $query = "DELETE FROM `{$db}`.`{$table}` WHERE (";

        $count = 0;

        foreach ($value_pair as $key => $value) {

            $prep_value = prep\prepare_trim::return_prepare_trim($value);
            $prep_key = prep\prepare_trim::return_prepare_trim($key);

            if ($count == 0) {
                $query .= "`{$prep_key}`= '{$prep_value}'";
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

        $result_ = mysqli_query($conn, $query);

        try {

            $error = mysqli_error($conn);

            if (!empty(trim($error))) {

                throw new \Exception($error);
            }
        } catch (\Exception $e) {

            new \try_catch\try_catcher($e, FRIENDS_EMAIL);
        }

        return $result_;
    }

}
