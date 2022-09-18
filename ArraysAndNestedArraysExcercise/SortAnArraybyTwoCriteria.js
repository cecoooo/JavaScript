function solve(arr){
    return arr.sort((a,b) => {
        let first = firstC(a,b);
        let second = secondC(a,b);
        return first || second;
    }).join('\n');
    function firstC(a,b){
        return a.length - b.length;
    }
    function secondC(a,b){
        return a.charCodeAt() - b.charCodeAt()
    }
}

console.log(solve(['tets', 'Deny', 'omen', 'Default']));