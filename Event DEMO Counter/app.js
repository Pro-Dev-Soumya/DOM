const display = document.getElementById("display")
const incbtn = document.getElementById("inc")
const resbtn = document.getElementById("res")
const decbtn = document.getElementById("dec")

incbtn.addEventListener("click",()=>
{
    let curr = Number(display.innerText)
    curr++
    display.innerText=curr
})




decbtn.addEventListener("click",()=>
{
    let curr = Number(display.innerText)
    // if(curr==0)return
    curr--
    display.innerText=curr
})



resbtn.addEventListener("click",()=>
{
    display.innerText = "0"
})
