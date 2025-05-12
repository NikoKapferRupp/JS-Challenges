class RomanNumeral {
  constructor(number) {
    this.number = number;
  }

  

  toRoman() {
    const conversion = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1 
    }

    let resultString = '';
    let num = this.number;

    while(num !== 0) {         
      for (const key in conversion) {
        if (num - conversion[key] >= 0) {
          resultString += key;
          num -= conversion[key];
          break;
        }
      }
    }    
    return resultString;    
  }
}

module.exports = RomanNumeral;