const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  let repeatTimes = options.repeatTimes || 1;                 // количество повторений str
  let separator = options.separator || '+';                // разделяющим повторением str
  let additionSeparator = options.additionSeparator || '|';   // разделяющим повторением addition
  let additionRepeatTimes = options.additionRepeatTimes || 1; // количество повторений addition
  let addition = options.addition;                            // который будет добавляться к каждому повторению str

  let newStr = [];

  for (let i = 0; i < repeatTimes; i++) {
    let addit = str
    if (addition !== undefined) {
      for (let j = 0; j < additionRepeatTimes; j++) {
        if (j+1 < additionRepeatTimes) {
          addit += addition+additionSeparator
        } else if (j+1==additionRepeatTimes) {
          addit += addition+''
        }
      }
    }
    newStr.push(addit)
    
  }

 
  return newStr.join(separator+'')
  
}

module.exports = {
  repeater
};
