const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let res = {}; 
 
  domains = domains.map((item) => item.split(".").reverse()); 
 
  domains.forEach((item) => { 
    let str = ""; 
    for (let i = 0; i < item.length; i++) { 
      str += "." + item[i]; 
      if (res[str] === undefined) res[str] = 1; 
      else res[str]++; 
    } 
  }); 
 
  return res; 
}

module.exports = {
  getDNSStats
};
