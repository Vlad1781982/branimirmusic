8ST1
Capturing subpattern count = 0
Options: utf
No first char
Need char = ' '
Subject length lower bound = 3
Starting chars: \x00 \x01 \x02 \x03 \x04 \x05 \x06 \x07 \x08 \x0e \x0f 
  \x10 \x11 \x12 \x13 \x14 \x15 \x16 \x17 \x18 \x19 \x1a \x1b \x1c \x1d \x1e 
  \x1f ! " # $ % & ' ( ) * + , - . / 0 1 2 3 4 5 6 7 8 9 : ; < = > ? @ A B C 
  D E F G H I J K L M N O P Q R S T U V W X Y Z [ \ ] ^ _ ` a b c d e f g h 
  i j k l m n o p q r s t u v w x y z { | } ~ \x7f \x80 \x81 \x82 \x83 \x84 
  \x86 \x87 \x88 \x89 \x8a \x8b \x8c \x8d \x8e \x8f \x90 \x91 \x92 \x93 \x94 
  \x95 \x96 \x97 \x98 \x99 \x9a \x9b \x9c \x9d \x9e \x9f \xa1 \xa2 \xa3 \xa4 
  \xa5 \xa6 \xa7 \xa8 \xa9 \xaa \xab \xac \xad \xae \xaf \xb0 \xb1 \xb2 \xb3 
  \xb4 \xb5 \xb6 \xb7 \xb8 \xb9 \xba \xbb \xbc \xbd \xbe \xbf \xc0 \xc1 \xc2 
  \xc3 \xc4 \xc5 \xc6 \xc7 \xc8 \xc9 \xca \xcb \xcc \xcd \xce \xcf \xd0 \xd1 
  \xd2 \xd3 \xd4 \xd5 \xd6 \xd7 \xd8 \xd9 \xda \xdb \xdc \xdd \xde \xdf \xe0 
  \xe1 \xe2 \xe3 \xe4 \xe5 \xe6 \xe7 \xe8 \xe9 \xea \xeb \xec \xed \xee \xef 
  \xf0 \xf1 \xf2 \xf3 \xf4 \xf5 \xf6 \xf7 \xf8 \xf9 \xfa \xfb \xfc \xfd \xfe 
  \xff 
    \x{a2} \x{84}
 0: \x{a2} \x{84}
    A Z
 0: A Z

/a+/8
    a\x{123}aa\>1
 0: aa
    a\x{123}aa\>2
 0: aa
    a\x{123}aa\>3
 0: a
    a\x{123}aa\>4
No match
    a\x{123}aa\>5
Error -24 (bad offset value)
    a\x{123}aa\>6
Error -24 (bad offset value)

/\x{1234}+/iS8I
Capturing subpattern count = 0
Options: caseless utf
First char = \x{1234}
No need char
Subject length lower bound = 1
No starting char list

/\x{1234}+?/iS8I
Capturing subpattern count = 0
Options: caseless utf
First char = \x{1234}
No need char
Subject length lower bound = 1
No starting char list

/\x{1234}++/iS8I
Capturing subpattern count = 0
Options: caseless utf
First char = \x{1234}
No need char
Subject length lower bound = 1
No starting char list

/\x{1234}{2}/iS8I
Capturing subpattern count = 0
Options: caseless utf
First char = \x{1234}
Need char = \x{1234}
Subject length lower bound = 2
No starting char list

/[^\x{c4}]/8DZ
------------------------------------------------------------------
        Bra
        [^\x{c4}]
        Ket
        End
------------------------------------------------------------------
Capturing subpattern count = 0
Options: utf
No first char
No need char

/X+\x{200}/8DZ
------------------------------------------------------------------
        Bra
        X++
        \x{200}
        Ket
        End
------------------------------------------------------------------
Capturing subpattern count = 0
Options: utf
First char = 'X'
Need char = \x{200}

/\R/SI8
Capturing subpattern count = 0
Options: utf
No first char
No need char
Subject length lower bound = 1
Starting chars: \x0a \x0b \x0c \x0d \x85 \xff 

/-- Check bad offset --/

/a/8
    \x{10000}\>1
No match
    \x{10000}ab\>1
 0: a
    \x{10000}ab\>2
No match
    \x{10000}ab\>3
No match
    \x{10000}ab\>4
Error -24 (bad offset value)
    \x{10000}ab\>5
Error -24 (bad offset value)

/���/8
**Failed: character value is ill-formed UTF-32

/\w+\x{C4}/8BZ
------------------------------------------------------------------
        Bra
        \w++
        \x{c4}
        Ket
        End
------------------------------------------------------------------
    a\x{C4}\x{C4}
 0: a\x{c4}

/\w+\x{C4}/8BZT1
------------------------------------------------------------------
        Bra
        \w+
        \x{c4}
        Ket
        End
------------------------------------------------------------------
    a\x{C4}\x{C4}
 0: a\x{c4}\x{c4}
    
/\W+\x{C4}/8BZ
------------------------------------------------------------------
        Bra
        \W+
        \x{c4}
        Ket
        End
------------------------------------------------------------------
    !\x{C4}
 0: !\x{c4}
 
/\W+\x{C4}/8BZT1
------------------------------------------------------------------
        Bra
        \W++
        \x{c4}
        Ket
        End
------------------------------------------------------------------
    !\x{C4}
 0: !\x{c4}

/\W+\x{A1}/8BZ
------------------------------------------------------------------
        Bra
        \W+
        \x{a1}
        Ket
        End
------------------------------------------------------------------
    !\x{A1}
 0: !\x{a1}
 
/\W+\x{A1}/8BZT1
------------------------------------------------------------------
        Bra
        \W+
        \x{a1}
        Ket
        End
------------------------------------------------------------------
    !\x{A1}
 0: !\x{a1}

/X\s+\x{A0}/8BZ
------------------------------------------------------------------
        Bra
        X
        \s++
        \x{a0}
        Ket
        End
------------------------------------------------------------------
    X\x20\x{A0}\x{A0}
 0: X \x{a0}

/X\s+\x{A0}/8BZT1
------------------------------------------------------------------
        Bra
        X
        \s+
        \x{a0}
        Ket
        End
------------------------------------------------------------------
    X\x20\x{A0}\x{A0}
 0: X \x{a0}\x{a0}

/\S+\x{A0}/8BZ
------------------------------------------------------------------
        Bra
        \S+
        \x{a0}
        Ket
        End
------------------------------------------------------------------
    X\x{A0}\x{A0}
 0: X\x{a0}\x{a0}

/\S+\x{A0}/8BZT1
------------------------------------------------------------------
        Bra
        \S++
        \x{a0}
        Ket
        End
------------------------------------------------------------------
    X\x{A0}\x{A0}
 0: X\x{a0}

/\x{a0}+\s!/8BZ
------------------------------------------------------------------
        Bra
        \x{a0}++
        \s
        !
        Ket
        End
------------------------------------------------------------------
    \x{a0}\x20!
 0: \x{a0} !

/\x{a0}+\s!/8BZT1
------------------------------------------------------------------
        Bra
        \x{a0}+
        \s
        !
        Ket
        End
------------------------------------------------------------------
    \x{a0}\x20!
 0: \x{a0} !

/(*UTF)abc/9
Failed: setting UTF is disabled by the application at offset 0

/abc/89
Failed: setting UTF is disabled by the application at offset 0

/-- End of testinput18 --/
                                                                                                                                                                                                                                                                                                                                                                                                                                                                      �:u�
�t�:au�
�t���눋�U��} u�����    �������]��uj �5�� ��� ]Ë�U��3��M;�Л t
@��r�3�]Ë�ԛ ]Ë�U����  �8� 3ŉE�SV�uWV������3�Y�����;��l  j�c  Y���  j�R  Y��u�=@� ��   ���   �6  h� h  ��� W�  ������   h  �� VSf�� �Ȑ ��  ��uhܜ SV�  ����t3�PPPPP�d���V�P  @Y��<v*V�C  �E�� ��+�j��hԜ +�SP�Y  ����u�h̜ �  VW��  ����u������VW�  ����u�h  h�� W�5  ���^SSSSS�y���j���� ��;�tF���tA3��G�����f9Gt@=�  r�S�����P�����P�]�����YP�����PV�Đ �M�_^3�[�N�����j��  Y��tj��  Y��u�=@� uh�   �%���h�   ����YYË�VW3��� �<��� u���� �8h�  �0����� ��tF��$|�3�@_^Ã$���  3����S��� V��� W�>��t�~tW��W�����& Y������ |ܾ�� _���t	�~uP�Ӄ����� |�^[Ë�U��E�4Š� �P� ]�jh(� �s���3�G�}�3�9�� u�����j�8���h�   �b���YY�u�4��� 9t���mj�=���Y��;�u������    3��Pj
�X   Y�]�9u+h�  W��� ��uW�����Y�����    �]���>�W����Y�E������	   �E������j
�)���YË�U��EV�4Š� �> uP�#���Y��uj�(���Y�6�L� ^]�jhH� �~���3ۉ]�j����Y�]�j_�}�;=@� }T���<� 9�tE���@�tP�p  Y���t�E��|(�<� ���� P��� �<� �4������Y�<� ��G��E������	   �E��=����j�Z���YË�U��SV�u�F�Ȁ�3ۀ�u@�  t9�FW�>+���~,WPV�  YP�O"  ��;�u�F��y����F��N ���_�F�f �^��[]Ë�U��V�u��u	V�5   Y�/V�|���Y��t�����F @  tV�L  P�"  Y��Y��3�^]�jhh� �2���3��}�}�j�f���Y�}�3��u�;5@� ��   �<� ��98t^� �@�tVPV����YY3�B�U��<� ���H���t/9UuP�J���Y���t�E��9}u��tP�/���Y���u	E܉}��   F�3��u�<� �4�V��--TEST--
Error suppression for typehints on variadic arguments works
--FILE--
<?php

function test(array... $args) {
    var_dump($args);
}

set_error_handler(function($errno, $errstr) {
    var_dump($errstr);
    return true;
});

test([0], [1], 2);

?>
--EXPECTF--
string(%d) "Argument 3 passed to test() must be of the type array, integer given, called in %s on line %d and defined"
array(3) {
  [0]=>
  array(1) {
    [0]=>
    int(0)
  }
  [1]=>
  array(1) {
    [0]=>
    int(1)
  }
  [2]=>
  int(2)
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    