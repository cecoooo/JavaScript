function townsToJSON(arr){
    let firstRow = arr[0].split("|").map(x => x.trim()).filter(x => x !== '');
    let res = [];
    for(let i = 1; i < arr.length; i++){
        let row = arr[i].split("|").map(x => x.trim()).filter(x => x !== '');
        let json = {};
        json[firstRow[0]] = row[0];
        json[firstRow[1]] = Number((Number(row[1])).toFixed(2));
        json[firstRow[2]] = Number((Number(row[2])).toFixed(2));
        res.push(json);
    }
    return JSON.stringify(res);
}

console.log(townsToJSON(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']))