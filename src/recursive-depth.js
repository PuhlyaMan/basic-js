module.exports = class DepthCalculator {
  constructor() {
    this.maxDep = 1;
    this.curentDep = 1;
  }
  
  calculateDepth(arr) {
    if (!arguments[1]) {
      this.maxDep = 1;
      this.curentDep = 1;
    };
    arr.forEach(item => {
      if (Array.isArray(item)) {
        this.curentDep = this.curentDep + 1;
        this.calculateDepth(item, true);
        if (this.curentDep > this.maxDep) {
          this.maxDep = this.curentDep;
        }
        this.curentDep = 1;
      }
    });
    return this.maxDep;
  }
  
};
