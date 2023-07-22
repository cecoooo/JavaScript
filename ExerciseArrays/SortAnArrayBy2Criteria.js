function sortAnArrayByTwoCriteria(arr){
    return arr.sort((a,b) => {
        return first(a, b) !== 0 ? first(a, b) : second(a, b);
    }).join('\n');

    function first(a, b){
        return a.length - b.length
    }
    function second(a, b){
        return a.toLowerCase() - b.toLowerCase();
    }
}

console.log(sortAnArrayByTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']));