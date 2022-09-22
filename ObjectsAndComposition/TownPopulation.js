function solve(arr){
    arr = arr.map(x => x.split(' <-> '));
    let obj = {};
    arr.forEach(x => {
        if(!(x[0] in obj))
            obj[x[0]] = Number(x[1]);
        else
            obj[x[0]] += Number(x[1]);
    });
    for(pair in obj){
        console.log(`${pair} : ${obj[pair]}`);
    }
}

solve(['Istanbul <-> 100000',
                   'Honk Kong <-> 2100004',
                   'Jerusalem <-> 2352344',
                   'Mexico City <-> 23401925',
                   'Istanbul <-> 1000']);