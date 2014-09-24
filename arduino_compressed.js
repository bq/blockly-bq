Blockly.Arduino=new Blockly.Generator("Arduino");


Blockly.LANG_CATEGORY_PROCEDURES='Procedures';
Blockly.LANG_CATEGORY_VARIABLES='Variables';
Blockly.LANG_CATEGORY_ADVANCED='Advanced';
Blockly.LANG_CATEGORY_BQ='bq bloqs';
Blockly.LANG_CATEGORY_ZUM='zum';
Blockly.LANG_CATEGORY_SERVO='Servo';

Blockly.LANG_COLOUR_ZUM='336';
Blockly.LANG_COLOUR_SERVO='30';
Blockly.LANG_COLOUR_TEXT='200';
Blockly.LANG_COLOUR_LOGIC='120';
Blockly.LANG_COLOUR_BQ='10';
Blockly.LANG_COLOUR_CONTROL='80';
Blockly.LANG_COLOUR_MATH='180';
Blockly.LANG_COLOUR_ADVANCED='260';
Blockly.LANG_COLOUR_VARIABLES='300';
Blockly.LANG_COLOUR_PROCEDURES='320';


Blockly.LANG_TEXT_TRIM_TITLE_SIDE='SIDE';
Blockly.LANG_TEXT_TRIM_TITLE_SIDES='SIDES';


    // Misc
    Blockly.MSG_VAR_DECLARE = 'Declare';
    Blockly.MSG_VAR_AS = 'as';
    Blockly.MSG_VAR_NUMBER = 'Number';
    Blockly.MSG_VAR_VALUE = 'value';

    // Context menus.
    Blockly.MSG_DUPLICATE_BLOCK = 'Duplicate';
    Blockly.MSG_REMOVE_COMMENT = 'Remove Comment';
    Blockly.MSG_ADD_COMMENT = 'Add Comment';
    Blockly.MSG_EXTERNAL_INPUTS = 'External Inputs';
    Blockly.MSG_INLINE_INPUTS = 'Inline Inputs';
    Blockly.MSG_DELETE_BLOCK = 'Delete Block';
    Blockly.MSG_DELETE_X_BLOCKS = 'Delete %1 Blocks';
    Blockly.MSG_COLLAPSE_BLOCK = 'Collapse Block';
    Blockly.MSG_EXPAND_BLOCK = 'Expand Block';
    Blockly.MSG_DISABLE_BLOCK = 'Disable Block';
    Blockly.MSG_ENABLE_BLOCK = 'Enable Block';
    Blockly.MSG_HELP = 'Help';

    // Variable renaming.
    Blockly.MSG_CHANGE_VALUE_Field = 'Change value:';
    Blockly.MSG_NEW_VARIABLE = 'New variable...';
    Blockly.MSG_NEW_VARIABLE_Field = 'New variable name:';
    Blockly.MSG_RENAME_VARIABLE = 'Rename variable...';
    Blockly.MSG_RENAME_VARIABLE_Field = 'Rename all %1 variables to:';

    // Toolbox.
    Blockly.MSG_VARIABLE_CATEGORY = 'Variables';
    Blockly.MSG_PROCEDURE_CATEGORY = 'Procedures';

    // Colour Blocks.
    Blockly.LANG_CATEGORY_COLOUR = 'Colour';
    Blockly.LANG_COLOUR_PICKER_HELPURL = '';
    Blockly.LANG_COLOUR_PICKER_TOOLTIP = 'Choose a colour form the palette.';

    Blockly.LANG_COLOUR_RGB_HELPURL = '';
    Blockly.LANG_COLOUR_RGB_Field = 'colour with';
    Blockly.LANG_COLOUR_RGB_RED = 'red';
    Blockly.LANG_COLOUR_RGB_GREEN = 'green';
    Blockly.LANG_COLOUR_RGB_BLUE = 'blue';
    Blockly.LANG_COLOUR_RGB_TOOLTIP = 'Create a colour with the specified amount of red, green and blue. All values must be between 0.0 and 1.0.';

    Blockly.LANG_COLOUR_BLEND_Field = 'blend';
    Blockly.LANG_COLOUR_BLEND_COLOUR1 = 'colour 1';
    Blockly.LANG_COLOUR_BLEND_COLOUR2 = 'colour 2';
    Blockly.LANG_COLOUR_BLEND_RATIO = 'ratio';
    Blockly.LANG_COLOUR_BLEND_TOOLTIP = 'Blends two colours together with a given ratio (0.0 - 1.0).';

    // Control Blocks.
    Blockly.LANG_CATEGORY_CONTROLS = 'Control';
    Blockly.LANG_CONTROLS_IF_HELPURL = '';
    Blockly.LANG_CONTROLS_IF_TOOLTIP_1 = 'If a value is true, then do some statements.';
    Blockly.LANG_CONTROLS_IF_TOOLTIP_2 = 'If a value is true, then do the first block of statements. Otherwise, do the second block of statements.';
    Blockly.LANG_CONTROLS_IF_TOOLTIP_3 = 'If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements.';
    Blockly.LANG_CONTROLS_IF_TOOLTIP_4 = 'If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements. If none of the values are true, do the last block of statements.';
    Blockly.LANG_CONTROLS_IF_MSG_IF = 'if';
    Blockly.LANG_CONTROLS_IF_MSG_ELSEIF = 'else if';
    Blockly.LANG_CONTROLS_IF_MSG_ELSE = 'else';
    Blockly.LANG_CONTROLS_IF_MSG_THEN = 'do';

    Blockly.LANG_CONTROLS_SWITCH_HELPURL = '';
    Blockly.LANG_CONTROLS_SWITCH_TOOLTIP_1 = 'Use the switch statement to select one of many blocks of code to be executed.';
    Blockly.LANG_CONTROLS_SWITCH_TOOLTIP_2 = 'Use the switch statement to select one of many blocks of code to be executed.';
    Blockly.LANG_CONTROLS_SWITCH_TOOLTIP_3 = 'Use the switch statement to select one of many blocks of code to be executed.';
    Blockly.LANG_CONTROLS_SWITCH_TOOLTIP_4 = 'Use the switch statement to select one of many blocks of code to be executed.';
    Blockly.LANG_CONTROLS_SWITCH_SWITCH_TOOLTIP = 'The switch expression is evaluated once';
    Blockly.LANG_CONTROLS_SWITCH_CASE_TOOLTIP = 'case';
    Blockly.LANG_CONTROLS_SWITCH_DEFAULT_TOOLTIP = 'The default keyword specifies the code to run if there is no case match';

    Blockly.LANG_CONTROLS_IF_IF_Field_IF = 'if';
    Blockly.LANG_CONTROLS_IF_IF_TOOLTIP = 'Add, remove, or reorder sections to reconfigure this if block.';

    Blockly.LANG_CONTROLS_IF_ELSEIF_Field_ELSEIF = 'else if';
    Blockly.LANG_CONTROLS_IF_ELSEIF_TOOLTIP = 'Add a condition to the if block.';

    Blockly.LANG_CONTROLS_IF_ELSE_Field_ELSE = 'else';
    Blockly.LANG_CONTROLS_IF_ELSE_TOOLTIP = 'Add a final, catch-all condition to the if block.';

    Blockly.LANG_CONTROLS_REPEAT_HELPURL = '';
    Blockly.LANG_CONTROLS_REPEAT_Field_REPEAT = 'repeat';
    Blockly.LANG_CONTROLS_REPEAT_Field_TIMES = 'times';
    Blockly.LANG_CONTROLS_REPEAT_INPUT_DO = 'do';
    Blockly.LANG_CONTROLS_REPEAT_TOOLTIP = 'Do some statements several times.';

    Blockly.LANG_CONTROLS_WHILEUNTIL_HELPURL = '';
    Blockly.LANG_CONTROLS_WHILEUNTIL_Field_REPEAT = 'repeat';
    Blockly.LANG_CONTROLS_WHILEUNTIL_INPUT_DO = 'do';
    Blockly.LANG_CONTROLS_WHILEUNTIL_OPERATOR_WHILE = 'while';
    Blockly.LANG_CONTROLS_WHILEUNTIL_OPERATOR_UNTIL = 'until';
    Blockly.LANG_CONTROLS_WHILEUNTIL_TOOLTIP_WHILE = 'While a value is true, then do some statements.';
    Blockly.LANG_CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL = 'While a value is false, then do some statements.';

    Blockly.LANG_CONTROLS_FOR_HELPURL = '';
    Blockly.LANG_CONTROLS_FOR_INPUT_WITH = 'count with';
    Blockly.LANG_CONTROLS_FOR_INPUT_VAR = 'x';
    Blockly.LANG_CONTROLS_FOR_INPUT_FROM = 'from';
    Blockly.LANG_CONTROLS_FOR_INPUT_TO = 'to';
    Blockly.LANG_CONTROLS_FOR_INPUT_DO = 'do';
    Blockly.LANG_CONTROLS_FOR_TOOLTIP = 'Count from a start number to an end number. For each count, set the current count number to variable %1, and then do some statements.';

    Blockly.LANG_CONTROLS_FOREACH_HELPURL = '';
    Blockly.LANG_CONTROLS_FOREACH_INPUT_ITEM = 'for each item';
    Blockly.LANG_CONTROLS_FOREACH_INPUT_VAR = 'x';
    Blockly.LANG_CONTROLS_FOREACH_INPUT_INLIST = 'in list';
    Blockly.LANG_CONTROLS_FOREACH_INPUT_DO = 'do';
    Blockly.LANG_CONTROLS_FOREACH_TOOLTIP = 'For each item in a list, set the item to variable %1, and then do some statements.';

    Blockly.LANG_CONTROLS_FLOW_STATEMENTS_HELPURL = '';
    Blockly.LANG_CONTROLS_FLOW_STATEMENTS_INPUT_OFLOOP = 'of loop';
    Blockly.LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK = 'break out';
    Blockly.LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE = 'continue with next iteration';
    Blockly.LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK = 'Break out of the containing loop.';
    Blockly.LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE = 'Skip the rest of this loop, and continue with the next iteration.';
    Blockly.LANG_CONTROLS_FLOW_STATEMENTS_WARNING = 'Warning: This block may only be used within a loop.';

    // Logic Blocks.
    Blockly.LANG_CATEGORY_LOGIC = 'Logic';
    Blockly.LANG_LOGIC_COMPARE_HELPURL = '';
    Blockly.LANG_LOGIC_COMPARE_TOOLTIP_EQ = 'Returns true if both inputs equal each other.';
    Blockly.LANG_LOGIC_COMPARE_TOOLTIP_NEQ = 'Returns true if both inputs are not equal to each other.';
    Blockly.LANG_LOGIC_COMPARE_TOOLTIP_LT = 'Returns true if the first input is smaller than the second input.';
    Blockly.LANG_LOGIC_COMPARE_TOOLTIP_LTE = 'Returns true if the first input is smaller than or equal to the second input.';
    Blockly.LANG_LOGIC_COMPARE_TOOLTIP_GT = 'Returns true if the first input is greater than the second input.';
    Blockly.LANG_LOGIC_COMPARE_TOOLTIP_GTE = 'Returns true if the first input is greater than or equal to the second input.';

    Blockly.LANG_LOGIC_OPERATION_HELPURL = '';
    Blockly.LANG_LOGIC_OPERATION_AND = 'and';
    Blockly.LANG_LOGIC_OPERATION_OR = 'or';
    Blockly.LANG_LOGIC_OPERATION_TOOLTIP_AND = 'Returns true if both inputs are true.';
    Blockly.LANG_LOGIC_OPERATION_TOOLTIP_OR = 'Returns true if either inputs are true.';

    Blockly.LANG_LOGIC_NEGATE_HELPURL = '';
    Blockly.LANG_LOGIC_NEGATE_INPUT_NOT = 'not';
    Blockly.LANG_LOGIC_NEGATE_TOOLTIP = 'Returns true if the input is false. Returns false if the input is true.';

    Blockly.LANG_LOGIC_BOOLEAN_HELPURL = '';
    Blockly.LANG_LOGIC_BOOLEAN_TRUE = 'true';
    Blockly.LANG_LOGIC_BOOLEAN_FALSE = 'false';
    Blockly.LANG_LOGIC_BOOLEAN_TOOLTIP = 'Returns either true or false.';

    Blockly.LANG_LOGIC_NULL_HELPURL = '';
    Blockly.LANG_LOGIC_NULL = 'null';
    Blockly.LANG_LOGIC_NULL_TOOLTIP = 'Returns null.';

    // Math Blocks.
    Blockly.LANG_CATEGORY_MATH = 'Math';
    Blockly.LANG_MATH_NUMBER_HELPURL = '';
    Blockly.LANG_MATH_NUMBER_TOOLTIP = 'A number.';

    Blockly.LANG_MATH_ARITHMETIC_HELPURL = '';
    Blockly.LANG_MATH_ARITHMETIC_TOOLTIP_ADD = 'Returns the sum of the two numbers.';
    Blockly.LANG_MATH_ARITHMETIC_TOOLTIP_MINUS = 'Returns the difference of the two numbers.';
    Blockly.LANG_MATH_ARITHMETIC_TOOLTIP_MULTIPLY = 'Returns the product of the two numbers.';
    Blockly.LANG_MATH_ARITHMETIC_TOOLTIP_DIVIDE = 'Returns the quotient of the two numbers.';
    Blockly.LANG_MATH_ARITHMETIC_TOOLTIP_POWER = 'Returns the first number raised to the power of the second number.';

    Blockly.LANG_MATH_CHANGE_HELPURL = '';
    Blockly.LANG_MATH_CHANGE_Field_CHANGE = 'change';
    Blockly.LANG_MATH_CHANGE_Field_ITEM = 'item';
    Blockly.LANG_MATH_CHANGE_INPUT_BY = 'by';
    Blockly.LANG_MATH_CHANGE_TOOLTIP = 'Add a number to variable %1.';

    Blockly.LANG_MATH_SINGLE_HELPURL = '';
    Blockly.LANG_MATH_SINGLE_OP_ROOT = 'square root';
    Blockly.LANG_MATH_SINGLE_OP_ABSOLUTE = 'absolute';
    Blockly.LANG_MATH_SINGLE_TOOLTIP_ROOT = 'Returns the square root of a number.';
    Blockly.LANG_MATH_SINGLE_TOOLTIP_ABS = 'Returns the absolute value of a number.';
    Blockly.LANG_MATH_SINGLE_TOOLTIP_NEG = 'Returns the negation of a number.';
    Blockly.LANG_MATH_SINGLE_TOOLTIP_LN = 'Returns the natural logarithm of a number.';
    Blockly.LANG_MATH_SINGLE_TOOLTIP_LOG10 = 'Returns the base 10 logarithm of a number.';
    Blockly.LANG_MATH_SINGLE_TOOLTIP_EXP = 'Returns e to the power of a number.';
    Blockly.LANG_MATH_SINGLE_TOOLTIP_POW10 = 'Returns 10 to the power of a number.';

    Blockly.LANG_MATH_ROUND_HELPURL = '';
    Blockly.LANG_MATH_ROUND_TOOLTIP = 'Round a number up or down.';
    Blockly.LANG_MATH_ROUND_OPERATOR_ROUND = 'round';
    Blockly.LANG_MATH_ROUND_OPERATOR_ROUNDUP = 'round up';
    Blockly.LANG_MATH_ROUND_OPERATOR_ROUNDDOWN = 'round down';

    Blockly.LANG_MATH_TRIG_HELPURL = '';
    Blockly.LANG_MATH_TRIG_TOOLTIP_SIN = 'Returns the sine of a degree.';
    Blockly.LANG_MATH_TRIG_TOOLTIP_COS = 'Returns the cosine of a degree.';
    Blockly.LANG_MATH_TRIG_TOOLTIP_TAN = 'Returns the tangent of a degree.';
    Blockly.LANG_MATH_TRIG_TOOLTIP_ASIN = 'Returns the arcsine of a number.';
    Blockly.LANG_MATH_TRIG_TOOLTIP_ACOS = 'Returns the arccosine of a number.';
    Blockly.LANG_MATH_TRIG_TOOLTIP_ATAN = 'Returns the arctangent of a number.';

    Blockly.LANG_MATH_ONLIST_HELPURL = '';
    Blockly.LANG_MATH_ONLIST_INPUT_OFLIST = 'of list';
    Blockly.LANG_MATH_ONLIST_OPERATOR_SUM = 'sum';
    Blockly.LANG_MATH_ONLIST_OPERATOR_MIN = 'min';
    Blockly.LANG_MATH_ONLIST_OPERATOR_MAX = 'max';
    Blockly.LANG_MATH_ONLIST_OPERATOR_AVERAGE = 'average';
    Blockly.LANG_MATH_ONLIST_OPERATOR_MEDIAN = 'median';
    Blockly.LANG_MATH_ONLIST_OPERATOR_MODE = 'modes';
    Blockly.LANG_MATH_ONLIST_OPERATOR_STD_DEV = 'standard deviation';
    Blockly.LANG_MATH_ONLIST_OPERATOR_RANDOM = 'random item';
    Blockly.LANG_MATH_ONLIST_TOOLTIP_SUM = 'Returns the sum of all the numbers in the list.';
    Blockly.LANG_MATH_ONLIST_TOOLTIP_MIN = 'Returns the smallest number in the list.';
    Blockly.LANG_MATH_ONLIST_TOOLTIP_MAX = 'Returns the largest number in the list.';
    Blockly.LANG_MATH_ONLIST_TOOLTIP_AVERAGE = 'Returns the arithmetic mean of the list.';
    Blockly.LANG_MATH_ONLIST_TOOLTIP_MEDIAN = 'Returns the median number in the list.';
    Blockly.LANG_MATH_ONLIST_TOOLTIP_MODE = 'Returns a list of the most common item(s) in the list.';
    Blockly.LANG_MATH_ONLIST_TOOLTIP_STD_DEV = 'Returns the standard deviation of the list.';
    Blockly.LANG_MATH_ONLIST_TOOLTIP_RANDOM = 'Returns a random element from the list.';

    Blockly.LANG_MATH_CONSTRAIN_HELPURL = '';
    Blockly.LANG_MATH_CONSTRAIN_INPUT_CONSTRAIN = 'constrain';
    Blockly.LANG_MATH_CONSTRAIN_INPUT_LOW = 'between (low)';
    Blockly.LANG_MATH_CONSTRAIN_INPUT_HIGH = 'and (high)';
    Blockly.LANG_MATH_CONSTRAIN_TOOLTIP = 'Constrain a number to be between the specified limits (inclusive).';

    Blockly.LANG_MATH_MODULO_HELPURL = '';
    Blockly.LANG_MATH_MODULO_INPUT_DIVIDEND = 'remainder of';
    Blockly.LANG_MATH_MODULO_TOOLTIP = 'Returns the remainder of dividing both numbers.';

    Blockly.LANG_MATH_RANDOM_INT_HELPURL = '';
    Blockly.LANG_MATH_RANDOM_INT_INPUT_FROM = 'random integer from';
    Blockly.LANG_MATH_RANDOM_INT_INPUT_TO = 'to';
    Blockly.LANG_MATH_RANDOM_INT_TOOLTIP = 'Returns a random integer between the two specified limits, inclusive.';

    Blockly.LANG_MATH_RANDOM_FLOAT_HELPURL = '';
    Blockly.LANG_MATH_RANDOM_FLOAT_Field_RANDOM = 'random fraction';
    Blockly.LANG_MATH_RANDOM_FLOAT_TOOLTIP = 'Returns a random fraction between 0.0 (inclusive) and 1.0 (exclusive).';

    // Text Blocks.
    Blockly.LANG_CATEGORY_TEXT = 'Text';
    Blockly.LANG_TEXT_TEXT_HELPURL = '';
    Blockly.LANG_TEXT_TEXT_TOOLTIP = 'A letter, word, or line of text.';

    Blockly.LANG_TEXT_JOIN_HELPURL = '';
    Blockly.LANG_TEXT_JOIN_Field_CREATEWITH = 'create text with';
    Blockly.LANG_TEXT_JOIN_TOOLTIP = 'Create a piece of text by joining together any number of items.';

    Blockly.LANG_TEXT_CREATE_JOIN_Field_JOIN = 'join';
    Blockly.LANG_TEXT_CREATE_JOIN_TOOLTIP = 'Add, remove, or reorder sections to reconfigure this text block.';

    Blockly.LANG_TEXT_CREATE_JOIN_ITEM_Field_ITEM = 'item';
    Blockly.LANG_TEXT_CREATE_JOIN_ITEM_TOOLTIP = 'Add an item to the text.';

    Blockly.LANG_TEXT_APPEND_HELPURL = '';
    Blockly.LANG_TEXT_APPEND_TO = 'to';
    Blockly.LANG_TEXT_APPEND_APPENDTEXT = 'append text';
    Blockly.LANG_TEXT_APPEND_VARIABLE = 'item';
    Blockly.LANG_TEXT_APPEND_TOOLTIP = 'Append some text to variable %1.';

    Blockly.LANG_TEXT_LENGTH_HELPURL = '';
    Blockly.LANG_TEXT_LENGTH_INPUT_LENGTH = 'length';
    Blockly.LANG_TEXT_LENGTH_TOOLTIP = 'Returns number of letters (including spaces) in the provided text.';

    Blockly.LANG_TEXT_ISEMPTY_HELPURL = '';
    Blockly.LANG_TEXT_ISEMPTY_INPUT_ISEMPTY = 'is empty';
    Blockly.LANG_TEXT_ISEMPTY_TOOLTIP = 'Returns true if the provided text is empty.';

    Blockly.LANG_TEXT_ENDSTRING_HELPURL = '';
    Blockly.LANG_TEXT_ENDSTRING_INPUT = 'letters in text';
    Blockly.LANG_TEXT_ENDSTRING_TOOLTIP = 'Returns specified number of letters at the beginning or end of the text.';
    Blockly.LANG_TEXT_ENDSTRING_OPERATOR_FIRST = 'first';
    Blockly.LANG_TEXT_ENDSTRING_OPERATOR_LAST = 'last';

    Blockly.LANG_TEXT_INDEXOF_HELPURL = '';
    Blockly.LANG_TEXT_INDEXOF_Field_FIND = 'find';
    Blockly.LANG_TEXT_INDEXOF_INPUT_OCCURRENCE = 'occurrence of text';
    Blockly.LANG_TEXT_INDEXOF_INPUT_INTEXT = 'in text';
    Blockly.LANG_TEXT_INDEXOF_TOOLTIP = 'Returns the index of the first/last occurrence of first text in the second text. Returns 0 if text is not found.';
    Blockly.LANG_TEXT_INDEXOF_OPERATOR_FIRST = 'first';
    Blockly.LANG_TEXT_INDEXOF_OPERATOR_LAST = 'last';

    Blockly.LANG_TEXT_CHARAT_HELPURL = '';
    Blockly.LANG_TEXT_CHARAT_INPUT_AT = 'letter at';
    Blockly.LANG_TEXT_CHARAT_INPUT_INTEXT = 'in text';
    Blockly.LANG_TEXT_CHARAT_TOOLTIP = 'Returns the letter at the specified position.';

    Blockly.LANG_TEXT_CHANGECASE_HELPURL = '';
    Blockly.LANG_TEXT_CHANGECASE_Field_TO = 'to';
    Blockly.LANG_TEXT_CHANGECASE_TOOLTIP = 'Returns a copy of the text in a different case.';
    Blockly.LANG_TEXT_CHANGECASE_OPERATOR_UPPERCASE = 'UPPER CASE';
    Blockly.LANG_TEXT_CHANGECASE_OPERATOR_LOWERCASE = 'lower case';
    Blockly.LANG_TEXT_CHANGECASE_OPERATOR_FieldCASE = 'Field Case';
    Blockly.LANG_TEXT_CHANGECASE_OPERATOR_TITLECASE = 'Title Case';
    
    
    Blockly.LANG_TEXT_TRIM_HELPURL = '';
    Blockly.LANG_TEXT_TRIM_Field_SPACE = 'trim spaces from';
    Blockly.LANG_TEXT_TRIM_Field_SIDES = 'sides';
    Blockly.LANG_TEXT_TRIM_TOOLTIP = 'Returns a copy of the text with spaces removed from one or both ends.';
    Blockly.LANG_TEXT_TRIM_Field_SIDES = 'sides';
    Blockly.LANG_TEXT_TRIM_Field_SIDE = 'side';
    Blockly.LANG_TEXT_TRIM_OPERATOR_BOTH = 'both';
    Blockly.LANG_TEXT_TRIM_OPERATOR_LEFT = 'left';
    Blockly.LANG_TEXT_TRIM_OPERATOR_RIGHT = 'right';

    Blockly.LANG_TEXT_PRINT_HELPURL = '';
    Blockly.LANG_TEXT_PRINT_Field_PRINT = 'print';
    Blockly.LANG_TEXT_PRINT_TOOLTIP = 'Print the specified text, number or other value.';

    Blockly.LANG_TEXT_PROMPT_HELPURL = '';
    Blockly.LANG_TEXT_PROMPT_Field_PROMPT_FOR = 'prompt for';
    Blockly.LANG_TEXT_PROMPT_TITILE_WITH_MESSAGE = 'with message';
    Blockly.LANG_TEXT_PROMPT_TOOLTIP = 'Prompt for user input with the specified text.';
    Blockly.LANG_TEXT_PROMPT_TYPE_TEXT = 'text';
    Blockly.LANG_TEXT_PROMPT_TYPE_NUMBER = 'number';

    // Lists Blocks.
    Blockly.LANG_CATEGORY_LISTS = 'Lists';
    Blockly.LANG_LISTS_CREATE_EMPTY_HELPURL = '';
    Blockly.LANG_LISTS_CREATE_EMPTY_Field = 'create empty list';
    Blockly.LANG_LISTS_CREATE_EMPTY_TOOLTIP = 'Returns a list, of length 0, containing no data records';

    Blockly.LANG_LISTS_CREATE_WITH_INPUT_WITH = 'create list with';
    Blockly.LANG_LISTS_CREATE_WITH_TOOLTIP = 'Create a list with any number of items.';

    Blockly.LANG_LISTS_CREATE_WITH_CONTAINER_Field_ADD = 'list';
    Blockly.LANG_LISTS_CREATE_WITH_CONTAINER_TOOLTIP = 'Add, remove, or reorder sections to reconfigure this list block.';

    Blockly.LANG_LISTS_CREATE_WITH_ITEM_Field = 'item';
    Blockly.LANG_LISTS_CREATE_WITH_ITEM_TOOLTIP = 'Add an item to the list.';

    Blockly.LANG_LISTS_REPEAT_HELPURL = '';
    Blockly.LANG_LISTS_REPEAT_INPUT_WITH = 'create list with item';
    Blockly.LANG_LISTS_REPEAT_INPUT_REPEATED = 'repeated';
    Blockly.LANG_LISTS_REPEAT_INPUT_TIMES = 'times';
    Blockly.LANG_LISTS_REPEAT_TOOLTIP = 'Creates a list consisting of the given value repeated the specified number of times.';

    Blockly.LANG_LISTS_LENGTH_HELPURL = '';
    Blockly.LANG_LISTS_LENGTH_INPUT_LENGTH = 'length';
    Blockly.LANG_LISTS_LENGTH_TOOLTIP = 'Returns the length of a list.';

    Blockly.LANG_LISTS_IS_EMPTY_HELPURL = '';
    Blockly.LANG_LISTS_INPUT_IS_EMPTY = 'is empty';
    Blockly.LANG_LISTS_TOOLTIP = 'Returns true if the list is empty.';

    Blockly.LANG_LISTS_INDEX_OF_HELPURL = '';
    Blockly.LANG_LISTS_INDEX_OF_Field_FIND = 'find';
    Blockly.LANG_LISTS_INDEX_OF_INPUT_OCCURRENCE = 'occurrence of item';
    Blockly.LANG_LISTS_INDEX_OF_INPUT_IN_LIST = 'in list';
    Blockly.LANG_LISTS_INDEX_OF_TOOLTIP = 'Returns the index of the first/last occurrence of the item in the list. Returns 0 if text is not found.';
    Blockly.LANG_LISTS_INDEX_OF_FIRST = 'first';
    Blockly.LANG_LISTS_INDEX_OF_LAST = 'last';

    Blockly.LANG_LISTS_GET_INDEX_HELPURL = '';
    Blockly.LANG_LISTS_GET_INDEX_INPUT_AT = 'get item at';
    Blockly.LANG_LISTS_GET_INDEX_INPUT_IN_LIST = 'in list';
    Blockly.LANG_LISTS_GET_INDEX_TOOLTIP = 'Returns the value at the specified position in a list.';

    Blockly.LANG_LISTS_SET_INDEX_HELPURL = '';
    Blockly.LANG_LISTS_SET_INDEX_INPUT_AT = 'set item at';
    Blockly.LANG_LISTS_SET_INDEX_INPUT_IN_LIST = 'in list';
    Blockly.LANG_LISTS_SET_INDEX_INPUT_TO = 'to';
    Blockly.LANG_LISTS_SET_INDEX_TOOLTIP = 'Sets the value at the specified position in a list.';

    // Variables Blocks.
    Blockly.LANG_VARIABLES_GET_HELPURL = '';
    Blockly.LANG_VARIABLES_GET_Field = 'get';
    Blockly.LANG_VARIABLES_GET_ITEM = 'item';
    Blockly.LANG_VARIABLES_GET_TOOLTIP = 'Returns the value of this variable.';

    Blockly.LANG_VARIABLES_SET_HELPURL = '';
    Blockly.LANG_VARIABLES_SET_Field = 'set';
    Blockly.LANG_VARIABLES_SET_ITEM = 'item';
    Blockly.LANG_VARIABLES_SET_TOOLTIP = 'Sets this variable to be equal to the input.';

    // Procedures Blocks.
    Blockly.LANG_PROCEDURES_DEFNORETURN_HELPURL = '';
    Blockly.LANG_PROCEDURES_DEFNORETURN_PROCEDURE = 'procedure';
    Blockly.LANG_PROCEDURES_DEFNORETURN_DO = 'do';
    Blockly.LANG_PROCEDURES_DEFNORETURN_TOOLTIP = 'A procedure with no return value.';

    Blockly.LANG_PROCEDURES_DEFRETURN_HELPURL = '';
    Blockly.LANG_PROCEDURES_DEFRETURN_PROCEDURE = Blockly.LANG_PROCEDURES_DEFNORETURN_PROCEDURE;
    Blockly.LANG_PROCEDURES_DEFRETURN_DO = Blockly.LANG_PROCEDURES_DEFNORETURN_DO;
    Blockly.LANG_PROCEDURES_DEFRETURN_RETURN = 'return';
    Blockly.LANG_PROCEDURES_DEFRETURN_TOOLTIP = 'A procedure with a return value.';

    Blockly.LANG_PROCEDURES_DEF_DUPLICATE_WARNING = 'Warning: This procedure has duplicate parameters.';

    Blockly.LANG_PROCEDURES_CALLNORETURN_HELPURL = '';
    Blockly.LANG_PROCEDURES_CALLNORETURN_CALL = 'do';
    Blockly.LANG_PROCEDURES_CALLNORETURN_PROCEDURE = 'procedure';
    Blockly.LANG_PROCEDURES_CALLNORETURN_TOOLTIP = 'Call a procedure with no return value.';

    Blockly.LANG_PROCEDURES_CALLRETURN_HELPURL = '';
    Blockly.LANG_PROCEDURES_CALLRETURN_CALL = Blockly.LANG_PROCEDURES_CALLNORETURN_CALL;
    Blockly.LANG_PROCEDURES_CALLRETURN_PROCEDURE = Blockly.LANG_PROCEDURES_CALLNORETURN_PROCEDURE;
    Blockly.LANG_PROCEDURES_CALLRETURN_TOOLTIP = 'Call a procedure with a return value.';

    Blockly.LANG_PROCEDURES_MUTATORCONTAINER_Field = 'parameters';
    Blockly.LANG_PROCEDURES_MUTATORARG_Field = 'variable:';

    Blockly.LANG_PROCEDURES_HIGHLIGHT_DEF = 'Highlight Procedure';

    Blockly.LANG_PROCEDURES_IFRETURN_TOOLTIP = 'If a value is true, then returns a value.';
    Blockly.LANG_PROCEDURES_IFRETURN_WARNING = 'Warning: This block may only be used within a procedure.';
    
    
