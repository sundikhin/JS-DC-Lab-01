let Card = require('./card.js');

const suits = ['hearts', 'clubs', 'spades', 'diamonds']
const ranks = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king']
const rankScores = { ace: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, jack: 11, king: 12, queen: 13 }

// let singleCard = new Card(suits[1], ranks[1], rankScores);

// console.log(singleCard);

class Deck {
  constructor() {
    this.cards = [];
  }

  createNewDeck (suits, ranks, scores) {
    for (let i = 0; i < suits.length; i++ ) {
      for (let j = 0; j < ranks.length; j++ ) {
        let card = new Card(suits[i], ranks[j], scores[ranks[j]]);
        this.cards.push(card);

      }
    }
    return this.cards;
  }

// Deal cards results in an array of arrays [ [], [], [] ] b/c of splice
// Need to figure out how to iterate over the remainingDeck and deal a
// card based on a random index so that the resulting array is an array
// of objects [ {}, {}, {} ]
  dealCards (num) {
    let handOfCards = [];
    for (let i = 0; i < num; i++ ) {
      // let randomIndex = this.cards.findIndex(Math.floor(Math.random()*this.cards.length));
      // let dealtCard = this.cards.find(card => randomIndex ? card : null);
      // let remainingDeck = this.cards.filter( card => !randomIndex ? card : null);

      let card = this.cards.splice(Math.floor(Math.random()*this.cards.length), 1);
      handOfCards.push(card);
    }
    return handOfCards;
  }
}

// let newDeck = new Deck();
// newDeck.createNewDeck(suits, ranks, rankScores);

// let newCards = newDeck.dealCards(4);

// console.log(newCards);

module.exports = Deck;