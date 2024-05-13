---
title: Margin
section: Utilities
cat: Spacing
catid: 4
level: 1
---

Utilities for margin.

Using `ma-[number]`, you can control the element's margin from all sides.

<utldemo utl="ma" :items="['2','4','8','16']" active="2" _="(.demo) h-60">
    <div class="border:3px_solid_$c.blue">
        <div class="target-demo w-20 h-5 bg-c-primary rounded-md"></div>
    </div>    
</utldemo>

<alert-box type="info">
  <span>
    You can use numerical values which will be converted into a multiple of 0.25rem (can be changed in config → units) for consistent and precise sizing. <br> <br> For example, <span class="text-c-blue font-code">"ma-5"</span> will give you a margin of 1.25rem.
  </span>
</alert-box>

<s-box color="green:-2">
  <span>
    You can use Arbitrary values like <span class="hl">"ma-(16px)"</span> or <span class="hl">"ma-(2em)"</span> as well. <br>
    <span class="text-sm text-w-400">Learn more about <nuxt-link to="/docs/guide/arbitrary-styling">Arbitrary Styling</nuxt-link></span>
  </span>
</s-box>

## Margin Top

Using `mt-[number]`, you can control the element's margin from above.

<utldemo utl="mt" :items="['2','4','8','16']" active="2" _="(.demo) h-40">
    <div class="border-top:3px_solid_$c.blue rounded-bottom-md">
        <div class="target-demo w-20 h-5 bg-c-primary rounded-md"></div>
    </div>    
</utldemo>

<alert-box type="info">
  <span>
    You can use numerical values which will be converted into a multiple of 0.25rem (can be changed in config → units) for consistent and precise sizing. <br> <br> For example, <span class="text-c-blue font-code">"mt-5"</span> will give you a margin-top of 1.25rem.
  </span>
</alert-box>

<s-box color="blue">
  <span>
    To use negative values simply add a "-" before the utility name,<br> such as <span class="hl">"-mt-4"</span>.
  </span>
</s-box>

<s-box color="green:-2">
  <span>
    You can use Arbitrary values like <span class="hl">"mt-(16px)"</span> or <span class="hl">"mt-(2em)"</span> as well. <br>
    <span class="text-sm text-w-400">Learn more about <nuxt-link to="/docs/guide/arbitrary-styling">Arbitrary Styling</nuxt-link></span>
  </span>
</s-box>

## Margin Right

Using `mr-[number]`, you can control the element's margin from its right side.

<utldemo utl="mr" :items="['2','4','8','16']" active="2" _="(.demo) h-40">
    <div class="border-right:3px_solid_$c.blue rounded-left-md">
        <div class="target-demo w-20 h-5 bg-c-primary rounded-md"></div>
    </div>    
</utldemo>

<alert-box type="info">
  <span>
    You can use numerical values which will be converted into a multiple of 0.25rem (can be changed in config → units) for consistent and precise sizing. <br> <br> For example, <span class="text-c-blue font-code">"mr-5"</span> will give you a margin-right of 1.25rem.
  </span>
</alert-box>

<s-box color="blue">
  <span>
    To use negative values simply add a "-" before the utility name,<br> such as <span class="hl">"-mr-4"</span>.
  </span>
</s-box>

<s-box color="green:-2">
  <span>
    You can use Arbitrary values like <span class="hl">"mr-(16px)"</span> or <span class="hl">"mr-(2em)"</span> as well. <br>
    <span class="text-sm text-w-400">Learn more about <nuxt-link to="/docs/guide/arbitrary-styling">Arbitrary Styling</nuxt-link></span>
  </span>
</s-box>

## Margin Bottom

Using `mb-[number]`, you can control the element's margin from below.

<utldemo utl="mb" :items="['2','4','8','16']" active="2" _="(.demo) h-40">
    <div class="border-bottom:3px_solid_$c.blue rounded-top-md">
        <div class="target-demo w-20 h-5 bg-c-primary rounded-md"></div>
    </div>    
</utldemo>

