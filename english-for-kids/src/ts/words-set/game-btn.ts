import { createDomElem } from '../common';
import { getClassCard, createAudio } from './card';

export default function createGameBtn(): HTMLElement {
  const [
    gameBtn,
    gameBtnRepeat,
    gameBtnWrap,
    gameAudioError,
    gameAudioSuccess,
  ] = [
    createDomElem('button', 'game__btn'),
    createDomElem('button', 'game__btn-repeat'),
    createDomElem('div', ...getClassCard('game__btn-wrap', 'show')),
    createAudio('/assets/audio/error.mp3', 'error', 'game__audio_error', 'game__source'),
    createAudio('/assets/audio/correct.mp3', 'correct', 'game__audio_correct', 'game__source'),
  ];
  gameBtn.setAttribute('data-game', 'true');
  gameBtnRepeat.setAttribute('data-repeat', 'true');
  gameBtn.append('Start game');
  gameBtnWrap.append(gameBtn, gameBtnRepeat, gameAudioError, gameAudioSuccess);
  return gameBtnWrap;
}
