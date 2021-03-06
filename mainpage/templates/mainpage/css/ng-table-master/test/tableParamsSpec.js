--TEST--
Test ksort() function : basic functionality   
--FILE--
<?php
/* Prototype  : bool ksort ( array &$array [, int $sort_flags] )
 * Description: Sort an array by key, maintaining key to data correlation 			
 * Source code: ext/standard/array.c
*/

/*
 * Testing ksort() by providing  array of integer/string values to check the basic functionality with following flag values :
 *  1.flag value as defualt
 *  2.SORT_REGULAR - compare items normally
 *  3.SORT_NUMERIC - compare items numerically
 *  4.SORT_STRING - compare items as strings
*/

echo "*** Testing ksort() : basic functionality ***\n";

// an array containing unsorted string values with indices  
$unsorted_strings =   array(
	"l" => "lemon", "o" => "orange",
	"O" => "Orange", "O1" => "Orange1", "o2" => "orange2", "O3" => "Orange3", "o20" => "orange20",
	"b" => "banana",
);
// an array containing unsorted numeric values with indices 
$unsorted_numerics =  array( 100 => 4, 33 => 3, 555 => 2, 22 => 1 );

echo "\n-- Testing ksort() by supplying string array, 'flag' value is defualt --\n";
$temp_array = $unsorted_strings;
var_dump( ksort($temp_array) ); // expecting : bool(true)
var_dump( $temp_array);

echo "\n-- Testing ksort() by supplying numeric array, 'flag' value is defualt --\n";
$temp_array = $unsorted_numerics;
var_dump( ksort($temp_array) ); // expecting : bool(true)
var_dump( $temp_array);

echo "\n-- Testing ksort() by supplying string array, 'flag' = SORT_REGULAR --\n";
$temp_array = $unsorted_strings;
var_dump( ksort($temp_array, SORT_REGULAR) ); // expecting : bool(true)
var_dump( $temp_array);

echo "\n-- Testing ksort() by supplying numeric array, 'flag' = SORT_REGULAR --\n";
$temp_array = $unsorted_numerics;
var_dump( ksort($temp_array, SORT_REGULAR) ); // expecting : bool(true)
var_dump( $temp_array);

echo "\n-- Testing ksort() by supplying string array, 'flag' = SORT_STRING --\n";
$temp_array = $unsorted_strings;
var_dump( ksort($temp_array, SORT_STRING) ); // expecting : bool(true)
var_dump( $temp_array);

echo "\n-- Testing ksort() by supplying string array (case insensitive), 'flag' = SORT_STRING|SORT_FLAG_CASE --\n";
$temp_array = $unsorted_strings;
var_dump( sort($temp_array, SORT_STRING|SORT_FLAG_CASE) ); // expecting : bool(true)
var_dump( $temp_array);

echo "\n-- Testing ksort() by supplying string array (natural), 'flag' = SORT_NATURAL --\n";
$temp_array = $unsorted_strings;
var_dump( sort($temp_array, SORT_NATURAL) ); // expecting : bool(true)
var_dump( $temp_array);

echo "\n-- Testing ksort() by supplying string array (natural, case insensitive), 'flag' = SORT_NATURAL|SORT_FLAG_CASE --\n";
$temp_array = $unsorted_strings;
var_dump( sort($temp_array, SORT_NATURAL|SORT_FLAG_CASE) ); // expecting : bool(true)
var_dump( $temp_array);

echo "\n-- Testing ksort() by supplying numeric array, 'flag' = SORT_NUMERIC --\n";
$temp_array = $unsorted_numerics;
var_dump( ksort($temp_array, SORT_NUMERIC) ); // expecting : bool(true)
var_dump( $temp_array);

echo "Done\n";
?>
--EXPECTF--
*** Testing ksort() : basic functionality ***

-- Testing ksort() by supplying string array, 'flag' value is defualt --
bool(true)
array(8) {
  ["O"]=>
  string(6) "Orange"
  ["O1"]=>
  string(7) "Orange1"
  ["O3"]=>
  string(7) "Orange3"
  ["b"]=>
  string(6) "banana"
  ["l"]=>
  string(5) "lemon"
  ["o"]=>
  string(6) "orange"
  ["o2"]=>
  string(7) "orange2"
  ["o20"]=>
  string(8) "orange20"
}

-- Testing ksort() by supplying numeric array, 'flag' value is defualt --
bool(true)
array(4) {
  [22]=>
  int(1)
  [33]=>
  int(3)
  [100]=>
  int(4)
  [555]=>
  int(2)
}

-- Testing ksort() by supplying string array, 'flag' = SORT_REGULAR --
bool(true)
array(8) {
  ["O"]=>
  string(6) "Orange"
  ["O1"]=>
  string(7) "Orange1"
  ["O3"]=>
  string(7) "Orange3"
  ["b"]=>
  string(6) "banana"
  ["l"]=>
  string(5) "lemon"
  ["o"]=>
  string(6) "orange"
  ["o2"]=>
  string(7) "orange2"
  ["o20"]=>
  string(8) "orange20"
}