/**
 * List of illegal variable names.
 * This is not intended to be a security feature.  Blockly is 100% client-side,
 * so bypassing this list is trivial.  This is intended to prevent users from
 * accidentally clobbering a built-in object or function.
 * @private
 */
if (!Blockly.Arduino.RESERVED_WORDS_) {
  Blockly.Arduino.RESERVED_WORDS_ = '';
}

Blockly.Arduino.RESERVED_WORDS_ +=
    // http://arduino.cc/en/Reference/HomePage
'setup,loop,if,else,for,switch,case,while,do,break,continue,return,goto,define,include,HIGH,LOW,INPUT,OUTPUT,INPUT_PULLUP,true,false,interger, constants,floating,point,void,bookean,char,unsigned,byte,int,word,long,float,double,string,String,array,static, volatile,const,sizeof,pinMode,digitalWrite,digitalRead,analogReference,analogRead,analogWrite,tone,noTone,shiftOut,shitIn,pulseIn,millis,micros,delay,delayMicroseconds,min,max,abs,constrain,map,pow,sqrt,sin,cos,tan,randomSeed,random,lowByte,highByte,bitRead,bitWrite,bitSet,bitClear,bit,attachInterrupt,detachInterrupt,interrupts,noInterrupts'
;

/**
 * Order of operation ENUMs.
 * 
 */
