function prev_day(year, month, day){
    day--;
    if(day == 0){
        if(month == 5 || month == 7 || month == 10 || month == 12){
            day = 30;
        }
        else if(month == 3){
            if(year%4==0){
                day = 29
            }
            else{
                day = 28;
            }
        }
        else{
            day = 31;
        }
        month--;
        if(month == 0){
            year--;
            month = 12;
        }
    }
    return `${year}-${month}-${day}`
}

console.log(prev_day(2015, 3, 1))