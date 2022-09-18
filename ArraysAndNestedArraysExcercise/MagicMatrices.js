function solve(matrix){
    let equal = matrix[0].reduce((total, x) => total += x);
    for(let i = 1; i < matrix.length; i++){
        let current = matrix[i].reduce((total, x) => total += x);
        if(current !== equal)
            return false;
    }
    for(let i = 0; i < matrix.length; i++){
        column = matrix.map(x => x[i]).reduce((total, x) => total += x);
        if(column !== equal)
            return false
    }  
    return true;
}

console.log(solve([[4, 5, 6],
                   [6, 5, 4],
                   [5, 5, 5]]));
console.log(solve([[11, 32, 45], [21, 0, 1], [21, 1, 1]]));
console.log(solve([[1, 0, 0], [0, 0, 1], [0, 1, 0]]));