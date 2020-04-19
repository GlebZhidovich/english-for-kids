import { createDomElem, getGameStatus } from '../common';

function addToggleBut(): HTMLElement {
  const [
    toggleWrap,
    toggle,
    toggleButton,
    togButFront,
    togButBack,
  ] = [
    createDomElem('label', 'toggle__wrap'),
    createDomElem('input', 'toggle'),
    createDomElem('div', 'toggle__button'),
    createDomElem('div', 'toggle__button_front', getGameStatus()),
    createDomElem('div', 'toggle__button_back', 'game-play'),
  ];
  togButFront.append('Train');
  togButBack.append('Play');
  toggle.setAttribute('type', 'checkbox');
  toggle.setAttribute('data-toggle', 'checkbox');
  toggleButton.append(togButFront, togButBack);
  toggleWrap.append(toggle, toggleButton);
  return toggleWrap;
}

export default addToggleBut;
