function isLetter(char){
    return char.toLowerCase() !== char.toUpperCase(); 
}

function words_uppercase(text){
    let res='';
    for(i = 0; i < text.length; i++){
        if(text[i].toLowerCase() !== text[i].toUpperCase()){
            res += text[i].toUpperCase();
            if(i !== text.length-1){
                if(text[i+1].toLowerCase() === text[i+1].toUpperCase()){
                    res+=', ';
                }
            }
        }
    }
    if(res[res.length-1].toLowerCase() === res[res.length-1].toUpperCase()){
        res = res.substring(0, res.length - 2);
    }
    return res;
}

console.log(words_uppercase('Hi, how are you?'));