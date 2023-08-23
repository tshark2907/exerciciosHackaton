let result_1 = document.querySelector('#result_1');
let str_1 = "  Bora     Bill   ";
let controle_1 = '';

function solucao_1(){
    for(let i = 0; i < str_1.length;i++){
        if(str_1[i] == ' ' && reference.test(str_1[i+1])){
           controle_1 = str_1.trim().split(/\s+/);
           console.log(controle_1)
           result_1.textContent = controle_1[1].length; 
        }
    }//
}
solucao_1();

function solucao_2(){
    
}