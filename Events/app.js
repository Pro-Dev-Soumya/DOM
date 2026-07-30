const box = document.getElementById("box")

//we have to put .addeventlistner - then on click or close etc. - callback function
// box.addEventListener("click" , ()=>
// {
//     console.log("clicked")
// })


//make function than add an event
function clickhandler()
{
    console.log("worked")
}
box.addEventListener("click" , clickhandler)