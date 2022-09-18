function solve(arr){
    let newArr = [];
    let current = Number.MIN_VALUE;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] >= current){
            current = arr[i];
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(solve([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(solve([1, 2, 3, 4]));