async function getWeather(){
    // Criação da variavel para pegar o valor do input cidade
    var cidade = document.getElementById('city').value

    // Conecar co a API
    var resposta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=64ed82577ced7f69cb1687f0ce536131`)

    // Variavel para consumir o JSON de temperatura 
    var tempCelsious = resposta.data.main.temp;

    // IMprimir valor no front end com concatenar Jquery e duas casas decimais
    document.getElementById('temperatura').innerHTML = ` A temperatura atual de ${cidade} é: ${tempCelsious.toFixed(2)} °C `;

}

// Chamar a funçõo 
getWeather();