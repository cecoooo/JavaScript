function cityTaxes(name, population, treasury){
    let city = {
        name: name,
        population: population,
        treasury: treasury,
        taxRate: 10,
        collectTaxes: function() {
            this.treasury += this.population*this.taxRate;
        },
        applyGrowth: function(percentage){
            this.population += this.population*(percentage/100);
        },
        applyRecession: function(percentage) {
            this.treasury -= this.treasury*(percentage/100);
        }
    };
    return city;
}

const city = cityTaxes('Tortuga', 7000, 15000);
city.collectTaxes();

console.log(city.treasury);
city.applyGrowth(5);

console.log(city.population);

/*
{   name: 'Tortuga', 
    population: 7000, 
    treasury: 15000,
    taxRate: 10, 
    collectTaxes: [Function: collectTaxes], 
    applyGrowth: [Function: applyGrowth], 
    applyRecession: [Function: applyRecession] }
*/