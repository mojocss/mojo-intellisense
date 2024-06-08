---
title: Width
section: Utilities
cat: Sizing
catid: 5
level: 1
---

Utilities for width, min-width and max-width properties.

## Numerical widths

Using `w-[number]`, you can control the width size of an element.

<utldemo utl="w" :items="['16','32','64','128','auto']" active="16">
    <div class="target-demo h-5 bg-c-primary rounded-md" _="(&.w-auto + div) d-block"></div>
    <div class="h-5 d-none">Restes the width.</div>
</utldemo>

<alert-box type="info">
  <span>
    You can use numerical values which will be converted into a multiple of 0.25rem (can be changed in config → units) for consistent and precise sizing. <br> <br> For example, <span class="text-c-blue font-code">"w-5"</span> will give you a width of 1.25rem.
  </span>
</alert-box>

<s-box color="green:-2">
  <span>
    You can use Arbitrary values like <span class="hl">"w-(16px)"</span> or <span class="hl">"w-(2em)"</span> as well. <br>
    <span class="text-sm text-w-400">Learn more about <nuxt-link to="/docs/guide/arbitrary-styling">Arbitrary Styling</nuxt-link></span>
  </span>
</s-box>

## Percentage widths

Using `w-[precentage]`, you can control the width size of an element with percentage values.

<utldemo utl="w" :items="['25%','33%','50%','66%','75%','100%']" active="25%">
    <div class="p-relative w-full">
        <div class="target-demo h-5 bg-c-primary rounded-md"></div>
        <div class="p-absolute w-full h-5 bg-c-primary[20] top-0 rounded-md"></div>
    </div>
</utldemo>

<alert-box type="info">
  <span>
    You can use any percentage values such as <span class="text-c-blue font-code">"w-28%"</span>.
  </span>
</alert-box>

<alert-box type="info">
  <span>
    You can also use <span class="text-c-blue font-code">"w-full"</span> instead of w-100% and <span class="text-c-blue font-code">"w-half"</span> instead of w-50%.
  </span>
</alert-box>

### Viewport

Using `w-[precentage]vw` or `w-[precentage]vh`, you can set the width size of an element to the width of viewport.

<showcode lang="html">

```
<!-- vw = viewport width -->
<div class="w-100vw">
    ...
</div>

<!-- vh = viewport height -->
<div class="w-100vh">
    ...
</div>
```

</showcode>

<alert-box type="info">
  <span>
    You can use any percentage values such as <span class="text-c-blue font-code">"w-36vw"</span>.
  </span>
</alert-box>
<alert-box type="info">
  <span>
    You can also use <span class="text-c-blue font-code">"w-fullvw"</span> instead of w-100vw and <span class="text-c-blue font-code">"w-fullvh"</span> instead of w-100vh.
  </span>
</alert-box>

## Min Width

Using `min-w-[number|percentage]`, you can control the minimum width of an element.

<utldemo utl="min-w" :items="['64','80']" active="64">
    <div class="target-demo pa-5 w-64 min-h-5 bg-c-primary text-c-white rounded-md">
      min-width overrides width if it is greater than width (e.g., min-w-80 overrides w-64).
    </div>
</utldemo>

<alert-box type="info">
  <span>
    You can use both <a href="#numerical-widths">numerical</a> and <a href="#percentage-widths">percentage</a> values such as <span class="text-c-blue font-code">"min-w-12"</span> or <span class="text-c-blue font-code">"min-w-25%"</span>.
  </span>
</alert-box>

<s-box color="green:-2">
  <span>
    You can use Arbitrary values like <span class="hl">"min-w-(16px)"</span> or <span class="hl">"min-w-(2em)"</span> as well. <br>
    <span class="text-sm text-w-400">Learn more about <nuxt-link to="/docs/guide/arbitrary-styling">Arbitrary Styling</nuxt-link></span>
  </span>
</s-box>

## Max Width

Using `max-w-[number|percentage]`, you can control the minimum width of an element.

<utldemo utl="max-w" :items="['48','64']" active="48" _="(.demo) flex-col h-100">
    <div class="target-demo pa-5 w-80 min-h-5 bg-c-primary text-c-white rounded-md">
        This element will be 20rem(w-80) wide, unless the max-width is lower, in which case it will be as wide as the max-width.
    </div>
    <div class="w-80 h-5 text-a-center bg-c-blue text-c-white rounded-md mt-10">
       ← w-80 →
    </div>
</utldemo>

<alert-box type="info">
  <span>
    You can use both <a href="#numerical-widths">numerical</a> and <a href="#percentage-widths">percentage</a> values such as <span class="text-c-blue font-code">"max-w-12"</span> or <span class="text-c-blue font-code">"max-w-25%"</span>.
  </span>
</alert-box>

<s-box color="green:-2">
  <span>
    You can use Arbitrary values like <span class="hl">"max-w-(16px)"</span> or <span class="hl">"max-w-(2em)"</span> as well. <br>
    <span class="text-sm text-w-400">Learn more about <nuxt-link to="/docs/guide/arbitrary-styling">Arbitrary Styling</nuxt-link></span>
  </span>
</s-box>
