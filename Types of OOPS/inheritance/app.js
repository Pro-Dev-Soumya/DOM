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
// class Parent{
//     constructor(n="",a="")
//     {
//         this.name = n
//         this.age = a
//     }

//     sayhi()
//     {
//         console.log("namste")
//     }
// }


// class Child extends Parent{
//     constructor(n,a,m)
//     {
//         super(n,a)
//         this.mobile=m
//     }
//      sayhi()
//     {
//         console.log("hello")
//     }
// }

// class GrandChild extends Child{
//     constructor(n,a,m,c)
//     {
//         super(n,a,m)
//         this.cycle = c
//     }
//      sayhi()
//     {
//         console.log("bhadiya") //agr yeha say hi nahi hota to vo parent me ya grand parent me dhundta
//     }
// }


// let p1 = new Parent("soms",25) // is se sirf parent ka ayga
// console.log(p1)

// let c1 = new Child("ved", 16, "apple") // is se child + parent ka
// console.log(c1)

// const GC = new GrandChild("shera",9, "samsunh", "red")
// console.log(GC)

// GC.sayhi() // yeh namste print kr dega

// p1.sayhi()
// c1.sayhi()
// GC.sayhi() 
//this is called over riding in polymorphisam



//hirarchal me bas parent se child ya grand child ka lelo



//overloading in js is not allowed in polymorphism
// function sayhi(n)
// {
//     console.log("hello")
// }
// function sayhi(n)
// {
//     console.log("namste")
// }
// sayhi()








// =========================== Encapsulation =====================
//class k bhar change aur accese nh kar sakte.# laga k ptv kar sakte h. power limit karna. important data chupa dia.hides confidential data
// class BankAccount{
//     #balance;
//     #pin;
//     constructor(n, bal,p)
//     {
//         this.name = n
//         this.balance = bal
//         this.pin = p
//     }

//     //getter
//     getbalance()
//     {
//         console.log(this.#balance)
//     }

//     //setter
//     addbalance(pin,amount)
//     {
//         if(this.#pin != pin)
//         {
//             console.log("invalid pin , pls try again later")
//             return
//         }
//         this.#balance = this.#balance + amount
//         console.log("Amount deposited,balance:",this.#balance)
//     }


//     withdraw(pin,amount)
//     {
//         if(this.#pin != pin)
//         {
//             console.log("invalid pin , pls try again later")
//             return
//         }
//         if(this.#balance < amount)
//         {
//             console.log("Invalid amount,total balance :", this.#balance)
//             return
//         }
//         this.#balance = this.#balance - amount
//         console.log("amount witghdrawn balnce :" , this.#balance)
//     }
// }


// const acc1 = new BankAccount("soumya",100,123)
// acc1.getbalance()
// acc1.addbalance(1234,400)
// acc1.withdraw(1234,400)








//========================= Abstraction =======================
// unnessary cheeze user se chupa di. reduce complexcity for the user


class Car{
    constructor(n)
    {
        this.name = n
    }

    startcar()
    {
        this.#igniteEngine()
        this.#injectfule()
    }

    #injectfule()
    {
        console.log("fule injected")
    }

    #igniteEngine()
    {
        console.log("engine ignited")
    }
}

const car = new Car("bmw")
car.startcar()
