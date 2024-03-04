//[M1S06] Ex 6 7 8 - Projeto

let endereco = localStorage.getItem("endereco");

        if(endereco == null){
            let cep = prompt("Digite seu CEP:");

            fetch(`https://viacep.com.br/ws/${cep}/json`, {method: 'GET'})
            .then((retornoFetch) => {
                return retornoFetch.json();
            })
            .then((retornoApi) => {
                // "logradouro, complemento - bairro - localidade/uf"
                alert(`${retornoApi.logradouro}, ${retornoApi.complemento} - ${retornoApi.bairro} - ${retornoApi.localidade}/${retornoApi.uf}`);

                let resposta = prompt("Os dados estão corretos?");

                if(resposta.toLowerCase() == "sim"){
                    localStorage.setItem("endereco", JSON.stringify(retornoApi));
                }
            });
        } else {
            let atualiza = prompt("Endereço já informado na base de dados. Deseja atualizá-lo? S/N");
            if (atualiza == "S"){
                let cep = prompt("Digite seu novo CEP:");
                
            }
        }


