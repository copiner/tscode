/*
  function
*/

export const func = () => {

    let myAdd: (x: number, y: number) => number = function(x: number, y: number): number {
        return x + y;
    };

    console.log(myAdd(2, 7));

    function buildName(f: string, l: string = "Smith") {
        return f + " " + l;
    }

    console.log(buildName("Bob"));

    interface Card {
        suit: string;
        card: number;
    }
    interface Deck {
        suits: string[];
        cards: number[];
        createCardPicker(this: Deck): () => Card;
    }
    let deck: Deck = {
        suits: ["hearts", "spades", "clubs", "diamonds"],
        cards: Array(52),

        createCardPicker: function(this: Deck) {
            return () => {
                let pickedCard = Math.floor(Math.random() * 52);
                let pickedSuit = Math.floor(pickedCard / 13);

                return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
            }
        }
    }

    let cardPicker = deck.createCardPicker();
    let pickedCard = cardPicker();

    console.log("card: " + pickedCard.card + " of " + pickedCard.suit);

}

func();
