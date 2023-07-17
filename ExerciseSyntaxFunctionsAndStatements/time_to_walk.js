function time_to_walk(steps, length_of_step, km_h){
    let distance_m = steps*length_of_step;
    let additional_minutes = Math.floor((distance_m/500));
    let m_s = (km_h*1000)/3600;
    let time = distance_m/m_s;
    time += additional_minutes*60;
    let min = Math.floor(time/60);
    let hours = Math.floor(min/60);
    let sec = time - min*60;
    min -= hours*60;
    return `${String(hours).padStart(2, '0')}:${String(min).padStart(2, '0')}:${String(Math.round(sec)).padStart(2, '0')}`;
}

console.log(time_to_walk(4000, 0.60, 5))