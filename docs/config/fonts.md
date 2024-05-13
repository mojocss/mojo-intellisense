---
title: Fonts
section: Config
cat: Base
catid: 2
level: 3
---

Through `base.fonts` object, Mojo grants developers granular control over their project's typography. You can tweak existing fonts or make new groups.

| Property       | Description                                                  | Type                  |
| -------------- | ------------------------------------------------------------ | --------------------- |
| default        | The default font group with various font choices.            | object, array, string |
| [Custom Group] | Users can create custom font groups with their chosen fonts. | object, array, string |

## Define an Object

You can create custom font groups within as objects, with each group containing font names and optional font URLs. this enables precise control over your project's typography.

| Key         | Description                                   | Type   |
| ----------- | --------------------------------------------- | ------ |
| [Font Name] | Name of the font to be used within the group. | string |
| [Font URL]  | (Optional) URL or source for the font face.   | string |

## Define an Array

Alternatively, you can define fonts within an array, such as ["'Poppins'", "sans-serif"]. This approach simplifies the process of specifying primary and fallback fonts in a structured manner.

## Define a String

You can define fonts as a single string, as shown in the example: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace'. This method is ideal for specifying a straightforward list of fonts and fallbacks.

## Examples

<showcode lang="js">

```
  mojo({
    base: {
      fonts: {
        default: ["'Poppins'", "sans-serif"],
        alt: {
          Poppins:
            "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap",
          "sans-serif": "",
        },
        code: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
      },
    },
  });
```

</showcode>
