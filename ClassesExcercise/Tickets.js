const {Ticket} = require('./Classes');

function result(arrStr, str){
    let resultArray = [];
    arrStr.map(x => {
        x = x.split('|');
        let tick = new Ticket(x[0], x[1], x[2]);
        resultArray.push(tick);
    });
    return resultArray.sort((a,b) => sortTickArr(a,b));

    function sortTickArr(a, b){
        if(a[str] > b[str]) return 1;
        else if(a[str] < b[str]) return -1;
        else return 0;
    }
}

console.table(result(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'));