function solve(year, mounth, day){
    let date = new Date(year, mounth-1, day-1);
    console.log(`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`);
}

solve(2016, 10, 1);