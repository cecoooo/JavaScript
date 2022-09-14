function solve(a, b, sign){
    let result;
    if(sign === '+')
        result = a+b;   
    else if(sign == '-')
        result = a-b;
    else if(sign == '*')
        result = a*b;
    else if(sign == '/')
        result = a/b;
    else if(sign == '%')
        result = a%b;
    else if(sign == '**') 
        result = a**b;

    console.log(result)
}

solve(10, 3, '/')