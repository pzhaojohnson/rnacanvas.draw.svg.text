import { CenterPoint } from './CenterPoint';

describe('`CenterPoint` class', () => {
  test('`x` property', () => {
    let text = { getBBox: () => ({ x: 57, width: 82 }) };

    let centerPoint = new CenterPoint(text);

    expect(centerPoint.x).toBeCloseTo(57 + (82 / 2));
  });

  test('`y` property', () => {
    let text = { getBBox: () => ({ y: 103, height: 54 }) };

    let centerPoint = new CenterPoint(text);

    expect(centerPoint.y).toBeCloseTo(103 + (54 / 2));
  });
});
