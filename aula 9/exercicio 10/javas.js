let nomes = ["Ricardo", "Marcelo", "Eduardo", "Jose", "Carlos"];


const coisaNomes = (name, novoNome, index) => {;
   console.log("Quantidades de elementos do array...: ", nomes.length);
   console.log(` Voce escolheu o indice ${novoNome} que e o elemnto ${name[index]}`);
   console.log(`O nome ${novoNome} foi inserido no array`);
   console.log("Quantidades de elementos do array...: ");
   name.push(novoNome);
   console.log("A quantidades de elementos atual do  array e de...: ", name.length);
}
coisaNomes(nomes, "Marcelo", 2);
coisaNomes(nomes, " Ricardo", 1)
 
