document.addEventListener('DOMContentLoaded', function () {
  const menu = document.querySelector('.navigation');
  const burger = document.querySelector('.burger');
  const closeBtn = document.querySelector('.close');
  const body = document.querySelector('.body');
  const back = document.querySelector('.back');
  const header = document.querySelector('.header');
  const year = document.querySelector('.year');
  const sectionElements = document.querySelectorAll('.section')
  //todo актуальный год
  year.innerText = new Date().getFullYear();

  //todo анимация хедера
  window.onscroll = function () {
    if (window.scrollY > 100) {
      header.classList.add('shadow');
    } else {
      header.classList.remove('shadow');
    }
  };

  //todo открытие меню
  burger.addEventListener('click', () => {
    menu.classList.add('open');
    body.classList.add('hidden');
    back.classList.add('show');
  });

  //todo закрытие меню
  closeBtn.addEventListener('click', () => {
    menu.classList.remove('open');
    body.classList.remove('hidden');
    back.classList.remove('show');
  });

  menu.addEventListener('click', (e) => {
    if (menu.classList.contains('open')) {
      if (e.currentTarget.contains(e.target) && !e.target.classList.contains('item')) {
        return false
      }
      if (e.target.matches('span.item')) {
        menu.classList.remove('open');
        body.classList.remove('hidden');
        back.classList.remove('show');
        scrollToElem(e.target.dataset['scroll']);
      }
    } else {
      if (e.target.matches('span.item')) {
        scrollToElem(e.target.dataset['scroll']);
      }
    }
  });
  function scrollToElem(link) {
    const toScrollElem = Array.from(sectionElements).find(elem => elem.id === link);
    toScrollElem.scrollIntoView({ block: "center", behavior: "smooth" })
  }
});