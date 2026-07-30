const darkModebtn = document.getElementById("dark")
const lightModebtn = document.getElementById("light")
const mainbox = document.getElementById("text")
const input = document.getElementById("ip")
const heading = document.getElementById("heading")





darkModebtn.addEventListener("click",()=>{
    mainbox.style.backgroundColor="black"
    mainbox.style.color="white"
})


lightModebtn.addEventListener("click",()=>{
    mainbox.style.backgroundColor="white"
    mainbox.style.color="black"
})


//when the window loads focus aone aap input text per ayga bin aclick kare 
// window.addEventListener("load", ()=>{
//     input.focus()
// })



//input box touch karne per bada hona
input.addEventListener("focus", () =>{
    input.style.width = "30%"
})

//input box exit karne per chota hona
input.addEventListener("blur",()=>{
    input.style.width="10%"
})


//input data jo user daal raha h use console per dekhna console .log se
//fir screen per dekhne k liye heading me likha dia
//input k time per sath hi sath output dikhega

input.addEventListener("input",(e)=>{
    // console.log(input.value)
    // console.log(e.target.value)
    heading.innerText = e.target.value
})






//input blur hone k baad output dikhta nh change se
// input.addEventListener("change",(e)=>{
//     heading.innerText = e.target.value

// })

