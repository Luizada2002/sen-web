window.onload = function() {
    console.log("OLAAAA")
    console.error("OLAAAA MUNDO")
    console.warn("aaaa")

    let meuForm = $("form#formAluno")

    console.log(meuForm)

    meuForm.on("submit", function(event){
        event.preventDefault()
        console.log("Deu certo")
        let botao = $("form button")
        console.log(botao)

        let botaoQGira = Ladda.create(botao[0])
        botaoQGira.start()
    })

}