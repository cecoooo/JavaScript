function SortingNumbers(arr){
    arr.sort((a,b) => a-b);
    let res = [];
    while(true){
        res.push(arr.shift());
        if(arr.length === 0) break;
        res.push(arr.pop());
        if(arr.length === 0) break;
    }
    return res;
}

console.log(SortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))