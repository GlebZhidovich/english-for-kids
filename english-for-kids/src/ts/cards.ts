import { menuData } from './cards-data';
import { createDomElem } from './common';

export const cards = createDomElem('div', 'cards__list');

menuData.forEach((elem) => {
  const card = createDomElem('div', 'card');
  const cardImg = createDomElem('img', 'card__img');
  cardImg.setAttribute('src', elem.img);
  const cardHeader = createDomElem('header', 'card__header');
  const cardTitle = createDomElem('h2', 'card__title');
  cardTitle.append(elem.title);
  cardHeader.append(cardTitle);
  card.append(cardImg, cardHeader);
  cards.append(card);
});

export default {
  cards,
};
