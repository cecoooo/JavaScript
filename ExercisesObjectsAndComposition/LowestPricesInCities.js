function lowestPricesInCities(arr){
    let res = [];
    for(item of arr){
        let product = {};
        let row = item.split('|').map(x => x.trim());
        let add = true;
        product.town = row[0];
        product.name = row[1];
        product.price = Number(row[2]);
        for(let i = 0; i < res.length; i++){
            if(res[i].name === product.name){
                add = false;
                if(product.price < res[i].price){
                    res[i] = product;
                }
            }
        }
        if(add) res.push(product); 
    }
    let result = [];
    for(let i = 0; i < res.length; i++){
        result.push(res[i].name + ' -> ' + res[i].price + ' ('+ res[i].town +')');
    }
    return result.join('\n');
}

console.log(lowestPricesInCities(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']));