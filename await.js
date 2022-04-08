const axios = require('axios');

function esperaRespostaHTTP(){
    return new Promise(
        returnPromise => {
            axios.get('https://google.com')
                .then(function (response) {
                    console.log('Dentro do then axios')
                    returnPromise(response.status)
                })
                .catch(function (error) {
                    console.log('Dentro do catch do axios')
                    returnPromise(response.status)
                })
                .then(function () {
                    // always executed
                    console.log('Dentro do finally axios')
                    console.log('3')
                });
        }
    );
}

async function inicializar(){
    console.log('Rodando: 1')
    console.log('Rodando: 2')
    console.log('Rodando: 3')
    const resposta = await esperaRespostaHTTP();
    console.log('Rodando: 3')
    console.log('Rodando: 2')
    console.log('Rodando: 1')

    if (resposta == '200'){
        console.log('Reposta ' + resposta + ', tudo OK!!')
    }else{
        console.log('Resposta ' + resposta + 'NADA FEITO!!')
    }
}


inicializar()