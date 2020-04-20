import { createDomElem } from './common';
// eslint-disable-next-line no-unused-vars
import { menuData, cardsData, ICardsData } from './cards-data';

function createField(data: ICardsData): HTMLElement {
  const row = createDomElem('div', 'statistic__field__row');
  const word = createDomElem('span', 'statistic__field__row');
  const translation = createDomElem('span', 'statistic__field__row');
  word.append(data.word);
  translation.append(data.translation);
  let percent = 0;
  if (data.success > 0 && data.failure > 0) percent = data.success / data.failure;
  row.append(word, '-', translation, `клики: ${data.clicks}, угадали: ${data.success}, ошиблись: ${data.failure}, процент ошибок: ${percent}%`);
  return row;
}

export default function createStatisticsPage(): void {
  const cardsList = document.querySelector('.cards__list');
  const mainField = createDomElem('div', 'statistic__field');
  menuData.forEach((elem, i) => {
    const column = createDomElem('div', 'statistic__field__column');
    const title = createDomElem('h2', 'statistic__field__column-title');
    title.append(elem.title);
    column.append(title);
    cardsData[i].forEach((data: ICardsData) => {
      column.append(createField(data));
    });
    mainField.append(column);
  });
  cardsList.innerHTML = '';
  cardsList.append(mainField);
}
