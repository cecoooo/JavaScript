function ticTacToe(arr){
    let ground = [][3];
    for(i = 0; i < 3; i++){
        ground.push([false, false, false]);
    }
    for(i = 0; i < arr.length; i++){
    
        let com = arr[i].split(' ');
        let firstCoordinate = parseInt(com[0])
        let secondCoordinate = parseInt(com[1])
        if(matrix[firstCoordinate][secondCoordinate] !== false){
            console.log("This place is already taken. Please choose another!");
            continue;
        }
        else if(i%2 === 0) matrix[firstCoordinate][secondCoordinate] = 'O';
        else matrix[firstCoordinate][secondCoordinate] = 'X';
    }

    function win(){
        matrix.forEach(x => x.forEach(y => y!=));
        for(i = 0; i < matrix.length; i++){
            let currentSumColumn = matrix.map(x => x[i]).reduce((total, x) => total+x);
            if(currentSumColumn !== sumFirstRow) return false;
        }
        return true;
    }
}

console.log(ticTacToe(["0 1", "0 0", "0 2", "2 0", "1 0", "1 1", "1 2", "2 2", "2 1", "0 0"]))