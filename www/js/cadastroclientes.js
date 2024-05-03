function enviar(){


    const dbParam = JSON.stringify(
        {
            "Nome": document.querySelector("#nome").value, // variavel do javascript
            "Documento": document.querySelector("#documento").value, // variavel do javascript
            "Celular": document.querySelector("#celular").value, // variavel do javascript
            "Numero": document.querySelector("#numero").value,// variavel do javascript
            "Cep": document.querySelector("#cep").value, // variavel do javascript
            "Endereco": document.querySelector("#endereco").value, // variavel do javascript
            "Bairro": document.querySelector("#bairro").value, // variavel do javascript
            "Cidade": document.querySelector("#cidade").value, // variavel do javascript
            "Estado": document.querySelector("#estado").value // variavel do javascript
        }
    );
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function() {
        const myObj = JSON.parse(this.responseText);
        console.log(myObj);
        document.getElementById("demo").innerHTML = myObj;
    }
    xmlhttp.open("POST", "https://etec.fernandograciano.com.br/cadastrocliente.php");
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("dados="+dbParam );

}


