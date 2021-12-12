window.onload = function(){
 //Lista
    let produtos = [
        {descricao:'Mamão Papai',preco:'3.30'},
        {descricao:'Laranja',    preco:'2.30'},
        {descricao:'Manga',      preco:'2.10'},
        {descricao:'Melão',      preco:'3.50'},
        {descricao:'Melancia',   preco:'5.00'},
    ]
    const ListaFrutas= document.querySelector("#produtos");
    

    ( ()=>{
        
        for (let pro of produtos){
             const filhoLi  = document.createElement('li');
        
         for (let listaP in pro){
                if (listaP == 'preco'){
                    ListaFrutas.appendChild(filhoLi).setAttribute('data-preco', pro[listaP]);
                    
                }else{
                    ListaFrutas.appendChild(filhoLi).textContent = `${pro[listaP]}`
                }
            
        }
        
    }
               
    })(produtos);
    
    //CESTA E TOTAL
    const fru= document.querySelectorAll("#produtos");
    const cestaCliente = document.querySelector("#cestaDoCliente");
    const ValorTotal = document.querySelector("#mostraTotalCompra");
    const cestaFrutas = []
    let totalzinho = 0
    
    let frutas  = []
        fru.forEach(function (list) {
        list.addEventListener('click',function(elemento){

        if(cestaFrutas.indexOf(list.textContent) != -1 ) {
            alert(`Esse ${elemento.target.innerHTML} já está na cesta`);

        } else {
          let listCliente = document.createElement('li');

          frutas = elemento.target.innerHTML
               //'frutas' está locando os elementos de produtos
          cestaFrutas.push(frutas);

          cestaCliente.appendChild(listCliente).textContent = elemento.target.innerHTML; 
                
                //Calculando os valores
              totalzinho += Number(elemento.target.dataset.preco);
                    ValorTotal.value =totalzinho.toFixed(2);

           
    }






    })    
               

    })  
}






















// if(cestaFrutas.indexOf(list.textContent) != -1 ) {
                
//     alert(`Esse ${elemento.target.innerHTML} já está na cesta`);
  
// } else {
// let listCliente = document.createElement('li');
// cestaCliente.appendChild(listCliente).textContent = elemento.target.innerHTML; 
 
// totalzinho += Number(elemento.target.dataset.preco);
//        ValorTotal.value =totalzinho.toFixed(2);

// cestaCliente.appendChild(listCliente).setAttribute('data-preco',elemento.target.dataset.preco);

// }