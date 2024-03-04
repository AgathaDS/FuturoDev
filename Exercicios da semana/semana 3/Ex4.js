function infos() {
    const nome = prompt("Digite o seu nome");
    const idade = prompt("Digite a sua idade");
    const email = prompt("Digite o seu email");

    const userInfo = {
        nome: nome,
        idade: idade,
        email: email 
    };

    const usuarioJSON = JSON.stringify(userInfo);

    localStorage.setItem("user", usuarioJSON);

    console.log("Informações salvas.");
}

infos();
