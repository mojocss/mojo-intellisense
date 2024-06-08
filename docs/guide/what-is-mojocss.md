---
title: What is Mojo CSS?
section: Guide
cat: Introduction
catid: 1
level: 1
---

Mojo CSS is an atomic CSS Framework that generates CSS based on your HTML in <b>real-time</b> and with near <b>zero-runtime</b>.

It offers the fastest way to create custom, beautiful and responsive layouts without having to write a single line of CSS. A full suite of utilities that helps you get the most performance out of your web pages.

## On-Demand Styling

While other frameworks & libraries generate your CSS as a static file, Mojo handles everything in realtime. It scans your HTML, finds used utilities, and only generates the required CSS for those utilities.

Mojo constantly scans the webpage, and generates the required CSS each time it detects a change in the DOM.

This allows for savings in file size, lightning fast rendering and the ability to style your HTML live since changes are picked up immediately by the browser and there is no need to reload the page.

## File Size

Unlike other frameworks, Mojo offers a unique approach to styling that sets it apart from traditional CSS frameworks.

While a normal project typically requires at least 100kb of CSS to handle the styling, Mojo requires only a single ~50kb (15kb gzipped) JS file to handle the styling of any size project.

This approach results in significantly reduced page load times and improved performance. Instead of loading a large CSS file and applying styles to all elements on the page, Mojo uses a single JavaScript file to style elements in real-time, meaning that only the styles that are necessary for the elements currently visible on the page are loaded.

This approach eliminates the need to download hundreds of kilobytes of code every time the page loads, resulting in faster page load times and improved performance for the website.

## Atomic CSS, Elevated

Mojo follows the Atomic CSS approach, which means that it focuses on providing a set of low-level CSS utilities that can be used to build custom user interfaces.

It does not provide an opinionated UI kit, but rather gives developers the flexibility to create their own UI designs using the provided utilities.

Here is an example of a qoute card using Mojo's utilities:

<utldemo abovecode="true">
    <div class="bg-c-body:+3 pa-5 border-l-3 border-c-primary rounded-right-md" dim="bg-c-body:+2" blackout="bg-c-body:+4">
        <div class="text-c-stronginvert">
            “Any sufficiently advanced technology is
            indistinguishable from magic”
        </div>
         <div class="mt-4">
            Arthur C. Clarke
         </div>
    </div>
</utldemo>
<showcode lang="html">

```
<div class="bg-c-body:+2 pa-5 borde-l-3 border-c-primary rounded-right-md">
    <quote class="text-c-stronginvert">
        “Any sufficiently advanced technology is
        indistinguishable from magic”
    </quote>
    <div class="mt-4">
        Arthur C. Clarke
    </div>
</div>
```

</showcode>

Is Mojo just another typical Atomic CSS framework? Not really! Mojo stands out by introducing Attribute Variants, making Atomic CSS more readable and easier to maintain. Let's compare Mojo with traditional Atomic CSS frameworks:

<showcode lang="html">

```
<!-- Typical Atomic CSS frameworks -->
<div class="bg-red-400 px-5 -- hover:bg-red-600 hover:px-8 **">
    ...
</div>

<!-- Mojo CSS -->
<div class="bg-c-red px-5" -- hover="bg-c-red:+2 px-8" **>
    ...
</div>
```

</showcode>

The thought of using atomic design may still seem unappealing with the fear of having to repeat code multiple times.

However, the solution is to utilize the concept of composing utilities. For a deeper understanding of this approach, take a look at the information on [Component Abstraction](/docs/guide/component-abstraction).

<guide-next></guide-next>
