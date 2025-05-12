class Scrabble {
  constructor(string) {
    this.string = string;
  }

  static values = {
    AEIOULNRST: 1,
    DG: 2,
    BCMP: 3,
    FHVWY: 4,
    K: 5,
    JX: 8,
    QZ: 10
    }

  static score(word) {
    return new Scrabble(word).score();
  }
  score() {
    let count = 0;
    if (/^(?=\s*$)/.test(this.string) || this.string === null) {
      return 0;
    }
    
    this.string.toUpperCase().split('').forEach((char) => {        
      for (const key in Scrabble.values) { 
        if (key.includes(char)) {
          count += Scrabble.values[key];
        }
      }
    })
    return count;
  }  
}


module.exports = Scrabble;