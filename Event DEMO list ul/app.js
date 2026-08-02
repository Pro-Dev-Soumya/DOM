const btn = document.getElementById("btn")
const input = document.getElementById("ip")
const list = document.getElementById("list")



btn.addEventListener("click",()=>{
    const text = input.value

    if(!text)
    {
        alert("pls enter some text")
        return
    }

    const listitem = document.createElement("li")

    listitem.style.cursor = "pointer"
    listitem.style.backgroundColor = "yellow"
    listitem.style.margin = "20px"
    listitem.innerText= text
    list.append(listitem)
    input.value = ""
})



//parent per apply karnge
list.addEventListener("click",(e)=>{
    if(e.target.tagName == "LI")
    {
        e.target.remove()
    }
})