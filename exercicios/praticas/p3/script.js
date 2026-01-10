function contar() {
    let ini = document.getElementById('txtini')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtpasso')
    let res = document.getElementById('res')
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = "Contando: "
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            p = 1
            window.alert('Passo inválido! Considerando PASSO 1')
        }
        if(i < f){
            for(let c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
            res.innerHTML += `Fim!`
        }else{
            for(let c=i; c>=f; c-=p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
            res.innerHTML += `Fim!`
        }
            
    }   
}