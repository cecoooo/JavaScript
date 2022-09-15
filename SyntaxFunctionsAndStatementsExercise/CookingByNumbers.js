function solve(num, com1, com2, com3, com4, com5){
    let number = Number(num);
    let arr = [com1, com2, com3, com4, com5];
    for(let i = 0; i < 5; i++)
        number = change(arr[i], number)

    function change(com, num){
        switch(com){
            case 'chop': 
                num /= 2;
                break;
            case 'dice': 
                num = Math.sqrt(num);
                break;
            case 'spice': 
                num += 1;
                break;
            case 'bake': 
                num *= 3;
                break;
            case 'fillet': 
                num *= 0.8;
                break;
        }
        console.log(num);
        return num;
    }
}

solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');