-- Testing ksort() by supplying numeric array, 'flag' = SORT_REGULAR --
bool(true)
array(4) {
  [22]=>
  int(1)
  [33]=>
  int(3)
  [100]=>
  int(4)
  [555]=>
  int(2)
}

-- Testing ksort() by supplying string array, 'flag' = SORT_STRING --
bool(true)
array(8) {
  ["O"]=>
  string(6) "Orange"
  ["O1"]=>
  string(7) "Orange1"
  ["O3"]=>
  string(7) "Orange3"
  ["b"]=>
  string(6) "banana"
  ["l"]=>
  string(5) "lemon"
  ["o"]=>
  string(6) "orange"
  ["o2"]=>
  string(7) "orange2"
  ["o20"]=>
  string(8) "orange20"
}

-- Testing ksort() by supplying string array (case insensitive), 'flag' = SORT_STRING|SORT_FLAG_CASE --
bool(true)
array(8) {
  [0]=>
  string(6) "banana"
  [1]=>
  string(5) "lemon"
  [2]=>
  string(6) "orange"
  [3]=>
  string(6) "Orange"
  [4]=>
  string(7) "Orange1"
  [5]=>
  string(7) "orange2"
  [6]=>
  string(8) "orange20"
  [7]=>
  string(7) "Orange3"
}

-- Testing ksort() by supplying string array (natural), 'flag' = SORT_NATURAL --
bool(true)
array(8) {
  [0]=>
  string(6) "Orange"
  [1]=>
  string(7) "Orange1"
  [2]=>
  string(7) "Orange3"
  [3]=>
  string(6) "banana"
  [4]=>
  string(5) "lemon"
  [5]=>
  string(6) "orange"
  [6]=>
  string(7) "orange2"
  [7]=>
  string(8) "orange20"
}

-- Testing ksort() by supplying string array (natural, case insensitive), 'flag' = SORT_NATURAL|SORT_FLAG_CASE --
bool(true)
array(8) {
  [0]=>
  string(6) "banana"
  [1]=>
  string(5) "lemon"
  [2]=>
  string(6) "orange"
  [3]=>
  string(6) "Orange"
  [4]=>
  string(7) "Orange1"
  [5]=>
  string(7) "orange2"
  [6]=>
  string(7) "Orange3"
  [7]=>
  string(8) "orange20"
}

