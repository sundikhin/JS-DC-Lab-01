let Card = require('./card.js');
let Deck = require('./deck.js');
let Player = require('./player.js');
let prompt = require('prompt');

/*
War is a very simple card game, played between two players.
A deck of cards is shuffled and divided evenly between the two players.
Each player draws the first card in their deck, and puts it down.
The player who draws a card with a higher score wins the round and collects both cards,
putting them at the bottom of their deck.

Gameplay continues in rounds, with each player drawing a card,
the player who draws the highest scoring card winning the round and collecting the cards.

If the players draw cards that have the same score,
then War is declared: the two players must continue to draw cards until one is declared a winner.
The winner then collects all cards that have been drawn and adds them to their deck.

Neither player is allowed to know what cards are in their deck at any given time.
Nor are players allowed to look at the cards in their deck.

A winner of the game is declared when they have all 52 cards in their deck and the other player has none.
*/
const suits = ['hearts', 'clubs', 'spades', 'diamonds']
const ranks = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king']
const rankScores = { ace: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, jack: 11, king: 12, queen: 13 }

prompt.start();

prompt.get(['username1', 'username2'], function (err, result) {

  /* Initialize Deck */
  let deckOfCards = new Deck();
  deckOfCards.createNewDeck(suits, ranks, rankScores);

  /* Initialize Player Hands */

  //
  //
  //
  //
  // CHANGE THIS TO DIVIDE BY TWO BEFORE TURNING IN
  //
  //
  //
  //

  let handOne = deckOfCards.dealCards(deckOfCards.cards.length/13);
  let handTwo = deckOfCards.dealCards(deckOfCards.cards.length/13);

  console.log(handOne);


  /* Initialize Players with usernames and hands  */
  const playerOne = new Player(result.username1, handOne);
  const playerTwo = new Player(result.username2, handTwo);

  console.log(playerOne.playCard(handOne[0]));

  let playedCardA = playerOne.playCard(handOne[0]);
  let playedCardB = playerTwo.playCard(handTwo[0]);

  let winningCard;
  let winner;

  function playWar() {

    // WAR DECLARED, SAME CARD SCORE
    if (playedCardA[0].score === playedCardB[0].score) {

      let playerOneWarCard = playerOne.playCard(handOne[0]);
      let playerTwoWarCard = playerTwo.playCard(handTwo[0]);
      let war = true;

      while (war) {
        if (playerOneWarCard[0].score > playerTwoWarCard[0].score) {
          playerOne.wonRound(playerTwo);
          war = false;
        } else {
          playerTwo.wonRound(playerOne);
          war = false;
        }
      }
    }

    // NORMAL GAME PLAY
    if (playedCardA[0].score > playedCardB[0].score) {
      playerOne.wonRound(playerTwo);
    } else {
      playerTwo.wonRound(playerOne);
    }
  }


  // PLAY WAR

  let noWinner;

  while (noWinner = true) {

    playWar();

    if (playerOne.hand.length === 0) {
      console.log(`${playerOne.username} won!`)
      noWinner = false;
    } else if (playerTwo.hand.length === 0) {
      console.log(`${playerTwo.username} won!`)
      noWinner = false;
    }
  }




  console.log(playerOne.username + ' played: ', playedCardA);
  console.log(playerTwo.username + ' played: ', playedCardB);

  //console.log(`The winning card is ${winningCard[0].title} , ${winner.username} wins this round!`);



});