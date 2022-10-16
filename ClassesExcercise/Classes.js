class Rectangle{
    constructor(w, h, c){
        this.width = w;
        this.height = h;
        this.color = c;
    }

    calcArea(){
        return this.width*this.height;
    }
}

class Request{
    constructor(method, uri, version, message, response, fulfilled){
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = undefined;
        this.fulfilled = false;
    }
}

class Ticket{
    constructor(destination, price, status){
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
}

module.exports = {
    Rectangle,
    Request, 
    Ticket
}