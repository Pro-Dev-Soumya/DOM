const parent = document.getElementById("list")
// console.dir(parent)


// const parent = document.getElementsByClassName("xyz")


//====================add item ==============
// const listitem1 = document.createElement("li")
// listitem1.innerText="apple"

// parent.appendChild(listitem1)

// const  listitem2 = document.createElement("li")
// listitem2.innerText="banana"
// parent.appendChild(listitem2)


//this is not the good way to add



//======== add item with help of loop===========
let arr = ["dog", "cat", "bat","birds", "cow"]
for(let item of arr)
{
    let li = document.createElement(item)
    li.innerText = item
    parent.appendChild(li)
}
