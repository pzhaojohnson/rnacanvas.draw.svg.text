# Installation

With `npm`:

```
npm install @rnacanvas/draw.svg.text
```

# Usage

All exports of this package can be accessed as named imports.

```javascript
// an example import
import { CenterPoint } from '@rnacanvas/draw.svg.text';
```

## `CenterPoint`

The `CenterPoint` class represents the center point of a target SVG text element.

Note that the target SVG text element must be present within the document body
for center point calculations to be performed correctly
(since they are done based on the bounding box of the target SVG text element).

```javascript
var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');

text.textContent = 'A';
text.setAttribute('font-size', '12');
text.setAttribute('x', '100');
text.setAttribute('y', '150');

var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svg.append(text);

// the target SVG text element must be present within the document body
// for center point calculations to be performed correctly
document.body.append(svg);

var centerPoint = new CenterPoint(text);

centerPoint.x; // 104.33333349227905
centerPoint.y; // 147

// can be set
centerPoint.x = 350;
centerPoint.y = 500;
```

### Listening for move events

Instances of the `CenterPoint` class can be listened to
for when the center point of the target SVG text element moves.

Lots of things can cause the center point of an SVG text element to move
(e.g., changes in `x` and `y` attributes, text content, font size, child `tspan` elements).

Bound listeners might sometimes get called
even when the center point of the target SVG text element
did not actually move.

```javascript
text; // the target SVG text element

var centerPoint = new CenterPoint(text);

var listener = () => {};
centerPoint.addEventListener('move', listener);

text.setAttribute('x', '1012');
listener; // called once

text.textContent += 'asdf';
listener; // called a second time

centerPoint.removeEventListener('move', listener);

centerPoint.x -= 500;
listener; // not called a third time
```
