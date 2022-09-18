function solve(arr){
    let newArr = [];
    let c = 1;
    arr.forEach(x => {
        switch(x){
            case 'add': newArr.push(c); break;
            case 'remove': newArr.pop(); break;
        }
        c++
    })
    return newArr.length !== 0 ? newArr.join('\n') : 'Empty' 
}

console.log(solve(['add', 'add', 'remove', 'add', 'add']));