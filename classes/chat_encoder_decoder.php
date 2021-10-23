<?php

namespace chat_changer\manipulate_text;

class chat_encoder_decoder {

    /**
     * @param string $text text to be encoded;
     *
     * @return string encoded text;
     */
    static public function encodeChat(string $text): string {

        return base64_encode(base64_encode(base64_encode(base64_encode($text))));
    }

    /**
     * @param string $text text to be decoded;
     *
     * @return string decoded text;
     */
    static public function decodeChat(string $text): string {

        return base64_decode(base64_decode(base64_decode(base64_decode($text))));
    }

}
