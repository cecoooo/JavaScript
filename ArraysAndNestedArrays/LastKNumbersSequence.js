function solve(n , k){
    let arr = [1];
    for(let i = 1; i < n; i++){
        let nextEl=0;
        let c =0;
        for(let m = arr.length - 1; c < k && m >= 0; m--){
            nextEl += arr[m];
            c++;
        }
        arr.push(nextEl);
    }
   return arr;
}

solve(6, 3);