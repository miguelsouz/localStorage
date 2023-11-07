document.getElementById('tela').innerHTML = JSON.parse(localStorage.getItem('dados'));

function leituraDados() {
    const dados = {
        nome: document.getElementById('nome').value,
        idade: document.getElementById('idade').value
    }

    localStorage.setItem('dados', JSON.stringify(dados));
   
    document.getElementById('tela').innerHTML = JSON.stringify(dados);
}

function removeNome() {
    localStorage.removeItem('nome');

    document.getElementById('tela').innerHTML = '';
}