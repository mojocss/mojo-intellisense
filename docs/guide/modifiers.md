---
title: Modifiers & Pro Tips
section: Guide
cat: Getting Started
catid: 2
level: 3
---

Maximize Mojo's functionality with modifiers & expert tips.

## Important Modifier

prefixing any utlity with an exclamation mark `!` will make make it `!important`.

<showcode lang="html">

```
<p class="--!p-relative** p-absolute">
    The position will remain relative even though absolute comes later.
</p>
```

</showcode>

Utilize this approach When you need to override conflicting styles to enhance specificity.

## Built-ins

built-in modifiers and solutions for unique cases.

### m- prefix

Mojo's default method of using attribute [variants](/docs/guide/variants) may not work in certain environments due to reserved words. To resolve this, prepend the attribute with an `m-` prefix.

<showcode lang="html">

```
<!-- May not work in Vue JS -->
<input type="text" --focus**="outline-c-red ...">

<!-- Works! -->
<input type="text" --m-focus**="outline-c-red ...">
```

</showcode>

### m-load

To ensure your page appears styled out upon loading, simply add the `m-load` attribute to the root element and set its display to 'none':

<showcode lang="html">

```
<body --m-load** -- style="display:none" **>
    ...
</body>
```

</showcode>

<s-box color="blue">
  <span>
    Mojo will remove them from your markup upon full page load.
  </span>
</s-box>

### Ignore Observe

Mojo recompiles the page everytime an element is changed in the DOM.

To prevent it from analyzing elements that frequently change, such as those with dynamic positions, you can apply the `m-ignore` attribute to them.

This reduces the computational load on Mojo and improves performance.

<showcode lang="html">

```
<!-- Ignores the changes made to the element itself -->
<div --m-ignore**>
    ...
</div>

<!-- Ignores the changes made to the element and its children -->
<div -- m-ignore="children" **>
    ...
</div>
```

</showcode>

If you are using `m-ignore="children"` but still want some children to be observed use `m-observe` on the children.

<showcode lang="html">

```
<div m-ignore="children">
    <!-- other elements that are IGNORED -->
    <div>
        ...
    </div>

    <!-- this element WILL be observed -->
    <div --m-observe**>
        ...
    </div>

    <!-- this element and its children WILL be observed -->
    <div -- m-observe="children" **>
        ...
    </div>
</div>
```

</showcode>

## Variables

When employing Arbitrary CSS, you may require access to configuration values like sizing and colors. By utilizing the `$` symbol, you can directly access the configuration object within your markup.

Here's a few use cases:

<showcode lang="html">

```
<!-- Accessing default theme's primary color
     Note: $c.primary is a shorthand for $base.themes.default.primary
     To access a specific theme's color, you must explicitly specify its name,
     such as $c.dark.body. Otherwise, the default theme is assumed.
 -->
<div class="border:1px_solid_--$c.primary**">
    ...
</div>


<!-- Accessing sizing unit
     Note: $u.sizing is a shorthand for $base.units.sizing
 -->
<div class="width:calc(100%-(10*--$u.sizing**))">
    ...
</div>

```

</showcode>
