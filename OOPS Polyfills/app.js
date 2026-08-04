// polyfills = js script me jo bhi chnages hote h ecma script k through  to vo har browser per chal sake
//khud se prototype k ander method daal na
//khud se method banaana like sum , reverserse alredy bana hua h
const heading = document.getElementById("heading")





//making sum method/prototype like arr.push pop lengtg
let arr = [4, 4, 1, 3, 56, 8, 6]
if(!Array.prototype.hasOwnProperty("sum"))
{
    Array.prototype.sum = function()
    {
        let s = 0
        for(let item of this)
        {
            s+=item
        }
        return s
    }
}

let avg = arr.sum() / arr.length
heading.innerText = `Average of arr :${avg}`




//lowercase ko hqamesa upper case me convert karna
String.prototype.toLowerCase = function()
{
    return this.toUpperCase()
}
console.log("soumya".toLowerCase())
// jab bhi koi lower case karega vo use upper case bana dega







//binary search 
let sa = [1,4, 5, 6, 8,9 ]
Array.prototype.binarysearch =function(target)
{
    let s = 0
    let e = this.length-1
    while(s<=e)
    {
        let mid = Math.floor((s+e)/2)
        if(this[mid]==target)
        {
            return mid
        }
        else if(this[mid]<target)
        {
            s = mid+1
        }
        else
        {
            e= mid-1
        }
    }
    return -1
}

console.log(sa.binarysearch(9))