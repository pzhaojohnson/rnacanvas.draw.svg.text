/**
 * @jest-environment jsdom
 */

import { CenterPoint } from './CenterPoint';

describe('`CenterPoint` class', () => {
  test('`x` getter', () => {
    let text = document.createElementNS('http://www.w3.org/2000/svg', 'text');

    text.getBBox = () => ({ x: 57, width: 82 });

    let centerPoint = new CenterPoint(text);

    expect(centerPoint.x).toBeCloseTo(57 + (82 / 2));
  });

  describe('`x` setter', () => {
    test('an empty `x` attribute values list', () => {
      let text = document.createElementNS('http://www.w3.org/2000/svg', 'text');

      text.getBBox = () => ({ x: -2, width: 19 });

      text.x = { baseVal: [] };

      let centerPoint = new CenterPoint(text);

      centerPoint.x = 251;

      expect(text.getAttribute('x')).toBe(`${251 - ((-2) + (19 / 2))}`);
    });

    test('an `x` attribute values list that contains just one value', () => {
      let text = document.createElementNS('http://www.w3.org/2000/svg', 'text');

      text.getBBox = () => ({ x: 28, width: 44 });

      text.x = { baseVal: [{ value: 30.5 }]};

      let centerPoint = new CenterPoint(text);

      centerPoint.x = -80;

      expect(text.getAttribute('x')).toBe(`${30.5 + ((-80) - (28 + (44 / 2)))}`);
    });

    test('an `x` attribute values list containing multiple values', () => {
      let text = document.createElementNS('http://www.w3.org/2000/svg', 'text');

      text.getBBox = () => ({ x: -104, width: 51 });

      text.x = { baseVal: [{ value: -102 }, { value: -72 }, { value: -64 }] };

      let centerPoint = new CenterPoint(text);

      centerPoint.x = 300;

      expect(text.getAttribute('x')).toBe(`${[
        (-102) + (300 - ((-104) + (51 / 2))),
        (-72) + (300 - ((-104) + (51 / 2))),
        (-64) + (300 - ((-104) + (51 / 2))),
      ].join(', ')}`);
    });
  });

  test('`y` getter', () => {
    let text = document.createElementNS('http://www.w3.org/2000/svg', 'text');

    text.getBBox = () => ({ y: 103, height: 54 });

    let centerPoint = new CenterPoint(text);

    expect(centerPoint.y).toBeCloseTo(103 + (54 / 2));
  });

  describe('`y` setter', () => {
    test('an empty `y` attribute values list', () => {
      let text = document.createElementNS('http://www.w3.org/2000/svg', 'text');

      text.getBBox = () => ({ y: -1.5, height: 24 });

      text.y = { baseVal: [] };

      let centerPoint = new CenterPoint(text);

      centerPoint.y = -30;

      expect(text.getAttribute('y')).toBe(`${(-30) - ((-1.5) + (24 / 2))}`);
    });

    test('a `y` attribute values list that contains just one value', () => {
      let text = document.createElementNS('http://www.w3.org/2000/svg', 'text');

      text.getBBox = () => ({ y: 180, height: 12 });

      text.y = { baseVal: [{ value: 181.2 }]};

      let centerPoint = new CenterPoint(text);

      centerPoint.y = 20;

      expect(text.getAttribute('y')).toBe(`${20 + (181.2 - (180 + (12 / 2)))}`);
    });

    test('a `y` attribute values list containing multiple values', () => {
      let text = document.createElementNS('http://www.w3.org/2000/svg', 'text');

      text.getBBox = () => ({ y: 25, height: 120 });

      text.y = { baseVal: [{ value: 26 }, { value: 50 }, { value: 82 }] };

      let centerPoint = new CenterPoint(text);

      centerPoint.y = -280;

      expect(text.getAttribute('y')).toBe(`${[
        26 + ((-280) - (25 + (120 / 2))),
        50 + ((-280) - (25 + (120 / 2))),
        82 + ((-280) - (25 + (120 / 2))),
      ].join(', ')}`);
    });
  });
});
