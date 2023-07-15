function same_number(number){
    let text = ''+number;
    let sum = 0;
    let responce = true;
    for(i = 0; i < text.length-1; i++){
        if(text[i] != text[i+1]){
            responce = false
        }
        sum+=parseInt(text[i])
    }
    sum += parseInt(text[text.length-1])
    return responce+'\n'+sum;
}

console.log(same_number(1234))
console.log(same_number(6666666))