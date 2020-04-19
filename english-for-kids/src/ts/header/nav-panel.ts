import { createDomElem } from '../common';
// eslint-disable-next-line no-unused-vars
import { IMenuData } from '../cards-data';

const MENU_INDEX = 0;

function addNavItem(elem, str: string, index: number): void {
  const [navItem, navLink] = [
    createDomElem('li', 'nav__item'),
    createDomElem('a', 'nav__link'),
  ];
  navLink.setAttribute('data-ref', str.toLowerCase());
  navLink.setAttribute('data-id', `${index}`);
  navLink.append(str);
  navItem.append(navLink);
  elem.append(navItem);
}

function addNavPanel(data): HTMLElement {
  const [
    nav,
    navList,
    checkbox,
    line,
    checkboxLabel,
  ] = [
    createDomElem('nav', 'nav'),
    createDomElem('ul', 'nav__list', 'game-train'),
    createDomElem('input', 'menu__checkbox'),
    createDomElem('span', 'menu__checkbox-label-line'),
    createDomElem('label', 'menu__checkbox-label'),
  ];
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('id', 'menu');
  checkboxLabel.setAttribute('for', 'menu');
  checkboxLabel.append(line);
  addNavItem(navList, 'Main menu', MENU_INDEX);
  data.forEach((elem: IMenuData, i) => {
    addNavItem(navList, elem.title, i);
  });
  nav.append(checkbox, checkboxLabel, navList);
  return nav;
}

export default addNavPanel;
