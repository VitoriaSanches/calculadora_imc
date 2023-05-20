function calculateIMC() {
  var peso = document.getElementById('peso').value;
  var altura = document.getElementById('altura').value;

  var imc = peso / (altura * altura);
  var classification = "";

  if (imc < 18.5) 
    classification = "Abaixo do peso";
  else if (imc >= 18.5 && bmi < 25) 
    classification = "Normal";
  else if (imc >= 25 && bmi < 30) 
    classification = "Sobrepeso";
  else if (imc >= 30 && bmi < 35) 
    classification = "Obesidade";
  else 
    classification = "Obesidade Grave";
  

  document.getElementById('result').innerHTML = "Seu IMC é " + imc.toFixed(2) + " - Você está: " + classification;
}
