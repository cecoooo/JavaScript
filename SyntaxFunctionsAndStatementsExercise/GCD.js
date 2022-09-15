function solve(num1, num2){
    let max;
    if(num1 >= num2) 
        max = num1
    else 
        max  = num2;
    
    let arrGCD=[];
    for(let i = 1; i <= max/2; i++){
        if(num1 % i === 0 && num2 % i === 0)
            arrGCD.push(i);
    }
    let GCD = arrGCD.sort(function(a, b){return a - b});
    console.log(GCD[GCD.length-1]);
}

solve(64, 48);