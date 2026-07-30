const parent = document.getElementById("box")
const list = document.getElementById("list")




let p1 = document.createElement("p")
p1.innerText = "hello fron p1"


let p2 = document.createElement("p")
p2.innerText = "hello fron p2"


let p3 = document.createElement("p")
p3.innerText = "hello fron p3"


// parent.appendChild(p1)//older way
// parent.appendChild(p1,p2,p3)//ek hi append hoga


parent.append(p1,p2, p3) // teeno append ho gye

// parent.appendChild("hello world")//append nh hoga

// parent.append("hello world")// is se append ho gya












// ============== set attributes from js file================
// parent.setAttribute("class" , "dabba")
// parent.setAttribute("hgfd","lkjhgf")

//it will set attribute like id , class etc. id is attribute 
//<div id="box" class="dabba" hgfd="lkjhgf"></div>



//to chcek there is style or not 
// console.log(parent.getAttribute("style"))
// console.log(parent.getAttribute("class"))


// parent.remove() // to delet the box






// =================== UL wala================
const fruits = [ "Apple",
  "Apricot",
  "Avocado",
  "Banana",
  "Blackberry",
  "Blueberry",
  "Cherry",
  "Coconut",
  "Grapes",
  "Guava",
  "Kiwi",
  "Lemon",
  "Mango",
  "Orange",
  "Papaya",
  "Peach",
  "Pear",
  "Pineapple",
  "Plum",
  "Pomegranate",
  "Raspberry",
  "Strawberry",
  "Watermelon"
]
let count = 1
for(let item of fruits)
{
    let li = document.createElement("li")
    li.innerText=item
    li.setAttribute("class" , "items")
    li.setAttribute("id", count) //console elemet per jake check karo
    count++
    list.append(li)
}