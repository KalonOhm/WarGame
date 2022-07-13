class Card {
    // has 4 suits, 13 faces. usable oelsewhere
    constructor(face, suit, value){
        this.face = face;
        this.suit = suit;
        this.value = value;
    }
}

function newDeck() {
        this.deck = []

        let suits = ['hearts', 'diamonds', 'clubs', 'spades'];
        let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
        let value = ['2','3','4','5','6','7','8','9','10','11','12','13','14']
        
        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j <faces.length; j++) {
                let card = new Card (faces[j], suits[i], value[j]);
                this.deck.push(card);
            }
        }

}

const theDeck = new newDeck();
console.log(theDeck);