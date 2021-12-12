// let m = false;

// //console.log ( typeof m )


// if ( typeof  m === 'number'){
// console.log(`O dade informado é um numero: ${m}`);

// } else {
//     console.log (`o dado informado não e um numero : ${m}`);

// }


window.onload= function(){
    // alert('Ola Ricardo')

    const botao = document.getElementById('btn');
    const txtbox = document.querySelector('#txtbox');
    const caixa = document.querySelector('#caixa');

    
    botao.addEventListener('click',function(){
        caixa.innerHTML +=  '' +txtbox.value + '';

    })

}

