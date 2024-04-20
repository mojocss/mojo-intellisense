const toHsl = input => {
    try {
        let match = input.match(/^hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)$/);
        if (match) return [parseInt(match[1]), parseFloat(match[2]), parseFloat(match[3])];

        const hexToRgb = hex => {
            hex = hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (m, r, g, b) => r + r + g + g + b + b);
            return hex.match(/\w{2}/g).map(val => parseInt(val, 16));
        };
        const rgbToHSL = ([r, g, b]) => {
            if (isNaN(r) || isNaN(g) || isNaN(b))
                return input;

            r /= 255; g /= 255; b /= 255;
            const max = Math.max(r, g, b), min = Math.min(r, g, b);
            let h, s, l = (max + min) / 2;
            if (max === min) h = s = 0;
            else {
                const d = max - min;
                s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
                switch (max) {
                    case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                    case g: h = (b - r) / d + 2; break;
                    case b: h = (r - g) / d + 4; break;
                }
                h *= 60;
            }
            return [Math.round(h), Math.round(s * 100), Math.round(l * 100)];
        };

        const rgb = input.startsWith('rgb') ? input.match(/[\d.]+/g).map(Number) : hexToRgb(input);
        return rgbToHSL(rgb);
    } catch (e) {
        return input;
    }
};


const toHex = (h, s, l) => {
    let r, g, b;
    s /= 100;
    l /= 100;

    if (s === 0) {
        r = g = b = l;
    } else {
        const hue2rgb = (p, q, t) => {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        };
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = hue2rgb(p, q, h / 360 + 1 / 3);
        g = hue2rgb(p, q, h / 360);
        b = hue2rgb(p, q, h / 360 - 1 / 3);
    }

    const toHexComponent = (c) => {
        const hex = Math.round(c * 255).toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    };

    const hex = `#${toHexComponent(r)}${toHexComponent(g)}${toHexComponent(b)}`;
    return hex.toUpperCase();
};


module.exports = {
    toHsl,
    toHex
}