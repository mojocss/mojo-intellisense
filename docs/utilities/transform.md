---
title: Transform
section: Utilities
cat: Placement
catid: 2
level: 3
---

Utilities for Transform.

## Scale

Using `scale-[*]`, you can scale an element.

<utldemo utl="scale" :items="['50','75','100','125','150']" active="50">
    <div class="p-relative" _="(div) rounded-md">
        <div class="target-demo p-absolute top-50% left-50% -translate-y-50% -translate-x-50% w-25 h-25 bg-c-primary[60] border-4 border-c-primary"></div>
        <div class="w-25 h-25 bg-c-primary[50]"></div>
    </div>
</utldemo>

<s-box color="green:-2">
  <span>
    You can use Arbitrary values like <span class="hl">"scale-(1.75)"</span> as well. <br>
    <span class="text-sm text-w-400">Learn more about <nuxt-link to="/docs/guide/arbitrary-styling">Arbitrary Styling</nuxt-link></span>
  </span>
</s-box>

### Scale X

Using `scale-x-[*]`, you can scale an element only on the x-axis.

<utldemo utl="scale-x" :items="['50','75','100','125','150']" active="50">
    <div class="p-relative" _="(div) rounded-md">
        <div class="target-demo p-absolute top-50% left-50% -translate-y-50% -translate-x-50% w-25 h-25 bg-c-primary[60] border-4 border-c-primary"></div>
        <div class="w-25 h-25 bg-c-primary[50]"></div>
    </div>
</utldemo>

<s-box color="green:-2">
  <span>
    You can use Arbitrary values like <span class="hl">"scale-x-(1.75)"</span> as well. <br>
    <span class="text-sm text-w-400">Learn more about <nuxt-link to="/docs/guide/arbitrary-styling">Arbitrary Styling</nuxt-link></span>
  </span>
</s-box>

### Scale Y

Using `scale-y-[*]`, you can scale an element only on the y-axis.

<utldemo utl="scale-y" :items="['50','75','100','125','150']" active="50">
    <div class="p-relative" _="(div) rounded-md">
        <div class="target-demo p-absolute top-50% left-50% -translate-y-50% -translate-x-50% w-25 h-25 bg-c-primary[60] border-4 border-c-primary"></div>
        <div class="w-25 h-25 bg-c-primary[50]"></div>
    </div>
</utldemo>

<s-box color="green:-2">
  <span>
    You can use Arbitrary values like <span class="hl">"scale-y-(1.75)"</span> as well. <br>
    <span class="text-sm text-w-400">Learn more about <nuxt-link to="/docs/guide/arbitrary-styling">Arbitrary Styling</nuxt-link></span>
  </span>
</s-box>

## Rotate

Using `rotate-[*]`, you can rotate an element.

<utldemo utl="rotate" :items="['0','45','90','180','-45']" active="0">
    <div class="p-relative w-120px h-120px" _="(div) rounded-md (.target-demo)">
        <div class="target-demo w-120px h-120px p-absolute inset-0 tsm-300" style="background-image:url('/img/docs/kite-s.png')"></div>
        <div class="w-120px h-120px bg-c-primary[50]"></div>
    </div>
</utldemo>

<s-box color="blue">
  <span>
    You can use negative values by simply adding a "-" before the utility name,<br> such as <span class="hl">"-rotate-30"</span>.
  </span>
</s-box>

<s-box color="green:-2">
  <span>
    You can use Arbitrary values like <span class="hl">"rotate-(12deg)"</span> as well. <br>
    <span class="text-sm text-w-400">Learn more about <nuxt-link to="/docs/guide/arbitrary-styling">Arbitrary Styling</nuxt-link></span>
  </span>
</s-box>

## Skew

Utilities for skewing elements with transform property.

### Skew X

Using `skew-x-[*]`, you can skew an element only on the x-axis.

