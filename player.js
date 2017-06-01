let Deck = require('./deck.js');

class Player {
  constructor(username, hand) {
    this.username = username;
    this.hand = hand;
    this.tempCards = [];
  }

  // player loses card due to playing one
  playCard(card) {
    this.hand.shift(card);
    // this.tempCards.push( card )
  }

  wonRound( losingPlayer ) {
    this.hand = this.hand.concat( this.currentCards, losingPlayer.currentCards )
    this.tempCards = []
    losingPlayer.currentCards = []
  }
}

module.exports = Player;