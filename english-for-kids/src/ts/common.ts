let curState = 'main menu';

export function createDomElem(tag: string, ...className: string[]): HTMLElement {
  const elem = document.createElement(tag);
  elem.classList.add(...className);
  return elem;
}

export function getCurState(): string {
  return curState;
}

export function setCurState (state: string): void {
  curState = state;
}

export default {
  createDomElem,
  getCurState,
  setCurState,
};
