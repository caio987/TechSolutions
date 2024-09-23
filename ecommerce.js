// Conectar com a API utilizando FETCH

fetch('https://raw.githubusercontent.com/caio987/ecommerce-Mine/refs/heads/main/ecommerce.json').then(resposta => resposta.json()).then(corpo => {
    console.log(corpo)

    document.getElementById('nome').innerHTML = corpo.nome;
    document.getElementById('preco').innerHTML = corpo.Preco;
    document.getElementById('sobre').innerHTML = corpo.Sobre;
    document.getElementById('imagem').innerHTML = corpo.Image;
   
    document.getElementById('nome2').innerHTML = corpo.nome2;
    document.getElementById('preco2').innerHTML = corpo.Preco2;
    document.getElementById('sobre2').innerHTML = corpo.Sobre2;
    document.getElementById('imagem2').innerHTML = corpo.Image2;
   
    document.getElementById('nome3').innerHTML = corpo.nome3;
    document.getElementById('preco3').innerHTML = corpo.Preco3;
    document.getElementById('sobre3').innerHTML = corpo.Sobre3;
    document.getElementById('imagem3').innerHTML = corpo.Image3;


})