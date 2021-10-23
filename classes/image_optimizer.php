<?php

namespace image_optimizer;

use Gwa\Image\ImageEditor as editor;
use static_router as router;
use files\file_features as file_s;

class image_optimizer {

    static public function start_optimi(string $file, int $qaulity, int $width, int $height, int $percent, string $finder) {

        if (file_exists($file)) {
            
            if ((strtolower(mime_content_type($file)) === "image/png" || strtolower(mime_content_type($file)) === "image/jpeg")) {
                
                self::start_optimi_image($file, $qaulity, $width, $height, $percent);
                
            }else if (strtolower(mime_content_type($file)) === "audio/mpeg"||strtolower(mime_content_type($file)) === 'application/octet-stream') {

                self::start_optimi_video($file, $qaulity, $width, $height, $percent, $finder);
                
            }
        }
    }

    static public function start_optimi_video(string $file, int $qaulity, int $width, int $height, int $percent, string $finder) {

        if (file_exists($file)) {

            $file_property_array = (new \getID3)->analyze($file);

            if (isset($file_property_array["comments"]["picture"][0]["data"]) && isset($file_property_array["comments"]["picture"][0]["image_mime"])) {

                $new_mage_hash = \audio_video\hash\audio_video_hash::audio_video_time_namer_hash($file);

                $woooop = fopen($finder . "lib/wwwwoooopppptrash/wwwwoooopppptrash" . $new_mage_hash . ".jpg", 'w');

                fwrite($woooop, $file_property_array["comments"]["picture"][0]["data"]);

                fclose($woooop);

                self::start_optimi_image($finder . "lib/wwwwoooopppptrash/wwwwoooopppptrash" . $new_mage_hash . ".jpg", $qaulity, $width, $height, $percent);

                unlink($finder . "lib/wwwwoooopppptrash/wwwwoooopppptrash" . $new_mage_hash . ".jpg");
            } else {

                self::start_optimi_image($finder . "icons/ftefytwefdytewfdtjfde.jpg", $qaulity, $width, $height, $percent);
            }
        }
    }

    static public function start_optimi_image(string $file, int $qaulity, int $width, int $height, int $percent) {

        if (file_exists($file)) {

            $files_features = file_s::file_features_no_up($file);

            if ($files_features["size"] > 50001) {
                $imagerist = new editor($file);

                if ($percent === 1) {
                    $width__ = ($imagerist->getWidth() * ($width / 100));
                    $height__ = ($imagerist->getHeight() * ($height / 100));
                } else {
                    $width__ = $width;
                    $height__ = $height;
                }

                $imagerist->resizeToWithin($width__, $height__)->output(IMAGETYPE_JPEG, $qaulity);
            } elseif ($files_features["size"] <= 200000) {

                router\routing_static::kick_routing_off($file);
            }
        }
    }

}
