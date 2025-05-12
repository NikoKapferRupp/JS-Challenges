class PerfectNumber {
  
  static classify(number) {    
    let dividerSum = 0;
    let difference;
    if (number < 0) { throw new Error() }

    for (let divisor = 1; divisor < number; divisor++) {      
      if (number % divisor === 0) {
        dividerSum += divisor;
      }
    }

    difference = number - dividerSum;

    if (difference === 0) {
      return 'perfect';
    } else if(difference < 0) {
      return 'abundant';
    } else {
      return 'deficient'
    }    
  }  
}

module.exports = PerfectNumber;