Blockly.Arduino.ORDER_ATOMIC = 0;         // 0 "" ...
Blockly.Arduino.ORDER_UNARY_POSTFIX = 1;  // expr++ expr-- () [] .
Blockly.Arduino.ORDER_UNARY_PREFIX = 2;   // -expr !expr ~expr ++expr --expr
Blockly.Arduino.ORDER_MULTIPLICATIVE = 3; // * / % ~/
Blockly.Arduino.ORDER_ADDITIVE = 4;       // + -
Blockly.Arduino.ORDER_SHIFT = 5;          // << >>
Blockly.Arduino.ORDER_RELATIONAL = 6;     // is is! >= > <= <
Blockly.Arduino.ORDER_EQUALITY = 7;       // == != === !==
Blockly.Arduino.ORDER_BITWISE_AND = 8;    // &
Blockly.Arduino.ORDER_BITWISE_XOR = 9;    // ^
Blockly.Arduino.ORDER_BITWISE_OR = 10;    // |
Blockly.Arduino.ORDER_LOGICAL_AND = 11;   // &&
Blockly.Arduino.ORDER_LOGICAL_OR = 12;    // ||
Blockly.Arduino.ORDER_CONDITIONAL = 13;   // expr ? expr : expr
Blockly.Arduino.ORDER_ASSIGNMENT = 14;    // = *= /= ~/= %= += -= <<= >>= &= ^= |=
Blockly.Arduino.ORDER_NONE = 99;          // (...)

/*
 * Arduino Board profiles
 *
 */
var profile = {
	arduino: {
		description: "Arduino standard-compatible board",
		digital : [["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"], ["A0", "A0"], ["A1", "A1"], ["A2", "A2"], ["A3", "A3"], ["A4", "A4"], ["A5", "A5"]],
		analog : [["A0", "A0"], ["A1", "A1"], ["A2", "A2"], ["A3", "A3"], ["A4", "A4"], ["A5", "A5"]],
        serial : 9600,
	},
	arduino_mega:{
		description: "Arduino Mega-compatible board",
		//53 digital
		//15 analog
	},
}
//set default profile to arduino standard-compatible board
profile["default"] = profile["arduino"];
//alert(profile.default.digital[0]);

/**
 * Initialise the database of variable names.
 */
Blockly.Arduino.init = function() {
  // Create a dictionary of definitions to be printed before setups.
  Blockly.Arduino.definitions_ = {};
  // Create a dictionary of setups to be printed before the code.
  Blockly.Arduino.setups_ = {};
  
  if (Blockly.Variables) {
    if (!Blockly.Arduino.variableDB_) {
      Blockly.Arduino.variableDB_ =
          new Blockly.Names(Blockly.Arduino.RESERVED_WORDS_);
    } else {
      Blockly.Arduino.variableDB_.reset();
    }

    var defvars = [];
    var variables = Blockly.Variables.allVariables();
    for (var x = 0; x < variables.length; x++) {
      defvars[x] = 'int ' +
          Blockly.Arduino.variableDB_.getDistinctName(variables[x],
          Blockly.Variables.NAME_TYPE) + ';\n';
    }
    Blockly.Arduino.definitions_['variables'] = defvars.join('\n');
  }
};

/**
 * Prepend the generated code with the variable definitions.
 * @param {string} code Generated code.
 * @return {string} Completed code.
 */
Blockly.Arduino.finish = function(code) {
  // Indent every line.
  code = '  ' + code.replace(/\n/g, '\n  ');
  code = code.replace(/\n\s+$/, '\n');
  code = 'void loop() \n{\n' + code + '\n}';

  // Convert the definitions dictionary into a list.
  var imports = [];
  var definitions = [];
  for (var name in Blockly.Arduino.definitions_) {
    var def = Blockly.Arduino.definitions_[name];
    if (def.match(/^#include/)) {
      imports.push(def);
    } else {
      definitions.push(def);
    }
  }
  
  // Convert the setups dictionary into a list.
  var setups = [];
  for (var name in Blockly.Arduino.setups_) {
    setups.push(Blockly.Arduino.setups_[name]);
  }
  
  var allDefs = imports.join('\n') + '\n\n' + definitions.join('\n') + '\nvoid setup() \n{\n  '+setups.join('\n  ') + '\n}'+ '\n\n';
  return allDefs.replace(/\n\n+/g, '\n\n').replace(/\n*$/, '\n\n\n') + code;
};

/**
 * Naked values are top-level blocks with outputs that aren't plugged into
 * anything.  A trailing semicolon is needed to make this legal.
 * @param {string} line Line of generated code.
 * @return {string} Legal line of code.
 */
Blockly.Arduino.scrubNakedValue = function(line) {
  return line + ';\n';
};

/**
 * Encode a string as a properly escaped Arduino string, complete with quotes.
 * @param {string} string Text to encode.
 * @return {string} Arduino string.
 * @private
 */
Blockly.Arduino.quote_ = function(string) {
  // TODO: This is a quick hack.  Replace with goog.string.quote
  string = string.replace(/\\/g, '\\\\')
                 .replace(/\n/g, '\\\n')
                 .replace(/\$/g, '\\$')
                 .replace(/'/g, '\\\'');
  return '\"' + string + '\"';
};

/**
 * Common tasks for generating Arduino from blocks.
 * Handles comments for the specified block and any connected value blocks.
 * Calls any statements following this block.
 * @param {!Blockly.Block} block The current block.
 * @param {string} code The Arduino code created for this block.
 * @return {string} Arduino code with comments and subsequent blocks added.
 * @this {Blockly.CodeGenerator}
 * @private
 */
Blockly.Arduino.scrub_ = function(block, code) {
  if (code === null) {
    // Block has handled code generation itself.
    return '';
  }
  var commentCode = '';
  // Only collect comments for blocks that aren't inline.
  if (!block.outputConnection || !block.outputConnection.targetConnection) {
    // Collect comment for this block.
    var comment = block.getCommentText();
    if (comment) {
      commentCode += Blockly.Generator.prefixLines(comment, '// ') + '\n';
    }
    // Collect comments for all value arguments.
    // Don't collect comments for nested statements.
    for (var x = 0; x < block.inputList.length; x++) {
      if (block.inputList[x].type == Blockly.INPUT_VALUE) {
        var childBlock = block.inputList[x].connection.targetBlock();
        if (childBlock) {
//          var comment = Blockly.Generator.allNestedComments(childBlock);
          if (comment) {
            commentCode += Blockly.Generator.prefixLines(comment, '// ');
          }
        }
      }
    }
  }
  var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
  var nextCode = this.blockToCode(nextBlock);
  return commentCode + code + nextCode;
};

// CONTROLS
Blockly.Blocks.controls_if = {
  // If/elseif/else condition.
  category: Blockly.LANG_CATEGORY_CONTROLS,
  helpUrl: Blockly.LANG_CONTROLS_IF_HELPURL,
  init: function() {
    this.setColour(Blockly.LANG_COLOUR_CONTROL);
    this.appendValueInput('IF0')
        .setCheck(Boolean)
        .appendField(Blockly.LANG_CONTROLS_IF_MSG_IF);
    this.appendStatementInput('DO0')
        .appendField(Blockly.LANG_CONTROLS_IF_MSG_THEN);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setMutator(new Blockly.Mutator(['controls_if_elseif',
                                         'controls_if_else']));
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      if (!thisBlock.elseifCount_ && !thisBlock.elseCount_) {
        return Blockly.LANG_CONTROLS_IF_TOOLTIP_1;
      } else if (!thisBlock.elseifCount_ && thisBlock.elseCount_) {
        return Blockly.LANG_CONTROLS_IF_TOOLTIP_2;
      } else if (thisBlock.elseifCount_ && !thisBlock.elseCount_) {
        return Blockly.LANG_CONTROLS_IF_TOOLTIP_3;
      } else if (thisBlock.elseifCount_ && thisBlock.elseCount_) {
        return Blockly.LANG_CONTROLS_IF_TOOLTIP_4;
      }
      return '';
    });
    this.elseifCount_ = 0;
    this.elseCount_ = 0;
  },
  mutationToDom: function() {
    if (!this.elseifCount_ && !this.elseCount_) {
      return null;
    }
    var container = document.createElement('mutation');
    if (this.elseifCount_) {
      container.setAttribute('elseif', this.elseifCount_);
    }
    if (this.elseCount_) {
      container.setAttribute('else', 1);
    }
    return container;
  },
  domToMutation: function(xmlElement) {
    this.elseifCount_ = window.parseInt(xmlElement.getAttribute('elseif'), 10);
    this.elseCount_ = window.parseInt(xmlElement.getAttribute('else'), 10);
    for (var x = 1; x <= this.elseifCount_; x++) {
      this.appendValueInput('IF' + x)
          .setCheck(Boolean)
          .appendField(Blockly.LANG_CONTROLS_IF_MSG_ELSEIF);
      this.appendStatementInput('DO' + x)
          .appendField(Blockly.LANG_CONTROLS_IF_MSG_THEN);
    }
    if (this.elseCount_) {
      this.appendStatementInput('ELSE')
          .appendField(Blockly.LANG_CONTROLS_IF_MSG_ELSE);
    }
  },
  decompose: function(workspace) {
    var containerBlock = Blockly.Block.obtain(workspace, 'controls_if_if');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    for (var x = 1; x <= this.elseifCount_; x++) {
      var elseifBlock = Blockly.Block.obtain(workspace, 'controls_if_elseif');
      elseifBlock.initSvg();
      connection.connect(elseifBlock.previousConnection);
      connection = elseifBlock.nextConnection;
    }
    if (this.elseCount_) {
      var elseBlock = Blockly.Block.obtain(workspace, 'controls_if_else');
      elseBlock.initSvg();
      connection.connect(elseBlock.previousConnection);
    }
    return containerBlock;
  },
  compose: function(containerBlock) {
    // Disconnect the else input blocks and remove the inputs.
    if (this.elseCount_) {
      this.removeInput('ELSE');
    }
    this.elseCount_ = 0;
    // Disconnect all the elseif input blocks and remove the inputs.
    for (var x = this.elseifCount_; x > 0; x--) {
      this.removeInput('IF' + x);
      this.removeInput('DO' + x);
    }
    this.elseifCount_ = 0;
    // Rebuild the block's optional inputs.
    var clauseBlock = containerBlock.getInputTargetBlock('STACK');
    while (clauseBlock) {
      switch (clauseBlock.type) {
        case 'controls_if_elseif':
          this.elseifCount_++;
          var ifInput = this.appendValueInput('IF' + this.elseifCount_)
              .setCheck(Boolean)
              .appendField(Blockly.LANG_CONTROLS_IF_MSG_ELSEIF);
          var doInput = this.appendStatementInput('DO' + this.elseifCount_);
          doInput.appendField(Blockly.LANG_CONTROLS_IF_MSG_THEN);
          // Reconnect any child blocks.
          if (clauseBlock.valueConnection_) {
            ifInput.connection.connect(clauseBlock.valueConnection_);
          }
          if (clauseBlock.statementConnection_) {
            doInput.connection.connect(clauseBlock.statementConnection_);
          }
          break;
        case 'controls_if_else':
          this.elseCount_++;
          var elseInput = this.appendStatementInput('ELSE');
          elseInput.appendField(Blockly.LANG_CONTROLS_IF_MSG_ELSE);
          // Reconnect any child blocks.
          if (clauseBlock.statementConnection_) {
            elseInput.connection.connect(clauseBlock.statementConnection_);
          }
          break;
        default:
          throw 'Unknown block type.';
      }
      clauseBlock = clauseBlock.nextConnection &&
          clauseBlock.nextConnection.targetBlock();
    }
  },
  saveConnections: function(containerBlock) {
    // Store a pointer to any connected child blocks.
    var clauseBlock = containerBlock.getInputTargetBlock('STACK');
    var x = 1;
    while (clauseBlock) {
      switch (clauseBlock.type) {
        case 'controls_if_elseif':
          var inputIf = this.getInput('IF' + x);
          var inputDo = this.getInput('DO' + x);
          clauseBlock.valueConnection_ =
              inputIf && inputIf.connection.targetConnection;
          clauseBlock.statementConnection_ =
              inputDo && inputDo.connection.targetConnection;
          x++;
          break;
        case 'controls_if_else':
          var inputDo = this.getInput('ELSE');
          clauseBlock.statementConnection_ =
              inputDo && inputDo.connection.targetConnection;
          break;
        default:
          throw 'Unknown block type.';
      }
      clauseBlock = clauseBlock.nextConnection &&
          clauseBlock.nextConnection.targetBlock();
    }
  }
};

Blockly.Blocks.controls_if_if = {
  // If condition.
  init: function() {
    this.setColour(Blockly.LANG_COLOUR_CONTROL);
    this.appendDummyInput()
        .appendField(Blockly.LANG_CONTROLS_IF_IF_Field_IF);
    this.appendStatementInput('STACK');
    this.setTooltip(Blockly.LANG_CONTROLS_IF_IF_TOOLTIP);
    this.contextMenu = false;
  }
};

Blockly.Blocks.controls_if_elseif = {
  // Else-If condition.
  init: function() {
    this.setColour(Blockly.LANG_COLOUR_CONTROL);
    this.appendDummyInput()
        .appendField(Blockly.LANG_CONTROLS_IF_ELSEIF_Field_ELSEIF);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.LANG_CONTROLS_IF_ELSEIF_TOOLTIP);
    this.contextMenu = false;
  }
};

