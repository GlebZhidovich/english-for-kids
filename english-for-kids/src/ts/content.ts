import {
  createDomElem, getCurState, setCurState, getCheckbox,
} from './common';
import { createWordsSet } from './words-sets';
import { cardsData } from './cards-data';
import { log } from 'util';

// eslint-disable-next-line import/prefer-default-export
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

function playAudio(elem: HTMLElement): void {
  const wordAudio = elem.parentElement.querySelector('.card-word__audio');
  (wordAudio as HTMLAudioElement).play();
}

function selectElem(e: MouseEvent): void {
  if ((e.target as HTMLElement).dataset.ref) {
    toRef(<{ ref, id }>(e.target as HTMLElement).dataset);
  }
  if ((e.target as HTMLElement).dataset.word) {
    playAudio((e.target as HTMLElement));
  }
  if ((e.target as HTMLElement).dataset.rotate) {
    (e.target as HTMLElement).parentElement.classList.add('card-word_rotate');
  }
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
