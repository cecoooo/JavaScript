function rotateArray(arr, num){
    for(i = 0; i < num; i++){
        let temp = arr[0];
        arr = arr.slice(1, arr.length);
        arr.push(temp);
    }
    return arr.join(" ");
}

console.log(rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15))