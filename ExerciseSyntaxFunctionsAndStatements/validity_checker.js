function validity_checker(x1, y1, x2, y2){
    let res = '';
    let dist1 = Math.sqrt(x1**2 + y1**2);
    let dist2 = Math.sqrt(x2**2 + y2**2);
    let dist3 = Math.sqrt((x1-x2)**2 + (y1-y2)**2);
    if(Number.isInteger(dist1)){
        res += `{${x1}, ${y1}} to {0, 0} is valid\n`
    }
    else{
        res += `{${x1}, ${y1}} to {0, 0} is invalid\n`
    }
    if(Number.isInteger(dist2)){
        res += `{${x2}, ${y2}} to {0, 0} is valid\n`
    }
    else{
        res += `{${x2}, ${y2}} to {0, 0} is invalid\n`
    }
    if(Number.isInteger(dist3)){
        res += `{${x1}, ${y1}} to {${x2}, ${y2}} is valid`
    }
    else{
        res += `{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`
    }
    return res;
}

console.log(validity_checker(2, 1, 1, 1));