class Diamond {

  static alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  static makeADiamond() {

  }

  static makeARow() {

  }

  static spaceBetween(char) {
    if(char === 'A') { return 'A' };
    let count = 1;
    let index = 1;
    while(true) {
      
      index += 1;
      count += 2;
      if (this.alphabet[index]) {
        return count
      }
    }
  }
}

console.log(Diamond.spaceBetween('D'));
