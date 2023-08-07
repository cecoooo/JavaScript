function HeroicInventory(arr){
    let result = [];
    for(let i = 0; i < arr.length; i++){
        let hero = {};
        let resArr = arr[i].split('/');
        hero.name = resArr[0].trim();
        hero.level = Number(resArr[1].trim());
        hero.items = resArr[2].split(',').map(x => x.trim());
        result.push(hero);
    }
    return JSON.stringify(result); 
}

console.log(HeroicInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']));