



function imc(){
    let nome = document.getElementById('nome').value;
    let altura = document.getElementById('altura').value;
    let peso = document.getElementById('peso').value;
    let resultado =document.getElementById('resultado');
    let calcular =document.getElementById('calcular');

    if(nome !== '' && altura !== '' && peso !== ''){
        
        let valorIMC = (peso/(altura * altura)).toFixed(2);

        let classificacao = ''
        
        if(valorIMC < 18.5){
            classificacao = 'Você esatá abaixo do peso.'
        }else if (valorIMC >=18.5 &&  valorIMC < 24.9){
            classificacao = 'Seu peso esta ideial.'
        }else if (valorIMC >=24.9 && valorIMC < 29.9){
            classificacao = 'Você esta com sobrepeso I'
        }else if (valorIMC >=29.9 && valorIMC <39.9){
            classificacao = 'Você esta com obesidade II'
        }else if (valorIMC >40.0){
            classificacao = 'Você esta com obesidade grave III'
        }


        resultado.textContent = `${nome} seu IMC pe ${valorIMC} e você está ${classificacao}`

    }else{
        resultado.textContent = 'Preencha todos os campos!!'
    }

}

calcular.addEventListener('click',imc)
