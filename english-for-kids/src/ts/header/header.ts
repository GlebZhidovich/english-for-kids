// eslint-disable-next-line no-unused-vars
import { menuData, cardsData } from '../cards-data';
import { createDomElem, getCurState, setCurState } from '../common';
import addNavPanel from './nav-panel';
import addToggleBut from './toggle-button';
import { createMainMenu } from '../main-menu';
import { createWordsSet } from '../words-sets';
import { content } from '../content';


const [
  header,
  navWrap,
] = [
  createDomElem('header', 'header', 'train'),
  createDomElem('div', 'nav__wrap'),
];

navWrap.append(addNavPanel(menuData), addToggleBut());
header.append(navWrap);

const checkbox = header.querySelector('.menu__checkbox');

function toRef(e: MouseEvent): void {
  if ((e.target as HTMLElement).dataset.ref) {
    const { ref, id } = (e.target as HTMLElement).dataset;
    if (ref !== getCurState()) {
      (checkbox as HTMLInputElement).checked = false;
      setCurState(ref);
      if (ref === 'main menu') {
        createMainMenu(content, menuData);
        return;
      }
      createWordsSet(content, cardsData, parseInt(id, 10));
    }
  }
}

header.addEventListener('click', toRef);

export default header;
