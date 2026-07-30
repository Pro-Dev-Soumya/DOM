const card = document.getElementsByClassName("card")
const cart = document.getElementById("cart")
const box = document.getElementById("box")





//======= by loop adding card to cart but it is not good way to do it======
// for(let item of card)
// {
//     item.addEventListener("click",()=>{
//         let curr = item.innerText
//         cart.innerText = curr + " " + cart.innerText

//     })
// }
//click karne me cheeze cart me arahi h









// ======= Perferct way to do it ===========
box.addEventListener("click",(e)=>{
    if(e.target.tagName=="MAIN")
    {
        return
    }
    let curr = e.target.innerText
    cart.innerText = curr + " " + cart.innerText
})