Blockly.Blocks.controls_if_else = {
  // Else condition.
  init: function() {
    this.setColour(Blockly.LANG_COLOUR_CONTROL);
    this.appendDummyInput()
        .appendField(Blockly.LANG_CONTROLS_IF_ELSE_Field_ELSE);
    this.setPreviousStatement(true);
    this.setTooltip(Blockly.LANG_CONTROLS_IF_ELSE_TOOLTIP);
    this.contextMenu = false;
  }
};


Blockly.Arduino.controls_if = function() {
  // If/elseif/else condition.
  var n = 0;
  var argument = Blockly.Arduino.valueToCode(this, 'IF' + n,
      Blockly.Arduino.ORDER_NONE) || 'false';
  var branch = Blockly.Arduino.statementToCode(this, 'DO' + n);
  var code = 'if (' + argument + ') {\n' + branch + '\n}';
  for (n = 1; n <= this.elseifCount_; n++) {
    argument = Blockly.Arduino.valueToCode(this, 'IF' + n,
      Blockly.Arduino.ORDER_NONE) || 'false';
    branch = Blockly.Arduino.statementToCode(this, 'DO' + n);
    code += ' else if (' + argument + ') {\n' + branch + '}';
  }
  if (this.elseCount_) {
    branch = Blockly.Arduino.statementToCode(this, 'ELSE');
    code += ' else {\n' + branch + '\n}';
  }
  return code + '\n';
};

Blockly.Arduino.controls_repeat = function() {
  // Repeat n times.
  var repeats = Number(this.getFieldValue('TIMES'));
  var branch = Blockly.Arduino.statementToCode(this, 'DO');
  if (Blockly.Arduino.INFINITE_LOOP_TRAP) {
    branch = Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g,
        '\'' + this.id + '\'') + branch;
  }
  var loopVar = Blockly.Arduino.variableDB_.getDistinctName(
      'count', Blockly.Variables.NAME_TYPE);
  var code = 'for (' + loopVar + ' = 0; ' +
      loopVar + ' < ' + repeats + '; ' +
      loopVar + '++) {\n' +
      branch + '}\n';
  return code;
};
Blockly.Blocks.controls_whileUntil = {
  // Do while/until loop.
  category: Blockly.LANG_CATEGORY_CONTROLS,
  helpUrl: Blockly.LANG_CONTROLS_WHILEUNTIL_HELPURL,
  init: function() {
    this.setColour(Blockly.LANG_COLOUR_CONTROL);
    this.appendValueInput('BOOL')
        .setCheck(Boolean)
        .appendField(Blockly.LANG_CONTROLS_WHILEUNTIL_TITLE_REPEAT)
        .appendField(new Blockly.FieldDropdown(this.OPERATORS), 'MODE');
    this.appendStatementInput('DO')
        .appendField(Blockly.LANG_CONTROLS_WHILEUNTIL_INPUT_DO);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      var op = thisBlock.getFieldValue('MODE');
      return Blockly.Blocks.controls_whileUntil.TOOLTIPS[op];
    });
  }
};

Blockly.Blocks.controls_whileUntil.OPERATORS =
    [[Blockly.LANG_CONTROLS_WHILEUNTIL_OPERATOR_WHILE, 'WHILE'],
     [Blockly.LANG_CONTROLS_WHILEUNTIL_OPERATOR_UNTIL, 'UNTIL']];

Blockly.Blocks.controls_whileUntil.TOOLTIPS = {
  WHILE: Blockly.LANG_CONTROLS_WHILEUNTIL_TOOLTIP_WHILE,
  UNTIL: Blockly.LANG_CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL
};

Blockly.Arduino.controls_whileUntil = function() {
  // Do while/until loop.
  var argument0 = Blockly.Arduino.valueToCode(this, 'BOOL',
      Blockly.Arduino.ORDER_NONE) || 'false';
  var branch = Blockly.Arduino.statementToCode(this, 'DO');
  if (Blockly.Arduino.INFINITE_LOOP_TRAP) {
    branch = Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g,
        '\'' + this.id + '\'') + branch;
  }
  if (this.getFieldValue('MODE') == 'UNTIL') {
    if (!argument0.match(/^\w+$/)) {
      argument0 = '(' + argument0 + ')';
    }
    argument0 = '!' + argument0;
  }
  return 'while (' + argument0 + ') {\n' + branch + '}\n';
};
Blockly.Blocks.controls_for = {
  // For loop.
  category: Blockly.LANG_CATEGORY_CONTROLS,
  helpUrl: Blockly.LANG_CONTROLS_FOR_HELPURL,
  init: function() {
    this.setColour(Blockly.LANG_COLOUR_CONTROL);
    this.appendDummyInput()
        .appendField(Blockly.LANG_CONTROLS_FOR_INPUT_WITH)
        .appendField(new Blockly.FieldVariable(null), 'VAR');
    this.appendValueInput('FROM')
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.LANG_CONTROLS_FOR_INPUT_FROM);
    this.appendValueInput('TO')
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.LANG_CONTROLS_FOR_INPUT_TO);
    this.appendStatementInput('DO')
        .appendField(Blockly.LANG_CONTROLS_FOR_INPUT_DO);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      return Blockly.LANG_CONTROLS_FOR_TOOLTIP.replace('%1',
          thisBlock.getFieldValue('VAR'));
    });
  },
  getVars: function() {
    return [this.getFieldValue('VAR')];
  },
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
      this.setTitleValue(newName, 'VAR');
    }
  }
};

Blockly.Arduino.controls_for = function() {
  // For loop.
  var variable0 = Blockly.Arduino.variableDB_.getName(
      this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  variable0=variable0.substring(0,variable0.length-1);
  var argument0 = Blockly.Arduino.valueToCode(this, 'FROM',
      Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  var argument1 = Blockly.Arduino.valueToCode(this, 'TO',
      Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  var branch = Blockly.Arduino.statementToCode(this, 'DO');
  if (Blockly.Arduino.INFINITE_LOOP_TRAP) {
    branch = Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g,
        '\'' + this.id + '\'') + branch;
  }
  var code;
  if (argument0.match(/^-?\d+(\.\d+)?$/) &&
      argument1.match(/^-?\d+(\.\d+)?$/)) {
    // Both arguments are simple numbers.
    var up = parseFloat(argument0) <= parseFloat(argument1);
    code = 'for (' + variable0 + ' = ' + argument0 + '; ' +
        variable0 + (up ? ' <= ' : ' >= ') + argument1 + '; ' +
        variable0 + (up ? '++' : '--') + ') {\n' +
        branch + '}\n';
  } else {
    code = '';
    // Cache non-trivial values to variables to prevent repeated look-ups.
    var startVar = argument0;
    if (!argument0.match(/^\w+$/) && !argument0.match(/^-?\d+(\.\d+)?$/)) {
      var startVar = Blockly.Arduino.variableDB_.getDistinctName(
          variable0 + '_start', Blockly.Variables.NAME_TYPE);
      code += 'int ' + startVar + ' = ' + argument0 + ';\n';
    }
    var endVar = argument1;
    if (!argument1.match(/^\w+$/) && !argument1.match(/^-?\d+(\.\d+)?$/)) {
      var endVar = Blockly.Arduino.variableDB_.getDistinctName(
          variable0 + '_end', Blockly.Variables.NAME_TYPE);
      code += 'int ' + endVar + ' = ' + argument1 + ';\n';
    }
    code += 'for (' + variable0 + ' = ' + startVar + ';\n' +
        '    (' + startVar + ' <= ' + endVar + ') ? ' +
        variable0 + ' <= ' + endVar + ' : ' +
        variable0 + ' >= ' + endVar + ';\n' +
        '    ' + variable0 + ' += (' + startVar + ' <= ' + endVar +
            ') ? 1 : -1) {\n' +
        branch + '}\n';
  }
  return code;
};

Blockly.Arduino.controls_forEach = function() {
  // For each loop.
  var variable0 = Blockly.Arduino.variableDB_.getName(
      this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  variable0=variable0.substring(0,variable0.length-1);
  var argument0 = Blockly.Arduino.valueToCode(this, 'LIST',
      Blockly.Arduino.ORDER_ASSIGNMENT) || '[]';
  var branch = Blockly.Arduino.statementToCode(this, 'DO');
  if (Blockly.Arduino.INFINITE_LOOP_TRAP) {
    branch = Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g,
        '\'' + this.id + '\'') + branch;
  }
  var code = 'for (var ' + variable0 + ' in  ' + argument0 + ') {\n' +
      branch + '}\n';
  return code;
};
Blockly.Blocks.controls_flow_statements = {
  // Flow statements: continue, break.
  category: Blockly.LANG_CATEGORY_CONTROLS,
  helpUrl: Blockly.LANG_CONTROLS_FLOW_STATEMENTS_HELPURL,
  init: function() {
    this.setColour(Blockly.LANG_COLOUR_CONTROL);
    var dropdown = new Blockly.FieldDropdown(
    [[Blockly.LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK, 'BREAK'],
     [Blockly.LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE, 'CONTINUE']]);
    this.appendDummyInput()
        .appendField(dropdown, 'FLOW')
        .appendField(Blockly.LANG_CONTROLS_FLOW_STATEMENTS_INPUT_OFLOOP);
    this.setPreviousStatement(true);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      var op = thisBlock.getFieldValue('FLOW');
      return Blockly.Blocks.controls_flow_statements.TOOLTIPS[op];
    });
  },
  onchange: function() {
    if (!this.workspace) {
      // Block has been deleted.
      return;
    }
    var legal = false;
    // Is the block nested in a control statement?
    var block = this;
    do {
      if (block.type == 'controls_repeat' ||
          block.type == 'controls_forEach' ||
          block.type == 'controls_for' ||
          block.type == 'controls_whileUntil') {
        legal = true;
        break;
      }
      block = block.getSurroundParent();
    } while (block);
    if (legal) {
      this.setWarningText(null);
    } else {
      try{
        this.setWarningText(Blockly.LANG_CONTROLS_FLOW_STATEMENTS_WARNING);
      }catch(err){
        console.log('Captured error: ', err);
      }
    }
  }
};

//Blockly.Blocks.controls_flow_statements.TOOLTIPS = {
//  BREAK: Blockly.LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK,
//  CONTINUE: Blockly.LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE
//};

Blockly.Arduino.controls_flow_statements = function() {
  // Flow statements: continue, break.
  switch (this.getFieldValue('FLOW')) {
    case 'BREAK':
      return 'break;\n';
    case 'CONTINUE':
      return 'continue;\n';
  }
  throw 'Unknown flow statement.';
};

//////////////// VARIABLES SET & GET
Blockly.Blocks.variables_get = {
  // Variable getter.
  category: Blockly.LANG_CATEGORY_VARIABLES,  // Variables are handled specially.
  helpUrl: Blockly.LANG_VARIABLES_GET_HELPURL,
  init: function() {
    this.setColour(Blockly.LANG_COLOUR_VARIABLES);
    this.appendDummyInput("")
        .appendField(Blockly.LANG_VARIABLES_GET_Field_1)
        .appendField(new Blockly.FieldVariable(
        Blockly.LANG_VARIABLES_GET_ITEM), 'VAR');
    this.setOutput(true, null);
    this.setTooltip(Blockly.LANG_VARIABLES_GET_TOOLTIP_1);
  },
  getVars: function() {
    return [this.getFieldValue('VAR')];
  },
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
      this.setFieldValue(newName, 'VAR');
    }
  }
};

Blockly.Blocks.variables_declare = {
  // Variable setter.
  category: Blockly.LANG_CATEGORY_VARIABLES,  // Variables are handled specially.
  helpUrl: Blockly.LANG_VARIABLES_SET_HELPURL,
  init: function() {
    this.setColour(Blockly.LANG_COLOUR_VARIABLES);
    this.appendValueInput('VALUE', null)
        .appendField(Blockly.MSG_VAR_DECLARE)
        .appendField(new Blockly.FieldVariable(
        Blockly.LANG_VARIABLES_SET_ITEM), 'VAR')
        .appendField(Blockly.MSG_VAR_AS)
     	.appendField(new Blockly.FieldDropdown([[Blockly.MSG_VAR_NUMBER, "int"],["String","String"]]), "TYPE")
	    .appendField(Blockly.MSG_VAR_VALUE);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.LANG_VARIABLES_SET_TOOLTIP_1);
  },
  getVars: function() {
    var varType = this.getFieldValue('TYPE');
    if (varType=='String') var prefix='txt'; else var prefix=''; 
    return [prefix+this.getFieldValue('VAR')];
  },
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
      this.setFieldValue(newName, 'VAR');
    }
  }
};
 
Blockly.Blocks.variables_set = {
  // Variable setter.
  category: Blockly.LANG_CATEGORY_VARIABLES,  // Variables are handled specially.
  helpUrl: Blockly.LANG_VARIABLES_SET_HELPURL,
  init: function() {
    this.setColour(Blockly.LANG_COLOUR_VARIABLES);
    this.appendValueInput('VALUE')
        .appendField(Blockly.LANG_VARIABLES_SET_Field_1)
        .appendField(new Blockly.FieldVariable(
        Blockly.LANG_VARIABLES_SET_ITEM), 'VAR');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.LANG_VARIABLES_SET_TOOLTIP_1);
  },
  getVars: function() {
    return [this.getFieldValue('VAR')];
  },
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
      this.setFieldValue(newName, 'VAR');
    }
  }
};
 
 
Blockly.Arduino.variables_get = function() {
  // Variable getter.
  var code = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'),
      Blockly.Variables.NAME_TYPE);
  return [code.substring(0,code.length-1), Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.variables_declare = function() {
  // Variable setter.
  var dropdown_type = this.getFieldValue('TYPE');
  //TODO: settype to variable
  var argument0 = Blockly.Arduino.valueToCode(this, 'VALUE',
      Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'),
      Blockly.Variables.NAME_TYPE);
  var varType = this.getFieldValue('TYPE');
  if (varType=='String') var prefix='txt'; else var prefix=''; 
  Blockly.Arduino.setups_['setup_var'+varName] = prefix+varName.substring(0,varName.length-1) + ' = ' + argument0 + ';\n';
  return '';
};

Blockly.Arduino.variables_set = function() {
  // Variable setter.
  var argument0 = Blockly.Arduino.valueToCode(this, 'VALUE',
      Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'),
      Blockly.Variables.NAME_TYPE);
  return varName.substring(0,varName.length-1) + ' = ' + argument0 + ';\n';
};


//////////////////// LOGIC BLOCKS


Blockly.Blocks.logic_compare = {
  // Comparison operator.
  category: Blockly.LANG_CATEGORY_LOGIC,
  helpUrl: Blockly.LANG_LOGIC_COMPARE_HELPURL,
  init: function() {
    this.setColour(Blockly.LANG_COLOUR_LOGIC);
    this.setOutput(true, Boolean);
    this.appendValueInput('A');
    this.appendValueInput('B')
        .appendField(new Blockly.FieldDropdown(this.OPERATORS), 'OP');
    this.setInputsInline(true);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      var op = thisBlock.getFieldValue('OP');
      return Blockly.Blocks.logic_compare.TOOLTIPS[op];
    });
  }
};

Blockly.Blocks.logic_compare.OPERATORS =
    [['=', 'EQ'],
     ['\u2260', 'NEQ'],
     ['<', 'LT'],
     ['\u2264', 'LTE'],
     ['>', 'GT'],
     ['\u2265', 'GTE']];

Blockly.Blocks.logic_compare.TOOLTIPS = {
  EQ: Blockly.LANG_LOGIC_COMPARE_TOOLTIP_EQ,
  NEQ: Blockly.LANG_LOGIC_COMPARE_TOOLTIP_NEQ,
  LT: Blockly.LANG_LOGIC_COMPARE_TOOLTIP_LT,
  LTE: Blockly.LANG_LOGIC_COMPARE_TOOLTIP_LTE,
  GT: Blockly.LANG_LOGIC_COMPARE_TOOLTIP_GT,
  GTE: Blockly.LANG_LOGIC_COMPARE_TOOLTIP_GTE
};
Blockly.LANG_LOGIC_OPERATION_AND = 'and';
Blockly.LANG_LOGIC_OPERATION_OR = 'or';

