function ModuloMatematico (){
    let total = 0;
    function SomaUm(){
        total = total + 1
        console.log(total)
    }
function SubraiUm(){
        total = total - 1
        console.log (total)
}

 return {
   SomaUm: SomaUm,
   SubraiUm: SubraiUm
 }
}

let modulo = ModuloMatematico()

modulo.SomaUm();
modulo.SomaUm();
modulo.SomaUm();
modulo.SubraiUm();
modulo.SubraiUm();
modulo.SubraiUm();

// 1, 2, 3, 2, 1, 0


