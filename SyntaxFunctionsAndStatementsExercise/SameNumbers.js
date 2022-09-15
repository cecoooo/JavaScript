function solve(num){
    let text = num + '';
    let first = text[0];
    let sum = Number(first);
    let bool = true;
    for(let i = 1; i < text.length; i++){
        if(first !== text[i]){
            bool = false;
        }
        sum += Number(text[i]);
    }
    console.log(bool);
    console.log(sum);
}

solve(1234);