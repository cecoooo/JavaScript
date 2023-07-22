function PrintAnArrayWithAGivenDelimiter(arr, delimiter){
    let res = '';
    for(i = 0; i < arr.length; i++){
        res += arr[i]+delimiter
    }
    res = res.slice(0, res.length-1)
    return res;
}

console.log(PrintAnArrayWithAGivenDelimiter(['One','Two','Three','Four','Five'],'-'))