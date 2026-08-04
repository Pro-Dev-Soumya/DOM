// making blueprint with the help of class

//=======================Prortotype is an object==============
//it is like inbuilt function set in the object
//eg

let arr = []
console.log(arr.__proto__) //ddouble underscore -> dunder proto. it will prove that in js everything is object execept null and ud
console.log(arr.__proto__.__proto__)//ek level aur upper check karna
// console.log(arr.__proto__.__proto__.__proto__) // null ayga


let str = "soms"
console.log(str.__proto__)
console.log(str.__proto__.__proto__)

console.log(Array.prototype)





class Person{
    constructor(name,age)
    {
        this.name = name
        this.age = age
    }
}
let p1 = new Person("soms", 24)
console.log(p1)
console.log(p1 instanceof Person) // gives boolean that p1 is the part of person