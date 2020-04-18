// eslint-disable-next-line no-unused-vars
import { ICardsData } from './cards-data';
import { createDomElem } from './common';

function createAudio(src): HTMLElement {
  const [
    cardAudio,
    cardAudioSource,
  ] = [
    createDomElem('audio', 'card-word__audio'),
    createDomElem('source', 'card-word__source'),
  ];
  cardAudioSource.setAttribute('src', src);
  cardAudioSource.setAttribute('type', 'audio/mpeg');
  cardAudio.append(cardAudioSource, 'Your browser does not support the audio element.');
  return cardAudio;
}

export function createWordsSet(elem: HTMLElement, data: ICardsData[][], num: number): HTMLElement {
  const [
    newElem,
    newData,
  ] = [
    elem,
    data[num],
  ];
  newElem.innerHTML = '';

  newData.forEach((el: ICardsData) => {
    const [
      card,
      elemSelect,
      cardImg,
      cardHeader,
      cardWord,
      cardTranslate,
      cardAudio,
    ] = [
      createDomElem('div', 'card-word', 'train'),
      createDomElem('div', 'card_select'),
      createDomElem('img', 'card-word__img'),
      createDomElem('header', 'card-word__header'),
      createDomElem('h2', 'card-word__word'),
      createDomElem('h2', 'card-word__translate'),
      createAudio(el.audioSrc),
    ];
    cardImg.setAttribute('src', el.image);
    // elemSelect.setAttribute('data-ref', el.word.toLocaleLowerCase());
    cardWord.append(el.word);
    cardTranslate.append(el.translation);
    cardHeader.append(cardWord, cardTranslate);
    card.append(elemSelect, cardImg, cardHeader, cardAudio);
    newElem.append(card);
  });
  return newElem;
}

export default {
  createWordsSet,
};
