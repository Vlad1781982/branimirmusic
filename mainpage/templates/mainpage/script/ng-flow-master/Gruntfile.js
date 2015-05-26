 the **clean** command, "
"but **help cl** will list the summary for **clean** and **clear**." CR CR

"Type **help aliases** to show a full alias list, including any registered phpdginit functions" CR
"Type **help syntax** for a general introduction to the command syntax." CR
"Type **help options** for a list of phpdbg command line options." CR
"Type **help phpdbginit** to show how to customise the debugger environment."
},
{"options", CR
"Below are the command line options supported by phpdbg" CR CR
                          /* note the extra 4 space index in because of the extra **** */
"**Command Line Options and Flags**" CR
"  **Option**  **Example Argument**    **Description**" CR
"  **-c**      **-c**/my/php.ini       Set php.ini file to load" CR
"  **-d**      **-d**memory_limit=4G   Set a php.ini directive" CR
"  **-n**                          Disable default php.ini" CR
"  **-q**                          Supress welcome banner" CR
"  **-v**                          Enable oplog output" CR
"  **-s**                          Enable stepping" CR
"  **-b**                          Disable colour" CR
"  **-i**      **-i**my.init           Set .phpdbginit file" CR
"  **-I**                          Ignore default .phpdbginit" CR
"  **-O**      **-O**my.oplog          Sets oplog output file" CR
"  **-r**                          Run execution context" CR
"  **-rr**                         Run execution context and quit after execution" CR
"  **-E**                          Enable step through eval, careful!" CR
"  **-S**      **-S**cli               Override SAPI name, careful!" CR
"  **-l**      **-l**4000              Setup remote console ports" CR
"  **-a**      **-a**192.168.0.3       Setup remote console bind address" CR
"  **-V**                          Print version number" CR
"  **--**      **--** arg1 arg2        Use to delimit phpdbg arguments and php $argv; append any $argv "
"argument after it" CR CR

"**Remote Console Mode**" CR CR

"This mode is enabled by specifying the **-a** option.  Phpdbg will bind only to the loopback "
"interface by default, and this can only be overridden by explicitly setting the remote console "
"bind address using the **-a** option. If **-a** is specied without an argument, then phpdbg "