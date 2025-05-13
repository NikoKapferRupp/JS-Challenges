class Series {
  constructor(digiStr) {
    this.digiStr = digiStr;
  }

  slices(num) {
    if (num > this.digiStr.length) { throw new Error() };
    let resultArr = [];
    let numArr = this.digiStr.split('').map(str => Number(str));
    let endIndex = num;
    for (let index = 0; endIndex <= numArr.length; index++) {
      resultArr.push(numArr.slice(index, endIndex));
      endIndex += 1;
    }
    return resultArr;
  }
}

let test = new Series('01234');

console.log(test.slices(3));


module.exports = Series;

