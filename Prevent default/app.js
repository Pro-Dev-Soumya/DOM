const form = document.getElementById("form")
const reloadpage = document.getElementById("reloadpage")
const checkbox = document.getElementById("checkbox")

form.addEventListener("submit" , (e) =>{
    e.preventDefault()
    //baar baar page reload hota h isliye yeh lagate h
})




//check how manytimes form has been clicked
form.addEventListener("click",()=>{
    console.log("form clicked")
})


// reloadpage.addEventListener("click",()=>{
//     window.location.reload()
// })


//window per touch karne pr kitni bar hua puri window per
// window.addEventListener("click",()=>{
//     console.log("mouseclicked")
// })




//keybord se key preess k kitni baar kia
// window.addEventListener("keydown",(e)=>{
//     // console.log("key pressed")
//     console.log(e)

// })







//want to prevent that no one can download my pic by context menu
window.addEventListener("contextmenu",(e)=>{
    e.preventDefault(e)
})
//ab is se context menu nahi khulega




//ab bhar se kuch bhi copy paste nahi karne dena hum id per bhi  laga sakte h aur window per bhji
window.addEventListener("paste",(e)=>{
    e.preventDefault()
})
// like password per laga do aur username per mat lagaio






//tab change prevent karna like exam
// window.addEventListener("visibilitychange",()=>{
//     alert("cheater")
// })



//checkbox me addd even prevent karna
checkbox.addEventListener("click",(e)=>{
    e.preventDefault()
})


//same hum link per bhi kar skate h