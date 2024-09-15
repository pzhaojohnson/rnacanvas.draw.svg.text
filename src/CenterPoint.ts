/**
 * Represents the center point of a target SVG text element.
 */
export class CenterPoint {
  #targetSVGTextElement: SVGTextElement;

  constructor(targetSVGTextElement: SVGTextElement) {
    this.#targetSVGTextElement = targetSVGTextElement;
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
}
