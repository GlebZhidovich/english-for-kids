import { header } from './header/header';
import createMainMenu from './main-menu';
import { content } from './content';
import { cardsData, menuData, setCardsData } from './cards-data';

if (localStorage.getItem('cardsData')) {
  setCardsData(JSON.parse(localStorage.getItem('cardsData')));
}

const { body } = document;
body.append(
  header,
  createMainMenu(content, menuData),
);

window.onbeforeunload = function () {
  localStorage.setItem('cardsData', JSON.stringify(cardsData));
  return 'Есть несохранённые изменения. Всё равно уходим?';
};
