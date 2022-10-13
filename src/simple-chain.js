const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
let chainMaker = {
  arr: [],

  getLength() {
    return this.arr.length;
  },
  addLink(value = "( )") {
    this.arr.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (
      position > this.arr.length - 1 ||
      typeof position != "number" ||
      position % 1 !== 0 ||
      position < 1
    ) {
      this.arr = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.arr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let end = this.arr.join("~~");
    this.arr = [];
    return end;
  },
};

module.exports = {
  chainMaker,
};
