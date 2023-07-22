function extractIncreasingSubsequenceFromArray(arr){
    let res = [arr[0]];
    for(i = 1; i < arr.length; i++){
        if(arr[i] > res[res.length-1]) res.push(arr[i]);
    }
    return res;
}

console.log(extractIncreasingSubsequenceFromArray([1,3,8,4,10, 12, 3, 2, 24]))