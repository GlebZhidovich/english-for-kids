let curState = 'main menu';
let checkbox: HTMLInputElement;

export function createDomElem(tag: string, ...className: string[]): HTMLElement {
  const elem = document.createElement(tag);
  elem.classList.add(...className);
  return elem;
}

export function getCurState(): string {
  return curState;
}

export function setCurState(state: string): void {
  curState = state;
}

export function getCheckbox(): HTMLInputElement {
  return checkbox;
}

export function setCheckbox(elem: HTMLInputElement): void {
  checkbox = elem;
}
