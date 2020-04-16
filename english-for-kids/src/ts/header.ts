import {menuData} from './cards-data';

export const header = document.createElement('header');
header.classList.add('header');
const nav = document.createElement('nav');
nav.classList.add('nav');
const navWrap = document.createElement('div');
navWrap.classList.add('nav__wrap');
const navList = document.createElement('ul');
navList.classList.add('nav__list');

function addNavItem(str: string): void {
  const navItem = document.createElement('li');
  navItem.classList.add('nav__item');
  const navLink = document.createElement('a');
  navLink.classList.add('nav__link');
  navLink.append(str);
  navItem.append(navLink);
  navList.append(navItem);
}

const checkbox = document.createElement('input');
checkbox.setAttribute('type', 'checkbox');
checkbox.setAttribute('id', 'menu');
checkbox.classList.add('menu__checkbox');

const checkboxLabel = document.createElement('label');
checkboxLabel.setAttribute('for', 'menu');
checkboxLabel.classList.add('menu__checkbox-label');

const line = document.createElement('span');
line.classList.add('menu__checkbox-label-line');
checkboxLabel.append(line);
addNavItem('Main menu');

const toggleWrap = document.createElement('label');
const toggle = document.createElement('input');
const toggleCircle = document.createElement('span');
toggle.setAttribute('type', 'checkbox');
toggleWrap.classList.add('toggle__wrap');
toggle.classList.add('toggle');
toggleCircle.classList.add('toggle__slider_round');
toggleWrap.append(toggle, toggleCircle);

menuData.forEach((elem) => {
  addNavItem(elem.title);
});
nav.append(checkbox, checkboxLabel, navList);
navWrap.append(nav, toggleWrap);
header.append(navWrap);

