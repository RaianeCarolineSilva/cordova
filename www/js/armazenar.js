function salvarlocal(chave,valor)
{
    localStorage.setItem(chave,valor)
    localStorage.setItem("Idade",34)
    localStorage.setItem("Id_usuario",105)
    localStorage.setItem("ListaProdutos", ["Iphone", "Macbook", "Tesla"])   
}

function lerlocal()
{
    console.log(localStorage.getItem("Idade"))
    console.log(localStorage.getItem("ListaProdutos"))
    console.log(localStorage.getItem("Id_usuario"))
}