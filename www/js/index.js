function consultaCep()
{
  let campo = document.querySelector("#cep");
  let requisicao = new XMLHttpRequest();
  let url = "https://viacep.com.br/ws/" + campo.value + "/json/";
  requisicao.open("GET" , url);
  requisicao.send();
  requisicao.onload = function(){
    let objetoCEP = JSON.parse(requisicao.response)
    let campoEndereco = document.querySelector("#logradouro")
    let campoComplemento = document.querySelector("#complemento")
    let campoBairro = document.querySelector("#bairro")
    let campoLocalidade = document.querySelector("#localidade")
    let campoNumero = document.querySelector("#numero")
    let campoNome = document.querySelector("#nome")
    let campoEstado = document.querySelector("#estado")
    let campoCelular = document.querySelector("#celular")
    let campoDocumento = document.querySelector("#documento")




    campoComplemento.value = objetoCEP.complemento
    campoEndereco.value = objetoCEP.logradouro
    campoBairro.value = objetoCEP.bairro
    campoLocalidade.value = objetoCEP.localidade
    campoCelular.value = objetoCEP.celular
    campoNumero.value = objetoCEP.numero
    campoNome.value = objetoCEP.nome
    campoEstado.value = objetoCEP.estado
    campoDocumento.value = objetoCEP.documento


   }

}

let botao = document.querySelector("#botao");
botao.addEventListener("click", consultaCep);