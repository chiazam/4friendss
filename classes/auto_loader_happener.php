<?php

namespace auto__loader;

class auto_loader_happener {

    protected $path_root;
    protected $folders;

    public function __construct(string $path_root) {

        $this->path_root = $path_root;

        $this->folders = ['classes', 'classes_2'];

        $this->autoloadist();
    }

    protected function autoloadist() {

        spl_autoload_register(
                function ($class) {

            $name_part_class = explode("\\", $class);

            for ($i = 0; $i < count($this->folders); $i++) {

                $element = $this->folders[$i];

                if (file_exists("{$this->path_root}{$element}/" . end($name_part_class) . ".php")) {

                    require_once("{$this->path_root}{$element}/" . end($name_part_class) . ".php");

                    break;
                }
            }
        });
    }

}
