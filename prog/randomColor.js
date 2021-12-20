/*
HSL color values are supported in IE9+, Firefox, Chrome, Safari, and in Opera 10+.
HSL stands for hue, saturation, and lightness.

1) Hue is a degree on the color wheel from 0 to 360. 0 is red, 120 is green, 240 is blue.
2) Saturation is a percentage value; 0% means a shade of gray and 100% is the full color.
3) Lightness is also a percentage; 0% is black, 100% is white.
*/

const color = (() => {
    const value = (min, max) => {
        const d = max - min + 1;
        const r = Math.random() * d;
        return Math.floor(r) + min;
    };
    return () => {
        const h = value(0, 360);
        const s = value(42, 98);
        const l = value(40, 90);
        return `hsl(${h},${s}%,${l}%)`;
    };
})();
const callColor = color();
console.log(callColor); // hsl(133, 77%, 52%)