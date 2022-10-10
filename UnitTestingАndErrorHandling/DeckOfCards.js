function printDeckOfCards(cards) {
    const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const validSuits = ['S', 'H', 'D', 'C'];
    cards.forEach(x => {
        let card = [x[0], x[1]];
        if(x.length === 3){
            card = [x[0]+x[1], x[2]];
        }
        if(!validFaces.includes(card[0]) || !validSuits.includes(card[1])){
            console.log(`Invalid card: ${x}`);
            return;
        }
    })
    
    function createCard (){
        let res = [];
        for(let card of cards){
            let sign;
            let newCard;
            switch(card[card.length-1]){
                case 'S': sign = '\u2660'; break;
                case 'H': sign = '\u2665'; break;
                case 'D': sign = '\u2666'; break;
                case 'C': sign = '\u2663'; break;
            }
            card = card.slice(0,-1);
            newCard = card+sign;
            res.push(newCard);
        }
        return res.join(' ');
    }    
    console.log(createCard());
}

printDeckOfCards(['AS', '10D', 'KH', '2C'])