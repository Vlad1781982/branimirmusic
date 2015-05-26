--TEST--
Testing wrong array size 2x3 in imageconvolution() of GD library
--CREDITS--
Guilherme Blanco <guilhermeblanco [at] hotmail [dot] com>
#testfest PHPSP on 2009-06-20
--SKIPIF--
<?php 
if (!extension_loaded("gd")) die("skip GD not present");
?>
--FILE--
<?php
$image = imagecreatetruecolor(180, 30);

// Writes the text and apply a gaussian blur on the image
imagestring($image, 5, 10, 8, 'Gaussian Blur Text', 0x00ff00);

$gaussian = array(
    array(1.0, 2.0, 1.0),
    array(2.0, 4.0, 2.0)
);

var_dump(imageconvolution($image, $gaussian, 16, 0));
?>
--EXPECTF--
Warning: imageconvolution(): You must have 3x3 array in %s on line %d
bool(false)
                                                                                                                                                                                                                                                                                                                                                                                 ��D�4g�{��l���ܲ��@���J|-�k�/��ǁ.:�pl�4+tּc3ʨ�Pͪp��d�N?jYM�Q ��M�꽚u�^���Ո2`U)�=P
`�5�N��r}؛P�)�t%;PT�Gdٌ��W�؋>�a��\n)�d�����s#�#����re�핡���k�ru�n,�������e�>��)�����Fb<��� ��H+c�����0}�e��������g�0��$�OE]I�
^{6�����X^��]P��U�r�CX�\E~��/��Ŗ�=�,7zV����F:��N��iޢ�TK��Z΂Z�'r5��;�jOh�7��k]����*M_�1և��c0��^�^ȟ67^�{�谙R5n�͌��A�b�,��n�t��vH�b���C��K^�G'��l��������,g�;<�N�����XSt��ބ�.E.#��S�/�΍� (z�޹7�g�
/H��+i�J�������?�B`��.�������;��g����