// Adicione a classe ativo a todos os itens do menu
const menu = document.querySelectorAll('.menu ul li');
menu.forEach((child) => {
  child.classList.add = "ativo"
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
for (let i = 0; i < menu.length; i++) {
  if (i > 0) {
    menu[i].classList.remove = "ativo";
  }
}

// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll('img');

imgs.forEach((img) => {
  if (img.hasAttribute('alt')) {
    console.log("A imagem possui o atributo alt");
  } else {
    console.log("A imagem não possui o atributo alt");
  }
})


// Modifique o href do link externo no menu

const link = document.querySelector('a[href^="http"]')

console.log('link', link);


link.setAttribute('href', 'https://www.google.com.br');