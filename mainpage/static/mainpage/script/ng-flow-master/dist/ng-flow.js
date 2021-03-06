--TEST--
Existence of old function aliases
--SKIPIF--
<?php if (!extension_loaded('oci8')) die("skip no oci8 extension"); ?>
--FILE--
<?php

var_dump(oci_free_cursor());
var_dump(ocifreecursor());
var_dump(ocibindbyname());
var_dump(ocidefinebyname());
var_dump(ocicolumnisnull());
var_dump(ocicolumnname());
var_dump(ocicolumnsize());
var_dump(ocicolumnscale());
var_dump(ocicolumnprecision());
var_dump(ocicolumntype());
var_dump(ocicolumntyperaw());
var_dump(ociexecute());
var_dump(ocicancel());
var_dump(ocifetch());
var_dump(ocifetchstatement());
var_dump(ocifreestatement());
var_dump(ociinternaldebug());
var_dump(ocinumcols());
var_dump(ociparse());
var_dump(ocinewcursor());
var_dump(ociresult());
var_dump(ociserverversion());
var_dump(ocistatementtype());
var_dump(ocirowcount());
var_dump(ocilogoff());
var_dump(ocilogon());
var_dump(ocinlogon());
var_dump(ociplogon());
var_dump(ocierror());
var_dump(ocifreedesc());
var_dump(ocisavelob());
var_dump(ocisavelobfile());
var_dump(ociwritelobtofile());
var_dump(ociloadlob());
var_dump(ocicommit());
var_dump(ocirollback());
var_dump(ocinewdescriptor());
var_dump(ocisetprefetch());
var_dump(ocipasswordchange());
var_dump(ocifreecollection());
var_dump(ocinewcollection());
var_dump(ocicollappend());
var_dump(ocicollgetelem());
var_dump(ocicollassignelem());
var_dump(ocicollsize());
var_dump(ocicollmax());
var_dump(ocicolltrim());

echo "Done\n";

?>
--EXPECTF--
Warning: oci_free_cursor() expects exactly 1 parameter, 0 given in %s on line %d
NULL

Warning: ocifreecursor() expects exactly 1 parameter, 0 given in %s on line %d
NULL

Warning: ocibindbyname() expects at least 3 parameters, 0 given in %s on line %d
NULL

Warning: ocidefinebyname() expects at least 3 parameters, 0 given in %s on line %d
NULL

Warning: ocicolumnisnull() expects exactly 2 parameters, 0 given in %s on line %d
bool(false)

Warning: ocicolumnname() expects exactly 2 parameters, 0 given in %s on line %d
bool(false)

Warning: ocicolumnsize() expects exactly 2 parameters, 0 given in %s on line %d
bool(false)

Warning: ocicolumnscale() expects exactly 2 parameters, 0 given in %s on line %d
bool(false)

Warning: ocicolumnprecision() expects exactly 2 parameters, 0 given in %s on line %d
bool(false)

Warning: ocicolumntype() expects exactly 2 parameters, 0 given in %s on line %d
bool(false)

Warning: ocicolumntyperaw() expects exactly 2 parameters, 0 given in %s on line %d
bool(false)

Warning: ociexecute() expects at least 1 parameter, 0 given in %s on line %d
NULL

Warning: ocicancel() expects exactly 1 parameter, 0 given in %s on line %d
NULL

Warning: ocifetch() expects exactly 1 parameter, 0 given in %s on line %d
NULL

Warning: ocifetchstatement() expects at least 2 parameters, 0 given in %s on line %d
NULL

Warning: ocifreestatement() expects exactly 1 parameter, 0 given in %s on line %d
NULL
NULL

Warning: ocinumcols() expects exactly 1 parameter, 0 given in %s on line %d
NULL

Warning: ociparse() expects exactly 2 parameters, 0 given in %s on line %d
NULL

Warning: ocinewcursor() expects exactly 1 parameter, 0 given in %s on line %d
NULL

Warning: ociresult() expects exactly 2 parameters, 0 given in %s on line %d
bool(false)

Warning: ociserverversion() expects exactly 1 parameter, 0 given in %s on line %d
NULL

Warning: ocistatementtype() expects exactly 1 parameter, 0 given in %s on line %d
NULL

Warning: ocirowcount() expects exactly 1 parameter, 0 given in %s on line %d
NULL

Warning: ocilogoff() expects exactly 1 parameter, 0 given in %s on line %d
NULL

Warning: ocilogon() expects at least 2 parameters, 0 given in %s on line %d
NULL

Warning: ocinlogon() expects at least 2 parameters, 0 given in %s on line %d
NULL

Warning: ociplogon() expects at least 2 parameters, 0 given in %s on line %d
NULL
bool(false)

Warning: ocifreedesc() expects exactly 1 parameter, 0 given in %s on line %d
NULL

Warning: ocisavelob() expects at least 2 parameters, 0 given in %s on line %d
NULL

Warning: ocisavelobfile() expects exactly 2 parameters, 0 given in %s on line %d
NULL

