const screen = document.getElementById("screen")
const themebtn = document.getElementById("light")

// const light = document.getElementById("light")
// const dark = document.getElementById("dark")



//double button se karna

// light.addEventListener("click",()=>{
//     screen.style.backgroundColor = "white"
//     screen.style.color = "black"
// })

// dark.addEventListener("click",()=>{
//     screen.style.backgroundColor = "black"
//     screen.style.color = "white"
// })






//singlr button dark light karne k liye

let theme = "light"

themebtn.addEventListener("click",()=>{
    if(theme == "light")
    {
        screen.style.backgroundColor = "black"
        screen.style.color = "white"
        theme = "dark"
        themebtn.innerText = "light"
        localStorage.setItem("theme", theme)
    }
    else
    {
        screen.style.backgroundColor = "white"
        screen.style.color = "black"
        theme = "light"
        themebtn.innerText ="dark"
        localStorage.setItem("theme", theme)

    }
})

//reload hone k baad bhi same rahe
window.addEventListener("load",()=>{
    let existingtheme = localStorage.getItem("theme")
    if(existingtheme=="light")
    {
        screen.style.backgroundColor = "white"
        screen.style.color = "black"
        theme = existingtheme
    }
    else if(existingtheme=="dark")
    {
        screen.style.backgroundColor = "black"
        screen.style.color = "white"
        theme = existingtheme
    }
})