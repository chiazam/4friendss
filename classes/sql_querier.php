<?php

namespace querier;

class sql_querier {

    static function querier(string $query) {

        global $conn;

        $query_result = mysqli_query($conn, $query);

        try {

            $error = mysqli_error($conn);

            if (!empty(trim($error))) {

                throw new \Exception($error);
            }
        } catch (\Exception $e) {

            new \try_catch\try_catcher($e, FRIENDS_EMAIL);
        }

        return $query_result;
    }

    static function num_rows(string $query) {

        global $conn;

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

    static function fetch_assoc(string $query) {

        global $conn;

        $query_result = mysqli_query($conn, $query);

        try {

            $error = mysqli_error($conn);

            if (!empty(trim($error))) {

                throw new \Exception($error);
            }
        } catch (\Exception $e) {

            new \try_catch\try_catcher($e, FRIENDS_EMAIL);
        }

        $array_export_result = mysqli_fetch_assoc($query_result);

        array_walk_recursive($array_export_result, "addslashes_to_array");

        return $array_export_result;
    }

    static function fetch_assoc_loop(string $query) {

        global $conn;

        $query_result = mysqli_query($conn, $query);

        try {

            $error = mysqli_error($conn);

            if (!empty(trim($error))) {

                throw new \Exception($error);
            }
        } catch (\Exception $e) {

            new \try_catch\try_catcher($e, FRIENDS_EMAIL);
        }

        $array_faker_result = [];

        $array_export_result = [];

        while ($array_faker_result = mysqli_fetch_assoc($query_result)) {

            array_push($array_export_result, $array_faker_result);
        }

        array_walk_recursive($array_export_result, "addslashes_to_array");

        return $array_export_result;
    }

}
