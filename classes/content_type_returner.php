<?php

namespace headies;

/**
 * Description of content_type_returner
 *
 * @author chiazam udekwe
 */
class content_type_returner {

//put your code here

    static function get_content_type(string $ending) {

        switch ($ending) {

            case 'mp4':

                return( "video/mp4");

                break;

            case 'mp3':

                return( "audio/mpeg");

                break;

            case 'eot':

                return( 'application/vnd.ms-fontobject');

                break;

            case 'eot':

                return( 'application/vnd.ms-fontobject');

                break;

            case 'htm':

                return( 'text/html');

                break;

            case 'html':

                return( 'text/html');

                break;

            case 'svg':

                return( 'image/svg+xml');

                break;

            case 'tif':

                return( 'font/ttf');
                break;

            case 'tiff':

                return( 'image/tiff');

                break;

            case 'ttf':

                return( 'font/ttf');

                break;

            case 'woff':

                return( 'font/woff');


                break;

            case 'woff2':

                return( 'font/woff2');


                break;

            case 'js':

                return 'application/javascript';

                break;

            case 'json':

                return 'application/json';

                break;

            case 'css':

                return 'text/css';

                break;

            default:

                return false;

                break;
        }
    }

}
