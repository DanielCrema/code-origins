// const listaAnimais = document.querySelector('.animais-lista');

// const height = listaAnimais.scrollHeight;
// const animaisTop = listaAnimais.offsetTop;
// console.log(animaisTop);

// const primeiroh2 = document.querySelector('h2');
// const h2left = primeiroh2.offsetLeft;

// const h2rect = primeiroh2.getBoundingClientRect();

// console.log(h2rect.top);

// if(h2rect.top < 0) {
//   console.log('Passou do elemento')
// }

// console.log(
//   window.innerWidth,
//   window.innerHeight,
//   window.outerWidth,
//   window.outerHeight,
//   window.pageYOffset,
// );

// const small = window.matchMedia('(max-width: 600px)').matches;

// if(small) {
//   console.log('Usuário mobile');
// } else {
//   console.log('Usuário desktop');
// }


const section = document.querySelector('.animais');

const rect = section.getBoundingClientRect();
rect.height; // height do elemento
rect.width; // width do elemento
rect.top; // distância entre o topo do elemento e o scroll


console.log('Section', rect);
console.log('Height', rect.height);
console.log('Width', rect.width);
console.log('Top', rect.top);