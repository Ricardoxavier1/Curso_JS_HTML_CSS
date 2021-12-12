function teste(){
    alert("Estou na function teste");
    return nome;

}

// teste();

// let msg = (nome) =>{ return nome}
// console.log(msg("Jose"));

// (function( produto, preco ){
//      alert( "ao produto e "+produto+ " e o preco e de R$" +preco);
// })("Biscito", 2.35);



let v1 = prompt("Digite o valor 1");
let v2 = prompt("Digite o valor 2");

 const soma = (valor1, valor2)=>{
    let resultado =Number(valor1) * Number(valor2)
    console.log(resultado)
}

soma(v1, v2)