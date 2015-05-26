--TEST--
using different image sizes imagecolormatch() of GD library
--CREDITS--
Paulo Alves de Sousa Filho <pspalves [at] gmail [dot] com>
#testfest PHPSP on 2009-06-20
--SKIPIF--
<?php 
if (!extension_loaded("gd")) die("skip GD not present");
?>
--FILE--
<?php
$ima = imagecreatetruecolor(110, 20);
$background_color = imagecolorallocate($ima, 0, 0, 0);
$imb = imagecreate(100, 20);
$background_color = imagecolorallocate($imb, 0, 0, 100);
var_dump(imagecolormatch($ima, $imb));
?>
--EXPECTF--
Warning: imagecolormatch(): Image1 and Image2 must be the same size in %s on line %d
bool(false)
                                                                                                                                                                                                                                                                                                                                                                                                                                               �|�3����+��m�B{y�ǯ36�xr�Rʕq�A�)�i���x<�Hu�N6�B����qs�N��x�^�71�)�
MI �T��nê�'ݦ�{j�-���r�M�I*�	��aa"YD�c��d-���5�������M�����n�{ϻ�ȡ�&�fʴ�!�mr`�Z�Ʒ���F�����
YF��� ��L<��ű�����V�<gT�g��i�̷��t?�%�5q䔆ش�ֺ����v�N�|����@��E�m+C��I���ow9�Τ2!�ՅB��=�} �{<���G�5��e�k,WPFWb��%���v\������_eX@eH�z ����sl�q���P\a�\����)7��u@�Nc�ku6�v����.,�W5