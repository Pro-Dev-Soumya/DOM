const input = document.getElementById("ip")
const button = document.getElementById("btn")
const pending = document.getElementById("pending-card-container")
const allcontainer = document.getElementsByClassName("abc")
// const count = 0 





//adding input in cards 
button.addEventListener("click", () => {
    const val = input.value
    if (!val) {
        alert("please eneter some text")
        return
    }
    const card = document.createElement("article")
    card.setAttribute("class", "my-card")
    card.setAttribute("draggable", true)

    //cards ko id dena padega jis se us per loop chal paye

    //card.setAttribute("id", count)
    //count++ // not good way to doing this is se har id ko unique value milti jaygi like 1, 2,3

    //card.setAttribute("id",Math.random())//yeh random values deta rahega

    //best method id dene k liye
    card.setAttribute("id", Date.now())//kabhi same id nahi aygi
    card.innerText = val
    pending.append(card)
    input.value = ""
})





//drag & drop by loop
for(let item of allcontainer)
{
    item.addEventListener("dragstart",(e)=>{
        e.dataTransfer.setData("keykanaam",e.target.id)
    })

    item.addEventListener("dragover",(e)=>{
        e.preventDefault()
    })

    item.addEventListener("drop",(e)=>{
        e.preventDefault()

        const id = e.dataTransfer.getData("keykanaam")
        const card = document.getElementById(id)
        

        //drop karne per har box me alag border
        if(e.target.id == "pending-card-container")
        {
            card.style.border ="2px solid red"
        }
        else if(e.target.id == "progress-card-container")
        {
            card.style.border ="2px solid yellow"
        }
        else if(e.target.id == "completed-card-container")
        {
            card.style.border = "2px solid green"
        }
        e.target.tagName != "ARTICLE" && e.target.append(card)
        //e.target.append(card)
    })
}



window.addEventListener("keydown",(e)=>{
   
    // console.log(e)
     if(e.key == "Enter")
     {
        button.click()
     }
})