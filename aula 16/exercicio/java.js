window.onload = function(){

const tab = document.querySelector("#tabuada");
const btn = document.querySelector("#calcular");
const resp = document.querySelector("#resposta")


 btn.addEventListener('click', function(){


    let numero = Number (tab.value);
    let tabuada = 0;


       if ( typeof numero !== 'number' ){
           resp.innerHTML = ("Digite um valor numerico valido")

       } else {
            if( numero < 1 || numero > 10 ){
        alert("Digite um valor entre 1 e 10")
       } else {
           console.log(`Tabuada do ${numero}`);
         while(tabuada <= 10){

             resp.innerHTML+= `<br> ${numero} X ${tabuada}  = ${(numero * tabuada)}`;
             tabuada++
         }
         }

        }
})
    
}

