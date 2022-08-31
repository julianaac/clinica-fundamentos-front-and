window.onload = function() {
    
    let botoes = document.querySelectorAll("a.excluir");
    console.log(botoes);
    botoes.forEach(item => {
        item.addEventListener('click', () => {
            if (confirm("Deseja realmente excluir?")) {
                item.parentNode.parentNode.remove();
            }
        })
    });
    // let xhr = new XMLHttpRequest();
    let botaoCarregar = document.querySelector("a#load");
    if (botaoCarregar) {
        botaoCarregar.addEventListener('click', () =>{
            let tabela = document.querySelector("table");
           let url = "http://my-json-server.typicode.com/danielnsilva/json/profissionais";/* abrindo documento xmr */
        //    xhr.open("GET", url);/* Vai abrir uma requisição do tipo Get (Que serve para buscar informações no servidor) */
            fetch(url) /* Vai abrir uma requisição do tipo Get (Que serve para buscar informações no servidor) */
            .then(resposta => resposta.json())/*pega as informações de JASON ou seja pega a resposta da requisição é tranforma no formato JSON*/
            .then(dados => {
        //     xhr.addEventListener("readystatechange", () =>{
        //         if(xhr.readyState == 4 && xhr.status == 200){/* quero saber se a requisição deu certo e verifica se retornou corretamente na segunda parte*/
        //             let dados = JSON.parse(xhr.responseText); /*pega as informações de JASON ou seja pega a resposta da requisição é tranforma no formato JSON*/
                    for (let item in dados){ /* a cada iteração item vai receber uma informação de dados o id apenas*/
                        let linha = document.createElement("tr"); /* cria um elemento tr*/
                        let id = document.createElement("td");
                        let nome = document.createElement("td");
                        let registro = document.createElement("td");
                        let especialidade = document.createElement("td");
                        let unidade = document.createElement("td");
                        let telefone = document.createElement("td");
                        let email = document.createElement("td");
                        let acoes = document.createElement("td");
                        id.classList.add("fit"); /*adicionando classe ao elemento */
                        id.textContent = dados[item].id; /*textContent espera conteudo texto */
                        nome.textContent = dados[item].nome;
                        registro.textContent = dados[item].registro;
                        especialidade.textContent = dados[item].especialidade;
                        unidade.textContent = dados[item].unidade;
                        telefone.textContent = dados[item].telefone;
                        email.textContent = dados[item].emai;
                        acoes.innerHTML= `<a href="javascript:void(0)" class="botao">Editar</a>
                        <a href="javascript:void(0)" class="botao excluir">Excluir</a>`; /* espera conteudo html */
                        linha.appendChild(id);
                        linha.appendChild(nome);
                        linha.appendChild(registro);
                        linha.appendChild(especialidade);
                        linha.appendChild(unidade);
                        linha.appendChild(telefone);
                        linha.appendChild(email);
                        linha.appendChild(acoes);/*adicionando inforações a tabela */
                        tabela.tBodies[0].appendChild(linha); /*AppendChiled não apaga nada só acrescenta informação */

                    }
                }
            );
    
            
    //         xhr.send(); /* */

        });
    }

}
