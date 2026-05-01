function converters_m() {
    // 1. Pegar os valores que o usuário digitou
    let num = parseFloat(document.getElementById('num').value);
    let resultado = document.getElementById('resultado');

    // 2. Verificar se os campos não estão vazios
    if (isNaN(num)) {
        resultado.innerText = "Por favor, digite o valor que quer converter! ❌";
        resultado.style.color = "red";
        return;
    }
    // 3. Verificar a conversão
    let resultadoConversão = num/60;
    resultado.style.color = "blue";
  // 4. Mostrar o valor na tela
   resultado.innerText = `${num} segundos equivalem a ${resultadoConversão} minutos`;
  }


function converters_h() {
    // 1. Pegar os valores que o usuário digitou
    let num = parseFloat(document.getElementById('num').value);
    let resultado = document.getElementById('resultado');

    // 2. Verificar se os campos não estão vazios
    if (isNaN(num)) {
        resultado.innerText = "Por favor, digite o valor que quer converter! ❌";
        resultado.style.color = "red";
        return;
    }
    // 3. Verificar a conversão
    let resultadoConversão = num/3600;
    resultado.style.color = "blue";
  // 4. Mostrar o valor na tela
   resultado.innerText = `${num} segundos equivalem a ${resultadoConversão} horas`;
  }

 
function converterm_s() {
    // 1. Pegar os valores que o usuário digitou
    let num = parseFloat(document.getElementById('num').value);
    let resultado = document.getElementById('resultado');

    // 2. Verificar se os campos não estão vazios
    if (isNaN(num)) {
        resultado.innerText = "Por favor, digite o valor que quer converter! ❌";
        resultado.style.color = "red";
        return;
    }
   
    // 3. Verificar a conversão
    let resultadoConversão = num*60;
    resultado.style.color = "blue";
  // 4. Mostrar o valor na tela
   resultado.innerText = `${num} minutos equivalem a ${resultadoConversão} segundos`;
  } 


function converterm_h() {
    // 1. Pegar os valores que o usuário digitou
    let num = parseFloat(document.getElementById('num').value);
    let resultado = document.getElementById('resultado');

    // 2. Verificar se os campos não estão vazios
    if (isNaN(num)) {
        resultado.innerText = "Por favor, digite o valor que quer converter! ❌";
        resultado.style.color = "red";
        return;
    }
    
    // 3. Verificar a conversão
    let resultadoConversão = num/60;
    resultado.style.color = "blue";
  // 4. Mostrar o valor na tela
   resultado.innerText = `${num} minutos equivalem a ${resultadoConversão} horas`;
  } 

  function converterh_s() {
    // 1. Pegar os valores que o usuário digitou
    let num = parseFloat(document.getElementById('num').value);
    let resultado = document.getElementById('resultado');

    // 2. Verificar se os campos não estão vazios
    if (isNaN(num)) {
        resultado.innerText = "Por favor, digite o valor que quer converter! ❌";
        resultado.style.color = "red";
        return;
    }
    
    // 3. Verificar a conversão
    let resultadoConversão = num*3600;
    resultado.style.color = "blue";
  // 4. Mostrar o valor na tela
   resultado.innerText = `${num} horas equivalem a ${resultadoConversão} segundos`;
  } 


  function converterh_m() {
    // 1. Pegar os valores que o usuário digitou
    let num = parseFloat(document.getElementById('num').value);
    let resultado = document.getElementById('resultado');

    // 2. Verificar se os campos não estão vazios
    if (isNaN(num)) {
        resultado.innerText = "Por favor, digite o valor que quer converter! ❌";
        resultado.style.color = "red";
        return;
    }
    
    // 3. Verificar a conversão
    let resultadoConversão = num*60;
    resultado.style.color = "blue";
  // 4. Mostrar o valor na tela
   resultado.innerText = `${num} horas equivalem a ${resultadoConversão} minutos`;
  } 

  
    function limpar() {
    // Limpa os valores dos inputs
    document.getElementById('num').value = "";
    // Limpa o texto do resultado 
    document.getElementById('resultado').innerText = "";
    document.getElementById('resultado').style.color = "black";
}
