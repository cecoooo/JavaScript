function cooking_by_numbers(starting_point, com1, com2, com3, com4, com5){
    let num = Number(starting_point);
    let arr = [com1, com2, com3, com4, com5];
    for(i = 0; i < 5; i++){
        switch(arr[i]){
            case 'chop': num /= 2; break;
            case 'dice': num = Math.sqrt(num); break;
            case 'spice': num += 1; break;
            case 'bake': num *= 3; break;
            case 'fillet': num *= 0.8; break;
        }
        console.log(num);
    }
}

cooking_by_numbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');