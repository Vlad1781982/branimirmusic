 their format:" CR
"     *  **omitted**" CR
"     *  **address**      **0x** followed by a hex string" CR
"     *  **number**       an optionally signed number" CR
"     *  **method**       a valid **Class::methodName** expression" CR
"     *  **func#op**      a valid **Function name** follow by # and an integer" CR
"     *  **method#op**    a valid **Class::methodName** follow by # and an integer" CR
"     *  **string**       a general string" CR
"     *  **function**     a valid **Function name**" CR
"     *  **file:line**    a valid **filename** follow by : and an integer" CR CR

"In some cases the type of the argument enables the second keyword to be omitted." CR CR

"Type **help** for an overview of all commands and type **help <command>** to get detailed help "
"on any specific command." CR CR

"**Valid Examples**" CR CR

"     $P quit" CR
"     $P q" CR
"     Quit the debugger" CR CR

"     $P ev $total[2]" CR
"     Evaluate and print the variable $total[2] in the current stack frame" CR
"    " CR
"     $P break 200" CR
"     $P b my_source.php:200" CR
"     Break at line 200 in the current source and in file **my_source.php**. " CR CR

"     $P b @ ClassX::get_args if $arg[0] == \"fred\"" CR
"     $P b ~ 3" CR
"     Break at ClassX::get_args() if $arg[0] == \"fred\" and delete breakpoint 3" CR CR

"**Examples of invalid commands**" CR

"     $P #This is a comment" CR
"     Comments introduced by the **#** character are only allowed in **phpdbginit** script files."
},

/******************************** Help Codicils ********************************/
{"aliases!", CR
"Note that aliases can be used for either command or sub-command keywords or both, so **info b** "
"is a synomyn for 