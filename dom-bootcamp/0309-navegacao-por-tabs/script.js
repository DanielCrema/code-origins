const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section');

console.log('tabMenu', tabMenu, 'tabContent', tabContent, 'tabMenu.length', tabMenu.length, 'tabContent.length', tabContent.length);

// if(tabMenu.length && tabContent.length) {
if(tabMenu.length > 0 && tabContent.length > 0) {

  tabContent[0].classList.add('ativo');

  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove('ativo');
    });
    tabContent[index].classList.add('ativo');
  }

  tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener('click', () => {
      activeTab(index);
    });
  });
}