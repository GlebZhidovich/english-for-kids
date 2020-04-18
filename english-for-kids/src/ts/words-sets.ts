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

// eslint-disable-next-line import/prefer-default-export
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
      cardWrap,
      cardElemFront,
      cardElemBack,
      elemSelect,
      cardImg,
      cardImgBack,
      cardWord,
      cardTranslate,
      cardBut,
      cardAudio,
    ] = [
      createDomElem('div', 'card-word'),
      createDomElem('div', 'card-word__wrap'),
      createDomElem('div', 'card-word_front', 'train'),
      createDomElem('div', 'card-word_back'),
      createDomElem('div', 'card_select'),
      createDomElem('img', 'card-word__img'),
      createDomElem('img', 'card-word__img'),
      createDomElem('h2', 'card-word__word'),
      createDomElem('h2', 'card-word__translate'),
      createDomElem('button', 'card-word__button'),
      createAudio(el.audioSrc),
    ];
    cardImg.setAttribute('src', el.image);
    cardImgBack.setAttribute('src', el.image);
    elemSelect.setAttribute('data-word', el.word.toLocaleLowerCase());
    cardBut.setAttribute('data-rotate', 'true');
    cardWord.append(el.word);
    cardTranslate.append(el.translation);
    cardElemFront.append(cardImg, cardWord);
    cardElemBack.append(cardImgBack, cardTranslate);
    cardWrap.append(cardElemFront, cardElemBack);
    card.append(elemSelect, cardWrap, cardBut, cardAudio);
    newElem.append(card);
  });
  return newElem;
}
