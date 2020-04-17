import { menuData } from './cards-data';
import { createDomElem } from './common';

const header = createDomElem('header', 'header');

const nav = createDomElem('nav', 'nav');
const navWrap = createDomElem('div', 'nav__wrap');
const navList = createDomElem('ul', 'nav__list');

function addNavItem(str: string): void {
  const navItem = createDomElem('li', 'nav__item');
  const navLink = createDomElem('a', 'nav__link');
  navLink.append(str);
  navItem.append(navLink);
  navList.append(navItem);
}

const checkbox = createDomElem('input', 'menu__checkbox');
checkbox.setAttribute('type', 'checkbox');
checkbox.setAttribute('id', 'menu');

const checkboxLabel = createDomElem('label', 'menu__checkbox-label');
checkboxLabel.setAttribute('for', 'menu');

const line = createDomElem('span', 'menu__checkbox-label-line');
checkboxLabel.append(line);
addNavItem('Main menu');

function addToggleBut(): HTMLElement {
  const toggleWrap = createDomElem('label', 'toggle__wrap');
  const toggle = createDomElem('input', 'toggle');
  const toggleButton = createDomElem('div', 'toggle__button');
  const togButFront = createDomElem('div', 'toggle__button_front');
  const togButBack = createDomElem('div', 'toggle__button_back');
  togButFront.append('Train');
  togButBack.append('Play');
  toggle.setAttribute('type', 'checkbox');
  toggleButton.append(togButFront, togButBack);
  toggleWrap.append(toggle, toggleButton);
  return toggleWrap;
}

menuData.forEach((elem) => {
  addNavItem(elem.title);
});
nav.append(checkbox, checkboxLabel, navList);
navWrap.append(nav, addToggleBut());
header.append(navWrap);

export default header;
