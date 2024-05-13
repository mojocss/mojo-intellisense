---
title: Responsive Design
section: Guide
cat: Concepts
catid: 3
level: 3
---

Mojo's responsive design works by using breakpoint variants, which tell the website how to arrange its content based on the screen size.

Defining the breakpoints as [variants](/docs/guide/variants#responsive-variants) allows for easy adaptation of element styling to different screen sizes.

<alert-box type="info">
    You can effortlessly make any utility responsive by utilizing responsive variants. This includes utilities for transition, cursor, and animation.
</alert-box>

By default, Mojo utilizes five breakpoints inspired by the screen sizes of popular devices:

| breakpoint | CSS Rule                                  |
| ---------- | ----------------------------------------- |
| <b>sm</b>  | @media (min-width: <b>576px</b>) { ... }  |
| <b>md</b>  | @media (min-width: <b>768px</b>) { ... }  |
| <b>lg</b>  | @media (min-width: <b>992px</b>) { ... }  |
| <b>xl</b>  | @media (min-width: <b>1200px</b>) { ... } |
| <b>xxl</b> | @media (min-width: <b>1500px</b>) { ... } |

<div class="text-sm mt-3 mb-12"><span class="bg-c-body:+20 px-3 py-0.5 rounded-full" i-md="d-block py-4 px-5" dim="bg-c-body:-2" blackout="bg-c-body:+3">Learn how to modify and customize the breakpoints in <nuxt-link to="/docs/config/breakpoints" class="z-1">config's breakpoints page</nuxt-link>.</span></div>

As you can see, Mojo's default approach is mobile-first, which means you're starting with the smallest screens in mind. This responsive design system helps you avoid CSS overrides.

The example below demonstrates a grid that is single column on mobile phones, two columns on tablets, and four columns on desktops and larger screens.

<utldemo abovecode="true">
    <div class="rounded-md w-full bg-c-blue[30] grid gap-5" md="cols-2" lg="cols-4" _="(> div) d-flex a-items-center j-content-center w-full h-16 bg-c-blue text-c-white text-lg rounded-sm">
        <div> Item </div>
        <div> Item </div>
        <div> Item </div>
        <div> Item </div>
    </div>
</utldemo>
<showcode lang="html">

```
<div class="grid" -- md="cols-2" ** -- lg="cols-4" **>
    <div> Grid Item </div>
    <div> Grid Item </div>
    <div> Grid Item </div>
    <div> Grid Item </div>
</div>
```

</showcode>

## Reverse Breakpoints

Sometimes it's more convinent to go the opposite direction of the confgured breakpoints (e.g. desktop-first), just slap an `i-` before the breakpoint name, and voilà, it works in reverse.

For instance, if you want something to take effect only on tablets and smaller screens, use `i-md="..."`:

<showcode lang="html">

```
<div -- i-md="d-none" ** ">
    This element is hidden on tablets and smaller screens.
</div>
```

</showcode>
