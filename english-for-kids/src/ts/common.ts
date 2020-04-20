let curState: string;
let checkbox: HTMLInputElement;
let gameStatus = 'game-train';
let isGameStart = false;
let failure = 0;

function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min)) + min;
}

export function randomNumbers(size: number): string[] {
  const numberSet = new Set();
  while (numberSet.size !== size) {
    numberSet.add(`${getRandomInt(0, size)}`);
  }
  return <string[]>Array.from(numberSet);
}

export function createDomElem(tag: string, ...className: string[]): HTMLElement {
  const elem = document.createElement(tag);
  elem.classList.add(...className);
  return elem;
}

export function getGameStatus(): string {
  return gameStatus;
}

function changeStatus(curStatus: string, status: string): void {
  const changeElems = [
    document.querySelectorAll(`.${curStatus}`),
    document.querySelectorAll('.card-word__wrap'),
    document.querySelectorAll('.card-word__img'),
    document.querySelectorAll('.game__btn-wrap'),
  ];

  const actions = [
    (elem: HTMLElement): void => {
      elem.classList.remove(curStatus);
      elem.classList.add(status);
    },
    (elem: HTMLElement): void => {
      elem.classList.toggle('forward');
    },
    (elem: HTMLElement): void => {
      elem.classList.toggle('stretch');
    },
    (elem: HTMLElement): void => {
      elem.classList.toggle('show');
    },
  ];
  changeElems.forEach((elems: NodeListOf<HTMLElement>, index: number) => {
    elems.forEach((elem: HTMLElement) => {
      actions[index](elem);
    });
  });
}

export function setGameStatus(status: string): void {
  if (status === 'game-train') {
    changeStatus('game-play', 'game-train');
  } else {
    changeStatus('game-train', 'game-play');
  }
  gameStatus = status;
}

export function getCurState(): string {
  return curState;
}

export function setCurState(state: string): void {
  curState = state;
}

export function getFailure(): number {
  return failure;
}

export function setFailure(num: number): void {
  failure = num;
}

export function getGameStart(): boolean {
  return isGameStart;
}

export function setGameStart(is: boolean): void {
  isGameStart = is;
}

export function getCheckbox(): HTMLInputElement {
  return checkbox;
}

export function setCheckbox(elem: HTMLInputElement): void {
  checkbox = elem;
}