Blockly.Blocks.logic_operation = {
  // Logical operations: 'and', 'or'.
  category: Blockly.LANG_CATEGORY_LOGIC,
  helpUrl: Blockly.LANG_LOGIC_OPERATION_HELPURL,
  init: function() {
    this.setColour(Blockly.LANG_COLOUR_LOGIC);
    this.setOutput(true, Boolean);
    this.appendValueInput('A')
        .setCheck(Boolean);
    this.appendValueInput('B')
        .setCheck(Boolean)
        .appendField(new Blockly.FieldDropdown(this.OPERATORS), 'OP');
    this.setInputsInline(true);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      var op = thisBlock.getFieldValue('OP');
      return Blockly.Blocks.logic_operation.TOOLTIPS[op];
    });
  }
};

Blockly.Blocks.logic_operation.OPERATORS =
    [[Blockly.LANG_LOGIC_OPERATION_AND, 'AND'],
     [Blockly.LANG_LOGIC_OPERATION_OR, 'OR']];

Blockly.Blocks.logic_operation.TOOLTIPS = {
  AND: Blockly.LANG_LOGIC_OPERATION_TOOLTIP_AND,
  OR: Blockly.LANG_LOGIC_OPERATION_TOOLTIP_OR
};

Blockly.Blocks.logic_negate = {
  // Negation.
  category: Blockly.LANG_CATEGORY_LOGIC,
  helpUrl: Blockly.LANG_LOGIC_NEGATE_HELPURL,
  init: function() {
    this.setColour(Blockly.LANG_COLOUR_LOGIC);
    this.setOutput(true, Boolean);
    this.appendValueInput('BOOL')
        .setCheck(Boolean)
        .appendField(Blockly.LANG_LOGIC_NEGATE_INPUT_NOT);
    this.setTooltip(Blockly.LANG_LOGIC_NEGATE_TOOLTIP);
  }
};

Blockly.LANG_LOGIC_BOOLEAN_TRUE='true';
Blockly.LANG_LOGIC_BOOLEAN_FALSE='false';

Blockly.Blocks.logic_boolean = {
  // Boolean data type: true and false.
  category: Blockly.LANG_CATEGORY_LOGIC,
  helpUrl: Blockly.LANG_LOGIC_BOOLEAN_HELPURL,
  init: function() {
    this.setColour(Blockly.LANG_COLOUR_LOGIC);
    this.setOutput(true, Boolean);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(this.OPERATORS), 'BOOL');
    this.setTooltip(Blockly.LANG_LOGIC_BOOLEAN_TOOLTIP);
  }
};

Blockly.Blocks.logic_boolean.OPERATORS =
    [[Blockly.LANG_LOGIC_BOOLEAN_TRUE, 'TRUE'],
     [Blockly.LANG_LOGIC_BOOLEAN_FALSE, 'FALSE']];



Blockly.Blocks.logic_null = {
  // Null data type.
  category: Blockly.LANG_CATEGORY_LOGIC,
  helpUrl: Blockly.LANG_LOGIC_NULL_HELPURL,
  init: function() {
    this.setColour(Blockly.LANG_COLOUR_LOGIC);
    this.setOutput(true, null);
    this.appendDummyInput()
        .appendField(Blockly.LANG_LOGIC_NULL);
    this.setTooltip(Blockly.LANG_LOGIC_NULL_TOOLTIP);
  }
};


Blockly.Arduino.logic_compare = function() {
  // Comparison operator.
  var mode = this.getFieldValue('OP');
  var operator = Blockly.Arduino.logic_compare.OPERATORS[mode];
  var order = (operator == '==' || operator == '!=') ?
      Blockly.Arduino.ORDER_EQUALITY : Blockly.Arduino.ORDER_RELATIONAL;
  var argument0 = Blockly.Arduino.valueToCode(this, 'A', order) || '0';
  var argument1 = Blockly.Arduino.valueToCode(this, 'B', order) || '0';
  var code = argument0 + ' ' + operator + ' ' + argument1;
  return [code, order];
};

Blockly.Arduino.logic_compare.OPERATORS = {
  EQ: '==',
  NEQ: '!=',
  LT: '<',
  LTE: '<=',
  GT: '>',
  GTE: '>='
};

Blockly.Arduino.logic_operation = function() {
  // Operations 'and', 'or'.
  var operator = (this.getFieldValue('OP') == 'AND') ? '&&' : '||';
  var order = (operator == '&&') ? Blockly.Arduino.ORDER_LOGICAL_AND :
      Blockly.Arduino.ORDER_LOGICAL_OR;
  var argument0 = Blockly.Arduino.valueToCode(this, 'A', order) || 'false';
  var argument1 = Blockly.Arduino.valueToCode(this, 'B', order) || 'false';
  var code = argument0 + ' ' + operator + ' ' + argument1;
  return [code, order];
};

Blockly.Arduino.logic_negate = function() {
  // Negation.
  var order = Blockly.Arduino.ORDER_UNARY_PREFIX;
  var argument0 = Blockly.Arduino.valueToCode(this, 'BOOL', order) || 'false';
  var code = '!' + argument0;
  return [code, order];
};

Blockly.Arduino.logic_boolean = function() {
  // Boolean values true and false.
  var code = (this.getFieldValue('BOOL') == 'TRUE') ? 'true' : 'false';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.logic_null = function() {
  var code = 'NULL';
  return [code ,Blockly.Arduino.ORDER_ATOMIC];
};






Blockly.Blocks.controls_switch = {
  // switch condition.
  category: Blockly.LANG_CATEGORY_CONTROLS,
  helpUrl: Blockly.LANG_CONTROLS_SWITCH_HELPURL,
  init: function() {
    this.setColour(Blockly.LANG_COLOUR_CONTROL);
    this.appendValueInput('IF0')
        .setCheck(Boolean)
        .appendField('switch');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setMutator(new Blockly.Mutator(['controls_switch_case',
                                         'controls_switch_default']));
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      if (!thisBlock.switchCount_ && !thisBlock.defaultCount_) {
        return Blockly.LANG_CONTROLS_SWITCH_TOOLTIP_1;
      } else if (!thisBlock.switchCount_ && thisBlock.defaultCount_) {
        return Blockly.LANG_CONTROLS_SWITCH_TOOLTIP_2;
      } else if (thisBlock.switchCount_ && !thisBlock.defaultCount_) {
        return Blockly.LANG_CONTROLS_SWITCH_TOOLTIP_3;
      } else if (thisBlock.switchCount_ && thisBlock.defaultCount_) {
        return Blockly.LANG_CONTROLS_SWITCH_TOOLTIP_4;
      }
      return '';
    });
    this.switchCount_ = 0;
    this.defaultCount_ = 0;
  },
  mutationToDom: function() {
    if (!this.switchCount_ && !this.defaultCount_) {
      return null;
    }
    var container = document.createElement('mutation');
    if (this.switchCount_) {
      container.setAttribute('case', this.switchCount_);
    }
    if (this.defaultCount_) {
      container.setAttribute('default', 1);
    }
    return container;
  },
  domToMutation: function(xmlElement) {
    this.switchCount_ = window.parseInt(xmlElement.getAttribute('case'), 10);
    this.defaultCount_ = window.parseInt(xmlElement.getAttribute('default'), 10);
    for (var x = 1; x <= this.switchCount_; x++) {
      this.appendValueInput('SWITCH' + x)
          .setCheck(Number)
          .appendField('case');
          this.setInputsInline(true);
      this.appendStatementInput('DO' + x)
          .appendField(Blockly.LANG_CONTROLS_IF_MSG_THEN);
    }
    if (this.defaultCount_) {
      this.appendStatementInput('DEFAULT')
          .appendField('default');
    }
  },
  decompose: function(workspace) {
    var containerBlock = Blockly.Block.obtain(workspace, 'controls_switch_switch');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    for (var x = 1; x <= this.switchCount_; x++) {
      var switchBlock = Blockly.Block.obtain(workspace, 'controls_switch_case');
      switchBlock.initSvg();
      connection.connect(switchBlock.previousConnection);
      connection = switchBlock.nextConnection;
    }
    if (this.defaultCount_) {
      var defaultBlock = Blockly.Block.obtain(workspace, 'controls_switch_default');
      defaultBlock.initSvg();
      connection.connect(defaultBlock.previousConnection);
    }
    return containerBlock;
  },
  compose: function(containerBlock) {
    // Disconnect the switch blocks and remove the inputs.
    if (this.defaultCount_) {
      this.removeInput('DEFAULT');
    }
    this.defaultCount_ = 0;
    // Disconnect all the switch input blocks and remove the inputs.
    for (var x = this.switchCount_; x > 0; x--) {
      this.removeInput('SWITCH' + x);     
      this.removeInput('DO' + x);
    }
    this.switchCount_ = 0;
    // Rebuild the block's optional inputs.
    var clauseBlock = containerBlock.getInputTargetBlock('STACK');
    while (clauseBlock) {
      switch (clauseBlock.type) {
        case 'controls_switch_case':
          this.switchCount_++;
          var switchInput = this.appendValueInput('SWITCH' + this.switchCount_) 
              .setCheck(Number)
              .appendField('case');

              this.setInputsInline(true);

          var doInput = this.appendStatementInput('DO' + this.switchCount_);
          doInput.appendField('do');
          // Reconnect any child blocks.
          if (clauseBlock.valueConnection_) {
            switchInput.connection.connect(clauseBlock.valueConnection_);
          }
          if (clauseBlock.statementConnection_) {
            doInput.connection.connect(clauseBlock.statementConnection_);
          }
          break;
        case 'controls_switch_default':
          this.defaultCount_++;
          var defaultInput = this.appendStatementInput('DEFAULT');
          defaultInput.appendField('default');
          // Reconnect any child blocks.
          if (clauseBlock.statementConnection_) {
            defaultInput.connection.connect(clauseBlock.statementConnection_);
          }
          break;
        default:
          throw 'Unknown block type.';
      }
      clauseBlock = clauseBlock.nextConnection &&
          clauseBlock.nextConnection.targetBlock();
    }
  },
  saveConnections: function(containerBlock) {
    // Store a pointer to any connected child blocks.
    var clauseBlock = containerBlock.getInputTargetBlock('STACK');
    var x = 1;
    while (clauseBlock) {
      switch (clauseBlock.type) {
        case 'controls_switch_case':
          var inputSwitch = this.getInput('SWITCH' + x);
          var inputDo = this.getInput('DO' + x);
          clauseBlock.valueConnection_ =
              inputSwitch && inputSwitch.connection.targetConnection;
          clauseBlock.statementConnection_ =
              inputDo && inputDo.connection.targetConnection;
          x++;
          break;
        case 'controls_switch_default':
          var inputDo = this.getInput('DEFAULT');
          clauseBlock.statementConnection_ =
              inputDo && inputDo.connection.targetConnection;
          break;
        default:
          throw 'Unknown block type.';
      }
      clauseBlock = clauseBlock.nextConnection &&
          clauseBlock.nextConnection.targetBlock();
    }
  }
};


Blockly.Blocks.controls_switch_switch = {
  // If condition.
  init: function() {
    this.appendDummyInput()
        .appendField('switch');
    this.appendStatementInput('STACK');
    this.setTooltip("Switch");
    this.contextMenu = false;
  }
};

Blockly.Blocks.controls_switch_case = {
  // case condition.
  init: function() {
    this.appendDummyInput()
        .appendField('case');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip("Switch case");
    this.contextMenu = false;
  }
};

Blockly.Blocks.controls_switch_default = {
  // default condition.
  init: function() {
    this.appendDummyInput()
        .appendField('default');
    this.setPreviousStatement(true);
    this.setTooltip("Switch default");
    this.contextMenu = false;
  }
};

Blockly.Arduino.controls_switch = function() {
  // switch condition.
  var n = 0;
  var argument = Blockly.Arduino.valueToCode(this, 'IF0' ,
      Blockly.Arduino.ORDER_NONE) || 'false';
  var branch = Blockly.Arduino.statementToCode(this, 'DO' + n);
  var code = 'switch (' + argument + ')\n{';
  for (n = 1; n <= this.switchCount_; n++) {
    argument = Blockly.Arduino.valueToCode(this, 'SWITCH' + n,
      Blockly.Arduino.ORDER_NONE) || 'false';
    branch = Blockly.Arduino.statementToCode(this, 'DO' + n);
    code += ' \n  case ' + argument + ': \n  {\n' + branch + '  break;\n  }';
  }
  if (this.defaultCount_) {
    branch = Blockly.Arduino.statementToCode(this, 'DEFAULT');
    code += '  \n  default:\n  {\n' + branch + '  }';
  }
  return code + '\n}';
};

Blockly.Blocks.math_number = {
  // Numeric value.
  category: Blockly.LANG_CATEGORY_MATH,
  helpUrl: Blockly.LANG_MATH_NUMBER_HELPURL,
  init: function() {
    this.setColour(Blockly.LANG_COLOUR_MATH);
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0',
        Blockly.Blocks.math_number.validator), 'NUM');
    this.setOutput(true, Number);
    this.setTooltip("Number");
  }
};

Blockly.Blocks.math_number.validator = function(text) {
  // Ensure that only a number may be entered.
  // TODO: Handle cases like 'o', 'ten', '1,234', '3,14', etc.
  var n = window.parseFloat(text || 0);
  return window.isNaN(n) ? null : String(n);
};

Blockly.Arduino.math_number = function() {
  // Numeric value.
  var code = window.parseFloat(this.getFieldValue('NUM'));
  // -4.abs() returns -4 in Dart due to strange order of operation choices.
  // -4 is actually an operator and a number.  Reflect this in the order.
  var order = code < 0 ?
      Blockly.Arduino.ORDER_UNARY_PREFIX : Blockly.Arduino.ORDER_ATOMIC;
  return [code, order];
};


Blockly.Arduino.base_map = function() {
     var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_NONE);
     var value_dmax = Blockly.Arduino.valueToCode(this, 'DMAX', Blockly.Arduino.ORDER_ATOMIC);
     //value_num = value_num.replace('(','').replace(')','');
     value_dmax = value_dmax.replace('(', '').replace(')', '');
     var code = 'map(' + value_num + ', 0, 1024, 0, ' + value_dmax + ')';
     return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Blocks.base_map = {
  category: Blockly.LANG_CATEGORY_MATH,
  helpUrl: "base_map_helpUrl",
  init: function() {
    this.setColour(Blockly.LANG_COLOUR_MATH);
    this.appendValueInput("NUM", Number)
      .appendField("Map ")
      .setCheck(Number);
    this.appendValueInput("DMAX", Number)
      .appendField("Value to [0-")
      .setCheck(Number);
    this.appendDummyInput("")
      .appendField("]");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip("Re-maps a number from [0-1024] to another.");
  }
};

Blockly.Blocks.math_arithmetic = {
  // Basic arithmetic operator.
  category: Blockly.LANG_CATEGORY_MATH,
  helpUrl: Blockly.LANG_MATH_ARITHMETIC_HELPURL,
  init: function() {
    this.setColour(Blockly.LANG_COLOUR_MATH);
    this.setOutput(true, Number);
    this.appendValueInput('A')
        .setCheck(Number);
    this.appendValueInput('B')
        .setCheck(Number)
        .appendField(new Blockly.FieldDropdown(this.OPERATORS), 'OP');
    this.setInputsInline(true);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      var mode = thisBlock.getFieldValue('OP');
      return Blockly.Blocks.math_arithmetic.TOOLTIPS[mode];
    });
  }
};

