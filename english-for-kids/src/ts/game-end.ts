import { createDomElem, getFailure } from './common';
import createMainMenu from './main-menu';
import { createAudio } from './words-set/card';
import { menuData } from './cards-data';

function gameEnd(result: string) {
  const { body } = document;
  const cardList = document.querySelector('.cards__list');
  const field = createDomElem('div', `game-end_${result}`);
  const mistakes = createDomElem('p', `game-end_${result}-mistakes`);
  const img = createDomElem('img', `game-end_${result}-img`);
  const sucAudio = createAudio(`/assets/audio/${result}.mp3`, result, result, result);
  img.setAttribute('src', `/assets/img/${result}.jpg`);
  mistakes.append(`Количество ошибок: ${getFailure()}`);
  field.append(mistakes, img, sucAudio);
  body.append(field);
  sucAudio.play();
  createMainMenu(<HTMLElement>cardList, menuData);
  setTimeout(() => field.remove(), 3000);
}

export function gameEndSuccess() {
  gameEnd('success');
}

export function gameEndFailure() {
  gameEnd('failure');
}
