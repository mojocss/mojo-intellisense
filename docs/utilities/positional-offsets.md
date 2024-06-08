---
title: Positional Offsets
section: Utilities
cat: Placement
catid: 2
level: 5
---

Utilities for the placement of positioned elements.

## Top

Using `top-[*]`, you can control the vertical position of a positioned element

<utldemo utl="top" :items="['0','5','full']" active="0">
    <div class="p-relative bg-c-primary[20] w-30 h-30 rounded-md">
        <div class="target-demo p-absolute w-50% h-5 bg-c-primary rounded-full"></div>
    </div>
</utldemo>

<alert-box type="info">
  <span>
    You can use numerical values which will be converted into a multiple of 0.25rem (can be changed in config → units) for consistent and precise sizing. <br> <br> For example, <span class="text-c-blue font-code">"top-5"</span> will give you 1.25rem offset from top.
  </span>
</alert-box>

<s-box color="blue">
  <span>
    To use negative values simply add a "-" before the utility name,<br> such as <span class="hl">"-top-4"</span>.
  </span>
</s-box>

<s-box color="green:-2">
  <span>
    You can use Arbitrary values like <span class="hl">"top-(16px)"</span> or <span class="hl">"top-(2em)"</span> as well. <br>
    <span class="text-sm text-w-400">Learn more about <nuxt-link to="/docs/guide/arbitrary-styling">Arbitrary Styling</nuxt-link></span>
  </span>
</s-box>

## Right

Using `right-[*]`, you can control the horizontal position of a positioned element

<utldemo utl="right" :items="['0','5','full']" active="0">
    <div class="p-relative bg-c-primary[20] w-30 h-30 rounded-md">
        <div class="target-demo p-absolute w-5 h-50% bg-c-primary rounded-full"></div>
    </div>
</utldemo>

<alert-box type="info">
  <span>
    You can use numerical values which will be converted into a multiple of 0.25rem (can be changed in config → units) for consistent and precise sizing. <br> <br> For example, <span class="text-c-blue font-code">"right-5"</span> will give you 1.25rem offset from right.
  </span>
</alert-box>

<s-box color="blue">
  <span>
    To use negative values simply add a "-" before the utility name,<br> such as <span class="hl">"-right-4"</span>.
  </span>
</s-box>

<s-box color="green:-2">
  <span>
    You can use Arbitrary values like <span class="hl">"right-(16px)"</span> or <span class="hl">"right-(2em)"</span> as well. <br>
    <span class="text-sm text-w-400">Learn more about <nuxt-link to="/docs/guide/arbitrary-styling">Arbitrary Styling</nuxt-link></span>
  </span>
</s-box>

## Bottom

Using `bottom-[*]`, you can control the vertical position of a positioned element

<utldemo utl="bottom" :items="['0','5','full']" active="0">
    <div class="p-relative bg-c-primary[20] w-30 h-30 rounded-md">
        <div class="target-demo p-absolute w-50% h-5 bg-c-primary rounded-full"></div>
    </div>
</utldemo>

<alert-box type="info">
  <span>
    You can use numerical values which will be converted into a multiple of 0.25rem (can be changed in config → units) for consistent and precise sizing. <br> <br> For example, <span class="text-c-blue font-code">"bottom-5"</span> will give you 1.25rem offset from bottom.
  </span>
</alert-box>

<s-box color="blue">
  <span>
    To use negative values simply add a "-" before the utility name,<br> such as <span class="hl">"-bottom-4"</span>.
  </span>
</s-box>

<s-box color="green:-2">
  <span>
    You can use Arbitrary values like <span class="hl">"bottom-(16px)"</span> or <span class="hl">"bottom-(2em)"</span> as well. <br>
    <span class="text-sm text-w-400">Learn more about <nuxt-link to="/docs/guide/arbitrary-styling">Arbitrary Styling</nuxt-link></span>
  </span>
</s-box>

## Left

Using `left-[*]`, you can control the horizontal position of a positioned element

<utldemo utl="left" :items="['0','5','full']" active="0">
    <div class="p-relative bg-c-primary[20] w-30 h-30 rounded-md">
        <div class="target-demo p-absolute w-5 h-50% bg-c-primary rounded-full"></div>
    </div>
</utldemo>

<alert-box type="info">
  <span>
    You can use numerical values which will be converted into a multiple of 0.25rem (can be changed in config → units) for consistent and precise sizing. <br> <br> For example, <span class="text-c-blue font-code">"left-5"</span> will give you 1.25rem offset from left.
  </span>
</alert-box>

<s-box color="blue">
  <span>
    To use negative values simply add a "-" before the utility name,<br> such as <span class="hl">"-left-4"</span>.
  </span>
</s-box>

<s-box color="green:-2">
  <span>
    You can use Arbitrary values like <span class="hl">"left-(16px)"</span> or <span class="hl">"left-(2em)"</span> as well. <br>
    <span class="text-sm text-w-400">Learn more about <nuxt-link to="/docs/guide/arbitrary-styling">Arbitrary Styling</nuxt-link></span>
  </span>
</s-box>

## Inset

Using `inset-[*]`, you can control the vertical and horzontal position of a positioned element.

**inset-x**: shorthand for right/left <br>
**inset-y**: shorthand for top/bottom <br>
**inset**: shorthand for top/right/bottom/left

<utldemo utl="inset" :items="['x-0', 'y-0' , '0']" active="x-0">
<div class="p-relative bg-c-primary[20] w-30 h-30 rounded-md" _="(> div.inset-x-0) h-5 (> div.inset-y-0) w-5">
<div class="target-demo p-absolute bg-c-primary rounded-md"></div>
</div>
</utldemo>

<alert-box type="info">
  <span>
    You can use numerical values which will be converted into a multiple of 0.25rem (can be changed in config → units) for consistent and precise sizing.
  </span>
</alert-box>

<s-box color="green:-2">
  <span>
    You can use Arbitrary values like <span class="hl">"inset-x-(16px)"</span> or <span class="hl">"inset-(2em)"</span> as well. <br>
    <span class="text-sm text-w-400">Learn more about <nuxt-link to="/docs/guide/arbitrary-styling">Arbitrary Styling</nuxt-link></span>
  </span>
</s-box>
