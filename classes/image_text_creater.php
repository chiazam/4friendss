<?php

namespace image_creater;

class image_text_creater
{
    static public function text_image_(int $width, int $height, string $text, int $fontsize, int $start_x, int $start_y, int $angle, int $red = 255, int $green = 255, int $blue = 255)
    {
        // Create image handle
        $im = imagecreatetruecolor($width, $height);
        // imagealphablending($im, true);
        // Allocate colors
        $color = imagecolorallocate($im, $red, $green, $blue);

        // imagefill($im, 0, 0, imagecolorallocatealpha($im, 0, 0, 0, 1));

        // Write the font to the image

        imagestring($im,  $fontsize, $start_x, $start_y, $text, $color);

        // Output and free memory
        header('Content-type: image/jpeg');

        imagejpeg($im);
        imagedestroy($im);
    }
}
