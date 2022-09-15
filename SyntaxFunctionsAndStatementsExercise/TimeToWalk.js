function solve(steps, stepLen, speed){
    let distance = steps*stepLen; // 2400
    let delay = Math.floor(distance/500)*60; // 240 
    let speedNew = speed/3.6
    let time = Math.round(distance/speedNew + delay);
    let hour = 0;
    let min = 0;
    let sec = 0;
    while(time != 0){
        if(time >= 3600){
            time-=3600;
            hour++;
        }
        else if(time >= 60){
            time -= 60;
            min++;
        }
        else{
            time-=1
            sec++;
        }
    }
    console.log(`${pad(hour, 2)}:${pad(min, 2)}:${pad(sec, 2)}`);
    function pad(num, size) {
        num = num.toString();
        while (num.length < size) num = "0" + num;
        return num;
    }
}

solve(2564, 0.70, 5.5);