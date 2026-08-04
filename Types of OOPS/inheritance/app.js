//================ Single inheritance =============

// class Parent{
//     constructor(n="",a="")
//     {
//         this.name = n
//         this.age = a
//     }
// }


// class Child extends Parent{
//     constructor(n,a,m)
//     {
//         super()
//         this.mobile=m
//     }
// }
// let p1 = new Parent("soms",25) // is se sirf parent ka ayga
// console.log(p1)

// let c1 = new Child("ved", 16, "apple") // is se child + parent ka
// console.log(c1)






// Multilevel inheritance
class Parent{
    constructor(n="",a="")
    {
        this.name = n
        this.age = a
    }

    sayhi()
    {
        console.log("namste")
    }
}


class Child extends Parent{
    constructor(n,a,m)
    {
        super(n,a)
        this.mobile=m
    }
     sayhi()
    {
        console.log("hello")
    }
}

class GrandChild extends Child{
    constructor(n,a,m,c)
    {
        super(n,a,m)
        this.cycle = c
    }
     sayhi()
    {
        console.log("bhadiya") //agr yeha say hi nahi hota to vo parent me ya grand parent me dhundta
    }
}


let p1 = new Parent("soms",25) // is se sirf parent ka ayga
console.log(p1)

let c1 = new Child("ved", 16, "apple") // is se child + parent ka
console.log(c1)

const GC = new GrandChild("shera",9, "samsunh", "red")
console.log(GC)

// GC.sayhi() // yeh namste print kr dega

p1.sayhi()
c1.sayhi()
GC.sayhi() 
//this is called over riding in polymorphisam



//hirarchal me bas parent se child ya grand child ka lelo