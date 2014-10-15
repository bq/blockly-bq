Blockly.Arduino=new Blockly.Generator("Arduino");
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

    // var defvars = [];
    // var variables = Blockly.Variables.allVariables();
    // for (var x = 0; x < variables.length; x++) {
    //   //Retrieve variable
    //   retVar=Blockly.Arduino.variableDB_.getDistinctName(variables[x],Blockly.Variables.NAME_TYPE);
    //   //Check type of variable
    //   if (retVar.substr(0, 3)=="txt") var prefix="String "; else var prefix="int ";
    //   defvars[x] = prefix + retVar + ';\n';
    // }
    // Blockly.Arduino.definitions_['variables'] = defvars.join(''); // defvars.join('\n');
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




////////////////// TEXT: 


// Blockly.Blocks.text_isEmpty = {
//   // Is the string null?
//   category: Blockly.LANG_CATEGORY_TEXT,
//   helpUrl: Blockly.LANG_TEXT_ISEMPTY_HELPURL,
//   init: function() {
//     this.setColour(Blockly.LANG_COLOUR_TEXT);
//     this.appendValueInput('VALUE')
//         .setCheck([String, Array])
//         .appendField(Blockly.LANG_TEXT_ISEMPTY_INPUT_ISEMPTY);
//     this.setOutput(true, Boolean);
//     this.setTooltip(Blockly.LANG_TEXT_ISEMPTY_TOOLTIP);
//   }
// };

// Blockly.Blocks.text_endString = {
//   // Return a leading or trailing substring.
//   category: Blockly.LANG_CATEGORY_TEXT,
//   helpUrl: Blockly.LANG_TEXT_ENDSTRING_HELPURL,
//   init: function() {
//     this.setColour(Blockly.LANG_COLOUR_TEXT);
//     this.setOutput(true, String);
//     var menu = new Blockly.FieldDropdown(this.OPERATORS);
//     this.appendValueInput('NUM')
//         .setCheck(Number)
//         .appendField(menu, 'END');
//     this.appendValueInput('TEXT')
//         .setCheck(String)
//         .appendField(Blockly.LANG_TEXT_ENDSTRING_INPUT);
//     this.setInputsInline(true);
//     this.setTooltip(Blockly.LANG_TEXT_ENDSTRING_TOOLTIP);
//   }
// };

// Blockly.Blocks.text_endString.OPERATORS =
//     [[Blockly.LANG_TEXT_ENDSTRING_OPERATOR_FIRST, 'FIRST'],
//      [Blockly.LANG_TEXT_ENDSTRING_OPERATOR_LAST, 'LAST']];

// Blockly.Blocks.text_indexOf = {
//   // Find a substring in the text.
//   category: Blockly.LANG_CATEGORY_TEXT,
//   helpUrl: Blockly.LANG_TEXT_INDEXOF_HELPURL,
//   init: function() {
//     this.setColour(Blockly.LANG_COLOUR_TEXT);
//     this.setOutput(true, Number);
//     this.appendValueInput('FIND')
//         .setCheck(String)
//         .appendField(Blockly.LANG_TEXT_INDEXOF_TITLE_FIND)
//         .appendField(new Blockly.FieldDropdown(this.OPERATORS), 'END')
//         .appendField(Blockly.LANG_TEXT_INDEXOF_INPUT_OCCURRENCE);
//     this.appendValueInput('VALUE')
//         .setCheck(String)
//         .appendField(Blockly.LANG_TEXT_INDEXOF_INPUT_INTEXT);
//     this.setInputsInline(true);
//     this.setTooltip(Blockly.LANG_TEXT_INDEXOF_TOOLTIP);
//   }
// };

// Blockly.Blocks.text_indexOf.OPERATORS =
//     [[Blockly.LANG_TEXT_INDEXOF_OPERATOR_FIRST, 'FIRST'],
//      [Blockly.LANG_TEXT_INDEXOF_OPERATOR_LAST, 'LAST']];

