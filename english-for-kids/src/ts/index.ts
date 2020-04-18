import { header } from './header/header';
import { createMainMenu } from './main-menu';
import { createWordsSet } from './words-sets';
import { content } from './content';
import { cardsData, menuData } from './cards-data';


const { body } = document;
body.append(
  header,
  createMainMenu(content, menuData),
  createWordsSet(content, cardsData, 0),
);
