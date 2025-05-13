class BeerSong {

  static verse(num) {

    let num1 = num;
    let num2 = num - 1 < 1 ? 'no more' : num - 1;
    let bottles = (num) => num === 1 ? 'bottle' : 'bottles';
    
    if(num === 0) { 
      return "No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n";
    } else if (num === 1){
      return "1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n"
    } else {
      return `${num} bottles of beer on the wall, ${num} bottles of beer.\nTake one down and pass it around, ${num - 1} ${bottles(num - 1)} of beer on the wall.\n`
    }  
  }

  static verses(num1, num2) {
    let result = '';
    for (let pos = num1; pos >= num2; pos -= 1) {
      result += BeerSong.verse(pos);
    }

    return result;
  }

  static lyrics() {
    return BeerSong.verses(99, 1)
  }
}

console.log(BeerSong.verse(0));


module.exports = BeerSong;