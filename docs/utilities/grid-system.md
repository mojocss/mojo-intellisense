---
title: Grid System
section: Utilities
cat: Layout
catid: 3
level: 2
---

Mojo's grid system leverages CSS Grid to effortlessly create fully responsive layouts. Here's an example and a detailed explanation of how the grid system works.

## Basics

1. To get started with the grid system, simply slap the 'grid' utility onto the element you want to turn into a grid container. This will automatically make its direct children into grid items:

<utldemo abovecode="true">
    <div class="w-full bg-c-blue[30] grid rounded-md" _="(> div) d-flex a-items-center j-content-center w-full h-16 bg-c-blue text-c-white text-lg rounded-sm">
        <div>Grid Item</div>
        <div>Grid Item</div>
    </div>
</utldemo>
<showcode lang="html">

```
<div class="--grid** ...">
    <div> Grid Item </div>
    <div> Grid Item </div>
</div>
```

</showcode>

2. Now, let's decide how many columns your grid should have. Using the `cols-auto`, every direct child of the grid container will be treated as an equal-width column.

<utldemo abovecode="true">
    <div class="w-full bg-c-primary[30] grid cols-auto gap-5 rounded-md" _="(> div) d-flex a-items-center j-content-center w-full h-16 bg-c-primary text-c-white text-lg rounded-sm">
        <div>Grid Item</div>
        <div>Grid Item</div>
    </div>
</utldemo>
<showcode lang="html">

```
<div class="grid --cols-auto** ...">
    <div> Grid Item </div>
    <div> Grid Item </div>
</div>
```

</showcode>

## Columns

To specify the number of columns, simply use `cols-[number]`. For instance, to create a three-column grid, use cols-3.

<utldemo abovecode="true">
    <div class="w-full bg-c-orchid[30] grid cols-3 gap-5 rounded-md" _="(> div) d-flex a-items-center j-content-center w-full h-16 bg-c-orchid text-c-white rounded-sm" i-sm:children-div="text-sm" lg:children-div="text-lg">
        <div>Grid Item</div>
        <div>Grid Item</div>
        <div>Grid Item</div>
        <div>Grid Item</div>
        <div>Grid Item</div>
        <div>Grid Item</div>
    </div>
</utldemo>
<showcode lang="html">

```
<div class="grid --cols-3** ...">
    <div> Grid Item </div>
    <div> Grid Item </div>
    <div> Grid Item </div>
    <div> Grid Item </div>
    <div> Grid Item </div>
    <div> Grid Item </div>
</div>
```

</showcode>

## Column Span

If you don't want your columns to be all the same width, first establish the overall grid size by specifying the number of columns on the container. Then, use `col-[number]` on the grid items to define how many columns each item should span.

<utldemo abovecode="true" _="(.demo) flex-col gap-5">
    <div class="w-full text-a-center text-c-blue:+16 bg-c-blue[30] py-2 rounded-full" m-default="text-c-blue:-7">← cols-8 →</div>
    <div class="rounded-md w-full bg-c-blue[30] grid cols-8 gap-5" _="(> div) d-flex a-items-center j-content-center w-full h-16 bg-c-blue text-c-white text-lg rounded-sm">
        <div class="col-5">col-5</div>
        <div class="col-3">col-3</div>
    </div>
</utldemo>
<showcode lang="html">

```
<div class="grid --cols-8** ...">

    <div class="--col-5**"> col-5 </div>
    <div class="--col-3**"> col-3 </div>
</div>
```

</showcode>

## Two-dimensional Grids

Using CSS Grid, creating two-dimensional grids is a breeze. To get started, simply specify the number of columns and rows you want your grid container to have:

<showcode lang="html">

```
<div class="grid --cols-5** --rows-4** ...">
    ...
</div>
```

</showcode>

Once you've got the grid structure set up, it's time to place your grid items. To do this, simply tell each item where it should start and end by specifying how many columns and rows it should span.

To specify a grid item's position in the columns, use `c-start-[number]` and `c-end-[number]`. For rows, use `r-start-[number]` and `r-end-[number]`.

<utldemo abovecode="true" _="(.demo) flex-col gap-4 pa-12">
    <div class="w-full text-sm d-flex j-content-between">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
    </div>
    <div class="w-full d-flex gap-0">
        <div class="d-flex h-full flex-col j-content-between flex-grow-0 -ml-6 mr-4 text-sm">
            <span class="-mt-2">1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span class="-mb-2">5</span>
        </div>
        <div class="w-full bg-c-blue[30] grid cols-5 rows-4 gap-0 overflow-hidden rounded-md flex-grow-1" _="(> div) d-flex a-items-center j-content-center w-full min-h-20 bg-c-blue text-c-white text-lg">
            <div class="c-start-1 c-end-3 r-start-1 r-end-3">Blue</div>
            <div class="!bg-c-orchid c-start-3 c-end-6 r-start-1 r-end-3">Purple</div>
            <div class="!bg-c-green:-3 c-start-1 c-end-4 r-start-3 r-end-5">Green</div>
            <div class="!bg-c-orange c-start-4 c-end-6 r-start-3 r-end-5">Orange</div>
        </div>
    </div>

</utldemo>
<showcode lang="html">

```
<div class="grid cols-5 rows-4 ...">
    <div class="--c-start-1 c-end-3 r-start-1 r-end-3**"> Blue </div>
    <div class="--c-start-3 c-end-6 r-start-1 r-end-3**"> Purple </div>
    <div class="--c-start-1 c-end-4 r-start-3 r-end-5**"> Green </div>
    <div class="--c-start-4 c-end-6 r-start-3 r-end-5**"> Orange </div>
</div>
```

</showcode>

<alert-box type="info">
  <span>
    With 5 columns, your grid item's coordinates are split into 6 lines. To make an item span across all columns, use <span class="text-c-blue font-code">"c-start-1"</span> and <span class="text-c-blue font-code">"c-end-6"</span>.<br><br>
    The same concept applies to rows, where you'll use <span class="text-c-blue font-code">"r-start-1"</span> and <span class="text-c-blue font-code">"r-end-6"</span> to span an item across all rows.
  </span>
</alert-box>

## Responsive Grids

To make your grids fully responsive, simply use the grid utilities in different breakpoint variants, just like any other utility.

For instance, the example below demonstrates a grid that transforms into a single column on mobile phones, two columns on tablets, and four columns on desktops and larger screens.

<utldemo abovecode="true">
    <div class="rounded-md w-full bg-c-primary[30] grid gap-5" md="cols-2" lg="cols-4" _="(> div) d-flex a-items-center j-content-center w-full h-16 bg-c-primary text-c-white text-lg rounded-sm">
        <div> Grid Item </div>
        <div> Grid Item </div>
        <div> Grid Item </div>
        <div> Grid Item </div>
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

To learn more about responsive variants and see a more comprehensive guide, check out the [Responsive Design](/docs/guide/responsive-design) documentation.
