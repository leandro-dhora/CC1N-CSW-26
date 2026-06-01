const botao = document.getElementById("calcular")
const resultado = document.getElementById("resultado")

botao.addEventListener("click", function () {
    const dia = Number(document.getElementById("dia").value)
    const mes = Number(document.getElementById("mes").value)
    const ano = Number(document.getElementById("ano").value)

    const hoje = new Date()

    const anoAtual = hoje.getFullYear()
    const mesAtual = hoje.getMonth() + 1
    const diaAtual = hoje.getDate()

    let idade = anoAtual - ano

    if (mesAtual < mes || (mesAtual === mes && diaAtual < dia)) {
        idade--
    }

    if (!dia || !mes || !ano) {
        resultado.textContent = "Preencha todos os campos!"
        return
    }

    document.getElementById(resultado).innerHTML = "Você tem" + resultado + "Anos"  
})