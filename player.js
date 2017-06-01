let Deck = require('./deck.js');

class Player {
  constructor(username, hand) {
    this.username = username;
    this.hand = hand;
  }

  // player gets a card from winning hand
  addCard(card) {
    this.hand.unshift(card);
  }

  // player loses card due to playing one
  playCard(card) {
    this.hand.pop(card);
    return card;
  }
}

module.exports = Player;