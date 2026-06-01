function logar() {
    let Login = document.getElementById('Login').value
    let senha = document.getElementById('pass').value

    alert(Login + " " + senha)
    if (Login === "tutor" && senha === "123456"){
        window.open("tutor.html", "_blank")
    }
    else if (Login === "ong" && senha === "ong$-135") {
        window.open("ong.html", "_blank")
    }
    else {
        alert("Usuário ou senha inválido !!!")
        return
    }
}