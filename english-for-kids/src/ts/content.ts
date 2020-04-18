import { createDomElem, getCurState, setCurState } from './common';
import { createWordsSet } from './words-sets';
import { cardsData } from './cards-data';

export const content = createDomElem('div', 'cards__list');

function selectElem(e: MouseEvent): void {
  if ((e.target as HTMLElement).dataset.ref) {
    const { ref, id } = (e.target as HTMLElement).dataset;
    if (ref !== getCurState()) {
      setCurState(ref);
      createWordsSet(content, cardsData, parseInt(id, 10));
    }
  }
}

content.addEventListener('click', selectElem);

export default {
  cards: content,
};
