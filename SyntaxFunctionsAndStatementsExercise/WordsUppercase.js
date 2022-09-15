function solve(text){
    let word = '';
    let arr = [];
    let bool;
    for(let i = 0; i < text.length; i++){
        let ascii = text[i].charCodeAt();
        if((ascii >= 65 && ascii <= 90) || (ascii >= 97 && ascii <= 122)){
            if((ascii >= 65 && ascii <= 90))
                word += String.fromCharCode(ascii);
            else{
                let newAscii = ascii - 32;
                word += String.fromCharCode(newAscii);
            }
            bool = true;
        }
        else{
            if(bool){
                arr.push(word);
                word = '';
                bool = false;
            }
        }
    }
    if(bool){
        arr.push(word);
        word = '';
    }
    console.log(arr.join(", "));
}

solve('');