function solve(arr){
    matrix = [[false, false, false],
          [false, false, false],
          [false, false, false]]

    let commands = [];
    arr.forEach(x => commands.push([Number(x[0]), Number(x[2])]));
    let c = 0;

    for(let i = 0; i < commands.length; i++){
        let player = c % 2 === 0 ? 'X': 'O';
        c++;
        if(matrix[commands[i][0]][commands[i][1]] !== false){
            console.log("This place is already taken. Please choose another!");
            c--;
            continue;
        }
        matrix[commands[i][0]][commands[i][1]] = player;
        if(check()){
            console.log(`Player ${player} wins!`);
            return addT().join('\n');
        }
    }

    console.log("The game ended! Nobody wins :(");
    return addT().join('\n');

    function check(){
        for(let i = 0; i < matrix.length; i++){
            if(matrix[i][0] === matrix[i][1] && matrix[i][0] === matrix[i][2] && matrix[i][0] !== false)
                return true;
        }
        let exMatrix = [];
        for(let i = 0; i < matrix.length; i++){
            let newRow = matrix.map(x => x[i]);
            exMatrix.push(newRow);
        }
        for(let i = 0; i < exMatrix.length; i++){
            if(exMatrix[i][0] === exMatrix[i][1] && exMatrix[i][0] === exMatrix[i][2] && exMatrix[i][0] !== false)
                return true;
        }
        if(matrix[0][0] === matrix[1][1] && matrix[0][0] === matrix[2][2] && matrix[1][1] !== false)
        return  true;
        if(matrix[0][2] === matrix[1][1] && matrix[0][2] === matrix[2][0] && matrix[1][1] !== false)
            return true;
        return false;
    }
    function addT(){
        let newMatrix = []
        for(let  i = 0; i < matrix.length; i++){
            let arr = matrix[i].join('\t');
            newMatrix.push(arr);
        }
        return newMatrix
    }
}


// console.log(solve(["0 1",
// "0 0",
// "0 2",
// "2 0",
// "1 0",
// "1 1",
// "1 2",
// "2 2",
// "2 1",
// "0 0"]));
// console.log('----------------------------');
// console.log(solve(["0 0", "0 0", "1 1", "0 1", "1 2", "0 2", "2 2", "1 2", "2 2", "2 1"]));
// console.log('----------------------------');
console.log(solve(["0 1",
"0 0",
"0 2",
"2 0",
"1 0",
"1 2",
"1 1",
"2 1",
"2 2",
"0 0"]));