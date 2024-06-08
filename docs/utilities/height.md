---
title: Height
section: Utilities
cat: Sizing
catid: 5
level: 2
---

Utilities for height, min-height and max-height properties.

## Numerical heights

Using `h-[number]`, you can control the height size of an element.

<utldemo utl="h" :items="['8','12','16','32','auto']" active="8">
    <div class="target-demo w-5 bg-c-primary rounded-md" _="(&.h-auto + div) d-block"></div>
    <div class="h-5 d-none">Restes the height.</div>
</utldemo>

<alert-box type="info">
  <span>
    You can use numerical values which will be converted into a multiple of 0.25rem (can be changed in config → units) for consistent and precise sizing. <br> <br> For example, <span class="text-c-blue font-code">"h-5"</span> will give you a height of 1.25rem.
  </span>
</alert-box>

<s-box color="green:-2">
  <span>
    You can use Arbitrary values like <span class="hl">"h-(16px)"</span> or <span class="hl">"h-(2em)"</span> as well. <br>
    <span class="text-sm text-w-400">Learn more about <nuxt-link to="/docs/guide/arbitrary-styling">Arbitrary Styling</nuxt-link></span>
  </span>
</s-box>

## Percentage heights

Using `h-[precentage]`, you can control the height size of an element with percentage values.

<utldemo utl="h" :items="['25%','33%','50%','66%','75%','100%']" active="25%">
    <div class="p-relative h-50">
        <div class="target-demo w-5 bg-c-primary rounded-md"></div>
        <div class="p-absolute w-5 h-full bg-c-primary[20] top-0 rounded-md"></div>
    </div>
</utldemo>

<alert-box type="info">
  <span>
    You can use any percentage values such as <span class="text-c-blue font-code">"h-28%"</span>.
  </span>
</alert-box>

<alert-box type="info">
  <span>
    You can also use <span class="text-c-blue font-code">"h-full"</span> instead of h-100% and <span class="text-c-blue font-code">"h-half"</span> instead of h-50%.
  </span>
</alert-box>

### Viewport

Using `h-[precentage]vw` or `h-[precentage]vh`, you can set the height size of an element to match the height of the viewport.

<showcode lang="html">

```
<!-- vw = viewport width -->
<div class="h-100vw">
    ...
</div>

<!-- vh = viewport height -->
<div class="h-100vh">
    ...
</div>
```

</showcode>

<alert-box type="info">
  <span>
    You can use any percentage values such as <span class="text-c-blue font-code">"h-36vw"</span>.
  </span>
</alert-box>
<alert-box type="info">
  <span>
    You can also use <span class="text-c-blue font-code">"h-fullvw"</span> instead of h-100vw and <span class="text-c-blue font-code">"h-fullvh"</span> instead of h-100vh.
  </span>
</alert-box>

## Min Height

Using `min-h-[number|percentage]`, you can control the minimum height of an element.

<utldemo utl="min-h" :items="['16','32']" active="16" _="(.demo) h-48">
    <div class="target-demo pa-5 w-80 h-16 bg-c-primary text-c-white rounded-md">
      min-height overrides height if it is greater than height (e.g., min-h-32 overrides h-16).
    </div>
</utldemo>

<alert-box type="info">
  <span>
    You can use both <a href="#numerical-heights">numerical</a> and <a href="#percentage-heights">percentage</a> values such as <span class="text-c-blue font-code">"min-h-12"</span> or <span class="text-c-blue font-code">"min-h-25%"</span>.
  </span>
</alert-box>

<s-box color="green:-2">
  <span>
    You can use Arbitrary values like <span class="hl">"min-h-(16px)"</span> or <span class="hl">"min-h-(2em)"</span> as well. <br>
    <span class="text-sm text-w-400">Learn more about <nuxt-link to="/docs/guide/arbitrary-styling">Arbitrary Styling</nuxt-link></span>
  </span>
</s-box>

## Max Height

Using `max-h-[number|percentage]`, you can control the maximum height of an element.

<utldemo utl="max-h" :items="['32','44']" active="32" _="(.demo) h-80">
    <div class="target-demo pa-5 w-100 h-50 bg-c-primary text-c-white rounded-md">
        This element will be 12.5rem(h-50) tall, unless the max-height is lower, in which case it will be as tall as the max-height.
    </div>
    <div class="w-16 h-full d-flex a-items-center j-content-center flex-col text-a-center text-c-white rounded-md" i-sm="text-60">
       <span>↑</span> <span>h-50</span> <span>↓</span>
    </div>
    <div class="w-5 h-50 d-flex a-items-center j-content-center flex-col text-a-center bg-c-blue text-c-white rounded-md">
    </div>
</utldemo>

<alert-box type="info">
  <span>
    You can use both <a href="#numerical-heights">numerical</a> and <a href="#percentage-heights">percentage</a> values such as <span class="text-c-blue font-code">"max-h-12"</span> or <span class="text-c-blue font-code">"max-h-25%"</span>.
  </span>
</alert-box>

<s-box color="green:-2">
  <span>
    You can use Arbitrary values like <span class="hl">"max-h-(16px)"</span> or <span class="hl">"max-h-(2em)"</span> as well. <br>
    <span class="text-sm text-w-400">Learn more about <nuxt-link to="/docs/guide/arbitrary-styling">Arbitrary Styling</nuxt-link></span>
  </span>
</s-box>
