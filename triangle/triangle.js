class Triangle {
  
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
    this.sidesArray = [...arguments]
    this.isValid([side1, side2, side3])
  } 

  isValid(arr) {
    (function () {
      console.log(arr);
      
      if(arr.filter(num => num <= 0).length !== 0) {
        throw new Error("triangle sides are smaller or equal than zero");
      }
    })(); // checks if sides are greater than zero

    (function () {
      let arrCopy = [...arr];
      for (let count = 0; count < 3; count++) {
        
        if (arrCopy[0] + arrCopy[1] <= arrCopy[2]) {
          throw new Error("triangle violates triangle inequality");          
        }
        arrCopy.push(arrCopy.shift());
      }
    })()   
  }

  kind() {
    if (this.isEquilateral()) {
      return 'equilateral'
    } else if(this.isIsosceles()) {
      return 'isosceles'
    } else {
      return 'scalene'
    }
  }
  
  isEquilateral() {
    return this.sidesArray.reduce((acc, cum) => acc + cum) === this.side1 * 3     
  } 

  isIsosceles() {
    let sortArr = this.sidesArray.sort((a, b) => a - b);    
    return sortArr[0] === sortArr[1] || sortArr[1] === sortArr[2]
  }
}

let test = new Triangle(10, 11, 12);

console.log(test);
console.log(test.kind());


module.exports = Triangle;

