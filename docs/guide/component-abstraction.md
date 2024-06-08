---
title: Component Abstraction
section: Guide
cat: Concepts
catid: 3
level: 2
---

When you are building your project, you might find yourself repeating the same pattern of utilities over and over.

This can make your code difficult to maintain and update. By creating custom components that use Mojo's utilities, you can keep your code DRY (Don't Repeat Yourself) and make it easier to maintain and update your project.

Take a button for example:

<showcode lang="html">

```
<button class="bg-c-primary text-c-white py-2 px-4 rounded-4" hover="bg-c-primary:+5">
    Button
</button>
```

</showcode>

Instead of repeating this over and over in your project, you can do one of the following approaches:

## Using a JavaScript framework

When using a JavaScript framework such as React, Vue, or Angular, it's recommended to create custom components that use Mojo's utilities.

This allows you to leverage the power of the framework to create dynamic and interactive user interfaces, while still taking advantage of Mojo's utilities to handle the styling of the components.

For example, if you're building a button component in Vue, you could create a custom component like this:

<showcode lang="html">

```
<template>
  <button class="bg-c-primary text-c-white py-2 px-4 rounded-4" hover="bg-c-primary:+5">
    <slot></slot>
  </button>
</template>

<script>
    export default {
        name: "custom-button"
    }
</script>
```

</showcode>

You can then use this component in your Vue template:

<showcode lang="html">

```
<custom-button>
  <!-- button content -->
</custom-button>
```

</showcode>

## Using Patterns

If you're not using a JS framework, you can use Mojo's Patterns.

Patterns provide a way to encapsulate a set of utilities into a class, which can then be reused throughout your project.

Take the button for example:

<showcode lang="js">

```
mojo({
 -- patterns ** : {
    '.btn': {
        idle : 'bg-c-primary text-c-white py-2 px-4 rounded-4',
        hover: 'bg-c-primary:+5'
    }
  },
})
```

</showcode>

And then use it in your markup:

<showcode lang="html">

```
<button class="btn">
  <!-- button content -->
</button>
```

</showcode>

For a deeper understanding of how patterns work, take a look at the information on [Patterns](/docs/config/patterns).
