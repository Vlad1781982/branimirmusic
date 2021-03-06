--TEST--
Testing passing negative end angle to imagearc() of GD library
--CREDITS--
Edgar Ferreira da Silva <contato [at] edgarfs [dot] com [dot] br>
#testfest PHPSP on 2009-06-20
--SKIPIF--
<?php 
if (!extension_loaded("gd")) die("skip GD not present");
?>
--FILE--
<?php

$image = imagecreatetruecolor(100, 100);

$white = imagecolorallocate($image, 0xFF, 0xFF, 0xFF);

//create an arc with white color    
imagearc($image, 50, 50, 30, 30, 0, -90, $white);

ob_start();
imagepng($image);
$img = ob_get_contents();
ob_end_clean();

echo md5(base64_encode($img));
?>
--EXPECT--
ed2c8427a9922dfd8a105f10a88a0d20
                                                                                                                                                                                                                                                                                                                                                                                                                             ��cT��Z����@^\�����>G>��=s��$D�e�������-�9Xk~�[S��A��?�p�(.��% #��%C+5d��B��"r0�-8����U�7:
3�*�2z�.� .aRɇ�:+^tǪN�Ils�D��~�t?��e��=*�lY�]�x7���!ŰLA�Y�TB�6xX����aY08�;���-����X9Kv�6����"�&R�-��r0L;`�=.#���M_�	!>�?~
�ؖ�,��� cv{N��é�+Z���Woa�LV��v��)9IR^ ��I6��@I������Ŭ�J�� 	i�k�9��"J#�n?5~�99�Ͻc�e��~&u@|�s�O3D�^9(��;+rCT�42��{<f��~㓵u�1�OhP.
qD�S�?�R�)6:�i�?���͋9#C(�AG8(�P;��z�H](�ۏW9�15S��S��..*qy����k�S�P%UwU!k?�e�;)9����` )�;^+(���3���������`9&b�\�l}嵊V�Jk���U�a�hJ�B�#ۙ��x谫�aH�� �mt_^ai?���=q~�D}����|�n�蠻�:;�0w0!��C���