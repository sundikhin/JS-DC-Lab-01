// create a single card

// Single card takes one suit, one rank, and a list of scores
class Card {
  constructor(suit, rank, scores) {
    this.suit = suit;
    this.rank = rank;
    this.title = rank + ' of ' + suit;
    this.score = scores;
  }
}

module.exports = Card;