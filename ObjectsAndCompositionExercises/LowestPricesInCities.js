function solve(arr){
    arr = arr.map(x => x.split(' | '));
    let obj = {};
    let min = Number.MAX_VALUE;
    for(let text of arr)
        obj[text[1]] = '';
    for(let key in obj){
        let priceCity;
        for(let text of arr){
            if(text[1] === key){
                if(Number(text[2]) < min){
                    min = Number(text[2]);
                    priceCity = [min, text[0]];
                }
            }
        }
        obj[key] = priceCity;
        min = Number.MAX_VALUE
    }
    for(let key in obj){
        console.log(`${key} -> ${obj[key][0]} (${obj[key][1]})`);
    }
}

solve(['Sample Town | Sample Product | 1000',
       'Sample Town | Orange | 2',
       'Sample Town | Peach | 1',
       'Sofia | Orange | 3',
       'Sofia | Peach | 2',
       'New York | Sample Product | 1000.1',
       'New York | Burger | 10']);