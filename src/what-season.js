const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) return "Unable to determine the time of year!";
  if (
    Object.prototype.toString.call(date) != "[object Date]" ||
    typeof date == "string" ||
    Object.getOwnPropertySymbols(date).length !== 0
  ) {
    throw new Error("Invalid date!");
  }

  const month = date.getUTCMonth() + 1;

  if ((month > 0 && month < 3) || month === 12) {
    return "winter";
  }
  if (month > 2 && month < 6) {
    return "spring";
  }
  if (month > 5 && month < 9) {
    return "summer";
  }
  if (month > 8 && month < 12) {
    return "autumn";
  }
}

module.exports = {
  getSeason,
};
