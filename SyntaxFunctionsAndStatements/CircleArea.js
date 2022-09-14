function solve(radius){
    let type = typeof radius;
    if(type != 'number'){
        console.log(`We can not calculate the circle area, because we receive a ${type}.`)
        return
    }
    let area = radius**2*Math.PI;
    console.log(area.toFixed(2));    
}

solve(2)