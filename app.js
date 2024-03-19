function obterDataAtual() {
    var data = new Date();
    var dia = String(data.getDate()).padStart(2, '0');
    var mes = String(data.getMonth() + 1).padStart(2, '0'); 
    var ano = data.getFullYear();
    return dia + '/' + mes + '/' + ano;
}

document.getElementById('dataAtual').textContent = obterDataAtual();

document.getElementById('botaoJogar').addEventListener('click', function() {
    window.location.href = 'outra_pagina.html';
});

 // Adiciona o evento de clique ao botão "Configurações"
 document.getElementById('botao2').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'block';
});