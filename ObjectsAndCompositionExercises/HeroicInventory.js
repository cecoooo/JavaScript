function solve(arr){
    arr = arr.map(x => x.split(' / ').map(y=> y.split(', ')));
    newArr = [];
    for(let part of arr){
        let obj = {};
        obj.name = part[0].join();
        obj.level = Number(part[1]);
        obj.items = part[2];
        newArr.push(obj);
    }
    let json = JSON.stringify(newArr)
    console.log(json);
}

solve(['Isacc / 25 / Apple, GravityGun',
       'Derek / 12 / BarrelVest, DestructionSword',
       'Hes / 1 / Desolator, Sentinel, Antara']);