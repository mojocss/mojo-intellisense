---
title: Breakpoints
section: Config
cat: Base
catid: 2
level: 4
---

Developers can leverage `base.breakpoints` in Mojo to create responsive web apps that adjust effortlessly across various screen sizes and devices.

Mojo's default breakpoints:

<div class="overflow-auto">

| Breakpoint | Description                                    | Type   | Default Font Size (1rem) | Max Width |
| ---------- | ---------------------------------------------- | ------ | ------------------------ | --------- |
| default    | Default configuration for base properties.     | object | 14px                     |           |
| sm         | Small screens (min-width: 576px).              | object | 14px                     | 576px     |
| md         | Medium screens (min-width: 768px).             | object | 14px                     | 768px     |
| lg         | Large screens (min-width: 992px).              | object | 14px                     | 992px     |
| xl         | Extra-large screens (min-width: 1200px).       | object | 16px                     | 1200px    |
| xxl        | Extra-extra-large screens (min-width: 1600px). | object | 20px                     | 1500px    |

</div>

Each defined breakpoint within this configuration provides a comprehensive set of properties, allowing developers to tailor their web applications for specific screen sizes and devices. You can use these properties in each breakpoint.

| Property   | Description                                    | Type   |
| ---------- | ---------------------------------------------- | ------ |
| max        | Maximum breakpoint size (optional).            | string |
| min        | Minimum breakpoint size.                       | string |
| fontSize   | Font size of the <html\> element (size = 1rem) | string |
| container  | Container properties at the breakpoint.        | object |
| - maxWidth | Maximum container width.                       | string |
| - padding  | Container padding.                             | string |

## Examples

Adds a new breakpoint for the tablets:

<showcode lang="js">

```
  mojo({
    base: {
      breakpoints: {
        tablet: {
          min: "576px",
          max: "992px",
          fontSize: "15px",
          container: {
            maxWidth: "700px"
            padding: "0 1.25rem"
          }
        }
      },
    },
  });
```

</showcode>