<alert-box type="info">
  <span>
    You can use numerical values which will be converted into a multiple of 0.25rem (can be changed in config → units) for consistent and precise sizing. <br> <br> For example, <span class="text-c-blue font-code">"mb-5"</span> will give you a margin-bottom of 1.25rem.
  </span>
</alert-box>

<s-box color="blue">
  <span>
    To use negative values simply add a "-" before the utility name,<br> such as <span class="hl">"-mb-4"</span>.
  </span>
</s-box>

<s-box color="green:-2">
  <span>
    You can use Arbitrary values like <span class="hl">"mb-(16px)"</span> or <span class="hl">"mb-(2em)"</span> as well. <br>
    <span class="text-sm text-w-400">Learn more about <nuxt-link to="/docs/guide/arbitrary-styling">Arbitrary Styling</nuxt-link></span>
  </span>
</s-box>

## Margin Left

Using `ml-[number]`, you can control the element's margin from its left side.

<utldemo utl="ml" :items="['2','4','8','16']" active="2" _="(.demo) h-40">
    <div class="border-left:3px_solid_$c.blue rounded-right-md">
        <div class="target-demo w-20 h-5 bg-c-primary rounded-md"></div>
    </div>    
</utldemo>

<alert-box type="info">
  <span>
    You can use numerical values which will be converted into a multiple of 0.25rem (can be changed in config → units) for consistent and precise sizing. <br> <br> For example, <span class="text-c-blue font-code">"ml-5"</span> will give you a margin-left of 1.25rem.
  </span>
</alert-box>

<s-box color="blue">
  <span>
    To use negative values simply add a "-" before the utility name,<br> such as <span class="hl">"-ml-4"</span>.
  </span>
</s-box>

<s-box color="green:-2">
  <span>
    You can use Arbitrary values like <span class="hl">"ml-(16px)"</span> or <span class="hl">"ml-(2em)"</span> as well. <br>
    <span class="text-sm text-w-400">Learn more about <nuxt-link to="/docs/guide/arbitrary-styling">Arbitrary Styling</nuxt-link></span>
  </span>
</s-box>

## Margin X (Horizontal)

Using `mx-[number]`, you can control the element's margin from its horizontal axis.

<utldemo utl="mx" :items="['2','4','8','16']" active="2" _="(.demo) h-40">
    <div class="border:3px_solid_$c.blue border-top-0 border-bottom-0">
        <div class="target-demo w-20 h-5 bg-c-primary rounded-md"></div>
    </div>    
</utldemo>

<alert-box type="info">
  <span>
    You can use numerical values which will be converted into a multiple of 0.25rem (can be changed in config → units) for consistent and precise sizing. <br> <br> For example, <span class="text-c-blue font-code">"mx-5"</span> will give you a horizontal margin of 1.25rem.
  </span>
</alert-box>

<s-box color="green:-2">
  <span>
    You can use Arbitrary values like <span class="hl">"mx-(16px)"</span> or <span class="hl">"mx-(2em)"</span> as well. <br>
    <span class="text-sm text-w-400">Learn more about <nuxt-link to="/docs/guide/arbitrary-styling">Arbitrary Styling</nuxt-link></span>
  </span>
</s-box>

## Margin Y (Vertical)

Using `my-[number]`, you can control the element's margin from its vertical axis.

<utldemo utl="my" :items="['2','4','8','16']" active="2" _="(.demo) h-45">
    <div class="border:3px_solid_$c.blue border-right-0 border-left-0">
        <div class="target-demo w-20 h-5 bg-c-primary rounded-md"></div>
    </div>    
</utldemo>

<alert-box type="info">
  <span>
    You can use numerical values which will be converted into a multiple of 0.25rem (can be changed in config → units) for consistent and precise sizing. <br> <br> For example, <span class="text-c-blue font-code">"my-5"</span> will give you a vertical margin of 1.25rem.
  </span>
</alert-box>

<s-box color="green:-2">
  <span>
    You can use Arbitrary values like <span class="hl">"my-(16px)"</span> or <span class="hl">"my-(2em)"</span> as well. <br>
    <span class="text-sm text-w-400">Learn more about <nuxt-link to="/docs/guide/arbitrary-styling">Arbitrary Styling</nuxt-link></span>
  </span>
</s-box>
