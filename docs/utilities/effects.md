---
title: Effects
section: Utilities
cat: Appearance
catid: 1
level: 5
---

Utilities for Effects.

## Box Shadow

Using `shadow-[*]`, you can control the box-shadow of an element.

<utldemo utl="shadow" :items="['xs','sm','md','lg','xl']" active="xs">
    <div class="p-relative w-full bg-c-grayblue:+5 pa-10 d-flex a-items-center j-content-center rounded-md">
        <div class="target-demo bg-gradient start-c-grayblue:+10 bg-c-grayblue:+25 w-55 h-25 rounded-md"></div>
    </div>
</utldemo>

### Customizing

Modify Mojo's configuration object to personalize box-shadow utilities and introduce fresh options as per your requirements.

<showcode lang="js">

```
mojo({
    base: {
        definedValues: {
           -- boxShadow ** : {
                xs: "0 1px 2px var(--m-shadow-color, #0000001a)",
                sm: "0 1px 3px var(--m-shadow-color, #0000001a), 0 1px 2px var(--m-shadow-color, #0000001a)",
                md: "0 4px 6px var(--m-shadow-color, #0000001a), 0 2px 4px var(--m-shadow-color, #0000001a)",
                lg: "0 10px 15px var(--m-shadow-color, #0000001a), 0 4px 6px var(--m-shadow-color, #0000001a)",
                xl: "0 20px 25px var(--m-shadow-color, #0000001a), 0 10px 10px var(--m-shadow-color, #0000001a)",
            }
        },
    },
})
```

</showcode>

<alert-box type="info">
  <span md="translate-y-0.4" _="(span) text-c-stronginvert text-w-400 font-code">
    When creating a new box-shadow utility, <br> we think it's best to use <span>`var(--m-shadow-color, #0000001a)`</span> (#0000001a being the default color) for the shadow color. This way, if you ever want to change the color down the line, you can easily do so using built-in color utilities like <span>`shadow-c-red`</span>.
  </span>
</alert-box>

## Mix Blend Mode

Using `mix-blend-[*]`, you can control the blending of an element's content and its background.

<utldemo utl="mix-blend" :items="['normal','multiply','screen','lighten','darken','difference','soft-light','hard-light','color-dodge','color-burn','exclusion','hue','color','luminosity','plus-lighter',]" active="normal">
    <div class="bg-c-primary a-items-center j-content-center rounded-md w-50 max-w-full h-50 pa-7">
        <div class="target-demo w-full h-full bg-img-/img/docs/kite-l.png bg-r-no-repeat bg-p-center bg-s-cover rounded-md"></div>
    </div>
</utldemo>

## Background Blend Mode

Using `bg-blend-[*]`, you can control the blending of an element's background color and background image.

<utldemo utl="bg-blend" :items="['normal','multiply','screen','lighten','darken','difference','soft-light','hard-light','color-dodge','color-burn','exclusion','hue','color','luminosity','plus-lighter',]" active="normal">
    <div class="target-demo w-50 max-w-full h-50 bg-c-primary bg-img-/img/docs/kite-l.png bg-r-no-repeat bg-p-center bg-s-cover rounded-md"></div>
</utldemo>
