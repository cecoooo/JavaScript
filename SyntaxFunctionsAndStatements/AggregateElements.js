function solve(params){
    let sum =0;
    for(let i = 0; i < params.length; i++){
            let num = Number(params[i]);
            sum+=num;
    }    
    console.log(sum);
    let inverseSum =0;
    for(let i = 0; i < params.length; i++){
            let num = 1/Number(params[i]);
            inverseSum+=num;
    }  
    console.log(inverseSum);
    let text='';
    for(let i = 0; i < params.length; i++){
            text += params[i];
    }   
    console.log(text);
}

solve([1, 2, 3]);