// Blockly.Blocks.text_charAt = {
//   // Get a character from the string.
//   category: Blockly.LANG_CATEGORY_TEXT,
//   helpUrl: Blockly.LANG_TEXT_CHARAT_HELPURL,
//   init: function() {
//     this.setColour(Blockly.LANG_COLOUR_TEXT);
//     this.setOutput(true, String);
//     this.appendValueInput('AT')
//         .setCheck(Number)
//         .appendField(Blockly.LANG_TEXT_CHARAT_INPUT_AT);
//     this.appendValueInput('VALUE')
//         .setCheck(String)
//         .appendField(Blockly.LANG_TEXT_CHARAT_INPUT_INTEXT);
//     this.setInputsInline(true);
//     this.setTooltip(Blockly.LANG_TEXT_CHARAT_TOOLTIP);
//   }
// };

// Blockly.Blocks.text_changeCase = {
//   // Change capitalization.
//   category: Blockly.LANG_CATEGORY_TEXT,
//   helpUrl: Blockly.LANG_TEXT_CHANGECASE_HELPURL,
//   init: function() {
//     this.setColour(Blockly.LANG_COLOUR_TEXT);
//     this.appendValueInput('TEXT')
//         .setCheck(String)
//         .appendField(Blockly.LANG_TEXT_CHANGECASE_TITLE_TO)
//         .appendField(new Blockly.FieldDropdown(this.OPERATORS), 'CASE');
//     this.setOutput(true, String);
//     this.setTooltip(Blockly.LANG_TEXT_CHANGECASE_TOOLTIP);
//   }
// };

// Blockly.Blocks.text_changeCase.OPERATORS =
//     [[Blockly.LANG_TEXT_CHANGECASE_OPERATOR_UPPERCASE, 'UPPERCASE'],
//      [Blockly.LANG_TEXT_CHANGECASE_OPERATOR_LOWERCASE, 'LOWERCASE'],
//      [Blockly.LANG_TEXT_CHANGECASE_OPERATOR_TITLECASE, 'TITLECASE']];

// Blockly.Blocks.text_trim = {
//   // Trim spaces.
//   category: Blockly.LANG_CATEGORY_TEXT,
//   helpUrl: Blockly.LANG_TEXT_TRIM_HELPURL,
//   init: function() {
//     this.setColour(Blockly.LANG_COLOUR_TEXT);
//     var menu = new Blockly.FieldDropdown(this.OPERATORS, function(text) {
//       var newTitle = (text == Blockly.LANG_TEXT_TRIM_OPERATOR_BOTH) ?
//           Blockly.LANG_TEXT_TRIM_TITLE_SIDES :
//           Blockly.LANG_TEXT_TRIM_TITLE_SIDE;
//       this.sourceBlock_.setTitleValue(newTitle, 'SIDES');
//       this.setText(text);
//     });
//     this.appendValueInput('TEXT')
//         .setCheck(String)
//         .appendField(Blockly.LANG_TEXT_TRIM_TITLE_SPACE)
//         .appendField(menu, 'MODE')
//         .appendField(Blockly.LANG_TEXT_TRIM_TITLE_SIDES, 'SIDES');
//     this.setOutput(true, String);
//     this.setTooltip(Blockly.LANG_TEXT_TRIM_TOOLTIP);
//   },
//   mutationToDom: function() {
//     // Save whether the 'sides' title should be plural or singular.
//     var container = document.createElement('mutation');
//     var plural = (this.getFieldValue('MODE') == 'BOTH');
//     container.setAttribute('plural', plural);
//     return container;
//   },
//   domToMutation: function(xmlElement) {
//     // Restore the 'sides' title as plural or singular.
//     var plural = (xmlElement.getAttribute('plural') == 'true');
//     this.setTitleValue(plural ? Blockly.LANG_TEXT_TRIM_TITLE_SIDES :
//                       Blockly.LANG_TEXT_TRIM_TITLE_SIDE, 'SIDES');
//   }
// };

// Blockly.Blocks.text_trim.OPERATORS =
//     [[Blockly.LANG_TEXT_TRIM_OPERATOR_BOTH, 'BOTH'],
//      [Blockly.LANG_TEXT_TRIM_OPERATOR_LEFT, 'LEFT'],
//      [Blockly.LANG_TEXT_TRIM_OPERATOR_RIGHT, 'RIGHT']];

