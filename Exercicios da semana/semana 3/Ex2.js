//[M1S06] Ex 2 - Async/Await

async function getUserInfo() {
 
  await new Promise(resove => setTimeout(resove, 2000));

  return {
    nome: "Ágatha Duarte da Silva",
    idade: 14,
    email: "agathaduartesilva@gmail.com"
  };
}

async function displayUserInfo(){
    try {
        const userInfo = await getUserInfo();
    
        console.log("Nome:", userInfo.nome);
        console.log("Idade:", userInfo.idade);
        console.log("Email:", userInfo.email);

     } catch (error) {
            console.error("Erro ao obter informações do usuário:", error);
        }
    }
    displayUserInfo();