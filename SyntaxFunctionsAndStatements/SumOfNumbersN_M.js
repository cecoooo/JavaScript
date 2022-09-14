function solve(m, n){
    let a = Number(m);
    let b = Number(n);
    let sum=0;
    for(let i = a; i <= b; i++){
        sum += i
    }
    return sum;
}

console.log(solve('-8', '20'));