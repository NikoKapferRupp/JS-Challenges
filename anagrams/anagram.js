class Anagram {
  constructor(string) {
    this.string = string.toLowerCase(); 
  }

  match(arr) {
    function letterSort(str) {
      return str.split('').sort().join();
    }

    return arr.filter(entry => {
      entry = entry.toLowerCase()
      return letterSort(entry) === letterSort(this.string) && entry !== this.string
    })
  }
}

module.exports = Anagram;