// eslint-disable-next-line no-unused-vars
import { ICardsData } from '../cards-data';
import { createWordCard } from './card';
import createGameBtn from './game-btn';
import createAnswerField from './answer-field';

export default function createWordsSet(
  elem: HTMLElement, data: ICardsData[][], num: number,
): HTMLElement {
  const [
    newElem,
    newData,
  ] = [
    elem,
    data[num],
  ];
  newElem.innerHTML = '';
  newElem.append(createAnswerField());
  newData.forEach((el: ICardsData) => {
    newElem.append(createWordCard(el));
  });
  newElem.append(createGameBtn());
  return newElem;
}
