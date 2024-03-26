const pergunta = "Qual país você mora?"

// Verificando se é uma pergunta
if(pergunta.endsWith("?")){

 // Separando as palavras por espaço
  const palavras = pergunta.split(" ");

  // Obtendo a localização do dispositivo
  const localizacao = ("Brasil");

  // Se a localização estiver disponível
  if(localizacao){

    // Respondendo à pergunta com base na localização
console.log(`Você mora em ${localizacao}.`);

  } else {

    console.log(`não sei onde voce mora`);
  }
}

// Embelezar resposta