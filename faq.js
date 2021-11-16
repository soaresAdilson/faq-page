//buscar os items da tela
const itemsPerguntasERespostas = document.querySelectorAll(".item");

//entender que o item foi clicado
itemsPerguntasERespostas.forEach(function(item){
    item.addEventListener('click', function(){

// verificar se  a pergunta clicada esta ativa
        const estaAtiva = item.classList.contains('ativo')

    // se a pergunta  nao está ativa
        if(!estaAtiva){

            //eu preciso fechar todas
            itemsPerguntasERespostas.forEach(function(item){
                item.classList.remove('ativo')
            })

            //abrir a resposta atual
            item.classList.add('ativo');

            //se apregunta estiver ativa
        }else {

             //desativar(removeria a classe ativo)
             item.classList.remove('ativo')
        }
    })
});
