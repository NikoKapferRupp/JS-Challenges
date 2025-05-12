class Octal {
  constructor(num) {
    this.num = num;
  }

  toDecimal() {
    let reversedNumArray = this.num.toString().split('').reverse().map(str => Number(str));
    let sum = 0;
    for (let count = 0; count < reversedNumArray.length; count++) {
      if(!/[0-7]/.test(reversedNumArray[count])) {
        return 0;
      }
      sum += (reversedNumArray[count] * (Math.pow(8, count)))
    }
    return sum;
  }
}

module.exports = Octal;