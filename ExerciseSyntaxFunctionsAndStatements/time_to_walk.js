function time_to_walk(steps, length_of_step, km_h){
    let distance_m = steps*length_of_step;
    let additional_minutes = Math.floor((distance_km/500));
    m_s = (km_h*1000)/3600;
    let time = distance_m/m_s;
    time += additional_minutes;
    return time;
}

console.log(time_to_walk(4000, 0.60, 5))