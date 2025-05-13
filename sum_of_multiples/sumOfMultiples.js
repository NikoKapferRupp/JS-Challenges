class SumOfMultiples {
  constructor(numArr) {
    this.numArr = numArr ? [...arguments] : [3, 5];
  }

  static to(num) {
    return new SumOfMultiples().to(num);
  }

  to(num) {
    let resultArray = [];
    

    for (let index = 0; index < this.numArr.length; index++) {
      let currentNum = this.numArr[index];

      while(currentNum < num) {
        if(!resultArray.includes(currentNum)) {
          resultArray.push(currentNum)
        }       
        currentNum += this.numArr[index];
      }        
         
    }
    return resultArray.reduce((acc, cum) => acc + cum, 0);
  }
}

let test = new SumOfMultiples();
console.log(test);

module.exports = SumOfMultiples