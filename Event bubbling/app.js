const outer = document.getElementById("outer")
const middle = document.getElementById("middle")
const inner = document.getElementById("inner")




outer.addEventListener("click",()=>{
    console.log("outer clicked")
},true)


// middle.addEventListener("click",()=>{
//     console.log("middle clicked")
// },true)



middle.addEventListener("click",(e)=>{
    console.log("middle clicked")
    e.stopPropagation()
})


inner.addEventListener("click",()=>{
    console.log("inner clicked")
},true)