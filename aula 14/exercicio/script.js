
window.onload = function(){



 function tabuada(numero){

        let tabuada=0; 
        if( typeof numero !== 'number' ){
            alert("Digite um valor numérico valido");
        } else {
            if( numero < 1 || numero > 20  ){
                alert("Digite um valor entre 1 e 20")
            } else {
                console.log(`Tabulada do ${numero}`); 
              while(tabuada <= 5){
                
                console.log(`${numero} x ${tabuada} = ${(numero * tabuada)}` );
                tabuada++
              }    
 
            }
        }
 
 }

    tabuada(20);


}