const dabba = document.getElementById("box")
const div = document.getElementById("box2")

// div.remove() //it will remove that div from screen



// console.log(dabba)

// dabba.innerText = "hello from js"
// dabba.innerHTML = "work "
// dabba.textContent = "soms"

// dabba.innerText = "<h1>hwllo</h1>" 
//it takes it as a string only

// dabba.innerHTML = "<h1>world cup</h1>"
//it takes it as a html

// dabba.textContent = "jhg"


// console.log(dabba.textContent)
//text content privacy hidden rakhta h



const parent = document.getElementById("parent")

const myspan = document.createElement("span")
myspan.innerHTML="hello from js"
//tagname daal na hota h 
parent.appendChild(myspan)