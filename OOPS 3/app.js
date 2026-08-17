//================= storage ====================
//Browser storage are use for micro information we can save





//+++++++++++++++++++ Local storage +++++++++++++++++++++++
localStorage.setItem("name","qwert")
localStorage.setItem("name2","qwert")
// localStorage.clear()
console.log(localStorage.getItem("name"))
localStorage.removeItem("name2")
console.log(localStorage.length)







// const input = document.getElementById("ip")
// const btn = document.getElementById("btn")
// const list = document.getElementById("list")
// let str = ""

// btn.addEventListener("click",()=>{
//     let val = input.value
//     str+="," + val
//    localStorage.setItem("item", str)

//     const li = document.createElement("li")
//     li.innerText = val
//     list.append(li)

//      input.value = ""
// })

// window.addEventListener("load",()=>{
//     console.log(localStorage)
// })