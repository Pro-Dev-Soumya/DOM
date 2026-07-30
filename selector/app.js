const mybtn = document.getElementById("btn")
console.log(mybtn)
//apply only on one btn- unique

const mybtnbyelement = document.getElementsByName("button")
console.log(mybtnbyelement)
//gives array and apply on all btns

const byclassname = document.getElementsByClassName("box")
console.log(byclassname)
//gives an array



//Query selector
const qsbyid = document.querySelector("#btn") //id k time per # lagana hota h 
console.log(qsbyid)

const qsbyclass = document.querySelector(".box") //class k time . lag jata h
console.log(qsbyclass)

const qsbytagname = document.querySelector("button")
console.log(qsbytagname)


const xyz = document.querySelector("sdf")
console.log(xyz) // it will print null it dosent exist 




//query selector all
const qsabyid = document.querySelectorAll("#btn")
console.log(qsabyid) // gives array

const qsabyclass = document.querySelectorAll(".box")
console.log(qsabyclass) //gives array

const qsabytagname = document.querySelectorAll("button")
console.log(qsabytagname) //gives array

const jih = document.querySelectorAll("jhbgv")
console.log(jih) // gives empty array
