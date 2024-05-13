---
title: Filters
section: Utilities
cat: Appearance
catid: 1
level: 6
---

Utilities for filters and backdrop filters.

## Blur

Using `blur-[*]`, you can blur an element.

<utldemo utl="blur" class="overflow-hidden" :items="['1','5','15','40']" active="1">
    <div class="target-demo w-40 max-w-full h-40 bg-img-/img/docs/kite-l.png bg-r-no-repeat bg-p-center bg-s-cover rounded-md"></div>
</utldemo>

<s-box color="green:-2">
  <span>
    The value of the blur filter is measured in pixels (px), so blur-12 means a blur magnitude of 12 pixels.
  </span>
</s-box>

## Grayscale

Using `grayscale-[*]`, you can convert an element's colors to shades of gray.

<utldemo utl="grayscale" class="overflow-hidden" :items="['100','75','50','25','0']" active="100">
    <div class="target-demo w-40 max-w-full h-40 bg-img-/img/docs/kite-l.png bg-r-no-repeat bg-p-center bg-s-cover rounded-md"></div>
</utldemo>

<s-box color="green:-2">
  <span>
    The value of the grayscale filter is measured in percentage (%), so grayscale-50 means a grayscale magnitude of 50%.
  </span>
</s-box>

## Brightness

Using `brightness-[*]`, you can control an element’s brightness.

<utldemo utl="brightness" class="overflow-hidden" :items="['50','100','150','200']" active="50">
    <div class="target-demo w-40 max-w-full h-40 bg-img-/img/docs/kite-l.png bg-r-no-repeat bg-p-center bg-s-cover rounded-md"></div>
</utldemo>

<s-box color="green:-2">
  <span>
    The value of the brightness filter is measured in percentage (%), so brightness-50 means a brightness magnitude of 50%.
  </span>
</s-box>

## Contrast

Using `contrast-[*]`, you can control an element’s contrast.

<utldemo utl="contrast" class="overflow-hidden" :items="['50','100','150','200']" active="50">
    <div class="target-demo w-40 max-w-full h-40 bg-img-/img/docs/kite-l.png bg-r-no-repeat bg-p-center bg-s-cover rounded-md"></div>
</utldemo>

<s-box color="green:-2">
  <span>
    The value of the contrast filter is measured in percentage (%), so contrast-50 means a contrast magnitude of 50%.
  </span>
</s-box>

## Hue Rotate

Using `hue-rotate-[*]`, you can control an element’s hue rotation.

<utldemo utl="hue-rotate" class="overflow-hidden" :items="['20','90','150','-30']" active="20">
    <div class="target-demo w-40 max-w-full h-40 bg-img-/img/docs/kite-l.png bg-r-no-repeat bg-p-center bg-s-cover rounded-md"></div>
</utldemo>

<s-box color="green:-2">
  <span>
    The value of the hue-rotate filter is measured in degrees (deg), so hue-rotate-150 means a hue rotate magnitude of 150deg.
  </span>
</s-box>

## Invert

Using `invert-[*]`, you can control wheter an element's colors should be rendered as inverted or normal.

<utldemo utl="invert" class="overflow-hidden" :items="['25','75','100']" active="25">
    <div class="target-demo w-40 max-w-full h-40 bg-img-/img/docs/kite-l.png bg-r-no-repeat bg-p-center bg-s-cover rounded-md"></div>
</utldemo>

<s-box color="green:-2">
  <span>
    The value of the invert filter is measured in percentage (%), so invert-50 means an invert magnitude of 50%.
  </span>
</s-box>

## Saturate

Using `saturate-[*]`, you can control an element's saturation.

<utldemo utl="saturate" class="overflow-hidden" :items="['0','50','100','200']" active="0">
    <div class="target-demo w-40 max-w-full h-40 bg-img-/img/docs/kite-l.png bg-r-no-repeat bg-p-center bg-s-cover rounded-md"></div>
</utldemo>

<s-box color="green:-2">
  <span>
    The value of the saturate filter is measured in percentage (%), so saturate-50 means a saturatation magnitude of 50%.
  </span>
</s-box>

## Sepia

Using `sepia-[*]`, you can control wheter an element's colors should be rendered as sepia or normal.

<utldemo utl="sepia" class="overflow-hidden" :items="['0','50','75','100']" active="0">
    <div class="target-demo w-40 max-w-full h-40 bg-img-/img/docs/kite-l.png bg-r-no-repeat bg-p-center bg-s-cover rounded-md"></div>
</utldemo>

<s-box color="green:-2">
  <span>
    The value of the sepia filter is measured in percentage (%), so sepia-50 means a sepia magnitude of 50%.
  </span>
</s-box>

## Backdrop Blur

Using `backdrop-blur-[*]`, you can control an element’s backdrop blur.

<utldemo utl="backdrop-blur" class="overflow-hidden" :items="['1','5','15','40']" active="1">
    <div class="d-flex a-items-center j-content-center w-40 max-w-full h-40 bg-img-/img/docs/kite-l.png bg-r-no-repeat bg-p-center bg-s-cover rounded-md">
      <div class="target-demo w-70% h-70% bg-c-black[30] rounded-md"></div>
    </div>
</utldemo>

<s-box color="green:-2">
  <span>
    The value of the backdrop-blur filter is measured in pixels (px), so backdrop-blur-12 means a blur magnitude of 12 pixels.
  </span>
</s-box>

## Backdrop Grayscale

Using `backdrop-grayscale-[*]`, you can convert an element's backdrop colors to shades of gray.

<utldemo utl="backdrop-grayscale" class="overflow-hidden" :items="['100','75','50','25','0']" active="100">
    <div class="d-flex a-items-center j-content-center w-40 max-w-full h-40 bg-img-/img/docs/kite-l.png bg-r-no-repeat bg-p-center bg-s-cover rounded-md">
      <div class="target-demo w-70% h-70% bg-c-black[30] rounded-md"></div>
    </div>
