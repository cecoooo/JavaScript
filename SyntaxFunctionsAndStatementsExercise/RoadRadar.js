function solve(speed, area){
    let allowedSpeed = 0;
    switch(area){
        case 'motorway': 
            allowedSpeed = 130;
            break;
        case 'interstate': 
            allowedSpeed = 90;    
            break;
        case 'city': 
            allowedSpeed = 50;
            break;
        case 'residential': 
            allowedSpeed = 20;
            break;
    }
    let diff = speed - allowedSpeed;
    
    if(diff > 40){
        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${allowedSpeed} - reckless driving`);
    }
    else if(diff > 20){
        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${allowedSpeed} - excessive speeding`);
    }
    else if(diff > 0){
        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${allowedSpeed} - speeding`);
    }
    else{
        console.log(`Driving ${speed} km/h in a ${allowedSpeed} zone`);
    }
}

solve(21, 'residential');