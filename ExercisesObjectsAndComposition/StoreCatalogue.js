function storeCatalogue(arr){
    let res = [];
    arr.sort();
    for(item of arr){
        let catalogue = {};
        catalogue.model = item.split(':')[0].trim();
        catalogue.price = Number(item.split(':')[1].trim());
        res.push(catalogue);
    }
    res = res.map(x => x.model+': '+x.price);
    res.unshift(res[0][0]);
    for(let i = 1; i < res.length-1; i++){
        if(res[i][0] !== res[i+1][0]){
            res.splice(i+1, 0, res[i+1][0]);
        }
    }
    return res.join('\n');
}

console.log(storeCatalogue(['Appricot : 20.4','Fridge : 1500', 'TV : 1499', 'Deodorant : 10', 'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10']));