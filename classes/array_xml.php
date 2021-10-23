<?php

namespace array_xml_fins;

use DOMElement;
use DOMDocument;

class array_xml {

    // .............. array to XMLstring .............

    private $dataToConvert = [];
    private $document;
    private $encoding;
    private $formatOutput;
    private $rootName;
    private $rootAttributes;
    private $version;
    
    public static function convert_to_xml(array $dataToConvert, array $options = []) 
    {
        $instance = new static($dataToConvert, $options);
        return $instance->toXml();
    }

    public function __construct(array $dataToConvert, array $options = [])
    {
        $this->dataToConvert = $dataToConvert;

        $this->encoding = $this->getOptionValue($options, 'encoding', 'UTF-8');
        $this->formatOutput = boolval($this->getOptionValue($options, 'formatOutput', true));
        $this->rootName = $this->getOptionValue($options, 'rootName', 'root');
        $this->rootAttributes = $this->getOptionValue($options, 'rootAttributes', []);
        $this->version = $this->getOptionValue($options, 'version', '1.0');

        $this->document = new DOMDocument($this->version, $this->encoding);
        $this->document->formatOutput = $this->formatOutput;
    }

    public function toXml()
    {
        $rootElement = $this->document->createElement($this->rootName);

        $this->addAttributesToElement($rootElement, $this->rootAttributes);

        $this->appendDataToElement($rootElement, $this->dataToConvert);

        $this->document->appendChild($rootElement);
        return $this->document->saveXML();
    }

    protected function addAttributesToElement(DOMElement $element, array $attributes)
    {
        foreach ($attributes as $key => $value)
        {
            $element->setAttribute($key, $value);
        }
    }

    protected function appendDataToElement(DOMElement $element, $data)
    {
        if (!is_array($data))
        {
            $element->nodeValue = htmlspecialchars($data);
            return;
        }

        $sequentialDataArray = array_unique(array_map('is_int', array_keys($data)));
        $isDataSequentialArray = (count($sequentialDataArray) == 1 && $sequentialDataArray[0] === true);

        foreach ($data as $key => $value)
        {
            if (!$isDataSequentialArray)
            {
                if ($key == '_attributes')
                {
                    $this->addAttributesToElement($element, $data[$key]);
                }
                else if ($key == '_value')
                {
                    $this->appendDataToElement($element, $value);
                }
                else
                {
                    $this->addChildNode($element, $key, $value);
                }

                continue;
            }
            
            if (is_array($value))
            {
                if ($element->childNodes->length == 0 && $element->attributes->length == 0) 
                {
                    $this->appendDataToElement($element, $value);
                    continue;
                }

                $this->addChildNodeToParent($element, $element->tagName, $value);
            }
            else
            {
                $key = 'item_' . ($element->childNodes->length + 1);
                $this->addChildNode($element, $key, $value);
            }
        }
    }

    protected function addChildNodeToParent(DOMElement $element, $key, $value)
    {
        $this->addChildNode($element, $key, $value, true);
    }

    protected function addChildNode(DOMElement $element, $key, $value, $addToParent = false)
    {
        $childElement = $this->document->createElement($this->sanitizeNodeKey($key));

        $elementToAppendTo = ($addToParent) ? $element->parentNode : $element;

        $elementToAppendTo->appendChild($childElement);
        $this->appendDataToElement($childElement, $value);
    }

    protected function sanitizeNodeKey($key)
    {
        return preg_replace('/[^a-zA-Z0-9_.-]/', '-', $key);
    }

    protected function getOptionValue(array $options, $key, $defaultValue = null)
    {
        $optionValue = null;

        if (array_key_exists($key, $options))
        {
            $optionValue = $options[$key];
        }
        else if (!is_null($defaultValue))
        {
            $optionValue = $defaultValue;
        }

        return $optionValue;
    }


    // .............. XMLstring to array .............

    public static function convert_to_array($xml, $outputRoot = false)
    {
        $array = self::xmlStringToArray($xml);
        if (!$outputRoot && array_key_exists('@root', $array)) {
            unset($array['@root']);
        }
        return $array;
    }

    protected static function xmlStringToArray($xmlstr)
    {
        $doc = new DOMDocument();
        $doc->loadXML($xmlstr);
        $root = $doc->documentElement;
        $output = self::domNodeToArray($root);
        $output['@root'] = $root->tagName;
        return $output;
    }

    protected static function domNodeToArray($node)
    {
        $output = [];
        switch ($node->nodeType) {
            case XML_CDATA_SECTION_NODE:
            case XML_TEXT_NODE:
                $output = trim($node->textContent);
                break;
            case XML_ELEMENT_NODE:
                for ($i = 0, $m = $node->childNodes->length; $i < $m; $i++) {
                    $child = $node->childNodes->item($i);
                    $v = self::domNodeToArray($child);
                    if (isset($child->tagName)) {
                        $t = $child->tagName;
                        if (!isset($output[$t])) {
                            $output[$t] = [];
                        }
                        $output[$t][] = $v;
                    } elseif ($v || $v === '0') {
                        $output = (string) $v;
                    }
                }
                if ($node->attributes->length && !is_array($output)) { // Has attributes but isn't an array
                    $output = ['@content' => $output]; // Change output into an array.
                }
                if (is_array($output)) {
                    if ($node->attributes->length) {
                        $a = [];
                        foreach ($node->attributes as $attrName => $attrNode) {
                            $a[$attrName] = (string) $attrNode->value;
                        }
                        $output['@attributes'] = $a;
                    }
                    foreach ($output as $t => $v) {
                        if (is_array($v) && count($v) == 1 && $t != '@attributes') {
                            $output[$t] = $v[0];
                        }
                    }
                }
                break;
        }
        return $output;
    }

}