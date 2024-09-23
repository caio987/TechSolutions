 //preencher os inputs com arrow fuctions
 const preencherformulario = (endereco) => {
    document.getElementById('rua').value = endereco.logradouro
    document.getElementById('bairro').value = endereco.bairro
    document.getElementById('cidade').value = endereco.localidade
    document.getElementById('estado').value = endereco.uf
} 
//autopreenchimento
const cepValido = (cep) => {
    if(cep.length == 8) {
        return true;
    } else {
            return false;
        }
    }
    
    //buscar a API
    const pesquisarCEP = async () => {
        const cep = document.getElementById('cep').value;
        const url = `https://viacep.com.br/ws/${cep}/json/`
        if(cepValido(cep)) {
            const dados = await fetch(url);
            const endereco = await dados.json();
            preencherformulario(endereco);
        }
    }
    document.getElementById('cep').addEventListener("focusout" , pesquisarCEP)