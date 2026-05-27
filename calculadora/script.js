const result = document.getElementById("result")
const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")
const btn4 = document.getElementById("btn4")
const btn5 = document.getElementById("btn5")
const btn6 = document.getElementById("btn6")
const btn7 = document.getElementById("btn7")
const btn8 = document.getElementById("btn8")
const btn9 = document.getElementById("btn9")
const btn10 = document.getElementById("btn10")
const btn11 = document.getElementById("btn11")
const btn12 = document.getElementById("btn12")
const btn13 = document.getElementById("btn13")
const btn14 = document.getElementById("btn14")
const btn15 = document.getElementById("btn15")
const btn16 = document.getElementById("btn16")

btn1.addEventListener("click", function(){
    result.value += "1"
})

btn2.addEventListener("click", function() {
    result.value += "2"
})

btn3.addEventListener("click", function() {
    result.value += "3"
})

btn4.addEventListener("click", function(){
    result.value += "+"
})
btn5.addEventListener("click", function(){
    result.value += "4"
})

btn6.addEventListener("click", function(){
    result.value += "5"
})

btn7.addEventListener("click", function(){
    result.value += "6"
})

btn8.addEventListener("click", function() {
    result.value += "-"
})

btn9.addEventListener("click", function(){
    result.value += "7"
})

btn10.addEventListener("click", function(){
    result.value += "8"
})

btn11.addEventListener("click", function(){
    result.value += "9"
})

btn12.addEventListener("click", function(){
    result.value += "*"
})

btn13.addEventListener("click", function(){
    result.value += "/"
})

btn14.addEventListener("click", function(){
    result.value += "0"
})

btn15.addEventListener("click", function(){
    result.value += "."
})

btn16.addEventListener("click", function(){
    result.value = eval(result.value)
})