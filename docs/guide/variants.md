---
title: Variants
section: Guide
cat: Concepts
catid: 3
level: 1
---

<b>Mojo introduces attribute variants.</b>

Attribute variants are used to apply styles to elements based on their state, screen size or theme color.

For instance, if you want to style the element on hover state, you can apply the variant to the element as an attribute and provide the utilities as a string of space-separated class names, for example:

<utldemo abovecode="true">
  <div class="bg-c-teal text-c-white pa-4 rounded-4" hover="bg-c-blue">
    This element has a blue background when hovered
  </div>
    
  </div>
</utldemo>
<showcode lang="html">

```
<div class="..." -- hover="bg-c-blue..."** >
  This element has a blue background when hovered
</div>
```

</showcode>

Mojo is different from other frameworks.

Instead of having to repeat the variant name and write classes like `hover:text-blue-500 hover:bg-red-500`, you can use the `hover="..."` attribute once and write the utilities as a string of class names separated by spaces, making your code more concise and easier to read.

This approach allows you to reduce the amount of code and make it more readable, understandable and maintainable.

## State Variants

State variants are used to control the styles of elements in different states, such as when an element is hovered over, focused on, or active.

### Pseudo Classes

Pseudo-class variants allow you to apply styles based on user interaction or state changes.

| Variant              | CSS Rule                 |
| -------------------- | ------------------------ |
| <b>hover</b>         | ${utl}:hover             |
| <b>focus</b>         | ${utl}:focus             |
| <b>active</b>        | ${utl}:active            |
| <b>first</b>         | ${utl}:first-child       |
| <b>last</b>          | ${utl}:last-child        |
| <b>even</b>          | ${utl}:nth-child(even)   |
| <b>odd</b>           | ${utl}:nth-child(odd)    |
| <b>focus-within</b>  | ${utl}:focus-within      |
| <b>visited</b>       | ${utl}:visited           |
| <b>not-first</b>     | ${utl}:not(:first-child) |
| <b>not-last</b>      | ${utl}:not(:first-child) |
| <b>disabled</b>      | ${utl}:disabled          |
| <b>checked</b>       | ${utl}:checked           |
| <b>not-checked</b>   | ${utl}:not(:checked)     |
| <b>valid</b>         | ${utl}:valid             |
| <b>invalid</b>       | ${utl}:invalid           |
| <b>optional</b>      | ${utl}:optional          |
| <b>read-only</b>     | ${utl}:read-only         |
| <b>focus-visible</b> | ${utl}:focus-visible     |
| <b>indeterminate</b> | ${utl}:indeterminate     |
| <b>required</b>      | ${utl}:required          |
| <b>empty</b>         | ${utl}:empty             |

### Pseudo Elements

Pseudo element variants refer to the styles that can be applied to the various parts of an element.

| Variant             | CSS Rule             |
| ------------------- | -------------------- |
| <b>before</b>       | ${utl}:before        |
| <b>after</b>        | ${utl}:after         |
| <b>selection</b>    | ${utl}::selection    |
| <b>first-letter</b> | ${utl}::first-letter |
| <b>first-line</b>   | ${utl}::first-line   |

### Parent Variants

Parent variants in Mojo allow you to style child elements based on the state of their parent element.

For example, the `parent-hover` variant will apply styles to the child elements when the parent is hovered over.

<utldemo abovecode="true">
  <div parent class="bg-c-primary[10] pa-4 rounded-4 w-full d-flex a-items-center j-content-center">
    <div class="bg-c-grayblue text-c-white px-4 py-2 rounded-3 text-a-center d-inline-flex" parent-hover="bg-c-blue">
        Child
    </div>
  </div>
</utldemo>
<showcode lang="html">

```
<div -- parent ** class="...">
  <div class="..." -- parent-hover="bg-c-blue"** >
      Child
  </div>
</div>
```

</showcode>

| Variant               | CSS Rule                |
| --------------------- | ----------------------- |
| <b>parent-hover</b>   | [parent]:hover ${utl}   |
| <b>parent-focus</b>   | [parent]:focus ${utl}   |
| <b>parent-active</b>  | [parent]:active ${utl}  |
| <b>parent-visited</b> | [parent]:visited ${utl} |

### Sibling Variants

Sibling variants in Mojo allow you to style an element based on the state of their sibling element.

For example, the `sibling-hover` variant will apply styles to the element when the sibling is hovered over.

<utldemo abovecode="true">
  <div sibling class="bg-c-grayblue text-c-white px-4 py-2 rounded-3 text-a-center d-inline-flex">
      Hover me
  </div>
  <div class="bg-c-grayblue text-c-white px-4 py-2 rounded-3 text-a-center d-none ml-1" sibling-hover="d-block">
      Hey!
  </div>
</utldemo>
<showcode lang="html">

```
<div -- sibling ** class="...">
    Hover me
</div>
<div class="d-none ..." -- sibling-hover="d-block"** >
    Hey!
</div>
```

</showcode>

| Variant                | CSS Rule                   |
| ---------------------- | -------------------------- |
| <b>sibling-hover</b>   | [sibling]:hover ~ ${utl}   |
| <b>sibling-focus</b>   | [sibling]:focus ~ ${utl}   |
| <b>sibling-checked</b> | [sibling]:checked ~ ${utl} |

## Responsive Variants

Like state variants, Mojo also offers responsive variants which allow developers to style elements based on the screen size.

The syntax for responsive variants in Mojo is similar to state variants and uses the breakpoint abbreviation as a prefix.

For instance, if you want to apply styles to devices with medium-sized screens and higher, you can use the `md="..."` variant.

<showcode lang="html">

```
<div class="grid" -- md="col-3"** >
  3 columns in medium-sized screens and above
</div>
```

</showcode>

To learn more about responsive variants and see a more comprehensive guide, check out the [Responsive Design](/docs/guide/responsive-design) documentation.

## Theme Variants

Mojo offers theme variants, allowing developers to style elements differently based on their desired theme.

By using variants like `dark=""`, elements can be quickly adapted to fit the look and feel of dark mode.

<showcode lang="html">

```
<div class="text-c-black" -- dark="text-c-white"** >
  This element has a white text color in dark mode.
</div>
```

</showcode>

Mojo offers limitless possibilities when it comes to themes, as it allows you to create and utilize as many color themes as desired. For a more in-depth understanding, check out the [Color Themes](/docs/guide/color-themes) documentation.

## RTL Support

Using `rtl` and `ltr` variants you can seamlessly adapt your designs to both right-to-left and left-to-right layouts.

<utldemo abovecode="true" _="(.demo) flex-col gap-0 (.demo p) !my-3">
  <div class="d-flex a-items-center" dir="rtl">
    <div class="w-4 h-4 rounded-full bg-c-primary"></div>
    <p ltr="ml-2" rtl="mr-2 font-tahoma">جادویی بودن یک انتخاب است!</p>
  </div>
  <div class="d-flex a-items-center" dir="ltr">
    <div class="w-4 h-4 rounded-full bg-c-primary"></div>
    <p ltr="ml-2" rtl="mr-2 font-tahoma">Being magical is a choice!</p>
  </div>
</utldemo>
<showcode lang="html">

```
  <div class="d-flex a-items-center">
    <div class="w-4 h-4 rounded-full bg-c-primary"></div>
    <p -- ltr="ml-2" ** -- rtl="mr-2 font-tahoma" **> ... </p>
  </div>
```

</showcode>

To ensure proper adaptation of multi-directional layouts, explicitly set the dir attribute in your markup to either `dir="ltr"` or `dir="rtl"`.
