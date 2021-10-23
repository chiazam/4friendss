<?php

namespace deleters\delete_except_one;

use check as chichi;

/**
 * Description of delete_all_except_one
 *
 * @author chiazam udekwe
 */
class delete_all_except_one {

    static public function delete_all_save_one(string $table, array $value_pairs) {

        if (chichi\data_in_table\num_of_data_in_table::num_of_data_in_table($table, '*', $value_pairs) > 0) {

            $chunk_data = chichi\data_in_table\get_data_in_table::get_data_in_table_loop($table, '*', $value_pairs);

            for ($i = 1; $i < count($chunk_data); $i++) {

                $present_chunk = $chunk_data[$i];

                chichi\data_in_table\delete_data_in_table::delete_data_in_table($table, ['id' => $present_chunk['id']]);
            }
        }
    }

}