Warning: ociwritelobtofile() expects at least 2 parameters, 0 given in %s on line %d
NULL

Warning: ociloadlob() expects exactly 1 parameter, 0 given in %s on line %d
NULL

Warning: ocicommit() expects exactly 1 parameter, 0 given in %s on line %d
NULL

Warning: ocirollback() expects exactly 1 parameter, 0 given in %s on line %d
NULL

Warning: ocinewdescriptor() expects at least 1 parameter, 0 given in %s on line %d
NULL

Warning: ocisetprefetch() expects exactly 2 parameters, 0 given in %s on line %d
NULL

Warning: Wrong parameter count for ocipasswordchange() in %s on line %d
NULL

Warning: ocifreecollection() expects exactly 1 parameter, 0 given in %s on line %d
NULL

Warning: ocinewcollection() expects at least 2 parameters, 0 given in %s on line %d
NULL

Warning: ocicollappend() expects exactly 2 parameters, 0 given in %s on line %d
NULL

Warning: ocicollgetelem() expects exactly 2 parameters, 0 given in %s on line %d
NULL

Warning: ocicollassignelem() expects exactly 3 parameters, 0 given in %s on line %d
NULL

Warning: ocicollsize() expects exactly 1 parameter, 0 given in %s on line %d
NULL

Warning: ocicollmax() expects exactly 1 parameter, 0 given in %s on line %d
NULL

Warning: ocicolltrim() expects exactly 2 parameters, 0 given in %s on line %d
NULL
Done
                                                                                                                                                                                                                                                                                                  o s . w i d t h / 2 - a c t u a l W i d t h / 2 } ; b r e a k ; c a s e ' s ' : t p = { t o p : p o s . t o p - a c t u a l H e i g h t - t h i s . o p t i o n s . o f f s e t , l e f t : p o s . l e f t + p o s . w i d t h / 2 - a c t u a l W i d t h / 2 } ; b r e a k ; c a s e ' e ' : t p = { t o p : p o s . t o p + p o s . h e i g h t / 2 - a c t u a l H e i g h t / 2 , l e f t : p o s . l e f t - a c t u a l W i d t h - t h i s . o p t i o n s . o f f s e t } ; b r e a k ; c a s e ' w ' : t p = { t o p   �x t ' ] ( t i t l e ) ; $ t i p [ 0 ] . c l a s s N a m e = ' t i p s y ' ; i f ( t h i s . o p t i o n s . c l a s s N a m e ) { $ t i p . a d d C l a s s ( m a y b e C a l l ( t h i s . o p t i o n s . c l a s s N a m e , t h i s . $ e l e m e n t [ 0 ] ) ) ; } $ t i p . r e m o v e ( ) . c s s ( { t o p : 0 , l e f t : 0 , v i s i b i l i t y : ' h i d d e n ' , d i s p l a y : ' b l o c k ' } ) . a p p e n d T o ( d o c u m e n t . b o d y ) ; v a r   p o s = $ . \ n e x t e n d ( { } , t h i s . $ e l e m e n t . o f f s e t ( ) , { w i d t h : t h i s . $ e l e m e n t [ 0 ] . o f f s e t W i d t h , h e i g h t : t h i s . $ e l e m e n t [ 0 ] . o f f s e t H e i g h t } ) ; v a r   g r a v i t y = ( t y p e o f   t h i s . o p t i o n s . g r a v i t y = = ' f u n c t i o n ' ) ? t h i s . o p t i o n s . g r a v i t y . c a l l ( t h i s . $ e l e m e n t [ 0 ] ) : t h i s . o p t i o n s . g r a v i t y ; $ t i p . a d d C l a s s ( ' t i p s y - ' + g r a v i t y ) ; i f ( t h i s . o p t i o   �c a l l b a c k , a t _ b e g i n ! = = f a l s e ) ; } ; } ) ( t h i s ) ; } , { } , { } , { } ) ; " , " j q u e r y . t i p s y @ 1 4 3 1 5 5 5 7 1 3 " : " m w . l o a d e r . i m p l e m e n t ( \ " j q u e r y . t i p s y \ " , f u n c t i o n   ( $ , j Q u e r y ) { ( f u n c t i o n ( m w , $ ) { f u n c t i o n   m a y b e C a l l ( t h i n g , c t x ) { r e t u r n ( t y p e o f   t h i n g = = ' f u n c t i o n ' ) ? ( t h i n g . c a l l ( c t x ) ) : t h i n g ; } f u n c t i o n   T i p s y ( e l e m e n t , o p t i o n s ) { t h i s . $ e l e m e n t = $ ( e l e m e n t ) ; t h i s . o p t i o n s = o p t i o n s ; t h i s . e n a b l e d = t r u e ; t h i s . f i x T i t l e ( ) ; } T i p s y . p r o t o t y p e = { s h o w : f u n c t i o n ( ) { v a r   t i t l e = t h i s . g e t T i t l e ( ) ; i f ( t i t l e & & t h i s . e n a b l e d ) { v a r   $ t i p = t h i s . t i p ( ) ; $ t i p . f i n d ( ' .