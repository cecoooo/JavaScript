function factory(library, orders){
    let arrObj = [];
    for(let order of orders){
        let obj = {};
        obj.name = order.template['name'];
        for(let i = 0; i < order.parts.length; i++){
            obj[order.parts[i]] = library[order.parts[i]];
        }
        arrObj.push(obj);
    }
    return arrObj;
}

// {
//     name: 'ACME Printer',
//     print: [Function: print]
// },

let library = {
    print: function () {
        console.log(`${this.name} is printing a page`);
    },
    scan: function () {
        console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
        console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
};

let orders = [
    {
        template: { name: 'ACME Printer'},
        parts: ['print']
    },
    {
        template: { name: 'Initech Scanner'},
        parts: ['scan']
    },
    {
        template: { name: 'ComTron Copier'},
        parts: ['scan', 'print']
    },
    {
        template: { name: 'BoomBox Stereo'},
        parts: ['play']
    }
];

let products = factory(library, orders); 
console.table(products);