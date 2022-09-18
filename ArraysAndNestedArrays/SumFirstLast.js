function solve(arr){
    return Number(arr.shift()) + Number(arr.pop());
    //return Number(arr[0]) + Number(arr[arr.length -1]);
}

let result = solve([]);
console.log(result);