Blockly.Blocks.math_arithmetic.OPERATORS =
    [['+', 'ADD'],
     ['-', 'MINUS'],
     ['\u00D7', 'MULTIPLY'],
     ['\u00F7', 'DIVIDE'],
     ['^', 'POWER']];

Blockly.Blocks.math_arithmetic.TOOLTIPS = {
  ADD: Blockly.LANG_MATH_ARITHMETIC_TOOLTIP_ADD,
  MINUS: Blockly.LANG_MATH_ARITHMETIC_TOOLTIP_MINUS,
  MULTIPLY: Blockly.LANG_MATH_ARITHMETIC_TOOLTIP_MULTIPLY,
  DIVIDE: Blockly.LANG_MATH_ARITHMETIC_TOOLTIP_DIVIDE,
  POWER: Blockly.LANG_MATH_ARITHMETIC_TOOLTIP_POWER
};


Blockly.Arduino.math_arithmetic = function() {
  // Basic arithmetic operators, and power.
  var mode = this.getFieldValue('OP');
  var tuple = Blockly.Arduino.math_arithmetic.OPERATORS[mode];
  var operator = tuple[0];
  var order = tuple[1];
  var argument0 = Blockly.Arduino.valueToCode(this, 'A', order) || '0';
  var argument1 = Blockly.Arduino.valueToCode(this, 'B', order) || '0';
  var code;
  if (!operator) {
    code = 'Math.pow(' + argument0 + ', ' + argument1 + ')';
    return [code, Blockly.Arduino.ORDER_UNARY_POSTFIX];
  }
  code = argument0 + operator + argument1;
  return [code, order];
};

Blockly.Arduino.math_arithmetic.OPERATORS = {
  ADD: [' + ', Blockly.Arduino.ORDER_ADDITIVE],
  MINUS: [' - ', Blockly.Arduino.ORDER_ADDITIVE],
  MULTIPLY: [' * ', Blockly.Arduino.ORDER_MULTIPLICATIVE],
  DIVIDE: [' / ', Blockly.Arduino.ORDER_MULTIPLICATIVE],
  POWER: [null, Blockly.Arduino.ORDER_NONE]  // Handle power separately.
};


Blockly.Blocks.math_modulo = {
  // Remainder of a division.
  category: Blockly.LANG_CATEGORY_MATH,
  helpUrl: Blockly.LANG_MATH_MODULO_HELPURL,
  init: function() {
    this.setColour(Blockly.LANG_COLOUR_MATH);
    this.setOutput(true, Number);
    this.appendValueInput('DIVIDEND')
        .setCheck(Number)
        .appendField(Blockly.LANG_MATH_MODULO_INPUT_DIVIDEND);
    this.appendValueInput('DIVISOR')
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField('\u00F7');
    this.setInputsInline(true);
    this.setTooltip(Blockly.LANG_MATH_MODULO_TOOLTIP);
  }
};


Blockly.Arduino.math_modulo = function() {
  // Remainder computation.
  var argument0 = Blockly.Arduino.valueToCode(this, 'DIVIDEND',
      Blockly.Arduino.ORDER_MULTIPLICATIVE) || '0';
  var argument1 = Blockly.Arduino.valueToCode(this, 'DIVISOR',
      Blockly.Arduino.ORDER_MULTIPLICATIVE) || '0';
  var code = argument0 + ' % ' + argument1;
  return [code, Blockly.Arduino.ORDER_MULTIPLICATIVE];
};


////////////////// TEXT: 
Blockly.Arduino.text = function() {
  // Text value.
  var code = Blockly.Arduino.quote_(this.getFieldValue('TEXT'));
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Blocks.text = {
  // Text value.
  category: Blockly.LANG_CATEGORY_TEXT,
  helpUrl: Blockly.LANG_TEXT_TEXT_HELPURL,
  init: function() {
    this.setColour(Blockly.LANG_COLOUR_TEXT);
    this.appendDummyInput()
//        .appendField(new Blockly.FieldImage(
//        '../img/core/quote0.png', 12, 12))
        .appendField(new Blockly.FieldTextInput(''), 'TEXT')
//        .appendField(new Blockly.FieldImage(
//        '../img/core/quote1.png', 12, 12));
    this.setOutput(true, String);
    this.setTooltip(Blockly.LANG_TEXT_TEXT_TOOLTIP);
  }
};


Blockly.Blocks.text_join = {
  // Create a string made up of any number of elements of any type.
  category: Blockly.LANG_CATEGORY_TEXT,
  helpUrl: Blockly.LANG_TEXT_JOIN_HELPURL,
  init: function() {
    this.setColour(Blockly.LANG_COLOUR_TEXT);
    this.appendValueInput('ADD0')
        .appendField(Blockly.LANG_TEXT_JOIN_Field_CREATEWITH);
    this.appendValueInput('ADD1');
    this.setOutput(true, String);
    this.setMutator(new Blockly.Mutator(['text_create_join_item']));
    this.setTooltip(Blockly.LANG_TEXT_JOIN_TOOLTIP);
    this.itemCount_ = 2;
  },
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('items', this.itemCount_);
    return container;
  },
  domToMutation: function(xmlElement) {
    for (var x = 0; x < this.itemCount_; x++) {
      this.removeInput('ADD' + x);
    }
    this.itemCount_ = window.parseInt(xmlElement.getAttribute('items'), 10);
    for (var x = 0; x < this.itemCount_; x++) {
      var input = this.appendValueInput('ADD' + x);
      if (x == 0) {
        input.appendField(Blockly.LANG_TEXT_JOIN_Field_CREATEWITH);
      }
    }
    if (this.itemCount_ == 0) {
      this.appendDummyInput('EMPTY')
          .appendField(new Blockly.FieldImage(Blockly.pathToBlockly +
          'media/quote0.png', 12, 12))
          .appendField(new Blockly.FieldImage(Blockly.pathToBlockly +
          'media/quote1.png', 12, 12));
    }
  },
  decompose: function(workspace) {
    var containerBlock = Blockly.Block.obtain(workspace,
                                           'text_create_join_container');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    for (var x = 0; x < this.itemCount_; x++) {
      var itemBlock = Blockly.Block.obtain(workspace, 'text_create_join_item');
      itemBlock.initSvg();
      connection.connect(itemBlock.previousConnection);
      connection = itemBlock.nextConnection;
    }
    return containerBlock;
  },
  compose: function(containerBlock) {
    // Disconnect all input blocks and remove all inputs.
    if (this.itemCount_ == 0) {
      this.removeInput('EMPTY');
    } else {
      for (var x = this.itemCount_ - 1; x >= 0; x--) {
        this.removeInput('ADD' + x);
      }
    }
    this.itemCount_ = 0;
    // Rebuild the block's inputs.
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    while (itemBlock) {
      var input = this.appendValueInput('ADD' + this.itemCount_);
      if (this.itemCount_ == 0) {
        input.appendField(Blockly.LANG_TEXT_JOIN_Field_CREATEWITH);
      }
      // Reconnect any child blocks.
      if (itemBlock.valueConnection_) {
        input.connection.connect(itemBlock.valueConnection_);
      }
      this.itemCount_++;
      itemBlock = itemBlock.nextConnection &&
          itemBlock.nextConnection.targetBlock();
    }
    if (this.itemCount_ == 0) {
      this.appendDummyInput('EMPTY')
          .appendField(new Blockly.FieldImage(Blockly.pathToBlockly +
          'media/quote0.png', 12, 12))
          .appendField(new Blockly.FieldImage(Blockly.pathToBlockly +
          'media/quote1.png', 12, 12));
    }
  },
  saveConnections: function(containerBlock) {
    // Store a pointer to any connected child blocks.
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    var x = 0;
    while (itemBlock) {
      var input = this.getInput('ADD' + x);
      itemBlock.valueConnection_ = input && input.connection.targetConnection;
      x++;
      itemBlock = itemBlock.nextConnection &&
          itemBlock.nextConnection.targetBlock();
    }
  }
};

Blockly.Blocks.text_create_join_container = {
  // Container.
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.LANG_TEXT_CREATE_JOIN_Field_JOIN);
    this.appendStatementInput('STACK');
    this.setTooltip(Blockly.LANG_TEXT_CREATE_JOIN_TOOLTIP);
    this.contextMenu = false;
  }
};

Blockly.Blocks.text_create_join_item = {
  // Add items.
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.LANG_TEXT_CREATE_JOIN_ITEM_Field_ITEM);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.LANG_TEXT_CREATE_JOIN_ITEM_TOOLTIP);
    this.contextMenu = false;
  }
};


Blockly.Blocks.text_create_join_container = {
  // Container.
  init: function() {
    this.setColour(Blockly.LANG_COLOUR_TEXT);
    this.appendDummyInput()
        .appendField(Blockly.LANG_TEXT_CREATE_JOIN_TITLE_JOIN);
    this.appendStatementInput('STACK');
    this.setTooltip(Blockly.LANG_TEXT_CREATE_JOIN_TOOLTIP);
    this.contextMenu = false;
  }
};

Blockly.Blocks.text_create_join_item = {
  // Add items.
  init: function() {
    this.setColour(Blockly.LANG_COLOUR_TEXT);
    this.appendDummyInput()
        .appendField(Blockly.LANG_TEXT_CREATE_JOIN_ITEM_TITLE_ITEM);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.LANG_TEXT_CREATE_JOIN_ITEM_TOOLTIP);
    this.contextMenu = false;
  }
};


Blockly.Arduino.text_join = function() {
  // Create a string made up of any number of elements of any type.
  var code;
  if (this.itemCount_ == 0) {
    return ['\'\'', Blockly.Arduino.ORDER_ATOMIC];
  } else if (this.itemCount_ == 1) {
    var argument0 = Blockly.Arduino.valueToCode(this, 'ADD0',
        Blockly.Arduino.ORDER_UNARY_POSTFIX) || '\'\'';
    code = argument0;
    return [code, Blockly.Arduino.ORDER_UNARY_POSTFIX];
  } else {
    code = [];
    code[0] = (Blockly.Arduino.valueToCode(this, 'ADD0',
        Blockly.Arduino.ORDER_NONE) || '\'\'');
    for (var n = 1; n < this.itemCount_; n++) {
      code[n] = '+' + (Blockly.Arduino.valueToCode(this, 'ADD' + n,
          Blockly.Arduino.ORDER_NONE) || '\'\'');
    }
    code = code.join('');
    return [code, Blockly.Arduino.ORDER_UNARY_POSTFIX];
  }
};

Blockly.Blocks.text_append = {
  // Append to a variable in place.
  category: Blockly.LANG_CATEGORY_TEXT,
  helpUrl: Blockly.LANG_TEXT_APPEND_HELPURL,
  init: function() {
    this.setColour(Blockly.LANG_COLOUR_TEXT);
    this.appendValueInput('TEXT')
        .appendField(Blockly.LANG_TEXT_APPEND_TO)
        .appendField(new Blockly.FieldVariable(
        Blockly.LANG_TEXT_APPEND_VARIABLE), 'VAR')
        .appendField(Blockly.LANG_TEXT_APPEND_APPENDTEXT);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      return Blockly.LANG_TEXT_APPEND_TOOLTIP.replace('%1',
          thisBlock.getFieldValue('VAR'));
    });
  },
  getVars: function() {
    return [this.getFieldValue('VAR')];
  },
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
      this.setTitleValue(newName, 'VAR');
    }
  }
};

Blockly.Blocks.text_length = {
  // String length.
  category: Blockly.LANG_CATEGORY_TEXT,
  helpUrl: Blockly.LANG_TEXT_LENGTH_HELPURL,
  init: function() {
    this.setColour(Blockly.LANG_COLOUR_TEXT);
    this.appendValueInput('VALUE')
        .setCheck([String, Array])
        .appendField(Blockly.LANG_TEXT_LENGTH_INPUT_LENGTH);
    this.setOutput(true, Number);
    this.setTooltip(Blockly.LANG_TEXT_LENGTH_TOOLTIP);
  }
};

Blockly.Blocks.text_isEmpty = {
  // Is the string null?
  category: Blockly.LANG_CATEGORY_TEXT,
  helpUrl: Blockly.LANG_TEXT_ISEMPTY_HELPURL,
  init: function() {
    this.setColour(Blockly.LANG_COLOUR_TEXT);
    this.appendValueInput('VALUE')
        .setCheck([String, Array])
        .appendField(Blockly.LANG_TEXT_ISEMPTY_INPUT_ISEMPTY);
    this.setOutput(true, Boolean);
    this.setTooltip(Blockly.LANG_TEXT_ISEMPTY_TOOLTIP);
  }
};

Blockly.Blocks.text_endString = {
  // Return a leading or trailing substring.
  category: Blockly.LANG_CATEGORY_TEXT,
  helpUrl: Blockly.LANG_TEXT_ENDSTRING_HELPURL,
  init: function() {
    this.setColour(Blockly.LANG_COLOUR_TEXT);
    this.setOutput(true, String);
    var menu = new Blockly.FieldDropdown(this.OPERATORS);
    this.appendValueInput('NUM')
        .setCheck(Number)
        .appendField(menu, 'END');
    this.appendValueInput('TEXT')
        .setCheck(String)
        .appendField(Blockly.LANG_TEXT_ENDSTRING_INPUT);
    this.setInputsInline(true);
    this.setTooltip(Blockly.LANG_TEXT_ENDSTRING_TOOLTIP);
  }
};

Blockly.Blocks.text_endString.OPERATORS =
    [[Blockly.LANG_TEXT_ENDSTRING_OPERATOR_FIRST, 'FIRST'],
     [Blockly.LANG_TEXT_ENDSTRING_OPERATOR_LAST, 'LAST']];

Blockly.Blocks.text_indexOf = {
  // Find a substring in the text.
  category: Blockly.LANG_CATEGORY_TEXT,
  helpUrl: Blockly.LANG_TEXT_INDEXOF_HELPURL,
  init: function() {
    this.setColour(Blockly.LANG_COLOUR_TEXT);
    this.setOutput(true, Number);
    this.appendValueInput('FIND')
        .setCheck(String)
        .appendField(Blockly.LANG_TEXT_INDEXOF_TITLE_FIND)
        .appendField(new Blockly.FieldDropdown(this.OPERATORS), 'END')
        .appendField(Blockly.LANG_TEXT_INDEXOF_INPUT_OCCURRENCE);
    this.appendValueInput('VALUE')
        .setCheck(String)
        .appendField(Blockly.LANG_TEXT_INDEXOF_INPUT_INTEXT);
    this.setInputsInline(true);
    this.setTooltip(Blockly.LANG_TEXT_INDEXOF_TOOLTIP);
  }
};

Blockly.Blocks.text_indexOf.OPERATORS =
    [[Blockly.LANG_TEXT_INDEXOF_OPERATOR_FIRST, 'FIRST'],
     [Blockly.LANG_TEXT_INDEXOF_OPERATOR_LAST, 'LAST']];

Blockly.Blocks.text_charAt = {
  // Get a character from the string.
  category: Blockly.LANG_CATEGORY_TEXT,
  helpUrl: Blockly.LANG_TEXT_CHARAT_HELPURL,
  init: function() {
    this.setColour(Blockly.LANG_COLOUR_TEXT);
    this.setOutput(true, String);
    this.appendValueInput('AT')
        .setCheck(Number)
        .appendField(Blockly.LANG_TEXT_CHARAT_INPUT_AT);
    this.appendValueInput('VALUE')
        .setCheck(String)
        .appendField(Blockly.LANG_TEXT_CHARAT_INPUT_INTEXT);
    this.setInputsInline(true);
    this.setTooltip(Blockly.LANG_TEXT_CHARAT_TOOLTIP);
  }
};

