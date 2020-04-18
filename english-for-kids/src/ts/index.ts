import header from './header/header';
import { createMainMenu } from './main-menu';
import { content } from './content';
import { menuData } from './cards-data';


const { body } = document;
body.append(
  header,
  createMainMenu(content, menuData),
);
