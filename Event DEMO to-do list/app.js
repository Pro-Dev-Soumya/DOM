const titlebar = document.getElementById("title")
const addbtn = document.getElementById("btn")
const description = document.getElementById("desc")
const cardconright = document.getElementById("right")


// titlebar.addEventListener("input", (e)=>{
//     console.log(e)
// })






// to do list right card

addbtn.addEventListener("click",()=>{
    //handle empty inputs
    if(!titlebar.value||!description.value)
    {
        alert("Please enter the values")
        return
    }

    const card = document.createElement("article")

    //delet the card
    card.addEventListener("click", ()=>{
        card.remove()
    })


    // card.innerText = `${titlebar.value} --- ${description.value}` 
    //good way to write is in down


    const cardtitle = document.createElement("h3")
    cardtitle.innerText = titlebar.value 

    const disccontain = document.createElement("p")
    disccontain.innerText = description.value

    card.append(cardtitle, disccontain)

    //styling
    card.style.border ="2px solid rgb(73, 184, 196)"
    card.style.background = "#ffc0cb"
    card.style.width =" 90%"
    card.style.padding="10px"
    card.style.borderRadius="10px"
    
    


    cardconright.append(card)

    titlebar.value = ""
    description.value =" "
    // console.log(titlebar.value)
    // console.log(description.value)
})