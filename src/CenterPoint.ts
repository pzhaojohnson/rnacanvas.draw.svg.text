/**
 * Represents the center point of a target SVG text element.
 */
export class CenterPoint {
  #targetSVGTextElement: SVGTextElement;

  #eventListeners: EventListeners = {
    'move': [],
  };

  #movementObserver: MutationObserver;

  constructor(targetSVGTextElement: SVGTextElement) {
    this.#targetSVGTextElement = targetSVGTextElement;

    this.#movementObserver = new MutationObserver(() => this.#callEventListeners('move'));

    // lots of things could make the center point move
    this.#movementObserver.observe(targetSVGTextElement, { attributes: true, childList: true, characterData: true, subtree: true });
  }

  get x(): number {
    let bbox = this.#targetSVGTextElement.getBBox();

    return bbox.x + (bbox.width / 2);
  }

  set x(x) {
    // the current X coordinate
    let currentX = this.x;

    // the `x` attribute values list
    let attributeValues = [...this.#targetSVGTextElement.x.baseVal].map(svgLength => svgLength.value);

    // an empty list is equal to a value of zero
    attributeValues.length == 0 ? attributeValues.push(0) : {};

    attributeValues = attributeValues.map(v => v + (x - currentX));

    this.#targetSVGTextElement.setAttribute('x', attributeValues.join(', '));
  }

  get y(): number {
    let bbox = this.#targetSVGTextElement.getBBox();

    return bbox.y + (bbox.height / 2);
  }

  set y(y) {
    // the current Y coordinate
    let currentY = this.y;

    // the `y` attribute values list
    let attributeValues = [...this.#targetSVGTextElement.y.baseVal].map(svgLength => svgLength.value);

    // an empty list is equal to a value of zero
    attributeValues.length == 0 ? attributeValues.push(0) : {};

    attributeValues = attributeValues.map(v => v + (y - currentY));

    this.#targetSVGTextElement.setAttribute('y', attributeValues.join(', '));
  }

  addEventListener(name: 'move', listener: EventListener): void {
    this.#eventListeners[name].push(listener);
  }

  removeEventListener(name: 'move', listener: EventListener): void {
    this.#eventListeners[name] = this.#eventListeners[name].filter(li => li !== listener);
  }

  #callEventListeners(name: 'move'): void {
    this.#eventListeners[name].forEach(listener => listener());
  }
}

type EventListener = () => void;

type EventListeners = {
  'move': EventListener[];
};
