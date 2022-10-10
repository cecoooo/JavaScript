function solve(arr, firstIndex, lastIndex){
    if(!Array.isArray(arr))
        return NaN;
    let bool = false;
    arr.forEach(x => {
        if(typeof x != 'number')
            bool = true;
    })
    if(bool)
        return NaN;
    if(firstIndex < 0)
        firstIndex = 0;
    if(lastIndex >= arr.length)
        lastIndex = arr.length-1;

    let sum = 0;
    for(let i = firstIndex; i <= lastIndex; i++){
        sum += arr[i];
    }

    return sum;
}

console.log(solve([10, 20, 30, 40, 50, 60], 3, 300));