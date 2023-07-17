function road_radar(speed, area){
    let restriction;
    let res = '';
    switch(area){
        case 'motorway': restriction = 130; break;
        case 'interstate': restriction = 90; break;
        case 'city': restriction = 50; break;
        case 'residential': restriction = 20; break;
    }
    let speed_diff = speed - restriction;
    if(speed_diff <= 0){
        res = `Driving ${speed} km/h in a ${restriction} zone`
    }
    else if(speed_diff <= 20){
        res = `The speed is ${speed_diff} km/h faster than the allowed speed of ${restriction} - speeding`
    }
    else if(speed_diff <= 40){
        res = `The speed is ${speed_diff} km/h faster than the allowed speed of ${restriction} - excessive speeding`
    }
    else{
        res = `The speed is ${speed_diff} km/h faster than the allowed speed of ${restriction} - reckless driving`
    }
    return res;
}

console.log(road_radar(40, 'city'))