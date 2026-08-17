
// "use strict"



// function checkthis()
// {
//     console.log(this)
// }
// checkthis() //strict mode me undefine dega, aur without me window object







//========= object =======
//normal function = object dega
//arrow function = window object k form me dega. arrow func me this kisi ko bind nhi karta 

// let obj = {
//     name:"soms",
//     age:19,
//     chcekthis:function (){
//         console.log(this)
//     },
//     chcekthis2 : ()=>{
//         console.log(this)
//     },
//     chcekthis3: function(){
//         const fn = ()=>{
//             console.log(this)
//         }
//         fn()
//     }
// }

// obj.chcekthis()
// obj.chcekthis2()
// obj.chcekthis3()//object dega ku ki parant object ko pin karega and vice versa








//=============== Call, bind , apply====================
function intro(city){
    // console.log(this)
    console.log(`my name is ${this.name}, and my is ${this.age}.live in ${city}`)

}

let p1 ={
   name:"soms",
   age:20,
   intro:function(){
    console.log(`my name is ${this.name}, and my is ${this.age}`)
   } 
}

let p2 ={
    name:"veds",
    age:18,

}

// p1.intro()
// p1.intro.call(p2)


//line 51 wala function h yeh sab
// intro()
intro.call(p1,"pune")
intro.call(p2,"delhi")


intro.apply(p1,["pune"]) //apply me array pass krna hota h

const myintro = intro.bind(p2,"Mumbai")//agr function store kar k rakhna chahte ho to bind kar lo
myintro()