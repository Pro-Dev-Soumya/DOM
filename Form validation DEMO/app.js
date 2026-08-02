const btn = document.getElementById("btn")
const ip = document.getElementById("ip")
const email = document.getElementById("email")
const password = document.getElementById("password")
const age = document.getElementById("age")

const unmsg = document.getElementById("unmsg")
const emmsg = document.getElementById("emmsg")
const pwmsg = document.getElementById("pwmsg")
const agemsg = document.getElementById("agemsg")



btn.addEventListener("click",()=>{
    let ipval = ip.value
    let emval = email.value
    let pwval = password.value
    let ageval = age.value


    if(ipval.length <4 || ipval.length>8)
    {
        // console.log("username must be 4-8 char")
        unmsg.style.display="block"
    }
    if(ageval <18)
    {
        // console.log("age must be 18 years")
        agemsg.style.display="block"

    }
    if(!emval.endsWith("@gmail.com"))
    {
        // console.log("pls enter valid email")
        emmsg.style.display="block"

    }


    let isUC = false //uppercase
    let isLC = false //lowercase
    let isSC = false //special charaters

    let allowed = ["!", "@","#","$","%","&","?","_"]

    for(let item of pwval)
    {
        if(item.toUpperCase() == item)
        {
            isUC = true
        }   
        if(item.toLowerCase() == item)
        {
            isLC = true
        }
        if(allowed.includes(item))
        {
            isSC = true
        }
    }
    if(!isLC||!isUC||!isSC||pwval.length<8)
    {
        console.log("pls enter strong password")
        pwmsg.style.display="block"

    }
})