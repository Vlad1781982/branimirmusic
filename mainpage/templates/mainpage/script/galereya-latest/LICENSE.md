--TEST--
Test asort() function : usage variations - sort strings
--SKIPIF--
<?php
if (substr(PHP_OS, 0, 3) == 'WIN') {
  die("skip Output tested contains chars that are not shown the same on windows concole (ESC and co)");
}
--FILE--
<?php
/* Prototype  : bool asort ( array &$array [, int $asort_flags] )
 * Description: Sort an array and maintain index association 
                Elements will be arranged from lowest to highest when this function has completed.
 * Source code: ext/standard/array.c
*/

/*
 * testing asort() by providing different string arrays for $array argument with following flag values
 *  flag value as defualt
 *  SORT_REGULAR - compare items normally
 *  SORT_STRING  - compare items as strings
*/

echo "*** Testing asort() : usage variations ***\n";

$various_arrays = array (
  // group of escape sequences 
  array ("null"=>  null, "NULL" => NULL, "\a" => "\a", "\cx" => "\cx", "\e" => "\e", 
        "\f" => "\f", "\n" =>"\n", "\r" => "\r", "\t" => "\t", "\xhh" => "\xhh", 
        "\ddd" => "\ddd", "\v" => "\v"
        ),

  // array