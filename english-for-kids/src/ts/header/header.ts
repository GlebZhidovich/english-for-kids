// eslint-disable-next-line no-unused-vars
import { menuData, cardsData } from '../cards-data';
import {
  createDomElem,
  getCurState,
  setCurState,
  setCheckbox,
  setGameStatus,
  setGameStart, setFailure,
} from '../common';
import addNavPanel from './nav-panel';
import addToggleBut from './toggle-button';
import createMainMenu from '../main-menu';
import createWordsSet from '../words-set/words-sets';
import { content } from '../content';


export const [
  header,
  navWrap,
] = [
  createDomElem('header', 'header', 'game-train'),
  createDomElem('div', 'nav__wrap'),
];

navWrap.append(addNavPanel(menuData), addToggleBut());
header.append(navWrap);

export const checkbox = header.querySelector('.menu__checkbox');

setCheckbox((checkbox as HTMLInputElement));

function toRef(e: MouseEvent): void {
  if ((e.target as HTMLElement).dataset.ref) {
    setGameStart(false);
    setFailure(0);
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

function cleanStatistic(): void {
  setGameStart(false);
  setFailure(0);
  const [
    startBtn,
    repeatBtn,
    selectedElements,
    field,
  ] = [
    document.querySelector('.game__btn'),
    document.querySelector('.game__btn-repeat'),
    document.querySelectorAll('.selected'),
    document.querySelector('.answer-field'),
  ];
  if (repeatBtn.classList.contains('show-inline')) {
    startBtn.classList.remove('hide');
    repeatBtn.classList.remove('show-inline');
  }
  field.innerHTML = '';
  selectedElements.forEach((elem) => elem.classList.remove('selected'));
}

function changeGameStatus(e) {
  if ((e.target as HTMLElement).dataset.toggle) {
    if (e.target.checked) {
      setGameStatus('game-play');
      return;
    }
    setGameStatus('game-train');
    cleanStatistic();
  }
}

header.addEventListener('click', toRef);
header.addEventListener('change', changeGameStatus);
