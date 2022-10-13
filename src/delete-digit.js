const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  n = n.toString(); 
  let arr = []; 
  for (let i = 0; i < n.length; i++) { 
    let newNumber = Number(n.slice(0, i) + n.slice(i+1)); 
    arr.push(newNumber); 
  } 
  return Math.max(...arr) 
  }



module.exports = {
  deleteDigit
};
