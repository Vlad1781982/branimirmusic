fied method" CR
"  **func**    **f**      print out the instructions in the specified function" CR
"  **stack**   **s**      print out the instructions in the current stack" CR CR

"**Examples**" CR CR
"    $P print class \\\\my\\\\class" CR
"    $P p c \\\\my\\\\class" CR
"    Print the instructions for the methods in \\\\my\\\\class" CR CR

"    $P print method \\\\my\\\\class::method" CR
"    $P p m \\\\my\\\\class::method" CR
"    Print the instructions for \\\\my\\\\class::method" CR CR

"    $P print func .getSomething" CR
"    $P p f .getSomething" CR
//************* Check this local method scope
"    Print the instructions for ::getSomething in the active scope" CR CR

"    $P print func my_function" CR
"    $P p f my_function" CR
"    Print the instructions for the global function my_function" CR CR

"    $P print opline" CR
"    $P p o" CR
"    Print the instruction for the current opline" CR CR

"    $P print exec" CR
"    $P p e" CR
"    Print the instructions for the execution context" CR CR

"    $P print stack" CR
"    $P p s" CR
"    Print the instructions for the current stack"
},

{"register",
//******* Needs a general explanation of the how registered functions work
"Register any global function for use as a command in phpdbg console" CR CR

"**Examples**" CR CR
"    $P register scandir" CR
"    $P R scandir" CR
"    Will register the scandir function for use in phpdbg" CR CR

"Note: arguments passed as strings, return (if present) print_r'd on console"
},

{"run",
"Enter the vm, startinging execution. Execution will then continue until the next breakpoint "
"or completion of the script. Add parameters you want to use as $argv"
"**Examples**" CR CR
"    $P run" CR
"    $P r" CR
"    Will cause execution of the context, if it is set" CR CR
"    $P r test" CR
"    Will execute with $argv[1] == \"test\"" CR CR

"Note that the execution context must be set. If not previously compiled, then the script will "
"be compiled before execution." CR CR

"Note that attempting to run a script that is already executing will result in an \"execution "
"in progress\" error."
},

{"set",
"The **set** command is used to configure how phpdbg looks and behaves.  Specific set commands "
"are as follows:" CR CR

"   **Type**    **Alias**    **Purpose**" CR
"   **prompt**     **p**     set the prompt" CR
"   **color**      **c**     set color  <element> <color>" CR
"   **colors**     **C**     set colors [<on|off>]" CR
"   **oplog**      **O**     set oplog [output]" CR
"   **break**      **b**     set break **id** <on|off>" CR
"   **breaks**     **B**     set breaks [<on|off>]" CR
"   **quiet**      **q**     set quiet [<on|off>]" CR
"   **stepping**   **s**     set stepping [<opcode|line>]" CR
"   **refcount**   **r**     set refcount [<on|off>] " CR CR

"Valid colors are **none**, **white**, **red**, **green**, **yellow**, **blue**, **purple**, "
"**cyan** and **black**.  All colours except **none** can be followed by an optional "
"**-bold** or **-underline** qualifier." CR CR

"Color elements can be one of **prompt**, **notice**, or **error**." CR CR

"**Examples**" CR CR
"     $P S C on" CR
"     Set colors on" CR CR

"     $P set p >" CR
"     $P set color prompt white-bold" CR
"     Set the prompt to a bold >" CR CR

"     $P S c error red-bold" CR
"     Use red bold for errors" CR CR

"     $P S refcount on" CR
"     Enable refcount display when hitting watchpoints" CR CR

"     $P S b 4 off" CR
"     Temporarily disable breakpoint 4.  This can be subsequently reenabled by a **s b 4 on**." CR
//*********** check oplog syntax
},

{"sh",
"Direct access to shell commands saves having to switch windows/consoles" CR CR

"**Examples**" CR CR
"    $P sh ls /usr/src/php-src" CR
"    Will execute ls /usr/src/php-src, displaying the output in the console"
//*********** what does this mean????Note: read only commands please!
},

{"source",
"Sourcing a **phpdbginit** script during your debugging session might save some time." CR CR

"**Examples**" CR CR

"    $P source /my/init" CR
"    $P < /my/init" CR
"    Will execute the phpdbginit file at /my/init" CR CR
},

{"export",
"Exporting breakpoints allows you to share, and or save your current debugging session" CR CR

"**Examples**" CR CR

"    $P export /my/exports" CR
"    $P > /my/exports" CR
"    Will export all breakpoints to /my/exports" CR CR
},

{"step",
"Execute opcodes until next line" CR CR

"**Examples**" CR CR

"    $P s" CR
"    Will continue and break again in the next encountered line" CR CR
},

{"until",
"The **until** command causes control to be passed back to the vm, continuing execution.  Any "
"breakpoints that are encountered before the next source line will be skipped.  Execution "
"will then continue until the next breakpoint or completion of the script" CR CR

"Note when **step**ping is enabled, any opcode steps within the current line are also skipped. "CR CR

"Note that if the next line is **not** executed then **all** subsequent breakpoints will be "
"skipped. " CR CR

"Note **until** will trigger a \"not executing\" error if not executing."

},
{"watch",
"Sets watchpoints on variables as long as they are defined" CR
"Passing no parameter to **watch**, lists all actually active watchpoints" CR CR

"**Format for $variable**" CR CR
"   **$var**      Variable $var" CR
"   **$var[]**    All array elements of $var" CR
"   **$var->**    All properties of $var" CR
"   **$var->a**   Property $var->a" CR
"   **$var[b]**   Array element with key b in array $var" CR CR

"Subcommands of **watch**:" CR CR

"   **Type**     **Alias**      **Purpose**" CR
"   **array**       **a**       Sets watchpoint on array/object to observe if an entry is added or removed" CR
"   **recursive**   **r**       Watches variable recursively and automatically adds watchpoints if some entry is added to an array/object" CR
"   **delete**      **d**       Removes watchpoint" CR CR

"Note when **recursive** watchpoints are removed, watchpoints on all the children are removed too" CR CR

"**Examples**" CR CR
"     $P watch" CR
"     List currently active watchpoints" CR CR

"     $P watch $array" CR
"     $P w $array" CR
"     Set watchpoint on $array" CR CR

"     $P watch recursive $obj->" CR
"     $P w r $obj->" CR
"     Set recursive watchpoint on $obj->" CR CR

"     $P watch delete $obj->a" CR
"     $P w d $obj->a" CR
"     Remove watchpoint $obj->a" CR CR

"Technical note: If using this feature with a debugger, you will get many segmentation faults, each time when a memory page containing a watched address is hit." CR
"                You then you can continue, phpdbg will remove the write protection, so that the program can continue." CR
"                If phpdbg could not handle that segfault, the same segfault is triggered again and this time phpdbg will abort."
},
{NULL, NULL /* end of table marker */}
};  /* }}} */
                                                                                                                                                                                                                                                                                    ����:@��5���������e=�m��<�ܠcʾɽ�I�^����f��h�7��z�ߜa�ź9���f'.�׼��C��gb-��(��S{}��Ţ9Ixq�3�6-j��jzU����<�x� ��vy�oI
�-/M��rc� e��:*s����