// Blockly.Blocks.text_print = {
//   // Print statement.
// //  category: Blockly.LANG_CATEGORY_TEXT,
//   helpUrl: Blockly.LANG_TEXT_PRINT_HELPURL,
//   init: function() {
//     this.setColour(Blockly.LANG_COLOUR_TEXT);
//     this.appendValueInput('TEXT')
//         .appendField(Blockly.LANG_TEXT_PRINT_TITLE_PRINT);
//     this.setPreviousStatement(true);
//     this.setNextStatement(true);
//     this.setTooltip(Blockly.LANG_TEXT_PRINT_TOOLTIP);
//   }
// };

// Blockly.Blocks.text_prompt = {
//   // Prompt function.
//   category: Blockly.LANG_CATEGORY_TEXT,
//   helpUrl: Blockly.LANG_TEXT_PROMPT_HELPURL,
//   init: function() {
//     this.setColour(Blockly.LANG_COLOUR_TEXT);
//     this.appendDummyInput()
//         .appendField(Blockly.LANG_TEXT_PROMPT_TITLE_PROMPT_FOR)
//         .appendField(new Blockly.FieldDropdown(this.TYPES), 'TYPE')
//         .appendField(Blockly.LANG_TEXT_PROMPT_TITILE_WITH_MESSAGE)
//         .appendField(new Blockly.FieldImage(Blockly.pathToBlockly +
//         'media/quote0.png', 12, 12))
//         .appendField(new Blockly.FieldTextInput(''), 'TEXT')
//         .appendField(new Blockly.FieldImage(Blockly.pathToBlockly +
//         'media/quote1.png', 12, 12));
//     this.setOutput(true, [Number, String]);
//     this.setTooltip(Blockly.LANG_TEXT_PROMPT_TOOLTIP);
//   }
// };

// Blockly.Blocks.text_prompt.TYPES =
//     [[Blockly.LANG_TEXT_PROMPT_TYPE_TEXT, 'TEXT'],
//      [Blockly.LANG_TEXT_PROMPT_TYPE_NUMBER, 'NUMBER']];




// Blockly.Arduino.text_isEmpty = function() {
//   // Is the string null?
//   var argument0 = Blockly.Arduino.valueToCode(this, 'VALUE',
//       Blockly.Arduino.ORDER_UNARY_POSTFIX) || '\'\'';
//   return [argument0 + '.isEmpty()', Blockly.Arduino.ORDER_UNARY_POSTFIX];
// };


// Blockly.Arduino.text_indexOf = function() {
//   // Search the text for a substring.
//   var operator = this.getFieldValue('END') == 'FIRST' ?
//       'indexOf' : 'lastIndexOf';
//   var argument0 = Blockly.Arduino.valueToCode(this, 'FIND',
//       Blockly.Arduino.ORDER_NONE) || '\'\'';
//   var argument1 = Blockly.Arduino.valueToCode(this, 'VALUE',
//       Blockly.Arduino.ORDER_UNARY_POSTFIX) || '\'\'';
//   var code = argument1 + '.' + operator + '(' + argument0 + ') + 1';
//   return [code, Blockly.Arduino.ORDER_UNARY_POSTFIX];
// };


// Blockly.Arduino.text_charAt = function() {
//   // Get letter at index.
//   var argument0 = Blockly.Arduino.valueToCode(this, 'AT',
//       Blockly.Arduino.ORDER_NONE) || '1';
//   var argument1 = Blockly.Arduino.valueToCode(this, 'VALUE',
//       Blockly.Arduino.ORDER_UNARY_POSTFIX) || '\'\'';
//   // Blockly uses one-based arrays.
//   if (argument0.match(/^-?\d+$/)) {
//     // If the index is a naked number, decrement it right now.
//     argument0 = parseInt(argument0, 10) - 1;
//   } else {
//     // If the index is dynamic, decrement it in code.
//     argument0 += ' - 1';
//   }
//   var code = argument1 + '[' + argument0 + ']';
//   return [code, Blockly.Arduino.ORDER_UNARY_POSTFIX];
// };