<utldemo utl="skew-x" :items="['0','5','10','15','-10']" active="0">
    <div class="p-relative w-120px h-120px" _="(div) rounded-md">
        <div class="target-demo w-120px h-120px p-absolute inset-0 tsm-300" style="background-image:url('/img/docs/kite-s.png')"></div>
        <div class="w-120px h-120px bg-c-primary[50]"></div>
    </div>
</utldemo>

### Skew Y

Using `skew-y-[*]`, you can skew an element only on the y-axis.

<utldemo utl="skew-y" :items="['0','5','10','15','-10']" active="0">
    <div class="p-relative w-120px h-120px" _="(div) rounded-md">
        <div class="target-demo w-120px h-120px p-absolute inset-0 tsm-300" style="background-image:url('/img/docs/kite-s.png')"></div>
        <div class="w-120px h-120px bg-c-primary[50]"></div>
    </div>
</utldemo>

<s-box color="blue">
  <span>
    To use negative values simply add a "-" before the utility name, <br> such as <span class="hl">"-skew-x-4"</span>.
  </span>
</s-box>

<s-box color="stronginvert">
  <span>
    The value of the skew-x and skew-y properties are measured in degrees (deg), so skew-x-12 means an x-axis skew magnitude of 12deg.
  </span>
</s-box>

<s-box color="green:-2">
  <span>
    You can use Arbitrary values like <span class="hl">"skew-x-(12deg)"</span> or <span class="hl">"skew-y-(16deg)"</span> as well. <br>
    <span class="text-sm text-w-400">Learn more about <nuxt-link to="/docs/guide/arbitrary-styling">Arbitrary Styling</nuxt-link></span>
  </span>
</s-box>

## Translate

Utilities for translating elements with transform property.

### Translate X

Using `translate-x-[*]`, you can translate an element only on the x-axis.

<utldemo utl="translate-x" :items="['4','8','12','-4']" active="4">
    <div class="p-relative w-120px h-120px" _="(div) rounded-md">
        <div class="target-demo w-120px h-120px p-absolute inset-0 tsm-300" style="background-image:url('/img/docs/kite-s.png')"></div>
        <div class="w-120px h-120px bg-c-primary[50]"></div>
    </div>
</utldemo>

### Translate Y

Using `translate-y-[*]`, you can translate an element only on the y-axis.

<utldemo utl="translate-y" :items="['4','8','12','-4']" active="4">
    <div class="p-relative w-120px h-120px" _="(div) rounded-md">
        <div class="target-demo w-120px h-120px p-absolute inset-0 tsm-300" style="background-image:url('/img/docs/kite-s.png')"></div>
        <div class="w-120px h-120px bg-c-primary[50]"></div>
    </div>
</utldemo>

<alert-box type="info">
  <span>
    You can use numerical values which will be converted into a multiple of 0.25rem (can be changed in config → units) for consistent and precise sizing. <br> <br> For example, <span class="text-c-blue font-code">"translate-x-5"</span> will give you a translate-x of 1.25rem.
  </span>
</alert-box>

<s-box color="blue">
  <span>
    To use negative values simply add a "-" before the utility name,<br> such as <span class="hl">"-translate-x-4"</span>.
  </span>
</s-box>

<s-box color="green:-2">
  <span>
    You can use Arbitrary values like <span class="hl">"translate-x-(16px)"</span> or <span class="hl">"translate-y-(2em)"</span> as well. <br>
    <span class="text-sm text-w-400">Learn more about <nuxt-link to="/docs/guide/arbitrary-styling">Arbitrary Styling</nuxt-link></span>
  </span>
</s-box>

## Transform Origin

Using `transform-o-[*]`, chnage the origin for an element's transformations.

<utldemo utl="transform-o" :items="['center','top','right','bottom','left','top-right','top-left','bottom-right','bottom-left']" active="center">
    <div class="p-relative w-120px h-120px" _="(div) rounded-md">
        <div class="target-demo w-120px h-120px p-absolute inset-0 tsm-300 rotate-45" style="background-image:url('/img/docs/kite-s.png')"></div>
        <div class="w-120px h-120px bg-c-primary[50]"></div>
    </div>
</utldemo>
