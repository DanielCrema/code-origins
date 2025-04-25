// Retorne o url da página atual utilizando o objeto window
const url = window.location.href // === location.href
console.log('url', url)

// Seleciona o primeiro elemento da página que
// possua a classe ativo
const ativo = document.getElementsByClassName('ativo');
console.log("ativo = ", ativo)


// Retorne a linguagem do navegador
const language = navigator.language || navigator.userLanguage; // === window.navigator.language || window.navigator.userLanguage
console.log(`Language = ${language}`);



// Retorne a largura da janela 
const width = window.innerWidth;
console.log(`Width = ${width}`);
