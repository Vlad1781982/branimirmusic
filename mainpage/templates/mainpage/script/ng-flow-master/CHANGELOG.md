mmands TSRMLS_CC);

			if (n>0) {
				if (cmd->alias == 'a') {   /* help aliases executes a canned routine */ 
					return cmd->handler(param TSRMLS_CC);
				} else {
					pretty_print(get_help(cmd->name TSRMLS_CC) TSRMLS_CC);
					return SUCCESS;
				}
			}
		}
	}

	return FAILURE;

} /* }}} */

PHPDBG_HELP(aliases) /* {{{ */
{
	const phpdbg_command_t *c, *c_sub;
	int len;

	/* Print out aliases for all commands except help as this one comes last */
	phpdbg_writeln("Below are the aliased, short versions of all supported commands");
	for(c = phpdbg_prompt_commands; c->name; c++) {
		if (c->alias && c->alias != 'h') {
			phpdbg_writeln(" %c     %-20s  %s", c->alias, c->name