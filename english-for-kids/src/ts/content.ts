import {
  createDomElem, getCurState, setCurState, getCheckbox, getGameStart, getGameStatus,
} from './common';
import createWordsSet from './words-set/words-sets';
import { cardsData, setCardsData } from './cards-data';
import { startGame, repeatWord, checkAnswer } from './game';

export const content = createDomElem('div', 'cards__list');

function toRef(obj: {ref: string, id: string}): void {
  const { ref, id } = obj;
  const checkbox = getCheckbox();
  if (checkbox.checked) checkbox.checked = false;
  if (ref !== getCurState()) {
    setCurState(ref);
    createWordsSet(content, cardsData, parseInt(id, 10));
  }
}

export function playAudio(elem: HTMLElement): void {
  const wordAudio = elem.parentElement.querySelector('.card-word__audio');
  (wordAudio as HTMLAudioElement).play();
}

function selectElem(e: MouseEvent): void {
  const actions = {
    ref() {
      toRef(<{ ref, id }>(e.target as HTMLElement).dataset);
    },
    word() {
      const newData = cardsData.map((elem) => elem.map((el) => {
        const newEl = el;
        if (newEl.word === (e.target as HTMLElement).dataset.word) {
          newEl.clicks += 1;
          return newEl;
        }
        return el;
      }));
      setCardsData(newData);
      playAudio((e.target as HTMLElement));
    },
    rotate() {
      (e.target as HTMLElement).parentElement.classList.add('card-word_rotate');
    },
    game() {
      if (getGameStatus() === 'game-play') startGame();
    },
    name() {
      if (getGameStart()) {
        checkAnswer((e.target as HTMLElement));
      }
    },
    repeat() {
      if (getGameStart()) {
        repeatWord();
      }
    },
  };
  const actionsArr = Object.keys((e.target as HTMLElement).dataset);
  actionsArr.forEach((elem: string) => {
    if (actions[elem]) actions[elem]();
  });
}

function deleteClass(e) {
  const elem = (e.target as HTMLElement);
  if (elem.dataset.word) {
    if (elem.parentElement.classList.contains('card-word_rotate')) {
      elem.parentElement.classList.remove('card-word_rotate');
    }
  }
}

content.addEventListener('click', selectElem);
content.addEventListener('mouseout', deleteClass);
