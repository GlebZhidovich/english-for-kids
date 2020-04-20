// eslint-disable-next-line no-unused-vars
import { ICardsData } from '../cards-data';
import { createDomElem, getGameStatus } from '../common';

export function createAudio(
  src: string, audioName: string, audioClass: string, sourceClass: string
): HTMLAudioElement {
  const [
    cardAudio,
    cardAudioSource,
  ] = [
    createDomElem('audio', audioClass),
    createDomElem('source', sourceClass),
  ];
  cardAudioSource.setAttribute('src', src);
  cardAudioSource.setAttribute('type', 'audio/mpeg');
  cardAudio.setAttribute('data-name', audioName);
  cardAudio.append(cardAudioSource, 'Your browser does not support the audio element.');
  return <HTMLAudioElement>cardAudio;
}

export function getClassCard(mainClass: string, extraClass: string): string[] {
  if (getGameStatus() === 'game-play') {
    return [mainClass, extraClass];
  }
  return [mainClass];
}

function createCardElem(word: string, className: string, src: string): HTMLElement {
  const [
    cardElem,
    cardImg,
    cardWord,
  ] = [
    createDomElem('div', className, 'game-train'),
    createDomElem('img', ...getClassCard('card-word__img', 'stretch')),
    createDomElem('h2', 'card-word__word'),
  ];
  cardImg.setAttribute('src', src);
  cardImg.setAttribute('data-name', word.toLocaleLowerCase());
  cardWord.append(word);
  cardElem.append(cardImg, cardWord);
  return cardElem;
}

export function createWordCard(el: ICardsData): HTMLElement {
  const {
    image, word, translation, audioSrc,
  } = el;
  const [
    card,
    cardWrap,
    cardElemFront,
    cardElemBack,
    elemSelect,
    cardBut,
    cardAudio,
  ] = [
    createDomElem('div', 'card-word', word.toLowerCase()),
    createDomElem('div', ...getClassCard('card-word__wrap', 'forward')),
    createCardElem(word, 'card-word_front', image),
    createCardElem(translation, 'card-word_back', image),
    createDomElem('div', 'card_select'),
    createDomElem('button', 'card-word__button'),
    createAudio(audioSrc, word, 'card-word__audio', 'card-word__source'),
  ];
  elemSelect.setAttribute('data-word', word.toLocaleLowerCase());
  cardBut.setAttribute('data-rotate', 'true');
  cardWrap.append(cardElemFront, cardElemBack);
  card.append(elemSelect, cardWrap, cardBut, cardAudio);
  return card;
}
