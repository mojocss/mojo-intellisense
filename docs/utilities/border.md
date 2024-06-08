---
title: Border
section: Utilities
cat: Appearance
catid: 1
level: 3
---

Utilities for border and outline properties.

## Border Radius

Using `rounded-[*]`, you can control the border radius of an element.

<utldemo utl="rounded" :items="['xs','sm', 'md','lg', 'xl','xxl','full']" active="md">
    <div class="target-demo bg-c-primary[30] w-25 h-25">
    </div>
</utldemo>

### Sides

Using `rounded-[side]-[*]`, you can round only one side of an element.

<utldemo utl="rounded" :items="['t-md','r-md', 'b-md','l-md']" active="t-md">
    <div class="target-demo bg-c-blue[30] w-25 h-25">
    </div>
</utldemo>

### Corners

Using `rounded-[side]-[corner]-[*]`, you can round only one corner of an element.

<utldemo utl="rounded" :items="['t-l-md','t-r-md', 'b-r-md','b-l-md']" active="t-l-md">
    <div class="target-demo bg-c-green:-2[30] w-25 h-25">
    </div>
</utldemo>

<alert-box type="info">
  <span>
    Other than pre-defined values like xl,md,... you can use numerical values which will be converted into a multiple of 0.125rem (can be changed in config → units) for consistent and precise rounding. <br> <br> For example, <span class="text-c-blue font-code">"rounded-5"</span> will give you a border radius of 0.625rem.
  </span>
</alert-box>

<s-box color="green:-2">
  <span>
    You can use Arbitrary values like <span class="hl">"rounded-(34px)"</span> as well. <br>
    <span class="text-sm text-w-400">Learn more about <nuxt-link to="/docs/guide/arbitrary-styling">Arbitrary Styling</nuxt-link></span>
  </span>
</s-box>

## Border Width

Using `border-[*]`, you can control the width of an element's borders.

<utldemo utl="border" :items="['1','2', '4','8']" active="1">
    <div class="target-demo bg-c-primary[30] w-25 h-25 border-c-primary">
    </div>
</utldemo>

### Sides

Using `border-[side]-[*]`, you can set the border width for one side of an element.

<utldemo utl="border" :items="['t-4','r-4','b-4','l-4']" active="t-4">
    <div class="target-demo bg-c-blue[30] w-25 h-25 border-c-blue">
    </div>
</utldemo>

<s-box color="green:-2">
  <span>
    You can use Arbitrary values like <span class="hl">"border-(0.25em)"</span> or <span class="hl">"border-top-(0.625rem)"</span> as well. <br>
    <span class="text-sm text-w-400">Learn more about <nuxt-link to="/docs/guide/arbitrary-styling">Arbitrary Styling</nuxt-link></span>
  </span>
</s-box>

## Border Style

Using `border-s-[*]`, you can control the style of an element's borders.

<utldemo utl="border-s" :items="['solid','dashed', 'dotted','double','hidden']" active="solid">
    <div class="target-demo border-5 bg-c-primary[30] w-25 h-25 border-c-primary">
    </div>
</utldemo>

### Sides

Using `border-[side]-s-[*]`, you can set the border style for one side of an element.

<utldemo utl="border" :items="['t-s-dashed','r-s-dashed','b-s-dashed','l-s-dashed']" active="t-s-dashed">
    <div class="target-demo border-4 bg-c-blue[30] w-25 h-25 border-c-blue">
    </div>
</utldemo>

## Outline Width

Using `outline-[*]`, you can control the width of an element's outline.

<utldemo utl="outline" :items="['1','2', '4','8']" active="1">
    <div class="target-demo bg-c-primary[30] w-25 h-25 outline-c-primary">
    </div>
</utldemo>

## Outline Style

Using `outline-s-[*]`, you can control the style of an element's borders.

<utldemo utl="outline-s" :items="['solid','dashed', 'dotted','double','groove','ridge','inset','outset']" active="solid">
    <div class="target-demo outline-5 bg-c-primary[30] w-25 h-25 outline-c-primary">
    </div>
</utldemo>

## Outline Offset

Using `outline-o-[*]`, you can control the offset of an element's outline.

<utldemo utl="outline-o" :items="['1','2', '4','8']" active="1">
    <div class="target-demo bg-c-primary[30] w-25 h-25 outline-2 outline-c-primary">
    </div>
</utldemo>
