function solve(matrix){
    let sum = 0;
    let sum2 = 0;
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            if(i === j){
                sum += matrix[i][j];
            }            
            if(i + j === matrix.length - 1){
                sum2 += matrix[i][j];
            }
        }
    }
    console.log(sum + ' ' + sum2);
}

solve([[3, 5, 17],
       [-1, 7, 14],
       [1, -8, 89]]);