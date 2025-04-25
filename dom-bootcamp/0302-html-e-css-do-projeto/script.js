// Retorne no console todas as imagens do site
const images = document.querySelectorAll('img');
console.log("images = ", images);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagesStartWithImage2 = Array.from(images).filter((image) => image.src.includes('imagem'))
console.log('imagesStartWithImage2 = ', imagesStartWithImage2);

const imageStartWithImage = document.querySelectorAll('[src^="img/imagem"]')
console.log('imageStartWithImage = ', imageStartWithImage);

// Selecione todos os links internos (onde o href começa com #)
const hrefHash = document.querySelectorAll('a[href^="#"]');
console.log("hrefHash = ", hrefHash)

// Selecione o primeiro h2 dentro de .animais-descricao
const animaisDescription = document.querySelector('.animais-descricao');
const firstH2 = animaisDescription.querySelector('h2');
console.log("first h2 = ", firstH2);

// Selecione o último p do site
const allP = document.querySelectorAll('p');
const lastP = allP[allP.length - 1];
console.log("lastP = ", lastP);