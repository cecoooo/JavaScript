function solve() {
    function disableFunc(id){
        document.getElementById(id).disabled = true;
    }
    function activateFunc(id){
        document.getElementById(id).disabled = false;
    }

    async function returnArrayOfJSON(objJSON){
        var json_data = objJSON;
        var result = [];
        for(var i in json_data) 
            result.push(json_data[i]);
        return result;
    }

    async function depart() {
        let stop = document.getElementById("info").textContent;
        let url, response, data;
        let data1 = Array.from(returnArrayOfJSON(await (await fetch(`http://localhost:3030/jsonstore/bus/schedule`)).json()));
        debugger;
        if(stop === 'Not Connected') {
            stop = "depot";
            url = `http://localhost:3030/jsonstore/bus/schedule/${stop}`;
            response = await fetch(url);
            data = await response.json();
        }  
        else{
            let currentStopName = stop.split(' ')[2];
            url = `http://localhost:3030/jsonstore/bus/schedule/${data1.filter(x => x.name === currentStopName)[0].next}`;
            debugger;
            response = await fetch(url);
            data = await response.json();
        }
        document.getElementById("info").textContent = `Next stop ${data.name}`;

        disableFunc("depart");
        activateFunc("arrive");
    }

    async function arrive() {
        let data1 = Array.from(returnArrayOfJSON(await (await fetch(`http://localhost:3030/jsonstore/bus/schedule`)).json()));
        let stop = document.getElementById("info").textContent;
        let currentStopName = stop.split(' ')[2];
        let url = `http://localhost:3030/jsonstore/bus/schedule/${data1.filter(x => x.name === currentStopName)[0].next}`;
        let response = await fetch(url);
        let data = await response.json();
        document.getElementById("info").textContent = `Arriving at ${data.name}`;
        disableFunc("arrive");
        activateFunc("depart");
        debugger;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();