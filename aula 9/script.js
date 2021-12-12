//concat() "junta" dois ou mais arrays;
// let nomes = ["Marcelo", "Suelem", "Rafael", "Eu", "Nos"];
// let nomes2 = ["Pedro", "Maria", "Samanta", "Ricardo"];

//  let todosOsNomes = nomes.concat(nomes2);

//  console.log(nomes);
//  console.log(nomes2); 
//  console.log(todosOsNomes);
//  let qtdArrayNome =`o array nomes possui ${todosOsNomes.length} elementos`;
//  console.log(qtdArrayNome);
 


 //indexOf() Procura um determinado elemento de um array,retoma uma posicao
                //0        1          2          3
//  let nomes2 = ["Pedro", "Maria", "Samanta", "Ricardo"];


// let buscaNome = "Jose";

// if ( nomes2.indexOf (buscaNome )  != (-1) ) {
//     alert (`Eu encontrei o nome ${buscaNome} e esta na posicao ${nomes2.indexOf(buscaNome)}`);
// }else{
//     alert(`Nao encontrei o ${buscaNome}`);
// }


//join() Transforma elemontos de uma array em umja string
// let nomes2 = ["Pedro", "Maria", "Samanta", "Ricardo"];

// console.log(nomes2);
// console.log(nomes2.join());


//push ( ) remove o ultimo elemento de um array

// let frutas = ["Uva", "Pera", "Jaca", "banana" ];
// //  frutas.push("Maca","laranja");
// //  frutas.push("laranja");
// //  console.log( frutas.indexOf("jaca"))

// let inserFruta = "Amora"

//  if (frutas.indexOf(inserFruta) == -1){
//      console.log(`A  fruta ${inserFruta} nao esta na lista`);
//      frutas.push(inserFruta)
//  } else {
//     console.log(`A  fruta ${inserFruta} ja esta na lista`)
//  }

// console.log(frutas);


//pop( ) Remove o ultimo elemento da lista 
// let frutas = ["Uva", "Pera", "Jaca", "banana" ];
// frutas.pop();

// console.log(frutas);

    //reverse() iverte o elento do array
    // let frutas = ["Uva", "Pera", "Jaca", "banana" ];

    // frutas.reverse();

    // console.log(frutas);

    // console.log(frutas[])

// shift() Remove p primeiro elemento da array
// let frutas = ["Uva", "Pera", "Jaca", "banana" ];

// frutas.shift()

// console.log(frutas)

//sort() ordena os elemntos de uma array em ordem crescente

// let numeros = ['200', '2' , '3', '1', '120']
// let alfa =  ['n', 'p', 'l', 'k' ]
// numeros.sort()
// console.log(numeros)

//toSting converte uma array em uma sting e retoma esta string
// let frutas = ["Uva", "Pera", "Jaca", "banana" ];

// console.log(frutas.toString() );

// unshif() insere um elemnto no inicio



//splice()  corta ou remove um elemento de um array e um ponto indicado
//agrupar com o indexOf

let nomes = ["mariana", "ricardo", "patati", "patata"]
// let novosNomes = nomes.splice(0,2) // elemontos que foram removidos
let novoLista = nomes.splice(0,1)

console.log(nomes)



