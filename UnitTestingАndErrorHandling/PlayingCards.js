function solve(face, suit){
    const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const validSuits = ['S', 'H', 'D', 'C'];
    if(!validFaces.includes(face) || !validSuits.includes(suit)){
        throw new Error('Error');
    }
    let obj = {
        face: face,
        suit: suit,
        toString: function(){
            let sign;
            switch(this.suit){
                case 'S': sign = '\u2660'; break;
                case 'H': sign = '\u2665'; break;
                case 'D': sign = '\u2666'; break;
                case 'C': sign = '\u2663'; break;
            }
            return face+sign;
        }
    }
    console.log(obj.toString());
}

solve('J', 'S');
solve('Q', 'H');
solve('K', 'D');
solve('A', 'C');