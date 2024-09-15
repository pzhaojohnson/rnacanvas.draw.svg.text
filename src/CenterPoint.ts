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

  get y(): number {
    let bbox = this.#targetSVGTextElement.getBBox();

    return bbox.y + (bbox.height / 2);
  }
}
