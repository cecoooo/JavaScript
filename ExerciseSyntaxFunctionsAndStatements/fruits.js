function fruits(fruit_type, weight, price){
    return `I need $${((weight/1000)*price).toFixed(2)} to buy ${(weight/1000).toFixed(2)} kilograms ${fruit_type}.`
}

console.log(fruits('orange', 2500, 1.80))