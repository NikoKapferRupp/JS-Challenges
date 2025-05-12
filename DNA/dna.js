class DNA {
  constructor(strand) {
    this.strand = strand;
  };

  hammingDistance(newStrand) {
    let shortestLength = this.strand.length > newStrand.length ? newStrand.length : this.strand.length;   
    let counter = 0;

    for (let index = 0; index < shortestLength; index++) {
      if (this.strand[index] !== newStrand[index]) {
        counter += 1;
      };   
    };
    return counter;
  };
};

module.exports = DNA;