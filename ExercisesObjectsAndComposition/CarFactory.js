function CarFactory(requirements){
    let car = {};
    let engine = {};
    let carriage = {};
    let wheels = [];
    car.model = requirements.model;
    if(requirements.power <= 90){
        engine.power = 90;
        engine.volume = 1800;
    }
    else if(requirements.power <= 120){
        engine.power = 120;
        engine.volume = 2400;    
    }
    else{
        engine.power = 200;
        engine.volume = 3500;
    }
    car.engine = engine;
    carriage.type = requirements.carriage;
    carriage.color = requirements.color;
    car.carriage = carriage;
    if(requirements.wheelsize % 2 == 0) requirements.wheelsize-=1;
    for(i = 0; i < 4; i++) wheels.push(requirements.wheelsize);
    car.wheels = wheels;
    return car;
}

console.log(CarFactory({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 
}));