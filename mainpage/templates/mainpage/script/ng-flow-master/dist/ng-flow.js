The intl extension has particular conventions regarding error reporting.
These conventions are enumerated in this document.

:: The last error is always stored globally.

The global error code can be obtained in userland with intl_get_error_code().
This is a U_* error code defined by ICU, but it does not have necessarily to be
returned obtained after a call to an ICU function. That is to say, the internal
PHP wrapper functions can set these error codes when appropriate. For instance,
in response to bad arguments (e.g. zend_parse_parameters() failure), the PHP
wrapper function should set the global error code to U_ILLEGAL_ARGUMENT_ERROR).

The error code (an integer) can be converter to the corresponding enum name
string in userland with intl_error_name().

The associated message can be obtained with intl_get_error_message(). This is a
message set by the PHP wrapping code, not by ICU. The message should include the
name of the function that failed in order to make debugging easier (though if
you activate warnings with intl.error_level or exceptions with
intl.use_exceptions you get more fine-grained information about where the
error occurred).

The internal PHP code can set the global last error with:
void intl_error_set_code(intl_error* err, UErrorCode err_code TSRMLS_DC);
void intl_error_set_custom_msg(intl_error* err, char* msg, int copyMsg TSRMLS_DC);
void intl_error_set(intl_error* err, UErrorCode code, char* msg, int copyMsg TSRMLS_DC);

and by passing NULL as the first parameter. The last function is a combination
of the first two. If the message is not a static buffer, copyMsg should be 1.
This makes the message string be copied and freed when no longer needed. There's
no way to pass ownership of the string without it being copied. 


:: The last is ALSO stored in the object whose method call triggered the error,
   unless the error is due to bad arguments, in which case only the global error
   should be set

Objects store an intl_error structed in their private data. For instance:
typedef struct {
	zend_object	zo;
	intl_error  err;
	Calendar*	ucal;
} Calendar_object;

The global error and the object error can be SIMULTANEOUSLY set with these
functions:
void intl_errors_set_custom_msg(intl_error* err, char* msg, int copyMsg TSRMLS_DC);
void intl_errors_set_code(intl_error* err, UErrorCode err_code TSRMLS_DC);
void intl_errors_set(intl_error* err, UErrorCode code, char* msg, int copyMsg TSRMLS_DC);

by passing a pointer to the object's intl_error structed as the first parameter.
Node the extra 's' in the functions' names ('errors', not 'error').

Static methods should only set the global error.


:: Intl classes that can be instantiated should provide ::getErrorCode() and
   getErrorMessage() methods

These methods are used to retrieve the error codes stored in the object's
private intl_error structured and mirror the global intl_get_error_code() and
intl_get_error_message().


:: Intl methods and functions should return FALSE on error (even argument
   parsing errors), not NULL. Constructors and factory methods are the
   exception; these should return NULL, not FALSE.

Not that constructors in Intl generally (always?) don't throws exceptions.
They instead destroy the object to that the result of new IntlClass() can
be NULL. This may be surprising.


:: Intl functions and methods should reset the global error before doing
   anything else (even parse the arguments); instance methods should also reset
   the object's private error

Errors should be lost after a function call. This is different from the way
ICU operates, where functions return immediately if an error is set.

Error resetting can be done with:
void intl_error_reset(NULL TSRMLS_DC);				/* reset global error */
void intl_errors_reset(intl_error* err TSRMLS_DC );	/* reset global and object error */

In practice, intl_errors_reset() is not used because most classes have also
plain functions mapped to the same internal functions as their instance methods.
Fetching of the object is done with zend_parse_method_parameters() instead of
directly using getThis(). Therefore, no reference to object is obtained until
the arguments are fully parsed. Without a reference to the object, there's no
way to reset the object's internal error code. Instead, resetting of the
object's internal error code is done upon fetching the object from its zval.

Example:
U_CFUNC PHP_FUNCTION(breakiter_set_text)
{
	/* ... variable declations ... */
	BREAKITER_METHOD_INIT_VARS;			/* macro also resets global error */
	object = getThis();

	if (zend_parse_parameters(ZEND_NUM_ARGS() TSRMLS_CC, "s",
			&text, &text_len) == FAILURE) {
		intl_error_set(NULL, U_ILLEGAL_ARGUMENT_ERROR,
			"breakiter_set_text: bad arguments", 0 TSRMLS_CC);
		RETURN_FALSE;
	}

	/* ... */

	BREAKITER_METHOD_FETCH_OBJECT;		/* macro also resets object's error */

	/* ... */
}

Implementations of ::getErrorCode() and ::getErrorMessage() should not reset the
object's error code.
                                                                                                                                                                                                      A< �http://eashooters.ru/wp-content/uploads/2014/01/favicon.ico)= Uhttp://i.stack.imgur.com/favicon.ico5> mhttps://bits.wikimedia.org/favicon/wikipedia.ico8? shttps://toster.ru/images/favicons/favicon-16x16.png @ Chttp://pyjs.org/favicon.ico=A }http://coffeescript.org/documentation/images/favicon.ico0B chttp://pythonjs.readthedocs.org/favicon.ico#C Ihttp://www.2517.ru/favicon.icoD ?http://vk.com/favicon.ico!E Ehttp://vlady.pro/favicon.ico$F Khttp://resprod.ru/favicon.ico?7VG �-http://static-cache.ru.uaprom.net/favicon.ico?r=d123e6495c10efb69b7108523e1e0cc2 H Chttp://kasta.ru/favicon.icoDI �	http://l-stat.livejournal.net/img/userinfo.gif?v=17080?v=124.6'J Qhttp://worldoftanks.ru/favicon.ico7K qhttp://www.pod-site.ru/static/news/img/favicon.ico"L Ghttp://virtus.pro/favicon.icoVM �-https://img.imgsmail.ru/cloud/img/build/release-30.201503301724/favicon32x32.pngMN �https://ssl.gstatic.com/docs/doclist/images/icon_13_generic_favicon.icoCO �https://docs.djangoproject.com/s/img/favicon.6dbf28c0650e.ico$P Khttp://rmurphey.com/favicon.png)Q Uhttp://italic-studio.com/favicon.icoSR �'https://instagramstatic-a.akamaihd.net/bluebar/f688a03/images/ico/favicon.ico.S _http://www.yesimadesigner.com/favicon.icoIT �https://cssanimation.rocks/assets/images/favicons/favicon-16x16.pngJU �http://davidwalsh.name/wp-content/themes/punky/images/favicon-32.pngQV �#http://developer.telerik.com/wp-content/themes/tdnv2/assets/img/favicon.ico+W Yhttp://caniuse.com/img/favicon-128.png��J  C
   ~   $*06<BHNTZ`flrx~��������������������� &,28>DJPV\bhntz����������������������
"(.4:@FLRX^djpv|�������������������                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
*	 
"