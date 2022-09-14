function solve(mounth, year){
    // let num;
    // if(mounth === 4 || mounth === 6 || mounth === 9 || mounth === 11 )
    //     num = 30;
    // else if(mounth === 2){
    //     if(year % 4 === 0)
    //         num = 29;
    //     else
    //         num = 28;
    // }
    // else
    //     num = 31;
    // console.log(num);

    let date = new Date(year, mounth, 0);
    console.log(date.getDate());
}

solve(12, 2021);