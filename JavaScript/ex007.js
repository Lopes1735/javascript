function calcular()
{
    var aluno = document.getElementById("nome").value
    var valor1 = document.getElementById("num1").value
    var valor2 = document.getElementById("num2").value


var soma = valor1 + valor2 

document.getElementById("resultado").innerHTML += `O aluno ${aluno} tirou notas ${valor1} e ${valor2} sua media foi ${soma}<br>`

if (soma >= 7) {
    document.getElementById("Passou").innerHTML = `Passou de Ano`
}else
    {document.getElementById("Passou").innerHTML = `Nao Passou`
    }
}