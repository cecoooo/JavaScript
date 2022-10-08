function solve(json, criteria){
    let objs = JSON.parse(json);
    let twoPartArray = criteria.split('-');
    let data = [];
    let count = 0;
    for(let obj of objs){
        if(obj[twoPartArray[0]] === twoPartArray[1]){
            let str = `${count}. ${obj["first_name"]} ${obj["last_name"]} - ${obj["email"]}`;
            data.push(str);
            count++;
        }
    }
    for(let item of data){
        console.log(item);
    }
}

solve(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
    }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
    },
    {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
    }]`,
    'gender-Female')