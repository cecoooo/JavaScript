async function getInfo() {
    document.getElementById("buses").innerHTML = "";
    const stopId = document.getElementById("stopId").value;
    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;
    document.getElementById("stopId").value = "";
    try{
        let response = await fetch(url);
        let data = await response.json();
        document.getElementById("stopName").textContent = data.name;
        Object.entries(data.buses).forEach(([bus, time]) => {
            let li = document.createElement("li")
            li.textContent = `Bus ${bus} arrives in ${time} minutes`;
            document.getElementById("buses").appendChild(li);
        });
    }catch(e){
        document.getElementById("stopName").textContent = "Error";
    }
}