Blockly.Blocks.text_changeCase = {
  // Change capitalization.
  category: Blockly.LANG_CATEGORY_TEXT,
  helpUrl: Blockly.LANG_TEXT_CHANGECASE_HELPURL,
  init: function() {
    this.setColour(Blockly.LANG_COLOUR_TEXT);
    this.appendValueInput('TEXT')
        .setCheck(String)
        .appendField(Blockly.LANG_TEXT_CHANGECASE_TITLE_TO)
        .appendField(new Blockly.FieldDropdown(this.OPERATORS), 'CASE');
    this.setOutput(true, String);
    this.setTooltip(Blockly.LANG_TEXT_CHANGECASE_TOOLTIP);
  }
};

Blockly.Blocks.text_changeCase.OPERATORS =
    [[Blockly.LANG_TEXT_CHANGECASE_OPERATOR_UPPERCASE, 'UPPERCASE'],
     [Blockly.LANG_TEXT_CHANGECASE_OPERATOR_LOWERCASE, 'LOWERCASE'],
     [Blockly.LANG_TEXT_CHANGECASE_OPERATOR_TITLECASE, 'TITLECASE']];

Blockly.Blocks.text_trim = {
  // Trim spaces.
  category: Blockly.LANG_CATEGORY_TEXT,
  helpUrl: Blockly.LANG_TEXT_TRIM_HELPURL,
  init: function() {
    this.setColour(Blockly.LANG_COLOUR_TEXT);
    var menu = new Blockly.FieldDropdown(this.OPERATORS, function(text) {
      var newTitle = (text == Blockly.LANG_TEXT_TRIM_OPERATOR_BOTH) ?
          Blockly.LANG_TEXT_TRIM_TITLE_SIDES :
          Blockly.LANG_TEXT_TRIM_TITLE_SIDE;
      this.sourceBlock_.setTitleValue(newTitle, 'SIDES');
      this.setText(text);
    });
    this.appendValueInput('TEXT')
        .setCheck(String)
        .appendField(Blockly.LANG_TEXT_TRIM_TITLE_SPACE)
        .appendField(menu, 'MODE')
        .appendField(Blockly.LANG_TEXT_TRIM_TITLE_SIDES, 'SIDES');
    this.setOutput(true, String);
    this.setTooltip(Blockly.LANG_TEXT_TRIM_TOOLTIP);
  },
  mutationToDom: function() {
    // Save whether the 'sides' title should be plural or singular.
    var container = document.createElement('mutation');
    var plural = (this.getFieldValue('MODE') == 'BOTH');
    container.setAttribute('plural', plural);
    return container;
  },
  domToMutation: function(xmlElement) {
    // Restore the 'sides' title as plural or singular.
    var plural = (xmlElement.getAttribute('plural') == 'true');
    this.setTitleValue(plural ? Blockly.LANG_TEXT_TRIM_TITLE_SIDES :
                      Blockly.LANG_TEXT_TRIM_TITLE_SIDE, 'SIDES');
  }
};

Blockly.Blocks.text_trim.OPERATORS =
    [[Blockly.LANG_TEXT_TRIM_OPERATOR_BOTH, 'BOTH'],
     [Blockly.LANG_TEXT_TRIM_OPERATOR_LEFT, 'LEFT'],
     [Blockly.LANG_TEXT_TRIM_OPERATOR_RIGHT, 'RIGHT']];

Blockly.Blocks.text_print = {
  // Print statement.
//  category: Blockly.LANG_CATEGORY_TEXT,
  helpUrl: Blockly.LANG_TEXT_PRINT_HELPURL,
  init: function() {
    this.setColour(Blockly.LANG_COLOUR_TEXT);
    this.appendValueInput('TEXT')
        .appendField(Blockly.LANG_TEXT_PRINT_TITLE_PRINT);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.LANG_TEXT_PRINT_TOOLTIP);
  }
};

Blockly.Blocks.text_prompt = {
  // Prompt function.
  category: Blockly.LANG_CATEGORY_TEXT,
  helpUrl: Blockly.LANG_TEXT_PROMPT_HELPURL,
  init: function() {
    this.setColour(Blockly.LANG_COLOUR_TEXT);
    this.appendDummyInput()
        .appendField(Blockly.LANG_TEXT_PROMPT_TITLE_PROMPT_FOR)
        .appendField(new Blockly.FieldDropdown(this.TYPES), 'TYPE')
        .appendField(Blockly.LANG_TEXT_PROMPT_TITILE_WITH_MESSAGE)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly +
        'media/quote0.png', 12, 12))
        .appendField(new Blockly.FieldTextInput(''), 'TEXT')
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly +
        'media/quote1.png', 12, 12));
    this.setOutput(true, [Number, String]);
    this.setTooltip(Blockly.LANG_TEXT_PROMPT_TOOLTIP);
  }
};

Blockly.Blocks.text_prompt.TYPES =
    [[Blockly.LANG_TEXT_PROMPT_TYPE_TEXT, 'TEXT'],
     [Blockly.LANG_TEXT_PROMPT_TYPE_NUMBER, 'NUMBER']];
Blockly.Arduino.text_append = function() {
  // Append to a variable in place.
  var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'),
      Blockly.Variables.NAME_TYPE);
  var argument0 = Blockly.Arduino.valueToCode(this, 'TEXT',
      Blockly.Arduino.ORDER_UNARY_POSTFIX) || '\'\'';
  return varName + ' = new StringBuffer(' + varName +
      ').add(' + argument0 + ').toString();\n';
};


Blockly.Arduino.text_length = function() {
  // String length.
  var argument0 = Blockly.Arduino.valueToCode(this, 'VALUE',
      Blockly.Arduino.ORDER_UNARY_POSTFIX) || '\'\'';
  return [argument0 + '.length()', Blockly.Arduino.ORDER_UNARY_POSTFIX];
};


Blockly.Arduino.text_isEmpty = function() {
  // Is the string null?
  var argument0 = Blockly.Arduino.valueToCode(this, 'VALUE',
      Blockly.Arduino.ORDER_UNARY_POSTFIX) || '\'\'';
  return [argument0 + '.isEmpty()', Blockly.Arduino.ORDER_UNARY_POSTFIX];
};


Blockly.Arduino.text_indexOf = function() {
  // Search the text for a substring.
  var operator = this.getFieldValue('END') == 'FIRST' ?
      'indexOf' : 'lastIndexOf';
  var argument0 = Blockly.Arduino.valueToCode(this, 'FIND',
      Blockly.Arduino.ORDER_NONE) || '\'\'';
  var argument1 = Blockly.Arduino.valueToCode(this, 'VALUE',
      Blockly.Arduino.ORDER_UNARY_POSTFIX) || '\'\'';
  var code = argument1 + '.' + operator + '(' + argument0 + ') + 1';
  return [code, Blockly.Arduino.ORDER_UNARY_POSTFIX];
};


Blockly.Arduino.text_charAt = function() {
  // Get letter at index.
  var argument0 = Blockly.Arduino.valueToCode(this, 'AT',
      Blockly.Arduino.ORDER_NONE) || '1';
  var argument1 = Blockly.Arduino.valueToCode(this, 'VALUE',
      Blockly.Arduino.ORDER_UNARY_POSTFIX) || '\'\'';
  // Blockly uses one-based arrays.
  if (argument0.match(/^-?\d+$/)) {
    // If the index is a naked number, decrement it right now.
    argument0 = parseInt(argument0, 10) - 1;
  } else {
    // If the index is dynamic, decrement it in code.
    argument0 += ' - 1';
  }
  var code = argument1 + '[' + argument0 + ']';
  return [code, Blockly.Arduino.ORDER_UNARY_POSTFIX];
};


Blockly.Arduino.text_changeCase = function() {
  // Change capitalization.
  var mode = this.getFieldValue('CASE');
  var operator = Blockly.Arduino.text_changeCase.OPERATORS[mode];
  var code;
  if (operator) {
    // Upper and lower case are functions built into Dart.
    var argument0 = Blockly.Arduino.valueToCode(this, 'TEXT',
        Blockly.Arduino.ORDER_UNARY_POSTFIX) || '\'\'';
    code = argument0 + operator;
  } else {
    if (!Blockly.Arduino.definitions_['toFieldCase']) {
      // Field case is not a native Dart function.  Define one.
      var functionName = Blockly.Arduino.variableDB_.getDistinctName(
          'text_toFieldCase', Blockly.Generator.NAME_TYPE);
      Blockly.Arduino.text_changeCase.toFieldCase = functionName;
      var func = [];
      func.push('String ' + functionName + '(str) {');
      func.push('  RegExp exp = const RegExp(r\'\\b\');');
      func.push('  List<String> list = str.split(exp);');
      func.push('  String Field = \'\';');
      func.push('  for (String part in list) {');
      func.push('    if (part.length > 0) {');
      func.push('      Field.add(part[0].toUpperCase());');
      func.push('      if (part.length > 0) {');
      func.push('        Field.add(part.substring(1).toLowerCase());');
      func.push('      }');
      func.push('    }');
      func.push('  }');
      func.push('  return Field.toString();');
      func.push('}');
      Blockly.Arduino.definitions_['toFieldCase'] = func.join('\n');
    }
    var argument0 = Blockly.Arduino.valueToCode(this, 'TEXT',
        Blockly.Arduino.ORDER_NONE) || '\'\'';
    code = Blockly.Arduino.text_changeCase.toFieldCase + '(' + argument0 + ')';
  }
  return [code, Blockly.Arduino.ORDER_UNARY_POSTFIX];
};

Blockly.Arduino.text_changeCase.OPERATORS = {
  UPPERCASE: '.toUpperCase()',
  LOWERCASE: '.toLowerCase()',
  FieldCASE: null
};


Blockly.Arduino.text_trim = function() {
  // Trim spaces.
  var mode = this.getFieldValue('MODE');
  var operator = Blockly.Arduino.text_trim.OPERATORS[mode];
  var argument0 = Blockly.Arduino.valueToCode(this, 'TEXT',
      Blockly.Arduino.ORDER_UNARY_POSTFIX) || '\'\'';
  return [argument0 + operator, Blockly.Arduino.ORDER_UNARY_POSTFIX];
};

Blockly.Arduino.text_trim.OPERATORS = {
  LEFT: '.replaceFirst(new RegExp(r\'^\\s+\'), \'\')',
  RIGHT: '.replaceFirst(new RegExp(r\'\\s+$\'), \'\')',
  BOTH: '.trim()'
};

Blockly.Arduino.text_print = function() {
  // Print statement.
  var argument0 = Blockly.Arduino.valueToCode(this, 'TEXT',
      Blockly.Arduino.ORDER_NONE) || '\'\'';
  return 'print(' + argument0 + ');\n';
};

Blockly.Arduino.text_prompt = function() {
  // Prompt function.
  Blockly.Arduino.definitions_['import_dart_html'] = '#import(\'dart:html\');';
  var msg = Blockly.Arduino.quote_(this.getFieldValue('TEXT'));
  var code = 'window.prompt(' + msg + ', \'\')';
  var toNumber = this.getFieldValue('TYPE') == 'NUMBER';
  if (toNumber) {
    code = 'Math.parseDouble(' + code + ')';
  }
  return [code, Blockly.Arduino.ORDER_UNARY_POSTFIX];
};


//////////////////// PROCEDURES

Blockly.Blocks.procedures_defnoreturn = {
  // Define a procedure with no return value.
  category: Blockly.LANG_CATEGORY_PROCEDURES,  // Procedures are handled specially.
  helpUrl: Blockly.LANG_PROCEDURES_DEFNORETURN_HELPURL,
  init: function() {
    this.setColour(Blockly.LANG_COLOUR_PROCEDURES);
    var name = Blockly.Procedures.findLegalName(
        Blockly.LANG_PROCEDURES_DEFNORETURN_PROCEDURE, this);
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput(name,
        Blockly.Procedures.rename), 'NAME')
        .appendField('', 'PARAMS');
    this.appendStatementInput('STACK')
        .appendField(Blockly.LANG_PROCEDURES_DEFNORETURN_DO);
    this.setMutator(new Blockly.Mutator(['procedures_mutatorarg']));
    this.setTooltip(Blockly.LANG_PROCEDURES_DEFNORETURN_TOOLTIP);
    this.arguments_ = [];
  },
  updateParams_: function() {
    // Check for duplicated arguments.
    var badArg = false;
    var hash = {};
    for (var x = 0; x < this.arguments_.length; x++) {
      if (hash['arg_' + this.arguments_[x].toLowerCase()]) {
        badArg = true;
        break;
      }
      hash['arg_' + this.arguments_[x].toLowerCase()] = true;
    }
    if (badArg) {
      try{
        this.setWarningText(Blockly.LANG_PROCEDURES_DEF_DUPLICATE_WARNING);
      }catch(err){
        console.log('Captured error: ', err);
      }
    } else {
      this.setWarningText(null);
    }
    // Merge the arguments into a human-readable list.
    var paramString = this.arguments_.join(', ');
    this.setFieldValue(paramString, 'PARAMS');
  },
  mutationToDom: function() {
    var container = document.createElement('mutation');
    for (var x = 0; x < this.arguments_.length; x++) {
      var parameter = document.createElement('arg');
      parameter.setAttribute('name', this.arguments_[x]);
      container.appendChild(parameter);
    }
    return container;
  },
  domToMutation: function(xmlElement) {
    this.arguments_ = [];
    for (var x = 0, childNode; childNode = xmlElement.childNodes[x]; x++) {
      if (childNode.nodeName.toLowerCase() == 'arg') {
        this.arguments_.push(childNode.getAttribute('name'));
      }
    }
    this.updateParams_();
  },
  decompose: function(workspace) {
    var containerBlock = Blockly.Block.obtain(workspace,
                                           'procedures_mutatorcontainer');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    for (var x = 0; x < this.arguments_.length; x++) {
      var paramBlock = Blockly.Block.obtain(workspace, 'procedures_mutatorarg');
      paramBlock.initSvg();
      paramBlock.setFieldValue(this.arguments_[x], 'NAME');
      // Store the old location.
      paramBlock.oldLocation = x;
      connection.connect(paramBlock.previousConnection);
      connection = paramBlock.nextConnection;
    }
    // Initialize procedure's callers with blank IDs.
    Blockly.Procedures.mutateCallers(this.getFieldValue('NAME'),
                                     this.workspace, this.arguments_, null);
    return containerBlock;
  },
  compose: function(containerBlock) {
    this.arguments_ = [];
    this.paramIds_ = [];
    var paramBlock = containerBlock.getInputTargetBlock('STACK');
    while (paramBlock) {
      this.arguments_.push(paramBlock.getFieldValue('NAME'));
      this.paramIds_.push(paramBlock.id);
      paramBlock = paramBlock.nextConnection &&
          paramBlock.nextConnection.targetBlock();
    }
    this.updateParams_();
    Blockly.Procedures.mutateCallers(this.getFieldValue('NAME'),
        this.workspace, this.arguments_, this.paramIds_);
  },
  dispose: function() {
    var name = this.getFieldValue('NAME');
    var editable = this.editable;
    var workspace = this.workspace;
    // Call parent's destructor.
    Blockly.Block.prototype.dispose.apply(this, arguments);
    if (editable) {
      // Dispose of any callers.
      Blockly.Procedures.disposeCallers(name, workspace);
    }
  },
  getProcedureDef: function() {
    // Return the name of the defined procedure,
    // a list of all its arguments,
    // and that it DOES NOT have a return value.
    return [this.getFieldValue('NAME'), this.arguments_, false];
  },
  getVars: function() {
    return this.arguments_;
  },
  renameVar: function(oldName, newName) {
    var change = false;
    for (var x = 0; x < this.arguments_.length; x++) {
      if (Blockly.Names.equals(oldName, this.arguments_[x])) {
        this.arguments_[x] = newName;
        change = true;
      }
    }
    if (change) {
      this.updateParams_();
      // Update the mutator's variables if the mutator is open.
      if (this.mutator.isVisible_()) {
        var blocks = this.mutator.workspace_.getAllBlocks();
        for (var x = 0, block; block = blocks[x]; x++) {
          if (block.type == 'procedures_mutatorarg' &&
              Blockly.Names.equals(oldName, block.getFieldValue('NAME'))) {
            block.setFieldValue(newName, 'NAME');
          }
        }
      }
    }
  }
};

