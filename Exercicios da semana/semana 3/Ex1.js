//[M1S06] Ex 1 - Promisse

function verificarPar(numero) {
    return new Promise((resolve, reject) => {
        if(numero % 2 === 0) {
            resolve("Número validado é par");
        } else {
            reject(new Error("Error: número informado é ímpar"));
          }
        });
      }

      const numero = 15; //reject(new Error("Error: número informado é ímpar"));

verificarPar(numero)
  .then((Promise) => {
    console.log(Promise);
  })
  .catch((error) => {
    console.error(error.message);
  });  