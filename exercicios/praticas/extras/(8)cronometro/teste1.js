let c = 1
let intervalo = setInterval(contar, 1000)

function contar(){
    console.log(c)
    c++
    if (c > 5){
    clearInterval(intervalo)
    console.log('Parou')
}

}