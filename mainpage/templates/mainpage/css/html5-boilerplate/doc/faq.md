h
    \x{f0}
No match

/Ā{3,4}/8SDZ
------------------------------------------------------------------
        Bra
        \x{100}{3}
        \x{100}?+
        Ket
        End
------------------------------------------------------------------
Capturing subpattern count = 0
Options: utf
First char = \x{100}
Need char = \x{100}
Subject length lower bound = 3
No starting char list
  \x{100}\x{100}\x{100}\x{100\x{100}
 0: \x{100}\x{100}\x{100}

/(\x{100}+|x)/8SDZ
------------------------------------------------------------------
        Bra
        CBra 1
        \x{100}++
        Alt
        x
        Ket
        Ket
        End
------------------------------------------------------------------
Capturing subpattern count = 1
Options: utf
No first char
No need char
Subject length lower bound = 1
Starting chars: x \xff 

/(\x{100}*a|x)/8SDZ
------------------------------------------------------------------
        Bra
        CBra 1
        \x{100}*+
        a
        Alt
        x
        Ket
        Ket
        End
------------------------------------------------------------------
Capturing subpattern count = 1
Options: utf
No first char
No need char
Subject length lower bound = 1
Starting chars: a x \xff 

/(\x{100}{0,2}a|x)/8SDZ
------------------------------------------------------------------
        Bra
        CBra 1
        \x{100}{0,2}+
        a
        Alt
        x
        Ket
        Ket
        End
------------------------------------------------------------------
Capturing subpattern count = 1
Options: utf
No first char
No need char
Subject length lower bound = 1
Starting chars: a x \xff 

/(\x{100}{1,2}a|x)/8SDZ
------------------------------------------------------------------
        Bra
        CBra 1
        \x{100}
        \x{100}{0,1}+
        a
        Alt
        x
        Ket
        Ket
        End
------------------------------------------------------------------
Capturing subpattern count = 1
Options: utf
No first char
No need char
Subject length lower bound = 1
Starting chars: x \xff 

/\x{100}/8DZ
------------------------------------------------------------------
        Bra
        \x{100}
        Ket
        End
------------------------------------------------------------------
Capturing subpattern count = 0
Options: utf
First char = \x{100}
No need char

/a\x{100}\x{101}*/8DZ
------------------------------------------------------------------
        Bra
        a\x{100}
        \x{101}*+
        Ket
        End
------------------------------------------------------------------
Capturing subpattern count = 0
Options: utf
First char = 'a'
Need char = \x{100}

/a\x{100}\x{101}+/8DZ
------------------------------------------------------------------
        Bra
        a\x{100}
        \x{101}++
        Ket
        End
------------------------------------------------------------------
Capturing subpattern count = 0
Options: utf
First char = 'a'
Need char = \x{101}

/[^\x{c4}]/DZ
------------------------------------------------------------------
        Bra
        [^\x{c4}]
        Ket
        End
------------------------------------------------------------------
Capturing subpattern count = 0
No options
No first char
No need char

/[\x{100}]/8DZ
------------------------------------------------------------------
        Bra
        \x{100}
        Ket
        End
------------------------------------------------------------------
Capturing subpattern count = 0
Options: utf
First char = \x{100}
No need char
    \x{100}
 0: \x{100}
    Z\x{100}
 0: \x{100}
    \x{100}Z
 0: \x{100}
    *** Failers
No match

/[\xff]/DZ8
------------------------------------------------------------------
        Bra
        \x{ff}
        Ket
        End
------------------------------------------------------------------
Capturing subpattern count = 0
Options: utf
First char = \x{ff}
No need char
    >\x{ff}<
 0: \x{ff}

/[^\xff]/8DZ
------------------------------------------------------------------
        Bra
        [^\x{ff}]
        Ket
        End
------------------------------------------------------------------
Capturing subpattern count = 0
Options: utf
No first char
No need char

/\x{100}abc(xyz(?1))/8DZ
------------------------------------------------------------------
        Bra
        \x{100}abc
        CBra 1
        xyz
        Recurse
        Ket
        Ket
        End
--------------------------------------------