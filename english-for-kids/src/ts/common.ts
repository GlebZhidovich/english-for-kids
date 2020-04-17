export function createDomElem(tag: string, ...className: string[]): HTMLElement {
  const elem = document.createElement(tag);
  elem.classList.add(className.join(' '));
  return elem;
}

export default {
  createDomElem,
};
