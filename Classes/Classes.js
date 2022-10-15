class Person{
    constructor(firstName, lastName, age, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    toString = () => {
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }
}

class Circle{
    constructor(rad){
        this.radius = rad;
    }

    get diameter(){
        return this.radius*2;
    }
    set diameter(d){
        this.radius = d/2;
    }
    get area(){
        return Math.PI*(this.radius**2);
    }
}

class Point{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    static distance(p1, p2){
        return Math.sqrt((p1.x - p2.x)**2 + (p1.y - p2.y)**2);
    }
}

module.exports = {
    Person,
    Circle,
    Point
};