class Card {
    // has 4 suits, 13 faces. usable oelsewhere
    constructor(face, suit, value){
        this.face = face;
        this.suit = suit;
        this.value = value;
    }
}

function buildDeck() {
    this.newDeck = []

    let suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
    let value = ['2','3','4','5','6','7','8','9','10','11','12','13','14']
        
    for (let i = 0; i < suits.length; i++) {
        for (let j = 0; j <faces.length; j++) {
            let card = new Card (faces[j], suits[i], value[j]);
            this.newDeck.push(card);
        }
    }
    return this.newDeck;
}

class Player {
    constructor(playernum, score, hand) {
       this.playernum = playernum;
       this.score = score;    
       this.hand = [];    
    } 
}

let player1 = new Player("One", 0);
let player2 = new Player("Two", 0);


class Deck {
    constructor() {
        this.deck = buildDeck();
    }

    shuffle() {
        // shuffle deck locations in array

        //implementation of fisher yates shuffle. starting from back of array, moving forward
        for (let i = this.deck.length-1; i > 0; i--){
            //random index from i to 0
            let j = Math.floor(Math.random() * (i+1));
            //to swap position within the array
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        }
        return;
        
        
    }

    dealCards() {

    //deal alternating cards from the top of the deck
        for (let i = this.deck.length; i > 0; i--) {
            let dealt = this.deck.pop();
            if (this.deck.length % 2 != 0){
                player2.hand.push(dealt);
            } else {
                player1.hand.push(dealt);
            }    
            
            
    
        }
        //console.log(player1);
        //console.log(player2);
        return;
    
    }

}

function playWar() {
    console.log( `The score starts at 0 to 0.`)
    for (let i=0; i<26; i++) {
        player1Play = player1.hand.pop();
        player2Play = player2.hand.pop();
        //console.log(`${player1Play.face}  of  ${player1Play.suit} (value ${player1Play.value}) v.s. ${player2Play.face} of ${player2Play.suit} (value ${player2Play.value})` )
        console.log(player1Play.value, player2Play.value)
        if (player1Play.value > player2Play.value){
            player1.score += 1;
        } else if (player1Play.value < player2Play.value){
            player2.score += 1;
        } else if (player1Play.value == player2Play.value){
            continue;
        }
        //console.log (`The score is ${player1.score} to ${player2.score}`);
        console.log(player1.score, player2.score);
    }


}

function finalTally() {
    console.log(`The final score is ${player1.score} to ${player2.score}`);
    if (player1.score > player2.score){
        console.log(`Player One wins!!`)
    } else if (player1.score < player2.score) {
        console.log(`Player Two wins!!`)
    } else {
        console.log(`It was a draw. No one wins in War.`)
    }
}


const theDeck = new Deck();
theDeck.shuffle();
theDeck.dealCards();

playWar();
finalTally();
