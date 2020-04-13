import {menuData} from './cards-data';

export const cards = document.createElement('div');
cards.classList.add('cards__list');

menuData.forEach((elem) => {
  const card = document.createElement('div');
  card.classList.add('card');
  const cardImg = document.createElement('img');
  cardImg.classList.add('card__img');
  cardImg.src = elem.img;
  const cardHeader = document.createElement('header');
  cardHeader.classList.add('card__header');
  const cardTitle = document.createElement('h2');
  cardTitle.classList.add('card__title');
  cardTitle.append(elem.title);
  cardHeader.append(cardTitle);
  card.append(cardImg, cardHeader);
  cards.append(card);
});

