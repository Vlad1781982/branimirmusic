/-- This set of tests is for UTF-16 and UTF-32 support, and is relevant only to
    the 16- and 32-bit libraries. --/
    
< forbid W 

/ÃÃÃxxx/8?DZSS
**Failed: invalid UTF-8 string cannot be converted to UTF-32

/abc/8
    Ã]
**Failed: invalid UTF-8 string cannot be used as input in UTF mode

/X(\C{3})/8
    X\x{11234}Y
No match
    X\x{11234}YZ
 0: X\x{11234}YZ
 1: \x{11234}YZ

/X(\C{4})/8
    X\x{11234}YZ
No match
    X\x{11234}YZW
 0: X\x{11234}YZW
 1: \x{11234}YZW

/X\C*/8
    XYZabcdce
 0: XYZabcdce

/X\C*?/8
    XYZabcde
 0: X

/X\C{3,5}/8
    Xabcdefg
 0: Xabcde
    X\x{11234}Y
No match
    X\x{11234}YZ
 0: X\x{11234}YZ
    X\x{11234}\x{512}
No match
    X\x{11234}\x{512}YZ
 0: X\x{11234}\x{512}YZ
    X\x{11234}\x{512}\x{11234}Z
 0: X\x{11234}\x{512}\x{11234}Z

/X\C{3,5}?/8
    Xabcdefg
 0: Xabc
    X\x{11234}Y
No match
    X\x{11234}YZ
 0: X\x{11234}YZ
    X\x{11234}\x{512}YZ
 0: X\x{11234}\x{512}Y
    *** Failers
No match
    X\x{11234}
No match

/a\Cb/8
    aXb
 0: aXb
    a\nb
 0: a\x{0a}b

/a\C\Cb/8
    a\x{12257}b
No match
    a\x{12257}\x{11234}b
 0: a\x{12257}\x{11234}b
    ** Failers
No match
    a\x{100}b
No match

/ab\Cde/8
    abXde
 0: abXde

/-- Check maximum character size --/

/\x{ffff}/8DZ
------------------------------------------------------------------
        Bra
        \x{ffff}
        Ket
        End
------------------------------------------------------------------
Capturing subpattern count = 0
Options: utf
First char = \x{ffff}
No need char

/\x{10000}/8DZ
------------------------------------------------------------------
        Bra
        \x{10000}
        Ket
        End
------------------------------------------------------------------
Capturing subpattern count = 0
Options: utf
First char = \x{10000}
No need char

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

/\x{1000}/8DZ
------------------------------------------------------------------
        Bra
        \x{1000}
        Ket
        End
------------------------------------------------------------------
Capturing subpattern count = 0
Options: utf
First char = \x{1000}
No need char

/\x{10000}/8DZ
------------------------------------------------------------------
        Bra
        \x{10000}
        Ket
        End
------------------------------------------------------------------
Capturing subpattern count = 0
Options: utf
First char = \x{10000}
No need char

/\x{100000}/8DZ
------------------------------------------------------------------
        Bra
        \x{100000}
        Ket
        End
------------------------------------------------------------------
Capturing subpattern count = 0
Options: utf
First char = \x{100000}
No need char

/\x{10ffff}/8DZ
------------------------------------------------------------------
        Bra
        \x{10ffff}
        Ket
        End
------------------------------------------------------------------
Capturing subpattern count = 0
Options: utf
First char = \x{10ffff}
No need char

/[\x{ff}]/8DZ
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

/\x80/8DZ
------------------------------------------------------------------
        Bra
        \x80
        Ket
        End
------------------------------------------------------------------
Capturing subpattern count = 0
Options: utf
First char = \x{80}
No need char

/\xff/8DZ
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

/\x{D55c}\x{ad6d}\x{C5B4}/DZ8
------------------------------------------------------------------
        Bra
        \x{d55c}\x{ad6d}\x{c5b4}
        Ket
        End
------------------------------------------------------------------
Capturing subpattern count = 0
Options: utf
First char = \x{d55c}
Need char = \x{c5b4}
    \x{D55c}\x{ad6d}\x{C5B4}
 0: \x{d55c}\x{ad6d}\x{c5b4}

/\x{65e5}\x{672c}\x{8a9e}/DZ8
------------------------------------------------------------------
        Bra
        \x{65e5}\x{672c}\x{8a9e}
        Ket
        End
------------------------------------------------------------------
Capturing subpattern count = 0
Options: utf
First char = \x{65e5}
Need char = \x{8a9e}
    \x{65e5}\x{672c}\x{8a9e}
 0: \x{65e5}\x{672c}\x{8a9e}

/\x{80}/DZ8
------------------------------------------------------------------
        Bra
        \x80
        Ket
        End
------------------------------------------------------------------
Capturing subpattern count = 0
Options: utf
First char = \x{80}
No need char

/\x{084}/DZ8
------------------------------------------------------------------
        Bra
        \x{84}
        Ket
        End
------------------------------------------------------------------
Capturing subpattern count = 0
Options: utf
First char = \x{84}
No need char

/\x{104}/DZ8
------------------------------------------------------------------
        Bra
        \x{104}
        Ket
        End
------------------------------------------------------------------
Capturing subpattern count = 0
Options: utf
First char = \x{104}
No need char

/\x{861}/DZ8
------------------------------------------------------------------
        Bra
        \x{861}
        Ket
        End
------------------------------------------------------------------
Capturing subpattern count = 0
Options: utf
First char = \x{861}
No need char

/\x{212ab}/DZ8
------------------------------------------------------------------
        Bra
        \x{212ab}
        Ket
        End
------------------------------------------------------------------
Capturing subpattern count = 0
Options: utf
First char = \x{212ab}
No need char

/-- This one is here not because it's different to Perl, but because the way
the captured single-byte is displayed. (In Perl it becomes a character, and you
can't tell the difference.) --/

/X(\C)(.*)/8
    X\x{1234}
 0: X\x{1234}
 1: \x{1234}
 2: 
    X\nabc
 0: X\x{0a}abc
 1: \x{0a}
 2: abc

/-- This one is here because Perl gives out a grumbly error message (quite
correc