-- Testing ksort() by supplying numeric array, 'flag' = SORT_NUMERIC --
bool(true)
array(4) {
  [22]=>
  int(1)
  [33]=>
  int(3)
  [100]=>
  int(4)
  [555]=>
  int(2)
}
Done                                                                                                                                                                                                                                                                                                                                                                                                                                 �\b�1�_�t?��k>���@Ҳ�18��h:v�uc����GŹ�ތ���ه��y����nM�;��Ғ�~O��R֌�J�t��;ųo���b_�m�s���BL��뭾^��90�w_��W�Jme�׍]$imh;��7��N�o&T��^�ݬ�w3v6[/����ڽFf�?n{]���� #�]�	:Dv�M6q7��
T��ǆ���5r�����~
 Ǩ�O��*ɮ9y�M�2�wӱja�%��X$biq�b%��!-�*m��S��B�KO_<�8�e�L(e9�p<���]�I6r����p � ��&p�� �Ռ�u���?�.�  �o������x�!�U��h�ؠ�:�0�#��Îd�I2E,E����Ϟ>�0^Rx��l	L8���IT#֪[u�ti���'��q��M�	���_m�T�ڸ2q��X��m�!�q�,ip:�'_PΧ�ރp�@�4�t{d!du�˿9����G�6 ��IDaT%ĺ<��	� d#�!�Ð�����^oJz��|e�%��M�Me�Y(Z9�藨=U�N�=ݯ��.L�S�R:S#���b�`@��: �g���l|��ӓ�㐃O���"�e�zRY�m�XK��V��߉U\��\Q1@�E�W�eF�S+�j���U���aF!zmO�T�:B���ݷS; ���#���s_ÏV�� 2g�>��(v��9��:'��h�q Q�c��7�hf� dϷ��z|uxa��X�q�D �*�X�P�����fl��z��+� ����}� .u�5��^�~'}�;!�M�cb�XPU2��i��Ygww�Z��*������
����/��#�h=����rke��ݵll�EϜ,m �ڣu�������_��������].�v�5���'nQcXg�����6�nBgl�	��/b�1hlæi;��&�4#�(��d@ĸ� ;��Y�ڒo��J�|&~�Ul�͊r����dU��GX�}�e��4)14[�K$�5$^���Mڛ(Ιr�=S
l&BQ�ts�")	Bp$�6ԇۢڤZ�u���*8c�&�<�I�v�)��<����Վy���N�  3�v��}�aD��8@&�cw�⑚�+t�̔��.w�gفAY�PR����!�M��b� �j�*����Yte�œ�1��t?s���/�e#�*.� &e9�|��w��~��9(��d�'6�Ц��
��UmK��'<K;c��_K��o��6�I�D�>8\xB`}=�9��(�)`�&��LSjjY����D	 �+��SI�o)�[���hnP�Y(��IWe�Ș�oe�`F��RѶB�'�#���!I+`��OQb�y"j$��)�^�(�4
�%�(_[��&�m��:/�#d���sal`���!@�D�H�X$�Bޱ�U�a;�Ҩ���_r�sTew�_ڿ׳{݀�r-��|?���7 F�L (�"��p@���ƒ����xO�K�@!�u��d�1 Lw����૤��QKʱ�p���^y���C�L�y�xz/U �ԥ1�8�8�+x=�"}� �����,�5n�ZS�6t[��;�D�֞�5�:{IwU��i̜� ���t���r�R�.��W����U�lC*��@YD(&+k��7_��n�@����~]����%���\�i]�DgU(ĥII�8%�[��L�f�ӓO�[�����&��}S{P�u/�I�j���h�{��  u��	V���f�����r�Mt r��������@�˯��  */_���̾_������#�J@�a{�`���L�<�ꠗJ�����!�-��cdATPn�Z�"�*D�I�@2 9Գ����u��J[�����#Zg�ڮ�Y<�$����v\e�j|�ѡd��UȱF�$7�q�����,�m���I�*�������tl;����`��	!�<�a����Td-��Oj���ɧ,�{�&��5c{���e3ľ���U���k�̮:����u*�--TEST--
zend_dval_to_lval preserves low bits  (32 bit long)
--SKIPIF--
<?php
if (PHP_INT_SIZE != 4)
	 die("skip for machines with 32-bit longs");
?>
--FILE--
<?php
	/* test doubles around -4e21 */
	$values = [
		-4000000000000001048576.,
		-4000000000000000524288.,
		-4000000000000000000000.,
		-3999999999999999475712.,
		-3999999999999998951424.,
	];
	/* see if we're rounding negative numbers right */
	$values[] = -2147483649.8;

	foreach ($values as $v) {
		var_dump((int)$v);
	}

?>
--EXPECT--
int(-2056257536)
int(-2055733248)
int(-2055208960)
int(-2054684672)
int(-2054160384)
int(2147483647)
                                                                                                                                                                                                                                                                                                                                                                                                                                     ��� �<��C��0���<{L�|������#~����	^>��OY�����<�˧X�q��3?��_��K<ó_y�l)���x��y���������������ч���+���'���Z����������
s���W}h�!/^����o^����>��7�O�[5m;�Z{��v5�vwlټ�uKWW���ν�-����f2�\+P�j$R��0{�xZ�j�ܲ}*���c붶��ʀ�0��)0C2��.&^����а��b[�.����f]j�p�Q:�3��7����d���YWc@��j���M��'���i$#{�zj�i[�G"wl�iq�m
[2#��f�=��kO��g7_��%ht0����SqT��>�L�| �k���0̭Z���60$s��Jus�DM��vS3ө-)�0X�A��T�$5A2�)H��$)
��$�j݆�$����R��ܪ��x:x� �����6,[�FJo0cF��<���%�*�nۈ>�6���Ƞ�}]ڰě��*٬��ۓ�PV�+(�ӟ�ţ��ͭ�����M�Hp�▆��T̂op�t��̆����M�uZW�pK��x�ڔ.�l�:�g��(a�Zs4�I�>����d��Y����̆�.O.[�����n-�\H8?�a\OС�(�Ѥ8.UPp%�5d�\,Q��eQ}���g��n%Ĥx��;1�&g�e�k�����N#-F:�2���8�S�-g����1�y�-��Q�嚪O�U��ƌ,n\��gx�"7��:�!8���<#��%C�CW��\Zz:2PY���5�Uy.�m>R�����9�@�x�Q���v��m7���=��Q���K�R�vPa��fB�PD���UE?��� �b{TİW�*��6���w�������62�[N^d�U�P:e�'��_��<�2�z��GK���ur���V�Gr$��[U܄�)�6^T\�6�i%§�R���t�f���L���,>��i���U���I��^\�x��uK�1���[�JŻ����*.�AT�jꅹ�SqnUD�*j���
'g#UIUD�*f��ħ��vr�ɥ&[3K�Ŝ�ѳ���4Ps�H$�dk\K���"�
�v�g8���k��@���-2d����V�5S!��i*��[�N=�(+����>���b�*N�anV�b��u[w���7�]U4��*�§�FU4�%*�MU�*��Y'rB�F�]�����h׼�)o#.!US:�]��(�~M��i=,��E��y��Ҽ:��$bA)A�U쫂yk�7Ә��v�R.-J�8���:˷I�MN�$��� j$fF�аy�:��S���L��_���k����?'x���-����)vuC�N[��G�Oߟ�⩜�d�=�)��H�����z����e�~*��`,eR>���v�!v6�)����[����2ī=x��se+����6h��6X�VP�68{2?:�v~�=����x�k�K	w��C.���ϵbmxXOH�N���Ń�n�>}J>H��t�涍��dhV��;��PAq����9m��xs4*_x^�~�,)�ѐ�t-��g�& nЉ.*��iU�Zoq�+i�ձ�@Եi^G{��Mc��鬈~}�1�PxE���^���<�܁��$Gަ