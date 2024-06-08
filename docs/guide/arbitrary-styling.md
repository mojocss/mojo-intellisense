---
title: Arbitrary Styling
section: Guide
cat: Concepts
catid: 3
level: 6
---

Sometimes you may need to go beyond the defaults and apply arbitrary styles and one-off utilities.

## Arbitrary values

For one-off utility values that don't belong in your project configuration, Mojo allows you to implement them dynamically.

For every utility, you can use parentheses to generate an arbitrary value on the fly. for example if you want a font-size of 40px:

<showcode lang="html">

```
<div class="--text-(40px)**">
    ...
</div>

```

</showcode>

Which will give you this CSS:

<showcode lang="css">

```
.text-\(40px\) {
    font-size: 40px
}

```

</showcode>

<s-box color="blue">
  <span>
    In cases where values include spaces, use underscores as separators.<br> For instance: <span class="hl">"bg-p-(35px_10px)"</span>.
  </span>
</s-box>

<s-box color="green">
  <span>
    CSS variables are also supported, for example: <span class="hl">"text-(var(--name))"</span>.
  </span>
</s-box>

## Arbitrary CSS

For those times when you need absolute control over your designs, Mojo allows you to directly use raw CSS properties and selectors within your HTML.

### Properties

Use CSS properties directly within your HTML, just as you would with any other utility.

<showcode lang="html">

```
<div class="p-relative --scroll-margin:0px** ...">
    ...
</div>

```

</showcode>

In addition, these properties can be used in variants such as hover, md, and ...

<showcode lang="html">

```
<div class="..." -- hover="padding:12px_6px ..." ** >
    ...
</div>

```

</showcode>

<s-box color="blue">
  <span>
    In cases where property values include spaces, use underscores as separators.<br> For instance: <span class="hl">"border:1px_solid_red"</span>.
  </span>
</s-box>

<s-box color="green">
  <span>
    CSS variables are also supported, for example: <span class="hl">"border:var(--name)"</span>.
  </span>
</s-box>

<s-box color="stronginvert">
  <span>
    No semicolon required after each css property. Separate them with spaces.
  </span>
</s-box>

### Selectors

When HTML limitations restrict complex CSS selectors, Mojo's arbitrary selectors step in, enabling you to harness the power of raw CSS within your markup while leveraging Mojo's utilities.

Simply use the `_=""` attribute and specify the desired selectors within parentheses:

<showcode lang="html">

```
<ul -- _="(.active) bg-c-red text-c-white" ** >
    <li> ... </li>
    <li class="active"> ... </li>
    <li> ... </li>
</ul>

```

</showcode>

<s-box color="primary">
  <span>
    Arbitrary selectors only affect the element they're applied to and its child elements. They cannot target elements outside of the parent element's scope.
  </span>
</s-box>

<br>

Using `this` as selector will taregt the element itself:

<showcode lang="html">

```
<ul -- _="(this) bg-c-red" ** >
   This element has a red background
</ul>

```

</showcode>

Using `&` at the start, you can target the element's pseudo elements and ...

<showcode lang="html">

```
<ul -- _="(&:hover) bg-c-blue" ** >
   This element has a blue background when hovered
</ul>

```

</showcode>

You can also target multiple selectors:

<showcode lang="html">

```
<ul -- _="(li) ... (li:hover) ... (li:hover > a) ..." ** >
    <li> ... </li>
    <li> ... </li>
    <li> ... </li>
</ul>

```

</showcode>

Media queries are also supported using `<` directive at the start:

<showcode lang="html">

```
<ul -- _="(<@media(orientation:landscape)) bg-c-blue" ** >
  <li> ... </li>
  <li> ... </li>
  <li> ... </li>
</ul>

```

</showcode>

With the same logic, child elements can be styled based on distant parents even outside the direct parent's scope using curly braces `{}`:

<showcode lang="html">

```
<section class="hero">
  <ul -- _="(<.hero:hover {li.active}) text-c-white" ** >
    <li> ... </li>
    <li class="active"> ... </li>
    <li> ... </li>
  </ul>
</section>

```

</showcode>

Using `@` you can use Mojo's variants alongside the selectors aswell:

<showcode lang="html">

```
<!-- Single Variants -->
<ul -- _="(@dark li.active) bg-c-red" ** >
    <li> ... </li>
    <li class="active"> ... </li>
    <li> ... </li>
</ul>

<!-- Stacking Variants -->
<ul -- _="(@last:hover li) bg-c-red" ** >
    <li> ... </li>
    <li> ... </li>
    <li> ... </li>
</ul>

```

</showcode>
