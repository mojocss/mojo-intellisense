---
title: Background
section: Utilities
cat: Appearance
catid: 1
level: 1
---

Utilities for background properties.

## Background Size

Using `bg-s-[*]`, you can control the background size of an element's background image.

<utldemo utl="bg-s" :items="['auto', 'cover','contain']" active="auto">
    <div class="d-flex a-items-center j-content-center overflow-hidden w-70% h-110px border-4 border-s-dashed border-c-primary[20] rounded-4" i-sm="w-90%">
        <div class="target-demo w-full h-full  bg-img-/img/docs/kite-l.png bg-r-no-repeat bg-p-center"></div>
    </div>
</utldemo>

## Background Position

Using `bg-p-[*]`, you can control the position of an element’s background image.

<utldemo utl="bg-p" :items="['center', 'top','right','bottom','left', 'top-right', 'top-left', 'bottom-right', 'bottom-left']" active="center">
    <div class="grid cols-2 a-items-center gap-0" children-all="rounded-4">
        <div class="target-demo w-full h-full max-w-120px max-h-120px pa-5 border-4 border-s-dashed border-c-primary[20] bg-clip-padding" style="background-image:url('/img/docs/kite-s.png')"></div>
        <img class="w-full h-full max-w-180px max-h-180px" src="/img/docs/kite-s.png">
    </div>
</utldemo>

<s-box color="green:-2">
  <span>
    You can use Arbitrary values like <span class="hl">"bg-p-(5px_10%)"</span> as well. <br>
    <span class="text-sm text-w-400">Learn more about <nuxt-link to="/docs/guide/arbitrary-styling">Arbitrary Styling</nuxt-link></span>
  </span>
</s-box>

## Background Origin

Using `bg-o-[*]`, you can control the bounding box for an elements's background.

<utldemo utl="bg-o" :items="['border', 'padding', 'content']" active="border">
    <div class="target-demo w-120px h-120px pa-4 border-4 border-s-dashed border-c-primary rounded-4" style="background-image:url('/img/docs/kite-s.png')">
    </div>
</utldemo>

## Background Clip

Using `bg-clip-[*]`, you can control the bounding box for an elements's background.

<utldemo utl="bg-clip" :items="['border', 'padding', 'content']" active="border">
    <div class="target-demo w-120px h-120px pa-4 bg-c-blue border-4 border-s-dashed border-c-primary rounded-4">
    </div>
</utldemo>

### Cropping to text

By using `bg-clip-text`, you can crop an element’s background to match the shape of the text.

<utldemo abovecode="true">
    <div class="bg-clip-text text-w-black text-300 text-c-transparent bg-gradient start-c-primary end-c-blue gd-dir-left">
        Magic
    </div>
</utldemo>
<showcode lang="html">

```
<div class="-- bg-clip-text ** text-w-black text-250 text-c-transparent bg-gradient start-c-primary end-c-blue gd-dir-left">
    Magic
</div>
```

</showcode>

## Background Repeat

Using `bg-r-[*]`, you can control repetition of an element's background image.

<utldemo utl="bg-r" :items="['repeat', 'no-repeat', 'repeat-x', 'repeat-y']" active="repeat">
    <div class="target-demo w-full max-w-lg h-50 bg-c-body border-4 border-s-dashed border-c-primary[20] bg-clip-padding bg-p-center rounded-4" style="background-image:url('/img/docs/pattern-bg.svg')">
    </div>
</utldemo>

## Background Attachment

Using `bg-a-[*]`, you can control the way a background image responds to scrolling.

<utldemo class="p-relative" utl="bg-a" :items="['local', 'fixed', 'scroll']" active="local">
    <div class="target-demo w-full max-w-lg h-65 bg-s-cover bg-c-body border-4 border-s-dashed border-c-primary[20] bg-clip-padding bg-p-center overflow-y-scroll rounded-6" style="background-image:url('/img/docs/landscape.jpg')">
        <div class="text-a-center px-20 py-20 text-c-white text-xxl text-shadow:0_2px_2px_rgba(0,0,0,0.1)" i-md="text-lg px-7 py-10">
            "Arthur C. Clarke famously said that 'any sufficiently advanced technology is indistinguishable from magic,' and it's not hard to see why. Both technology and magic are about harnessing unseen forces to achieve seemingly impossible outcomes. Both rely on a certain level of understanding and skill to be effective, and both can inspire awe and wonder in those who witness their power. In many ways, technology is the modern-day equivalent of magic, allowing us to accomplish feats that would have been unimaginable just a few decades ago."
        </div>
    </div>
</utldemo>

## Background Image

In order to add a background URL as a utility, you can make use of `bg-img-[*]`. It is a convenient way to quickly set a background image without having to write additional CSS code.

<showcode lang="html">

```
<div class="-- bg-img-images/docs/landscape.jpg ** ...">
    <!-- ... -->
</div>
```

</showcode>
