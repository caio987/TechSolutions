    fetch(`https://economia.awesomeapi.com.br/json/last/USD-BRL`).then(resposta => {
    return resposta.json()
}).then(economia => {
    console.log(economia)
    document.getElementById('valorDolar').innerHTML = economia.USDBRL.bid;
    document.getElementById('valorMaiorDolar').innerHTML = economia.USDBRL.high;
    document.getElementById('valorMenorDolar').innerHTML = economia.USDBRL.low;

})