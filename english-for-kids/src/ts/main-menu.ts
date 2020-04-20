// eslint-disable-next-line no-unused-vars
import { IMenuData } from './cards-data';
import { createDomElem, getGameStatus, setCurState } from './common';

export default function createMainMenu(domElem: HTMLElement, data: IMenuData[]): HTMLElement {
  const newElem = domElem;
  newElem.innerHTML = '';
  data.forEach((elem: IMenuData, i) => {
    const [
      card,
      elemSelect,
      cardImg,
      cardHeader,
      cardTitle,
    ] = [
      createDomElem('div', 'card', getGameStatus()),
      createDomElem('div', 'card_select'),
      createDomElem('img', 'card__img'),
      createDomElem('header', 'card__header'),
      createDomElem('h2', 'card__title'),
    ];
    cardImg.setAttribute('src', elem.img);
    elemSelect.setAttribute('data-ref', elem.title.toLocaleLowerCase());
    elemSelect.setAttribute('data-id', `${i}`);
    cardTitle.append(elem.title);
    cardHeader.append(cardTitle);
    card.append(elemSelect, cardImg, cardHeader);
    newElem.append(card);
  });
  setCurState('main menu');
  return newElem;
}
