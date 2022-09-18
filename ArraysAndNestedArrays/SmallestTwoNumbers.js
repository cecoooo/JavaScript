function solve(arr){
   console.log(arr.sort((a, b) => a-b).filter((x, i) => i <= 1).join(' '));
}

solve([30, 15, 50, 5]);