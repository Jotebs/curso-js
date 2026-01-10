var agora = new Date()
var diaSem = agora.getDay()
/*
    NÚMEROS DOS DIAS DA SEMANA DO JAVASCRIPT
    0 = Domingo
    1 = Segunda
    2 = Terca
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sabado
*/
switch(diaSem){
    case 0:
    console.log("Hoje é Domingo")
    break    

    case 1:
    console.log("Hoje é Segunda-Feira")
    break

    case 2:
    console.log("Hoje é Terça-Feira")
    break

    case 3:
    console.log("Hoje é Quarta-Feira")
    break

    case 4:
    console.log("Hoje é Quinta-Feira")
    break

    case 5:
    console.log("Hoje é Sexta-Feira")
    break

    case 6: 
    console.log("Hoje é Sabado")
    break

    default:
    console.log("[ERRO]Dia inválido")
    break
}