function solve(area, vol, str){
    let objs = JSON.parse(str);
    let resArr = [];
    for(let obj of objs){
        let areaF = area.call(obj)
        let volF = vol.call(obj)
        resArr.push({
            area: areaF,
            volume: volF
        });
    }
    return resArr;
}

let area = function(...arr){
    return this.x*this.y;
}

let vol = function (...arr){
    return this.x*this.y*this.z
}

let res = solve(area, vol, `[

    {"x":"1","y":"2","z":"10"},
    
    {"x":"7","y":"7","z":"10"},
    
    {"x":"5","y":"2","z":"10"}
    
    ]`)

console.log(res);