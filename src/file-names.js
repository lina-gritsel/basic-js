const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
 function renameFiles(names) { 
  let newArray = []; 
  let number = 1; 
  let str = ""; 
  for (let i = 0; i < names.length; i++) { 
    if (!newArray.includes(names[i])) { 
      newArray.push(names[i]); 
    } else { 
      for (number; number < 10; number++) { 
        str = `${names[i]}(${number})`; 
        if (newArray.includes(str)) { 
        } else { 
          newArray.push(str); 
          break; 
        } 
      } 
    } 
  } 
  return newArray;
}

module.exports = {
  renameFiles
};
