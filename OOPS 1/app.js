//==============OOPS=====================
//oops = object orineted programing
//object is also called instance
// new = ek new memory banana heep me. ek new address pe naya object create karta rehta h
// this= us variable ko store kar k rakhna jab tak vo memory me nahi aajata . aur. is me vo object and address store hota h




//.  Constructor function 
// function inside object cannot bet made in constructor function
function Person(n,a,c)
{
    this.name = n
    this.age = a
    this.city = c
}
let p1 = new Person("soms",24,"delhi")
let p2 = new Person("harsh" ,27,"mumbai")

console.log(p1,p2)

Person.prototype.sayhi = function() //constructor me bhar likhna hota h function
{
    console.log(`hello my name is ${this.name}`)
}
p1.sayhi()
p2.sayhi()





//Class = it is a keyword like function let etc is me parameter nh bana sakte
//even through we have not made any constructor inside class , JS automatically put a default constructor
//it is syntactial sugar of constructor func
class Car{
    constructor(b="",t="",c="")
    {
        this.brand = b
        this.tyre = t
        this.color = c
    }

    cardetails() // function keyword nahi likhna padta
    {
        console.log(this.brand,this.tyre,this.color)
    }
}

let c1 = new Car("bmw",6,"black")
let c2 = new Car("audi" , 4, "white")
console.log(c1,c2)


c1.cardetails()
c2.cardetails()
