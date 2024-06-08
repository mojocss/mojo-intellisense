---
title: Color Themes
section: Guide
cat: Concepts
catid: 3
level: 5
---

Move beyond the limitations of single-theme frameworks. Mojo empowers you to define limitless color themes, effortlessly switching between them to express your brand's full spectrum.

## Dark Mode and More

Dark mode is just the beginning. Mojo empowers you to effortlessly expand your theme repertoire without limitation & project overload.

### How it works

Simplifying color theme development, we utilize a three-color approach:

<b class="text-c-stronginvert text-110">Body</b> : The overall background color of the theme. <br>
<b class="text-c-stronginvert text-110">Invert</b> : The color with the highest contrast relative to the body, primarily used for text elements. <br>
<b class="text-c-stronginvert text-110">Primary</b> : The brand color or the theme's main color, often used for headers, buttons, and other prominent elements.

<themes-demo></themes-demo>

<div class="text-sm -mt-3 mb-12"><span class="bg-c-body:+20 px-3 py-0.5 rounded-full" i-md="d-block py-4 px-5" dim="bg-c-body:-2" blackout="bg-c-body:+3">Learn how to add and customize theme colors in <nuxt-link to="/docs/config/themes" class="z-1">config's themes page</nuxt-link>.</span></div>

By employing this approach, the need for repetitive code in theme-specific colors would be substantially reduced:

<showcode lang="html">

```
<!-- Repetitive way -->
<div class="bg-white text-black dark:bg-black dark:text-white">
    ...
</div>

<!-- Mojo way -->
<div class="--bg-c-body text-c-invert**">
    ...
</div>
```

</showcode>

While Mojo handles most theme styling, occasional manual color adjustments can be achieved through [Theme Variants](/docs/guide/variants#theme-variants).

## Switching themes

To switch the theme, just put the theme's name in the `m-theme` attribute on either the body or html element.

<showcode lang="html">

```
<!-- Default theme -->
<html>
    <body>
        <div class="text-c-black" dark="text-c-white">
            ...
        </div>
    </body>
</html>

<!-- Dark theme enabled -->
<html -- m-theme="dark" **>
    <body>
        <div class="text-c-black" dark="text-c-white">
            ...
        </div>
    </body>
</html>
```

</showcode>
