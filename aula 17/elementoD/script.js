window.onload = function(){

       let produtos = [
                  {descricao:'Biscoito', preco: 2.20},
                  {descricao:'Sal', preco: 3.10},
                  {descricao:'Cereal', preco: 9.00},

       ]
         
       const ListaProdutos = document.querySelector("#listaProdutos");
       const Total = document.querySelector("#total");

      ( ()=>{
           let totalzinho=0;
           for( let pro of produtos){
             const filhoLi = document.createElement('li');
             
             for ( listaP in pro){ 
                if( listaP == 'preco' ){
                    ListaProdutos.appendChild(filhoLi).setAttribute('data-preco', pro[listaP])
                    totalzinho +=  pro[listaP]  
                }   else {
                    ListaProdutos.appendChild(filhoLi).textContent = `${pro[listaP]}` ;
                  
                }

                
                //   console.log(pro[listaP])

             }
        }
                Total.value = totalzinho.toFixed(2);
     } )(produtos)







}