function imc(nome, altura, peso){
     
     a = Number(altura);
     p = Number(peso)

     let imc = p / (a*2)

     console.log("Nome...:",nome)
     console.log("Altura..:",altura )
     console.log("Peso..:",peso )
     console.log("IMC..:",imc )
}
pesoPessoa = prompt(" Digite seu peso ");
alturaPessoa = prompt ("Digite sua altura")
nomePessoa = prompt ("Digite seu nome")

document.write("Nome...: " +nomePessoa+ "<br>");
document.write("Altura...: " +alturaPessoa+ "<br>");
document.write("Peso...: " +pesoPessoa+ "<br>");

imc(nomePessoa, alturaPessoa, pesoPessoa);
