<?php

namespace time;

class date_diff_array {

    static public function date_diff_array(string $start_date, string $end_date) {

        $datetime1 = new \DateTime($start_date);
        $datetime2 = new \DateTime($end_date);
        $interval = $datetime1->diff($datetime2);

        return [
            "y" => $interval->format('%Y'),
            "m" => $interval->format('%m'),
            "w" => ((($interval->format('%d')) - ($interval->format('%d') % (7))) / (7)),
            "d" => $interval->format('%d'),
            "h" => $interval->format('%H'),
            "i" => $interval->format('%i'),
            "s" => $interval->format('%s')
        ];
    }

    static public function displayable_time_format(string $start_date, array $array_diff_time, bool $time = true) {

        if ($array_diff_time['d'] < 10 && $array_diff_time['w'] == 0 && $array_diff_time['m'] == 0 && $array_diff_time['y'] == 0) {
            $y = ($array_diff_time['y'] == 0) ? ("") : ($array_diff_time['y'] . "y : ");

            $m = ($array_diff_time['m'] == 0) ? ("") : ($array_diff_time['m'] . "m : ");

            $w = ($array_diff_time['w'] == 0) ? ("") : ($array_diff_time['w'] . "w : ");

            $d = ($array_diff_time['d'] == 0) ? ("") : ($array_diff_time['d'] . "d : ");

            $h = ($array_diff_time['h'] == 0) ? ("") : ($array_diff_time['h'] . "h : ");

            $i = ($array_diff_time['i'] == 0) ? ("") : ($array_diff_time['i'] . "m : ");

            $s = ($array_diff_time['s'] == 0) ? ("") : ($array_diff_time['s'] . "s");

            if ($time === true) {
                return "{$y}{$m}{$w}{$d}{$h}{$i}{$s} ago";
            } else if ($time === false) {

                return "{$y}{$m}{$w}{$d} ago";
            }
        } else {
            $datist = date_create_array::date_create_array($start_date);


            if ($time === true) {

                return "{$datist['h']}:{$datist['i']}:{$datist['s']} {$datist['meridiam']}, {$datist['d_n_s']} {$datist['d']}, {$datist['m_n_s']} {$datist['Y']}";
            } else if ($time === false) {

                return "{$datist['d_n_s']} {$datist['d']}, {$datist['m_n_s']} {$datist['Y']}";
            }
        }
    }

}
