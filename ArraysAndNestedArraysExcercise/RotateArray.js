function solve(arr, num){
    for(let j = 0; j < num; j++){
        newArr = [];
        newArr.push(arr[arr.length-1])
        for(let  i = 0; i < arr.length-1; i++){
            newArr.push(arr[i]);
        }
        arr = newArr;
    }
    console.log(arr.join(' '));
}

solve(['Banana', 'Orange', 'Coconut', 'Apple'], 15)