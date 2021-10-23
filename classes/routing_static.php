<?php

namespace static_router;

use streammmmm___ as stream;
use files\file_features as file_s;

class routing_static {

    static public function trigger_reader_vid_aud(string $path) {

        header("Content-Type: " . mime_content_type($path));

        $movie_audio = new stream\video_audio_stream($path);

        $movie_audio->start();
    }

    static public function trigger_reader_not_vid_aud(string $path) {
        header("Content-Type: " . mime_content_type($path));
        header('Content-Length: ' . filesize($path));
        readfile($path);
    }

    static public function kick_routing_off(string $path) {

        if (file_exists($path)) {

            switch (strtolower(mime_content_type($path))) {
                case "video/mp4":

                    self::trigger_reader_vid_aud($path);

                    break;

                case "audio/mpeg":
                    self::trigger_reader_vid_aud($path);

                    break;

                default:

                    switch (file_s::file_features_no_up($path)["extention"]) {

                        case 'eot':

                            header('Content-Type: application/vnd.ms-fontobject');

                            self::trigger_reader_not_vid_aud($path);

                            break;

                        case 'htm':

                            header('Content-Type: text/html');

                            self::trigger_reader_not_vid_aud($path);

                            break;

                        case 'html':

                            header('Content-Type: text/html');

                            self::trigger_reader_not_vid_aud($path);

                            break;

                        case 'svg':

                            header('Content-Type: image/svg+xml');

                            self::trigger_reader_not_vid_aud($path);

                            break;

                        case 'tif':

                            header('Content-Type: font/ttf');

                            self::trigger_reader_not_vid_aud($path);

                            break;

                        case 'tiff':

                            header('Content-Type: image/tiff');

                            self::trigger_reader_not_vid_aud($path);

                            break;

                        case 'ttf':

                            header('Content-Type: font/ttf');

                            self::trigger_reader_not_vid_aud($path);

                            break;

                        case 'woff':

                            header('Content-Type: font/woff');

                            self::trigger_reader_not_vid_aud($path);

                            break;

                        case 'woff2':

                            header('Content-Type: font/woff2');

                            self::trigger_reader_not_vid_aud($path);

                            break;

                        case 'js':

                            header('Content-Type: application/javascript');

                            echo compress_js($path);

                            break;

                        case 'json':

                            header('Content-Type: application/json');

                            echo compress_json($path);

                            break;

                        case 'css':

                            header('Content-Type: text/css');

                            echo compress_css($path);

                            break;

                        default:

                            self::trigger_reader_not_vid_aud($path);

                            break;
                    }

                    break;
            }
        } else {

            http_response_code(404);
        }
    }

}
