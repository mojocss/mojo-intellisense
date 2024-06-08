---
title: Object
section: Utilities
cat: General
catid: 7
level: 1
---

Utilities for object-fit and object-position.

## Object Fit

Using `obj-f-[*]`, you can control how a replaced element's content should be resized.

<utldemo utl="obj-f" :items="['none','cover','fill','contain','scale-down']" active="none">
    <div class="d-flex a-items-center j-content-center overflow-hidden w-250px h-110px border-4 border-s-dashed border-c-primary[20] rounded-4" i-sm="w-90%">
        <img class="target-demo w-full h-full" src="/img/docs/kite-s.png">
    </div>
</utldemo>

## Object Position

Using `obj-p-[*]`, you can control the position of an element within its container.

<utldemo utl="obj-p" :items="['center', 'top','right','bottom','left', 'top-right', 'top-left', 'bottom-right', 'bottom-left']" active="center">
    <div class="d-flex a-items-center j-content-center overflow-hidden w-150px h-150px border-4 border-s-dashed border-c-primary[20] rounded-4" i-sm="w-90%">
        <img class="target-demo obj-f-none w-full h-full" src="/img/docs/kite-s.png">
    </div>
</utldemo>

<s-box color="green:-2">
  <span>
    You can use Arbitrary values like <span class="hl">"obj-p-(5px_10%)"</span> as well. <br>
    <span class="text-sm text-w-400">Learn more about <nuxt-link to="/docs/guide/arbitrary-styling">Arbitrary Styling</nuxt-link></span>
  </span>
</s-box>
