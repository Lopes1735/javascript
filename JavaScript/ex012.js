var rando = parseInt(Math.random()*100)

console.log(rando)

function testar(){
    var random = rando
    var none = document.getElementById("masqueico").value

    if (rando == none) {
        document.getElementById("show").innerHTML += `você acertou`
    }
}