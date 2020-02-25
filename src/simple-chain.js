const chainMaker = {
  curentChain: [],
  getLength() {
    this.curentChain.length;
  },
  addLink(value = '') {
    this.curentChain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (typeof position === 'number' && this.curentChain[position - 1]) {
      this.curentChain = this.curentChain.filter((item, index) => index !== position - 1);
    } else {
      this.curentChain = [];
      throw new Error();
    };
    return this;
  },
  reverseChain() {
    this.curentChain = this.curentChain.reverse();
    return this;
  },
  finishChain() {
    const result = this.curentChain.join('~~');
    this.curentChain = [];
    return result;
  }
};

module.exports = chainMaker;
