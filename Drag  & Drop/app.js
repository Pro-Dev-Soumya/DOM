const box = document.getElementById("dabba")
const ele = document.getElementById("element")
const box2 = document.getElementById("dabba2")


ele.addEventListener("dragstart", (e)=>
{
    e.dataTransfer.setData("kuchbhi" ,e.target.id)
})

box2.addEventListener("dragover", (e)=>{
    e.preventDefault()
})


box2.addEventListener("drop",(e)=>{
    e.preventDefault()
    const mydata = e.dataTransfer.getData("kuchbhi")
    e.target.appendChild(document.getElementById(mydata))
}
)

box.addEventListener("dragover", (e)=>{
    e.preventDefault()
})


box.addEventListener("drop",(e)=>{
    e.preventDefault()
    const mydata = e.dataTransfer.getData("kuchbhi")
    e.target.appendChild(document.getElementById(mydata))
}
)