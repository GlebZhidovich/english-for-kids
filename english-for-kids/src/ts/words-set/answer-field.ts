import { createDomElem } from '../common';

export default function createAnswerField(): HTMLElement {
  return createDomElem('div', 'answer-field');
}

export function createAnswerElem(answer: boolean): HTMLElement {
  return createDomElem('div', `answer-${answer}`);
}
