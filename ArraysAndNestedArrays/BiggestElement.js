function solve(matrix){
    let max = Number.MIN_VALUE;
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            if(matrix[i][j] >= max)
                max = matrix[i][j]
        }
    }
    return max;
}

console.log(solve([[20, 50, 10],[8, 33, 145]]));