Blockly.Blocks.procedures_defreturn = {
  // Define a procedure with a return value.
  category: Blockly.LANG_CATEGORY_PROCEDURES,  // Procedures are handled specially.
  helpUrl: Blockly.LANG_PROCEDURES_DEFRETURN_HELPURL,
  init: function() {
    this.setColour(Blockly.LANG_COLOUR_PROCEDURES);
    var name = Blockly.Procedures.findLegalName(
        Blockly.LANG_PROCEDURES_DEFRETURN_PROCEDURE, this);
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput(name,
        Blockly.Procedures.rename), 'NAME')
        .appendField('', 'PARAMS');
    this.appendStatementInput('STACK')
        .appendField(Blockly.LANG_PROCEDURES_DEFRETURN_DO);
    this.appendValueInput('RETURN')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.LANG_PROCEDURES_DEFRETURN_RETURN);
    this.setMutator(new Blockly.Mutator(['procedures_mutatorarg']));
    this.setTooltip(Blockly.LANG_PROCEDURES_DEFRETURN_TOOLTIP);
    this.arguments_ = [];
  },
  updateParams_: Blockly.Blocks.procedures_defnoreturn.updateParams_,
  mutationToDom: Blockly.Blocks.procedures_defnoreturn.mutationToDom,
  domToMutation: Blockly.Blocks.procedures_defnoreturn.domToMutation,
  decompose: Blockly.Blocks.procedures_defnoreturn.decompose,
  compose: Blockly.Blocks.procedures_defnoreturn.compose,
  dispose: Blockly.Blocks.procedures_defnoreturn.dispose,
  getProcedureDef: function() {
    // Return the name of the defined procedure,
    // a list of all its arguments,
    // and that it DOES have a return value.
    return [this.getFieldValue('NAME'), this.arguments_, true];
  },
  getVars: Blockly.Blocks.procedures_defnoreturn.getVars,
  renameVar: Blockly.Blocks.procedures_defnoreturn.renameVar
};

Blockly.Blocks.procedures_mutatorcontainer = {
  // Procedure container (for mutator dialog).
  init: function() {
    this.setColour(Blockly.LANG_COLOUR_PROCEDURES);
    this.appendDummyInput()
        .appendField(Blockly.LANG_PROCEDURES_MUTATORCONTAINER_Field);
    this.appendStatementInput('STACK');
    this.setTooltip('');
    this.contextMenu = false;
  }
};

Blockly.Blocks.procedures_mutatorarg = {
  // Procedure argument (for mutator dialog).
  init: function() {
    this.setColour(Blockly.LANG_COLOUR_PROCEDURES);
    this.appendDummyInput()
        .appendField(Blockly.LANG_PROCEDURES_MUTATORARG_Field)
        .appendField(new Blockly.FieldTextInput('x',
        Blockly.Blocks.procedures_mutatorarg.validator), 'NAME');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.contextMenu = false;
  }
};

Blockly.Blocks.procedures_mutatorarg.validator = function(newVar) {
  // Merge runs of whitespace.  Strip leading and trailing whitespace.
  // Beyond this, all names are legal.
  newVar = newVar.replace(/[\s\xa0]+/g, ' ').replace(/^ | $/g, '');
  return newVar || null;
};

Blockly.Blocks.procedures_callnoreturn = {
  // Call a procedure with no return value.
  category: Blockly.LANG_CATEGORY_PROCEDURES,  // Procedures are handled specially.
  helpUrl: Blockly.LANG_PROCEDURES_CALLNORETURN_HELPURL,
  init: function() {
    this.setColour(Blockly.LANG_COLOUR_PROCEDURES);
    this.appendDummyInput()
        .appendField(Blockly.LANG_PROCEDURES_CALLNORETURN_CALL)
        .appendField(Blockly.LANG_PROCEDURES_CALLNORETURN_PROCEDURE, 'NAME');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.LANG_PROCEDURES_CALLNORETURN_TOOLTIP);
    this.arguments_ = [];
    this.quarkConnections_ = null;
    this.quarkArguments_ = null;
  },
  getProcedureCall: function() {
    return this.getFieldValue('NAME');
  },
  renameProcedure: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('NAME'))) {
      this.setFieldValue(newName, 'NAME');
    }
  },
  setProcedureParameters: function(paramNames, paramIds) {
    // Data structures for parameters on each call block:
    // this.arguments = ['x', 'y']
    //     Existing param names.
    // paramNames = ['x', 'y', 'z']
    //     New param names.
    // paramIds = ['piua', 'f8b_', 'oi.o']
    //     IDs of params (consistent for each parameter through the life of a
    //     mutator, regardless of param renaming).
    // this.quarkConnections_ {piua: null, f8b_: Blockly.Connection}
    //     Look-up of paramIds to connections plugged into the call block.
    // this.quarkArguments_ = ['piua', 'f8b_']
    //     Existing param IDs.
    // Note that quarkConnections_ may include IDs that no longer exist, but
    // which might reappear if a param is reattached in the mutator.
    if (!paramIds) {
      // Reset the quarks (a mutator is about to open).
      this.quarkConnections_ = {};
      this.quarkArguments_ = null;
      return;
    }
    if (paramIds.length != paramNames.length) {
      throw 'Error: paramNames and paramIds must be the same length.';
    }
    if (!this.quarkArguments_) {
      // Initialize tracking for this block.
      this.quarkConnections_ = {};
      if (paramNames.join('\n') == this.arguments_.join('\n')) {
        // No change to the parameters, allow quarkConnections_ to be
        // populated with the existing connections.
        this.quarkArguments_ = paramIds;
      } else {
        this.quarkArguments_ = [];
      }
    }
    // Switch off rendering while the block is rebuilt.
    var savedRendered = this.rendered;
    this.rendered = false;
    // Update the quarkConnections_ with existing connections.
    for (var x = this.arguments_.length - 1; x >= 0; x--) {
      var input = this.getInput('ARG' + x);
      if (input) {
        var connection = input.connection.targetConnection;
        this.quarkConnections_[this.quarkArguments_[x]] = connection;
        // Disconnect all argument blocks and remove all inputs.
        this.removeInput('ARG' + x);
      }
    }
    // Rebuild the block's arguments.
    this.arguments_ = [].concat(paramNames);
    this.quarkArguments_ = paramIds;
    for (var x = 0; x < this.arguments_.length; x++) {
      var input = this.appendValueInput('ARG' + x)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField(this.arguments_[x]);
      if (this.quarkArguments_) {
        // Reconnect any child blocks.
        var quarkName = this.quarkArguments_[x];
        if (quarkName in this.quarkConnections_) {
          var connection = this.quarkConnections_[quarkName];
          if (!connection || connection.targetConnection ||
              connection.sourceBlock_.workspace != this.workspace) {
            // Block no longer exists or has been attached elsewhere.
            delete this.quarkConnections_[quarkName];
          } else {
            input.connection.connect(connection);
          }
        }
      }
    }
    // Restore rendering and show the changes.
    this.rendered = savedRendered;
    if (this.rendered) {
      this.render();
    }
  },
  mutationToDom: function() {
    // Save the name and arguments (none of which are editable).
    var container = document.createElement('mutation');
    container.setAttribute('name', this.getFieldValue('NAME'));
    for (var x = 0; x < this.arguments_.length; x++) {
      var parameter = document.createElement('arg');
      parameter.setAttribute('name', this.arguments_[x]);
      container.appendChild(parameter);
    }
    return container;
  },
  domToMutation: function(xmlElement) {
    // Restore the name and parameters.
    var name = xmlElement.getAttribute('name');
    this.setFieldValue(name, 'NAME');
    var def = Blockly.Procedures.getDefinition(name, this.workspace);
    if (def && def.mutator.isVisible()) {
      // Initialize caller with the mutator's IDs.
      this.setProcedureParameters(def.arguments_, def.paramIds_);
    } else {
      this.arguments_ = [];
      for (var x = 0, childNode; childNode = xmlElement.childNodes[x]; x++) {
        if (childNode.nodeName.toLowerCase() == 'arg') {
          this.arguments_.push(childNode.getAttribute('name'));
        }
      }
      // For the second argument (paramIds) use the arguments list as a dummy
      // list.
      this.setProcedureParameters(this.arguments_, this.arguments_);
    }
  },
  renameVar: function(oldName, newName) {
    for (var x = 0; x < this.arguments_.length; x++) {
      if (Blockly.Names.equals(oldName, this.arguments_[x])) {
        this.arguments_[x] = newName;
        this.getInput('ARG' + x).FieldRow[0].setText(newName);
      }
    }
  },
  customContextMenu: function(options) {
    // Add option to find caller.
    var option = {enabled: true};
    option.text = Blockly.LANG_PROCEDURES_HIGHLIGHT_DEF;
    var name = this.getFieldValue('NAME');
    var workspace = this.workspace;
    option.callback = function() {
      var def = Blockly.Procedures.getDefinition(name, workspace);
      def && def.select();
    };
    options.push(option);
  }
};

Blockly.Blocks.procedures_callreturn = {
  // Call a procedure with a return value.
  category: Blockly.LANG_CATEGORY_PROCEDURES,  // Procedures are handled specially.
  helpUrl: Blockly.LANG_PROCEDURES_CALLRETURN_HELPURL,
  init: function() {
    this.setColour(Blockly.LANG_COLOUR_PROCEDURES);
    this.appendDummyInput()
        .appendField(Blockly.LANG_PROCEDURES_CALLRETURN_CALL)
        .appendField(Blockly.LANG_PROCEDURES_CALLRETURN_PROCEDURE, 'NAME');
    this.setOutput(true, null);
    this.setTooltip(Blockly.LANG_PROCEDURES_CALLRETURN_TOOLTIP);
    this.arguments_ = [];
    this.quarkConnections_ = null;
    this.quarkArguments_ = null;
  },
  getProcedureCall: Blockly.Blocks.procedures_callnoreturn.getProcedureCall,
  renameProcedure: Blockly.Blocks.procedures_callnoreturn.renameProcedure,
  setProcedureParameters:
      Blockly.Blocks.procedures_callnoreturn.setProcedureParameters,
  mutationToDom: Blockly.Blocks.procedures_callnoreturn.mutationToDom,
  domToMutation: Blockly.Blocks.procedures_callnoreturn.domToMutation,
  renameVar: Blockly.Blocks.procedures_callnoreturn.renameVar,
  customContextMenu: Blockly.Blocks.procedures_callnoreturn.customContextMenu
};

Blockly.Blocks.procedures_ifreturn = {
  // Conditionally return value from a procedure.
  category: Blockly.LANG_CATEGORY_PROCEDURES,
  helpUrl: 'http://c2.com/cgi/wiki?GuardClause',
  init: function() {
    this.setColour(Blockly.LANG_COLOUR_PROCEDURES);
    this.appendValueInput('CONDITION')
        .setCheck(Boolean)
        .appendField(Blockly.LANG_CONTROLS_IF_MSG_IF);
    this.appendDummyInput()
        .appendField(Blockly.LANG_PROCEDURES_DEFRETURN_RETURN);
    this.appendValueInput('VALUE');
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.LANG_PROCEDURES_IFRETURN_TOOLTIP);
    this.hasReturnValue_ = true;
  },
  mutationToDom: function() {
    // Save whether this block has a return value.
    var container = document.createElement('mutation');
    container.setAttribute('value', Number(this.hasReturnValue_));
    return container;
  },
  domToMutation: function(xmlElement) {
    // Restore whether this block has a return value.
    var value = xmlElement.getAttribute('value');
    this.hasReturnValue_ = (value == 1);
    if (!this.hasReturnValue_) {
      this.removeInput('VALUE');
    }
  },
  onchange: function() {
    if (!this.workspace) {
      // Block has been deleted.
      return;
    }
    var legal = false;
    // Is the block nested in a procedure?
    var block = this;
    do {
      if (block.type == 'procedures_defnoreturn' ||
          block.type == 'procedures_defreturn') {
        legal = true;
        break;
      }
      block = block.getSurroundParent();
    } while (block);
    if (legal) {
      // If needed, toggle whether this block has a return value.
      if (block.type == 'procedures_defnoreturn' && this.hasReturnValue_) {
        this.removeInput('VALUE');
        this.hasReturnValue_ = false;
      } else if (block.type == 'procedures_defreturn' &&
                 !this.hasReturnValue_) {
        this.appendValueInput('VALUE');
        this.hasReturnValue_ = true;
      }
      this.setWarningText(null);
    } else {
      try{
        this.setWarningText(Blockly.LANG_PROCEDURES_IFRETURN_WARNING);
      }catch(err){
        console.log('Captured error: ', err);
      }
    }
  }
};


Blockly.Arduino.procedures_defreturn = function() {
  // Define a procedure with a return value.
  var funcName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('NAME'),
      Blockly.Procedures.NAME_TYPE);
  var branch = Blockly.Arduino.statementToCode(this, 'STACK');
  if (Blockly.Arduino.INFINITE_LOOP_TRAP) {
    branch = Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g,
        '\'' + this.id + '\'') + branch;
  }
  var returnValue = Blockly.Arduino.valueToCode(this, 'RETURN',
      Blockly.Arduino.ORDER_NONE) || '';
  if (returnValue) {
    returnValue = '  return ' + returnValue + ';\n';
  }
  var returnType = returnValue ? 'int' : 'void';
  var args = [];
  for (var x = 0; x < this.arguments_.length; x++) {
    args[x] = 'int '+Blockly.Arduino.variableDB_.getName(this.arguments_[x],
        Blockly.Variables.NAME_TYPE);
  }
  var code = returnType + ' ' + funcName + '(' + args.join(', ') + ') {\n' +
      branch + returnValue + '}\n';
  code = Blockly.Arduino.scrub_(this, code);
  Blockly.Arduino.definitions_[funcName] = code;
  return null;
};

// Defining a procedure without a return value uses the same generator as
// a procedure with a return value.
Blockly.Arduino.procedures_defnoreturn = Blockly.Arduino.procedures_defreturn;

Blockly.Arduino.procedures_callreturn = function() {
  // Call a procedure with a return value.
  var funcName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('NAME'),
      Blockly.Procedures.NAME_TYPE);
  var args = [];
  for (var x = 0; x < this.arguments_.length; x++) {
    args[x] = Blockly.Arduino.valueToCode(this, 'ARG' + x,
        Blockly.Arduino.ORDER_NONE) || 'null';
  }
  var code = funcName + '(' + args.join(', ') + ')';
  return [code, Blockly.Arduino.ORDER_UNARY_POSTFIX];
};

Blockly.Arduino.procedures_callnoreturn = function() {
  // Call a procedure with no return value.
  var funcName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('NAME'),
      Blockly.Procedures.NAME_TYPE);
  var args = [];
  for (var x = 0; x < this.arguments_.length; x++) {
    args[x] = Blockly.Arduino.valueToCode(this, 'ARG' + x,
        Blockly.Arduino.ORDER_NONE) || 'null';
  }
  var code = funcName + '(' + args.join(', ') + ');\n';
  return code;
};

Blockly.Arduino.procedures_ifreturn = function() {
  // Conditionally return value from a procedure.
  var condition = Blockly.Arduino.valueToCode(this, 'CONDITION',
      Blockly.Arduino.ORDER_NONE) || 'false';
  var code = 'if (' + condition + ') {\n';
  if (this.hasReturnValue_) {
    var value = Blockly.Arduino.valueToCode(this, 'VALUE',
        Blockly.Arduino.ORDER_NONE) || 'null';
    code += '  return ' + value + ';\n';
  } else {
    code += '  return;\n';
  }
  code += '}\n';
  return code;
};
