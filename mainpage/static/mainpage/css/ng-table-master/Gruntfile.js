--TEST--
Serialize() must return a string or NULL
--SKIPIF--
<?php if (!interface_exists('Serializable')) die('skip Interface Serialzable not defined'); ?>
--FILE--
<?php
/* Prototype  : proto string serialize(mixed variable)
 * Description: Returns a string representation of variable (which can later be unserialized) 
 * Source code: ext/standard/var.c
 * Alias to functions: 
 */
/* Prototype  : proto mixed unserialize(string variable_representation)
 * Description: Takes a string representation of variable and recreates it 
 * Source code: ext/standard/var.c
 * Alias to functions: 
 */

Class C implements Serializable {
	public function serialize() { 
		return $this;
	}
	
	public function unserialize($blah) {
	}
}

try {
	var_dump(serialize(new C));
} catch (Exception $e) {
	echo $e->getMessage(). "\n";
}

echo "Done";
?>
--EXPECTF--
C::serialize() must return a string or NULL
Done                                                                                                                                ���I�_����Ϧr+��+HgZ:S+�W��3���h�u�^a;�v|�v��)!���ԕT��8J]�hE�ꧦc8��<� 9�N��bgp+�'C��~9���fGȗP�,Y��T�)�iɿ僆>���V��	F���#F�\�Z���\�/��zW?���Jա0.V��U�#U�;�d�
q�^b����Y-^\7a�f#�@NK0�P��Z�O���1�?�'3��7k��zE�o���oG߯h��=���?�<���^a�ynW������#�؋��?rĮuĮu0�g��	���s�ʫC���h���{��H��\ں�c[�zV��������*����Q��Z[���U��g���ڕ�F�B��i���'�?���TѶ�oc��̥���#�������X����\=]�PK
   ���CS�^�  �  -   org/w3c/css/properties/atsc/Panose1ATSC.class�Vkw��W#k���abId�B�Q�bq��q1���Ә�0���$�Ȟ���<J
}P���mi	] ��j�~���O�O�j��;3(�l�f��ܙ{��Ͼ��?���?؃�4bFE�)5��Y���g�8���y6�R\���i��Q���i�DUł\<GZZ� ��R򸊯��59��\y"�'U<��3rx:�o��3r����fϪx���[�o��;*���y���T5nyx������-�
���n.�S�kD v�e[�~%58%͗��vݸe�Ǫ�3�s)Q�/�Ҕ�Xr
�����G�)WLǳ����Bn°ˮ�{��d����Q�zV)7Z���e�3/x#�{�B�1]�*�#�2ΈQ`r�M	hf}��m�&n�3fᜀ�&"�غ��r��y>�1:�7�E��l��¹����_��x�T������1��7.e���S��g�#W2���fA��ʓ�c�s����#�'V/�x���񉠸�ǌy�_3��4�(ɰ��dP1�td�n?�670���&)���)��%�$�-<&̪!�1;��h����u�-�T�� �RY�ri�Fc�cU�ĚfR��>H����E�M�h��C�Q-y��m�\u
�K&��p��e�1����-H�#����#K���~��Gx����c��c/�U�/�~��X�k:~����~�c��\ņ1������u�tTm�,��l�qS���@���IǛ��8����[:~��lko9N����Y�|v!Hpo�a� nl����U*J?�įx���%��ײP>���;6E@���Ż:~�ߓ���M �O�&ĚϞ��F�Ti�����wp�!�	f��/W�gc�`*�e��7�R���7��&�����#ׄt.���ԃt�pl?�]�՝k�D���s�̇P��}�t,o��?V4m�H����U���k�o��+��+t�u�5$:PL�(pxs�7�3*�`v��o��,�4��Z�v�:�DL��ּ�:*����dx�,��򗆜�c�S]M-�4���H��L3�[���V��Bv�.�Q�7[2�;8;�F�֙^�HwiB�C(�SANʡp܊(z��p'gz����
��^jӚ�;b�S��5֔�X���Pmѷ�F/!�����fjP�h�5h��c�p[R]B__��kز�Ώ�y*q]f]W����K�I %�}�InJ\B��u��C���N^��5\�l�xZ2֥���$_�#����}Wdފ���Sa�t1�n渝Y2�0�{9��9L�n<��,���}X�(���y��q�M|���ZƸ�߃F!~�k>�c���E,��giY��i}�q�Q�=���Xޡ����vޏ���#�!���*�ȫ8��68 V�L��T�a.�`g�XH�M��$��^��;��~>�/=D}>�ә!e7]��G=�H���8��s��s��96z8J�>�����*{.��|���u� ���J��7�+��wioa���?���d�-�m���=5�p��ň�����w��z�{2XR�сGI�Ӵ>SO��e��)��P���cԏ0���8&���B�;�ʃ'�Wۛ���S��M�`��F���n?�� ;���l��ݙM��7%�pti�C��}���F�2���������7���Q�^��H�<�3�0�����%tdO�.�7��
d�=��ǧ�3������
����*�i<:�[�Q�m���lO�Z7����GX���P��j/7@�C��?3�PK
   ���C)׉��  �  +   org/w3c/css/properties/atsc/SlopeATSC.class�V�SW�n�$�H#"(��U���_�X[RQDk+juYV\���A�3���{g��;�8�������:N���ݮ1@��C��{�|�|�;��͟��+�!|�F/�Ӹ��&���F�r}9�\I�K\M�����1���J��i3��.ivS�n���$��p'�.�Ms0�0���0'жdT�@�D՝/>:jM�+�M�X�i9h?m;�F ��M$J�9��M؎5Y_���)c��D�4*ӆk�u