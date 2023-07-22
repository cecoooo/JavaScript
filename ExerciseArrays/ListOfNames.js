function listOfName(arr){
    return arr.sort((a,b) => a.localeCompare(b)).map((x, i) => (i+1)+'.'+x).join('\n');
}

console.log(listOfName(["John", "Bob", "Christina", "Ema"]));