function magicMatrices(matrix){
    let sumFirstRow = matrix[0].reduce((total, x) => total + x);
    for(i = 1; i < matrix.length; i++){
        let currentSumRow = matrix[i].reduce((total, x) => total + x);
        if(currentSumRow !== sumFirstRow) return false;
    }
    for(i = 0; i < matrix.length; i++){
        let currentSumColumn = matrix.map(x => x[i]).reduce((total, x) => total+x);
        if(currentSumColumn !== sumFirstRow) return false;
    }
    return true;
}

console.log(magicMatrices([[4, 5, 6], [6, 5, 4], [5, 5, 5]]));