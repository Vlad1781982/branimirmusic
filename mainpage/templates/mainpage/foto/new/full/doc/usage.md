--TEST--
Test hypot() - basic function test hypot()
--INI--
precision=14
--FILE--
<?php

/* Prototype  : float hypot  ( float $x  , float $y  )
 * Description: Calculate the length of the hypotenuse of a right-angle triangle.
 * Source code: ext/standard/math.c
 */

echo "*** Testing hypot() : basic functionality ***\n";

$valuesy = array(23,
				-23,
				2.345e1,
				-2.345e1,
				0x17,
				027,
				"23",
				"23.45",
				"2.345e1",	
				"23abc",			
				null,
				true,
				false);
					
$valuesx = array(33,
				-33,
				3.345e1,
				-3.345e1,
				0x27,
				037,
				"33",
				"43.45",
				"1.345e1",
				"33abc",				
				null,
				true,
				false);					

for ($i = 0; $i < count($valuesy); $i++) {
	for ($j = 0; $j < count($valuesx); $j++) {	
		echo "\nY:$valuesy[$i] X:$valuesx[$j] ";
		$res = hypot($valuesy[$i], $valuesx[$j]);
		var_dump($res);
	}	
}
?>
===Done===
--EXPECTF--
*** Testing hypot() : basic functionality ***

Y:23 X:33 float(40.224370722238)

Y:23 X:-33 float(40.224370722238)

Y:23 X:33.45 float(40.594365372549)

Y:23 X:-33.45 float(40.594365372549)

Y:23 X:39 float(45.276925690687)

Y:23 X:31 float(38.600518131238)

Y:23 X:33 float(40.224370722238)

Y:23 X:43.45 float(49.162002603637)

Y:23 X:1.345e1 float(26.643995571235)

Y:23 X:33abc 
Notice: A non well formed numeric value encountered in %s on line %d
float(40.224370722238)

Y:23 X: float(23)

Y:23 X:1 float(23.021728866443)

Y:23 X: float(23)

Y:-23 X:33 float(40.224370722238)

Y:-23 X:-33 float(40.224370722238)

Y:-23 X:33.45 float(40.594365372549)

Y:-23 X:-33.45 float(40.594365372549)

Y:-23 X:39 float(45.276925690687)

Y:-23 X:31 float(38.600518131238)

Y:-23 X:33 float(40.224370722238)

Y:-23 X:43.45 float(49.162002603637)

Y:-23 X:1.345e1 float(26.643995571235)

Y:-23 X:33abc 
Notice: A non well formed numeric value encountered in %s on line %d
float(40.224370722238)

Y:-23 X: float(23)

Y:-23 X:1 float(23.021728866443)

Y:-23 X: float(23)

Y:23.45 X:33 float(40.483360779461)

Y:23.45 X:-33 float(40.483360779461)

Y:23.45 X:33.45 float(40.851009779441)

Y:23.45 X:-33.45 float(40.851009779441)

Y:23.45 X:39 float(45.507169764774)

Y:23.45 X:31 float(38.870329301409)

Y:23.45 X:33 float(40.483360779461)

Y:23.45 X:43.45 float(49.374132903779)

Y:23.45 X:1.345e1 float(27.033405260899)

Y:23.45 X:33abc 
Notice: A non well formed numeric value encountered in %s on line %d
float(40.483360779461)

Y:23.45 X: float(23.45)

Y:23.45 X:1 float(23.471312276905)

Y:23.45 X: float(23.45)

Y:-23.45 X:33 float(40.483360779461)

Y:-23.45 X:-33 float(40.483360779461)

Y:-23.45 X:33.45 float(40.851009779441)

Y:-23.45 X:-33.45 float(40.851009779441)

Y:-23.45 X:39 float(45.507169764774)

Y:-23.45 X:31 float(38.870329301409)

Y:-23.45 X:33 float(40.483360779461)

Y:-23.45 X:43.45 float(49.374132903779)

Y:-23.45 X:1.345e1 float(27.033405260899)

Y:-23.45 X:33abc 
Notice: A non well formed numeric value encountered in %s on line %d
float(40.483360779461)

Y:-23.45 X: float(23.45)

Y:-23.45 X:1 float(23.471312276905)

Y:-23.45 X: float(23.45)

Y:23 X:33 float(40.224370722238)

Y:23 X:-33 float(40.224370722238)

Y:23 X:33.45 float(40.594365372549)

Y:23 X:-33.45 float(40.594365372549)

Y:23 X:39 float(45.276925690687)

Y:23 X:31 float(38.600518131238)

Y:23 X:33 float(40.224370722238)

Y:23 X:43.45 float(49.162002603637)

Y:23 X:1.345e1 float(26.643995571235)

Y:23 X:33abc 
Notice: A non well formed numeric value encountered in %s on line %d
float(40.224370722238)

Y:23 X: float(23)

Y:23 X:1 float(23.021728866443)

Y:23 X: float(23)

Y:23 X:33 float(40.224370722238)

Y:23 X:-33 float(40.224370722238)

Y:23 X:33.45 float(40.594365372549)

Y:23 X:-33.45 float(40.594365372549)

Y:23 X:39 float(45.276925690687)

Y:23 X:31 float(38.600518131238)

Y:23 X:33 float(40.224370722238)

Y:23 X:43.45 float(49.162002603637)

Y:23 X:1.345e1 float(26.643995571235)

Y:23 X:33abc 
Notice: A non well formed numeric value e