function gcd(a,b){
    max = 1;
    for(i = 1; i <= b; i++){
        if(b%i == 0 && a % i == 0){
            max = i;
        }
    }
    return max;
}

console.log(gcd(5, 15))