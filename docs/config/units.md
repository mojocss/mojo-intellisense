---
title: Units
section: Config
cat: Base
catid: 2
level: 6
---

Mojo provides a set of default units under `base.units`, defining values for various measurements.

These units are utilized throughout the framework to maintain consistency and ease of customization. Below is a detailed overview of the default values for Mojo units.

| Property   | Description                                           | Default Value |
| ---------- | ----------------------------------------------------- | ------------- |
| fontSize   | Base unit for font size in Mojo.                      | 0.01rem       |
| scale      | Base unit for the scale in Mojo.                      | 0.01          |
| sizing     | Base unit for sizing in Mojo. Example: 0.25rem = 1rem | 0.25rem       |
| transition | Base unit for transition duration in Mojo.            | 1ms           |
| rounded    | Base unit for rounded corners in Mojo.                | 0.125rem      |
| lighten    | Base unit for the lighten effect in Mojo.             | 2.0           |
| darken     | Base unit for the darken effect in Mojo.              | 1.2           |

For example, by modifying the sizing property to `0.1rem` in this configuration object, it directly impacts sizing utilities like the `pa-10` class.

<showcode lang="js">

```
  mojo({
    base: {
      units: {
        sizing: '0.1rem'
      },
    },
  });
```

</showcode>

This adjustment results in the `pa-10` utility class being equivalent to `padding: 1rem` instead of `padding: 2.5rem`.
