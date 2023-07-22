function PrintEveryNthElementFromAnArray(arr, step){
    res = [];
    for(i = 0, c = 0; i < arr.length; i += step, c++){
        res[c] = arr[i];
    }
    return res;
}

console.log(PrintEveryNthElementFromAnArray(['5', '20', '31', '4', '20'], 2))