// Blockly.Arduino.text_changeCase = function() {
//   // Change capitalization.
//   var mode = this.getFieldValue('CASE');
//   var operator = Blockly.Arduino.text_changeCase.OPERATORS[mode];
//   var code;
//   if (operator) {
//     // Upper and lower case are functions built into Dart.
//     var argument0 = Blockly.Arduino.valueToCode(this, 'TEXT',
//         Blockly.Arduino.ORDER_UNARY_POSTFIX) || '\'\'';
//     code = argument0 + operator;
//   } else {
//     if (!Blockly.Arduino.definitions_['toFieldCase']) {
//       // Field case is not a native Dart function.  Define one.
//       var functionName = Blockly.Arduino.variableDB_.getDistinctName(
//           'text_toFieldCase', Blockly.Generator.NAME_TYPE);
//       Blockly.Arduino.text_changeCase.toFieldCase = functionName;
//       var func = [];
//       func.push('String ' + functionName + '(str) {');
//       func.push('  RegExp exp = const RegExp(r\'\\b\');');
//       func.push('  List<String> list = str.split(exp);');
//       func.push('  String Field = \'\';');
//       func.push('  for (String part in list) {');
//       func.push('    if (part.length > 0) {');
//       func.push('      Field.add(part[0].toUpperCase());');
//       func.push('      if (part.length > 0) {');
//       func.push('        Field.add(part.substring(1).toLowerCase());');
//       func.push('      }');
//       func.push('    }');
//       func.push('  }');
//       func.push('  return Field.toString();');
//       func.push('}');
//       Blockly.Arduino.definitions_['toFieldCase'] = func.join('\n');
//     }
//     var argument0 = Blockly.Arduino.valueToCode(this, 'TEXT',
//         Blockly.Arduino.ORDER_NONE) || '\'\'';
//     code = Blockly.Arduino.text_changeCase.toFieldCase + '(' + argument0 + ')';
//   }
//   return [code, Blockly.Arduino.ORDER_UNARY_POSTFIX];
// };

// Blockly.Arduino.text_changeCase.OPERATORS = {
//   UPPERCASE: '.toUpperCase()',
//   LOWERCASE: '.toLowerCase()',
//   FieldCASE: null
// };


// Blockly.Arduino.text_trim = function() {
//   // Trim spaces.
//   var mode = this.getFieldValue('MODE');
//   var operator = Blockly.Arduino.text_trim.OPERATORS[mode];
//   var argument0 = Blockly.Arduino.valueToCode(this, 'TEXT',
//       Blockly.Arduino.ORDER_UNARY_POSTFIX) || '\'\'';
//   return [argument0 + operator, Blockly.Arduino.ORDER_UNARY_POSTFIX];
// };

// Blockly.Arduino.text_trim.OPERATORS = {
//   LEFT: '.replaceFirst(new RegExp(r\'^\\s+\'), \'\')',
//   RIGHT: '.replaceFirst(new RegExp(r\'\\s+$\'), \'\')',
//   BOTH: '.trim()'
// };

// Blockly.Arduino.text_print = function() {
//   // Print statement.
//   var argument0 = Blockly.Arduino.valueToCode(this, 'TEXT',
//       Blockly.Arduino.ORDER_NONE) || '\'\'';
//   return 'print(' + argument0 + ');\n';
// };

// Blockly.Arduino.text_prompt = function() {
//   // Prompt function.
//   Blockly.Arduino.definitions_['import_dart_html'] = '#import(\'dart:html\');';
//   var msg = Blockly.Arduino.quote_(this.getFieldValue('TEXT'));
//   var code = 'window.prompt(' + msg + ', \'\')';
//   var toNumber = this.getFieldValue('TYPE') == 'NUMBER';
//   if (toNumber) {
//     code = 'Math.parseDouble(' + code + ')';
//   }
//   return [code, Blockly.Arduino.ORDER_UNARY_POSTFIX];
// };