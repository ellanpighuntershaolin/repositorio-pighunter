const curtidas = document.getElementById("curtir") //pega o botão de curtidas pelo id
curtidas.addEventListener("click", aumentarcurtidas) //quamdo clicar chama a função

///função de aumentar curtidas
function aumentarcurtidas(){
    let quantidade = document.querySelector("span")
    quantidade.textContent++;
}
