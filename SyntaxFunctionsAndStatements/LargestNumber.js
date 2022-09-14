function solve(a, b, c){
    let biggest;

    if(a >= b && a >= c)
        biggest = a
    else if(b >= a &&  b >= c)
        biggest = b
    else
        biggest = c

    console.log(`The largest number is ${biggest}.`);
}

let a,b,c;
a=5;
b=3;
c=10;
console.log(`The largest number is ${solve(a,b,c)}`);
