import {
  randomNumbers, setGameStart, getFailure, setFailure,
} from './common';
import { createAnswerElem } from './words-set/answer-field';
import { gameEndSuccess, gameEndFailure } from './game-end';
import { cardsData, setCardsData } from './cards-data';

const FIRST_ELEM = 0;
let audioArr: NodeListOf<HTMLAudioElement>;
let randomArrNum: string[];

const answerArr: string[] = [];

export function startGame(): void {
  setGameStart(true);
  const [
    startBtn,
    repeatBtn,
  ] = [
    document.querySelector('.game__btn'),
    document.querySelector('.game__btn-repeat'),
  ];
  audioArr = document.querySelectorAll('.card-word__audio');
  randomArrNum = randomNumbers(audioArr.length);
  startBtn.classList.add('hide');
  repeatBtn.classList.add('show-inline');
  audioArr[randomArrNum[FIRST_ELEM]].play();
}

export function repeatWord(): void {
  if (randomArrNum.length <= 0) {
    return;
  }
  audioArr[randomArrNum[FIRST_ELEM]].play();
}

function selectCard(className) {
  const card = document.querySelector(`.${className}`);
  if (card.classList.contains('selected')) {
    return;
  }
  card.classList.add('selected');
}

function addResultToField(result: boolean) {
  const answer = createAnswerElem(result);
  const field = document.querySelector('.answer-field');
  field.prepend(answer);
}

function gameEnd() {
  if (getFailure() === 0) gameEndSuccess();
  if (getFailure() > 0) gameEndFailure();
  setFailure(0);
}

function changeStatistics(curWord: string, result: string): void {
  const newData = cardsData.map((elem) => elem.map((el) => {
    const newEl = el;
    if (newEl.word === curWord) {
      newEl[result] += 1;
      return newEl;
    }
    return el;
  }));
  setCardsData(newData);
}

export function checkAnswer(elem: HTMLElement): void {
  if (randomArrNum.length <= 0) {
    return;
  }
  const [correct, error] = [
    document.querySelector('.game__audio_correct'),
    document.querySelector('.game__audio_error'),
  ];
  const { name: selectName } = elem.dataset;
  const { name: curName } = audioArr[randomArrNum[FIRST_ELEM]].dataset;
  const index = answerArr.indexOf(selectName);
  if (selectName === curName) {
    changeStatistics(curName, 'success');
    addResultToField(true);
    selectCard(curName);
    (correct as HTMLAudioElement).play();
    answerArr.push(curName);
    randomArrNum.shift();
    if (randomArrNum.length <= 0) {
      gameEnd();
      return;
    }
    setTimeout(() => repeatWord(), 1000);
  } else if (selectName !== curName && index === -1) {
    changeStatistics(curName, 'failure');
    (error as HTMLAudioElement).play();
    addResultToField(false);
    setFailure(getFailure() + 1);
  }
}
