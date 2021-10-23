<?php

namespace privacy;

/**
 * Description of privacy_validator
 *
 * @author chiazam udekwe
 */
class privacy_validator {

    protected $hash;
    protected $he_g;
    protected $he_q;
    protected $me_g;
    protected $me_q;
    protected $category;

    public function __construct(string $hash, string $category, string $he_g, string $he_q, string $me_g, string $me_q) {

        $this->hash = $hash;
        $this->he_g = $he_g;
        $this->he_q = $he_q;
        $this->me_g = $me_g;
        $this->me_q = $me_q;
        $this->category = $category;
    }

    public function verify_privacy() {

        if ($this->he_g === $this->me_g && $this->he_q === $this->me_q) {

            return true;
        }

        $privacy_folk = privacy_helper::privacy_returner($this->hash, $this->category);

        $relate = (new \relate_and_how\relate_detect_how())->relate_picker($this->he_g, $this->he_q, $this->me_g, $this->me_q);

        if (($privacy_folk === 'public') || ($relate["relationship"] === $privacy_folk)) {

            return true;
        } else {

            if ((checkers\get_data_in_table::get_data_in_table("users", "gender", ["g" => $this->me_g, "q" => $this->me_q])['gender']) === $privacy_folk) {

                return true;
            } else {

                return false;
            }
        }
    }

}
