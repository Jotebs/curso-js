async function executar() {
    console.log("Começou")

    await new Promise(resolve => setTimeout(resolve, 2000)) //"espera 2 segundos antes de continuar"  (o new promise foi usado para criar uma promessa que será resolvida após 2 segundos)
    console.log("Terminou de esperar")
    console.log("Fim")
}

executar()