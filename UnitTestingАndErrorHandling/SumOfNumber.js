function sum(arr) {
    let sum = 0;

    for (let num of arr){
        sum += Number(num);
    }

    return sum;    
}

let a = 15

module.exports = {sum, a};