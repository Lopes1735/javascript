function Calculo()
{
var n = document.getElementById("cal").value

var dobro = Number(n*2)

var metade = Number(n/2)

document.getElementById("numero").innerHTML += `<br> O doblo de ${n} é ${dobro} e a metade é ${metade}`
}

function Limpar(){
document.getElementById("cal").value = ""
}
