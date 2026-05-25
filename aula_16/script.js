/*
document.writeln('Hello, World!')
window.alert('Hello World again!')
document.getElementById('title').innerHTML = "Hello World! I like JavaScript"

let question = //window.prompt("What's your name?") 
document.getElementById('name').innerHTML = question

let resp = true; //window.confirm(' Do you like JavaScript ?')
*/

if (resposta) {
    document.getElementById('resposta').innerHTML = "YES!! The student like JavaScript!"
}
else {
    document.getElementById('resposta').innerHTML = "NO!! The student doesn't like JavaScript"
}


function sendName() {
    let nameAnswer = document.getElementById("inputName").value

    const answer = document.getElementById("containerAnswer");
    
    answer.innerHTML = 'The name write is ' + nameAnswer;

    answer.style.height = "150px";
    answer.style.display = "flex";
    answer.style.border = " 2px solid #ff0000";
    answer.style.fontSize = "20px";
    answer.style.justifyContent = "Center";
    answer.style.alignItems = "Center";
    answer.style.width = "300px";
    answer.style.backgroundImage = "Linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet)" ;
    answer.style.fontFamily = "Arial"

}