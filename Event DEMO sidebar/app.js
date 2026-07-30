const sidebar = document.getElementById("side")
const hiddenelements = document.getElementsByClassName("hide")






//sidebar bada chota hover karne per
sidebar.addEventListener("mouseenter",()=>
{
    sidebar.style.width ="20vw"

    for(let item of hiddenelements)
    {
        item.style.display = "block"
    }
})

sidebar.addEventListener("mouseleave",()=>
{
    sidebar.style.width ="5vw"

     for(let item of hiddenelements)
    {
        item.style.display = "none"
    }
})