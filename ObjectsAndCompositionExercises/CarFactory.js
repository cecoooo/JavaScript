function solve(obj){
    newCar = {}
    newCar.model = obj.model;
    newCar.engine = {
        power: 0,
        volume:0
    }
    if(obj.power <= 90){
        newCar.engine.power = 90;
        newCar.engine.volume = 1800;
    }
    else if(obj.power <= 120){
        newCar.engine.power = 120;
        newCar.engine.volume = 2400;
    }
    else{
        newCar.engine.power = 200;
        newCar.engine.volume = 3500;
    }
    newCar.carriage = {
        type: obj.carriage === 'coupe' ? 'coupe': 'hatchback',
        color: obj.color
    }
    newCar.wheels = ['','','',''].fill(obj.wheelsize % 2 === 0 ? obj.wheelsize-1 : obj.wheelsize, 0, 4)
    return newCar;
}

/*{ 
    model: 'VW Golf II', 
    engine:{ 
        power: 90, 
        volume: 1800 
    }, 
    carriage: { 
        type: 'hatchback', 
        color: 'blue' 
    }, 
    wheels: [13, 13, 13, 13] 
}*/

console.table(solve({ model: 'VW Golf II',
                    power: 90,
                    color: 'blue',
                    carriage: 'hatchback',
                    wheelsize: 14 }));