</utldemo>

<s-box color="green:-2">
  <span>
    The value of the backdrop-grayscale filter is measured in percentage (%), so backdrop-grayscale-50 means a grayscale magnitude of 50%.
  </span>
</s-box>

## Backdrop Brightness

Using `backdrop-brightness-[*]`, you can control an element’s backdrop brightness.

<utldemo utl="backdrop-brightness" class="overflow-hidden" :items="['50','100','150','200']" active="50">
    <div class="d-flex a-items-center j-content-center w-40 max-w-full h-40 bg-img-/img/docs/kite-l.png bg-r-no-repeat bg-p-center bg-s-cover rounded-md">
      <div class="target-demo w-70% h-70% bg-c-white[30] rounded-md"></div>
    </div>
</utldemo>

<s-box color="green:-2">
  <span>
    The value of the backdrop-brightness filter is measured in percentage (%), so backdrop-brightness-50 means a brightness magnitude of 50%.
  </span>
</s-box>

## Backdrop Contrast

Using `backdrop-contrast-[*]`, you can control an element’s backdrop contrast.

<utldemo utl="backdrop-contrast" class="overflow-hidden" :items="['50','100','150','200']" active="50">
    <div class="d-flex a-items-center j-content-center w-40 max-w-full h-40 bg-img-/img/docs/kite-l.png bg-r-no-repeat bg-p-center bg-s-cover rounded-md">
      <div class="target-demo w-70% h-70% bg-c-black[30] rounded-md"></div>
    </div>
</utldemo>

<s-box color="green:-2">
  <span>
    The value of the backdrop-contrast filter is measured in percentage (%), so backdrop-contrast-50 means a contrast magnitude of 50%.
  </span>
</s-box>

## Backdrop Hue Rotate

Using `backdrop-hue-rotate-[*]`, you can control an element’s backdrop hue rotation.

<utldemo utl="backdrop-hue-rotate" class="overflow-hidden" :items="['20','90','150','-30']" active="20">
    <div class="d-flex a-items-center j-content-center w-40 max-w-full h-40 bg-img-/img/docs/kite-l.png bg-r-no-repeat bg-p-center bg-s-cover rounded-md">
      <div class="target-demo w-70% h-70% bg-c-black[30] rounded-md"></div>
    </div>
</utldemo>

<s-box color="green:-2">
  <span>
    The value of the backdrop-hue-rotate filter is measured in degrees (deg), so backdrop-hue-rotate-150 means a hue rotate magnitude of 150deg.
  </span>
</s-box>

## Backdrop Invert

Using `backdrop-invert-[*]`, you can control wheter an element's backdrop colors should be rendered as inverted or normal.

<utldemo utl="backdrop-invert" class="overflow-hidden" :items="['25','75','100']" active="25">
    <div class="d-flex a-items-center j-content-center w-40 max-w-full h-40 bg-img-/img/docs/kite-l.png bg-r-no-repeat bg-p-center bg-s-cover rounded-md">
      <div class="target-demo w-70% h-70% bg-c-black[30] rounded-md"></div>
    </div>
</utldemo>

<s-box color="green:-2">
  <span>
    The value of the backdrop-invert filter is measured in percentage (%), so backdrop-invert-50 means an invert magnitude of 50%.
  </span>
</s-box>

## Backdrop Saturate

Using `backdrop-saturate-[*]`, you can control an element's backdrop saturation.

<utldemo utl="backdrop-saturate" class="overflow-hidden" :items="['0','50','100','200']" active="0">
    <div class="d-flex a-items-center j-content-center w-40 max-w-full h-40 bg-img-/img/docs/kite-l.png bg-r-no-repeat bg-p-center bg-s-cover rounded-md">
      <div class="target-demo w-70% h-70% bg-c-black[30] rounded-md"></div>
    </div>
</utldemo>

<s-box color="green:-2">
  <span>
    The value of the backdrop-saturate filter is measured in percentage (%), so backdrop-saturate-50 means a saturatation magnitude of 50%.
  </span>
</s-box>

## Backdrop Sepia

Using `backdrop-sepia-[*]`, you can control wheter an element's colors should be rendered as sepia or normal.

<utldemo utl="backdrop-sepia" class="overflow-hidden" :items="['0','50','75','100']" active="0">
    <div class="d-flex a-items-center j-content-center w-40 max-w-full h-40 bg-img-/img/docs/kite-l.png bg-r-no-repeat bg-p-center bg-s-cover rounded-md">
      <div class="target-demo w-70% h-70% bg-c-black[30] rounded-md"></div>
    </div>
</utldemo>

<s-box color="green:-2">
  <span>
    The value of the backdrop-sepia filter is measured in percentage (%), so backdrop-sepia-50 means a sepia magnitude of 50%.
  </span>
</s-box>

## Backdrop Opacity

Using `backdrop-opacity-[*]`, you can control the opacity of any other backdrop filters that may have been added to an element.

<utldemo utl="backdrop-opacity" class="overflow-hidden" :items="['20','60','90']" active="20">
    <div class="d-flex a-items-center j-content-center w-40 max-w-full h-40 bg-img-/img/docs/kite-l.png bg-r-no-repeat bg-p-center bg-s-cover rounded-md">
      <div class="target-demo w-70% h-70% bg-c-black[30] rounded-md backdrop-invert-100"></div>
    </div>
</utldemo>

<s-box color="green:-2">
  <span>
    The value of the backdrop-opacity filter is measured in percentage (%), so backdrop-opacity-50 means an opacity magnitude of 50%.
  </span>
</s-box>
