const inputAmigo = document.getElementById("amigo");
const listaAmigos = [];
const ulListaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");
let amigosSorteados = [];

function adicionarAmigo() {
    const nomeAmigo = inputAmigo.value;
    if (nomeAmigo === "") return;

    listaAmigos.push(nomeAmigo);
    const li = document.createElement("li");
    li.textContent = nomeAmigo;

    const buttonRemover = document.createElement("button");
    buttonRemover.textContent = "Remover";
    buttonRemover.onclick = () => removerAmigo(nomeAmigo, li);

    li.appendChild(buttonRemover);
    ulListaAmigos.appendChild(li);

    inputAmigo.value = "";
}

function removerAmigo(nomeAmigo, li) {
    const index = listaAmigos.indexOf(nomeAmigo);
    if (index > -1) {
        listaAmigos.splice(index, 1);
    }
    ulListaAmigos.removeChild(li);
}

function sortearAmigo() {
    if (listaAmigos.length < 2) {
        resultado.innerHTML = "Não foi possível sortear, adicione o mínimo de dois nomes.";
        return;
    }

    if (amigosSorteados.length === listaAmigos.length) {
        resultado.innerHTML = "Todos os amigos já foram sorteados.";
        return;
    }

    let amigosDisponiveis = listaAmigos.filter(amigo => !amigosSorteados.includes(amigo));
    const amigoSecreto = amigosDisponiveis[Math.floor(Math.random() * amigosDisponiveis.length)];
    amigosSorteados.push(amigoSecreto);

    resultado.innerHTML = `O seu amigo secreto é: ${amigoSecreto}`;
}

// Adicionando evento ao botão sortear
document.getElementById("botaoSortear").addEventListener("click", sortearAmigo);