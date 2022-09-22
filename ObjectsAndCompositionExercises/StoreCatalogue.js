function solve(arr){
    let obj = {};
    arr.sort().map(x => x.split(' : ')).forEach(x => obj[x[0]] = Number(x[1]));
    let firstLetter;
    for(let key in obj){
        if(firstLetter !== key[0]){
            firstLetter = key[0];
            console.log(firstLetter);
        }
        console.log(`  ${key}: ${obj[key]}`);
    }
}

solve(['Appricot : 20.4',
       'Fridge : 1500', 
       'TV : 1499', 
       'Deodorant : 10', 
       'Boiler : 300', 
       'Apple : 1.25', 
       'Anti-Bug Spray : 15', 
       'T-Shirt : 10']);