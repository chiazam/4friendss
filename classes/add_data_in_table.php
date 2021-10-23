<?php

namespace check\data_in_table;

use prepare\trim as prep;

class add_data_in_table {

    static public function add_data_in_table(string $table, array $value_pair, $db = DB) {
        global $conn;

        $query = "INSERT INTO `{$db}`.`{$table}` (";

        $count = 0;

        foreach ($value_pair as $key => $value) {

            $prep_key = prep\prepare_trim::return_prepare_trim($key);

            if ($count == 0) {
                $query .= "`{$prep_key}`";
            } else {
                $query .= ", `{$prep_key}`";
            }

            $count++;
        }

        $query .= ") VALUES (";

        $count = 0;

        foreach ($value_pair as $key => $value) {

            $prep_value = prep\prepare_trim::return_prepare_trim($value);

            if ($count == 0) {
                $query .= "'{$prep_value}'";
            } else {
                $query .= ", '{$prep_value}'";
            }

            $count++;
        }

        $query .= ")";

        $_result = mysqli_query($conn, $query);

        try {

            $error = mysqli_error($conn);

            if (!empty(trim($error))) {

                throw new \Exception($error);
            }
        } catch (\Exception $e) {

            new \try_catch\try_catcher($e, FRIENDS_EMAIL);
        }

        return $_result;
    }

}
