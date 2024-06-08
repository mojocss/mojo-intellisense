---
title: Colors
section: Utilities
cat: Appearance
catid: 1
level: 4
---

Utilities for colors.

Mojo provides pre-defined colors with limitless tints and shades that can be utilized for every CSS color property. learn more in [Color System](/docs/guide/color-system)

## Pre-Defined values

Here's a list of predefined values that work for all color utilities:

| value              | css                            |
| ------------------ | ------------------------------ |
| <b>current</b>     | [property-color]: currentColor |
| <b>inherit</b>     | [property-color]: inherit      |
| <b>initial</b>     | [property-color]: initial      |
| <b>transparent</b> | [property-color]: transparent  |

## Background Color

Using `bg-c-[*]` or `bg-c-[*]:[shade|tint]`, you can control the color of an element's background.

<utldemo utl="bg-c" :items="['blue','blue:+6','pink','pink:-8','orchid', 'orchid:+10']" active="blue">
    <div class="target-demo w-25 h-25 rounded-md">
    </div>
</utldemo>

<s-box color="green:-2">
  <span>
    You can use Arbitrary color values like <span class="hl">"bg-c-(#344224)"</span> as well. <br>
    <span class="text-sm text-w-400">Learn more about <nuxt-link to="/docs/guide/arbitrary-styling">Arbitrary Styling</nuxt-link></span>
  </span>
</s-box>

<s-box color="stronginvert">
  <span md="translate-y-0.7">
    Supported Arbitrary color values are <span class="hl">HEX, RGB, RGBA, HSL, HSA</span>.
  </span>
</s-box>

### Background Alpha

Using `bg-c-[*][alpha]`, you can control the alpha channel (transparency)
of an element's background color. The alpha value should fall within a range of <b>1</b> to <b>100</b>.

<utldemo utl="bg-c" :items="[['[40]','blue[40]'],['[15]','blue[15]'],['+10[40]','blue:+10[40]']]" active="[40]">
    <div class="target-demo w-25 h-25 rounded-md">
    </div>
</utldemo>

<alert-box type="info">
  <span md="translate-y-0.4">
    If you want to change the alpha value on its own, utilize the syntax bg-alpha-[*], such as <span class="text-c-blue">bg-alpha-35</span>.
  </span>
</alert-box>

## Text Color

Using `text-c-[*]` or `text-c-[*]:[shade|tint]`, you can control the color of an element's text.

<utldemo utl="text-c" :items="['blue','blue:+6','pink','pink:-8','orchid', 'orchid:+10']" active="blue">
    <div class="font-lato text-w-medium target-demo text-xl">
        Life is magical, embrace it with open arms.
    </div>
</utldemo>

<s-box color="green:-2">
  <span>
    You can use Arbitrary color values like <span class="hl">"text-c-(#344224)"</span> as well. <br>
    <span class="text-sm text-w-400">Learn more about <nuxt-link to="/docs/guide/arbitrary-styling">Arbitrary Styling</nuxt-link></span>
  </span>
</s-box>

<s-box color="stronginvert">
  <span md="translate-y-0.7">
    Supported Arbitrary color values are <span class="hl">HEX, RGB, RGBA, HSL, HSA</span>.
  </span>
</s-box>

### Text Alpha

Using `text-c-[*][alpha]`, you can control the alpha channel (transparency) of an element's text color. The alpha value should fall within a range of <b>1</b> to <b>100</b>.

<utldemo utl="text-c" :items="[['[40]','blue[40]'],['[15]','blue[15]'],['+10[40]','blue:+10[40]']]" active="[40]">
    <div class="font-lato text-w-medium target-demo text-xl">
        Life is magical, embrace it with open arms.
    </div>
</utldemo>

<alert-box type="info">
  <span md="translate-y-0.4">
    If you want to change the alpha value on its own, utilize the syntax text-alpha-[*], such as <span class="text-c-blue">"text-alpha-35"</span>.
  </span>
</alert-box>

## Border Color

Using `border-c-[*]` or `border-c-[*]:[shade|tint]`, you can control the color of an element's border.

<utldemo utl="border-c" :items="['blue','blue:+6','pink','pink:-8','orchid', 'orchid:+10']" active="blue">
    <div class="target-demo w-25 h-25 border-4 rounded-md">
    </div>
</utldemo>

<s-box color="green:-2">
  <span>
    You can use Arbitrary color values like <span class="hl">"border-c-(#344224)"</span> as well. <br>
    <span class="text-sm text-w-400">Learn more about <nuxt-link to="/docs/guide/arbitrary-styling">Arbitrary Styling</nuxt-link></span>
  </span>
</s-box>

<s-box color="stronginvert">
  <span md="translate-y-0.7">
    Supported Arbitrary color values are <span class="hl">HEX, RGB, RGBA, HSL, HSA</span>.
  </span>
</s-box>

### Border Alpha

Using `border-c-[*][alpha]`, you can control the alpha channel (transparency) of an element's border color. The alpha value should fall within a range of <b>1</b> to <b>100</b>.

<utldemo utl="border-c" :items="[['[40]','blue[40]'],['[15]','blue[15]'],['+10[40]','blue:+10[40]']]" active="[40]">
    <div class="target-demo w-25 h-25 border-4 rounded-md">
    </div>
</utldemo>

<alert-box type="info">
  <span md="translate-y-0.4">
    If you want to change the alpha value on its own, utilize the syntax border-alpha-[*], such as <span class="text-c-blue">"border-alpha-35"</span>.
  </span>
</alert-box>

### Side Colors

Using `border-[side]-c-[*]`, you can set the border color for one side of an element.

<utldemo utl="border" :items="['top-c-blue','right-c-pink','bottom-c-orchid', 'left-c-orchid:+10']" active="top-c-blue">
    <div class="target-demo w-25 h-25 border-4 border-c-invert[40] rounded-md">
    </div>
</utldemo>

<alert-box type="info">
  <span md="translate-y-0.4">
    If you want to change the alpha value, utilize the syntax border-[side]-c-color[*], such as <span class="text-c-blue">"border-top-c-red[40]"</span>.
  </span>
</alert-box>

## Outline Color

Using `outline-c-[*]` or `outline-c-[*]:[shade|tint]`, you can control the color of an element's border.

<utldemo utl="outline-c" :items="['blue','blue:+6','pink','pink:-8','orchid', 'orchid:+10']" active="blue">
    <div class="target-demo bg-c-body outline-o-2 border-1 border-c-body:-8 w-25 h-25 outline-4 rounded-md" blackout="border-c-body:+6">
    </div>
</utldemo>

<s-box color="green:-2">
  <span>
    You can use Arbitrary color values like <span class="hl">"outline-c-(#344224)"</span> as well. <br>
    <span class="text-sm text-w-400">Learn more about <nuxt-link to="/docs/guide/arbitrary-styling">Arbitrary Styling</nuxt-link></span>
  </span>
</s-box>

<s-box color="stronginvert">
  <span md="translate-y-0.7">
    Supported Arbitrary color values are <span class="hl">HEX, RGB, RGBA, HSL, HSA</span>.
  </span>
</s-box>

### Outline Alpha

Using `outline-c-[*][alpha]`, you can control the alpha channel (transparency) of an element's outline color. The alpha value should fall within a range of <b>1</b> to <b>100</b>.

<utldemo utl="outline-c" :items="[['[40]','blue[40]'],['[15]','blue[15]'],['+10[40]','blue:+10[40]']]" active="[40]">
    <div class="target-demo bg-c-body outline-o-2 border-1 border-c-body:-8 w-25 h-25 outline-4 rounded-md" blackout="border-c-body:+6">
    </div>
</utldemo>

<alert-box type="info">
  <span md="translate-y-0.4">
    If you want to change the alpha value on its own, utilize the syntax outline-alpha-[*], such as <span class="text-c-blue">"outline-alpha-35"</span>.
  </span>
</alert-box>

## Shadow Color

Using `shadow-c-[*]` or `shadow-c-[*]:[shade|tint]`, you can control the color of an element's box-shadow.

<utldemo utl="shadow-c" :items="['blue','blue:+6','pink','pink:-8','orchid', 'orchid:+10']" active="blue">
    <div class="target-demo w-25 h-25 box-shadow:0_0_10px_2px_var(--m-shadow-color) rounded-md">
    </div>
</utldemo>

<s-box color="green:-2">
  <span>
    You can use Arbitrary color values like <span class="hl">"shadow-c-(#344224)"</span> as well. <br>
    <span class="text-sm text-w-400">Learn more about <nuxt-link to="/docs/guide/arbitrary-styling">Arbitrary Styling</nuxt-link></span>
  </span>
</s-box>

<s-box color="stronginvert">
  <span md="translate-y-0.7">
    Supported Arbitrary color values are <span class="hl">HEX, RGB, RGBA, HSL, HSA</span>.
  </span>
</s-box>

### Shadow Alpha

Using `shadow-c-[*][alpha]`, you can control the alpha channel (transparency) of an element's shadow color. The alpha value should fall within a range of <b>1</b> to <b>100</b>.

<utldemo utl="shadow-c" :items="[['[40]','blue[40]'],['[15]','blue[15]'],['+10[40]','blue:+10[40]']]" active="[40]">
    <div class="target-demo w-25 h-25 box-shadow:0_0_10px_2px_var(--m-shadow-color) rounded-md">
    </div>
</utldemo>

<alert-box type="info">
  <span md="translate-y-0.4">
    If you want to change the alpha value on its own, utilize the syntax shadow-alpha-[*], such as <span class="text-c-blue">"shadow-alpha-35"</span>.
  </span>
</alert-box>

## Fill Color

Using `fill-c-[*]` or `fill-c-[*]:[shade|tint]`, you can control the fill color of an SVG.

<utldemo utl="fill-c" :items="['blue','blue:+6','pink','pink:-8','orchid', 'orchid:+10']" active="blue">
    <svg class="target-demo w-18 h-18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.2238 15.5078L13.0111 20.1579C12.8687 20.4572 12.5107 20.5843 12.2115 20.4419C12.1448 20.4102 12.0845 20.3664 12.0337 20.3127L8.49229 16.574C8.39749 16.4739 8.27113 16.4095 8.13445 16.3917L3.02816 15.7242C2.69958 15.6812 2.46804 15.3801 2.51099 15.0515C2.52056 14.9782 2.54359 14.9074 2.5789 14.8425L5.04031 10.3191C5.1062 10.198 5.12839 10.0579 5.10314 9.92241L4.16 4.85979C4.09931 4.53402 4.3142 4.22074 4.63997 4.16005C4.7126 4.14652 4.78711 4.14652 4.85974 4.16005L9.92237 5.10319C10.0579 5.12843 10.198 5.10625 10.319 5.04036L14.8424 2.57895C15.1335 2.42056 15.4979 2.52812 15.6562 2.81919C15.6916 2.88409 15.7146 2.95495 15.7241 3.02821L16.3916 8.13449C16.4095 8.27118 16.4739 8.39754 16.5739 8.49233L20.3127 12.0337C20.5533 12.2616 20.5636 12.6414 20.3357 12.8819C20.2849 12.9356 20.2246 12.9794 20.1579 13.0111L15.5078 15.2238C15.3833 15.2831 15.283 15.3833 15.2238 15.5078ZM16.0206 17.4349L17.4348 16.0207L21.6775 20.2633L20.2633 21.6775L16.0206 17.4349Z"></path></svg>
</utldemo>

<s-box color="green:-2">
  <span>
    You can use Arbitrary color values like <span class="hl">"fill-c-(#344224)"</span> as well. <br>
    <span class="text-sm text-w-400">Learn more about <nuxt-link to="/docs/guide/arbitrary-styling">Arbitrary Styling</nuxt-link></span>
  </span>
</s-box>

<s-box color="stronginvert">
  <span md="translate-y-0.7">
    Supported Arbitrary color values are <span class="hl">HEX, RGB, RGBA, HSL, HSA</span>.
  </span>
</s-box>

### Fill Alpha

Using `fill-c-[*][alpha]`, you can control the alpha channel (transparency) of an SVG's fill color. The alpha value should fall within a range of <b>1</b> to <b>100</b>.

<utldemo utl="fill-c" :items="[['[40]','blue[40]'],['[15]','blue[15]'],['+10[40]','blue:+10[40]']]" active="[40]">
    <svg class="target-demo w-18 h-18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.2238 15.5078L13.0111 20.1579C12.8687 20.4572 12.5107 20.5843 12.2115 20.4419C12.1448 20.4102 12.0845 20.3664 12.0337 20.3127L8.49229 16.574C8.39749 16.4739 8.27113 16.4095 8.13445 16.3917L3.02816 15.7242C2.69958 15.6812 2.46804 15.3801 2.51099 15.0515C2.52056 14.9782 2.54359 14.9074 2.5789 14.8425L5.04031 10.3191C5.1062 10.198 5.12839 10.0579 5.10314 9.92241L4.16 4.85979C4.09931 4.53402 4.3142 4.22074 4.63997 4.16005C4.7126 4.14652 4.78711 4.14652 4.85974 4.16005L9.92237 5.10319C10.0579 5.12843 10.198 5.10625 10.319 5.04036L14.8424 2.57895C15.1335 2.42056 15.4979 2.52812 15.6562 2.81919C15.6916 2.88409 15.7146 2.95495 15.7241 3.02821L16.3916 8.13449C16.4095 8.27118 16.4739 8.39754 16.5739 8.49233L20.3127 12.0337C20.5533 12.2616 20.5636 12.6414 20.3357 12.8819C20.2849 12.9356 20.2246 12.9794 20.1579 13.0111L15.5078 15.2238C15.3833 15.2831 15.283 15.3833 15.2238 15.5078ZM16.0206 17.4349L17.4348 16.0207L21.6775 20.2633L20.2633 21.6775L16.0206 17.4349Z"></path></svg>
</utldemo>

<alert-box type="info">
  <span md="translate-y-0.4">
    If you want to change the alpha value on its own, utilize the syntax fill-alpha-[*], such as <span class="text-c-blue">"fill-alpha-35"</span>.
  </span>
</alert-box>

## Stroke Color

Using `stroke-c-[*]` or `stroke-c-[*]:[shade|tint]`, you can control the stroke color of an SVG.

<utldemo utl="stroke-c" :items="['blue','blue:+6','pink','pink:-8','orchid', 'orchid:+10']" active="blue">
  <svg class="target-demo w-18 h-18 fill-c-transparent" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.1986 9.94435C14.7649 9.53358 14.4859 8.98601 14.4085 8.39371L14.0056 5.31126L11.275 6.79711C10.7503 7.08262 10.1433 7.17876 9.55608 7.06936L6.49998 6.50003L7.06931 9.55612C7.17871 10.1434 7.08257 10.7503 6.79707 11.275L5.31121 14.0056L8.39367 14.4085C8.98596 14.4859 9.53353 14.7649 9.94431 15.1986L12.0821 17.4555L13.4178 14.6485C13.6745 14.1091 14.109 13.6745 14.6484 13.4179L17.4555 12.0821L15.1986 9.94435ZM15.2238 15.5078L13.0111 20.1579C12.8687 20.4572 12.5107 20.5843 12.2115 20.4419C12.1448 20.4102 12.0845 20.3664 12.0337 20.3127L8.49229 16.574C8.39749 16.4739 8.27113 16.4095 8.13445 16.3917L3.02816 15.7242C2.69958 15.6812 2.46804 15.3801 2.51099 15.0515C2.52056 14.9782 2.54359 14.9074 2.5789 14.8425L5.04031 10.3191C5.1062 10.198 5.12839 10.0579 5.10314 9.92241L4.16 4.85979C4.09931 4.53402 4.3142 4.22074 4.63997 4.16005C4.7126 4.14652 4.78711 4.14652 4.85974 4.16005L9.92237 5.10319C10.0579 5.12843 10.198 5.10625 10.319 5.04036L14.8424 2.57895C15.1335 2.42056 15.4979 2.52812 15.6562 2.81919C15.6916 2.88409 15.7146 2.95495 15.7241 3.02821L16.3916 8.13449C16.4095 8.27118 16.4739 8.39754 16.5739 8.49233L20.3127 12.0337C20.5533 12.2616 20.5636 12.6414 20.3357 12.8819C20.2849 12.9356 20.2246 12.9794 20.1579 13.0111L15.5078 15.2238C15.3833 15.2831 15.283 15.3833 15.2238 15.5078ZM16.0206 17.4349L17.4348 16.0207L21.6775 20.2633L20.2633 21.6775L16.0206 17.4349Z"></path></svg>
</utldemo>

<s-box color="green:-2">
  <span>
    You can use Arbitrary color values like <span class="hl">"stroke-c-(#344224)"</span> as well. <br>
    <span class="text-sm text-w-400">Learn more about <nuxt-link to="/docs/guide/arbitrary-styling">Arbitrary Styling</nuxt-link></span>
  </span>
</s-box>

<s-box color="stronginvert">
  <span md="translate-y-0.7">
    Supported Arbitrary color values are <span class="hl">HEX, RGB, RGBA, HSL, HSA</span>.
  </span>
</s-box>

### Stroke Alpha

Using `stroke-c-[*][alpha]`, you can control the alpha channel (transparency) of an SVG's stroke color. The alpha value should fall within a range of <b>1</b> to <b>100</b>.

<utldemo utl="stroke-c" :items="[['[40]','blue[40]'],['[15]','blue[15]'],['+10[40]','blue:+10[40]']]" active="[40]">
  <svg class="target-demo w-18 h-18 fill-c-transparent" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.1986 9.94435C14.7649 9.53358 14.4859 8.98601 14.4085 8.39371L14.0056 5.31126L11.275 6.79711C10.7503 7.08262 10.1433 7.17876 9.55608 7.06936L6.49998 6.50003L7.06931 9.55612C7.17871 10.1434 7.08257 10.7503 6.79707 11.275L5.31121 14.0056L8.39367 14.4085C8.98596 14.4859 9.53353 14.7649 9.94431 15.1986L12.0821 17.4555L13.4178 14.6485C13.6745 14.1091 14.109 13.6745 14.6484 13.4179L17.4555 12.0821L15.1986 9.94435ZM15.2238 15.5078L13.0111 20.1579C12.8687 20.4572 12.5107 20.5843 12.2115 20.4419C12.1448 20.4102 12.0845 20.3664 12.0337 20.3127L8.49229 16.574C8.39749 16.4739 8.27113 16.4095 8.13445 16.3917L3.02816 15.7242C2.69958 15.6812 2.46804 15.3801 2.51099 15.0515C2.52056 14.9782 2.54359 14.9074 2.5789 14.8425L5.04031 10.3191C5.1062 10.198 5.12839 10.0579 5.10314 9.92241L4.16 4.85979C4.09931 4.53402 4.3142 4.22074 4.63997 4.16005C4.7126 4.14652 4.78711 4.14652 4.85974 4.16005L9.92237 5.10319C10.0579 5.12843 10.198 5.10625 10.319 5.04036L14.8424 2.57895C15.1335 2.42056 15.4979 2.52812 15.6562 2.81919C15.6916 2.88409 15.7146 2.95495 15.7241 3.02821L16.3916 8.13449C16.4095 8.27118 16.4739 8.39754 16.5739 8.49233L20.3127 12.0337C20.5533 12.2616 20.5636 12.6414 20.3357 12.8819C20.2849 12.9356 20.2246 12.9794 20.1579 13.0111L15.5078 15.2238C15.3833 15.2831 15.283 15.3833 15.2238 15.5078ZM16.0206 17.4349L17.4348 16.0207L21.6775 20.2633L20.2633 21.6775L16.0206 17.4349Z"></path></svg>
</utldemo>

<alert-box type="info">
  <span md="translate-y-0.4">
    If you want to change the alpha value on its own, utilize the syntax stroke-alpha-[*], such as <span class="text-c-blue">"stroke-alpha-35"</span>.
  </span>
</alert-box>

## Accent Color

Using `accent-c-[*]` or `accent-c-[*]:[shade|tint]`, you can control the accent color of an element's box-shadow. This utility enables developers to customize the look of elements like checkboxes and radio groups by replacing the browser's default color.

<utldemo utl="accent-c" :items="['blue','blue:+6','pink','pink:-8','orchid', 'orchid:+10']" active="blue">
    <div class="d-flex a-items-center gap-3">
      <label>
        <input type="checkbox" checked> Default
      </label>
      <label>
        <input type="checkbox" class="target-demo" checked> Customized
      </label>
    </div>
</utldemo>

<s-box color="green:-2">
  <span>
    You can use Arbitrary color values like <span class="hl">"accent-c-(#344224)"</span> as well. <br>
    <span class="text-sm text-w-400">Learn more about <nuxt-link to="/docs/guide/arbitrary-styling">Arbitrary Styling</nuxt-link></span>
  </span>
</s-box>

<s-box color="stronginvert">
  <span md="translate-y-0.7">
    Supported Arbitrary color values are <span class="hl">HEX, RGB, RGBA, HSL, HSA</span>.
  </span>
</s-box>

### Accent Alpha

Using `accent-c-[*][alpha]`, you can control the alpha channel (transparency) of an element's accent color. The alpha value should fall within a range of <b>1</b> to <b>100</b>.

<alert-box type="warning">
  <span md="translate-y-0.4">
    Currently, the only browser that allows you to change the alpha value for accent color is <span class="text-c-orange">Firefox</span>.
  </span>
</alert-box>

<utldemo utl="accent-c" :items="[['[40]','blue[40]'],['[15]','blue[15]'],['+10[40]','blue:+10[40]']]" active="[40]">
    <label>
      <input type="checkbox" class="target-demo" checked> Customized
    </label>
</utldemo>

<alert-box type="info">
  <span md="translate-y-0.4">
    If you want to change the alpha value on its own, utilize the syntax accent-alpha-[*], such as <span class="text-c-blue">"accent-alpha-35"</span>.
  </span>
</alert-box>

## Caret Color

Using `caret-c-[*]` or `caret-c-[*]:[shade|tint]`, you can control the color of text input cursor.

<utldemo utl="caret-c" :items="['blue','blue:+6','pink','pink:-8','orchid', 'orchid:+10']" active="blue">
    <div class="d-flex j-content-center a-items-center flex-col gap-3">
      <label>
        <input type="text" class="target-demo bg-c-body:+2 rounded-md pa-3" dim="bg-c-body:-3" blackout="bg-c-body:+5" focus="outline-none shadow-solid-4 shadow-c-primary[10]" />
      </label>
      <span>Focus the input to see the caret color</span>
    </div>
</utldemo>

<s-box color="green:-2">
  <span>
    You can use Arbitrary color values like <span class="hl">"caret-c-(#344224)"</span> as well. <br>
    <span class="text-sm text-w-400">Learn more about <nuxt-link to="/docs/guide/arbitrary-styling">Arbitrary Styling</nuxt-link></span>
  </span>
</s-box>

<s-box color="stronginvert">
  <span md="translate-y-0.7">
    Supported Arbitrary color values are <span class="hl">HEX, RGB, RGBA, HSL, HSA</span>.
  </span>
</s-box>

### Caret Alpha

Using `caret-c-[*][alpha]`, you can control the alpha channel (transparency) of an input's text input cursor color. The alpha value should fall within a range of <b>1</b> to <b>100</b>.

<utldemo utl="caret-c" :items="[['[40]','blue[40]'],['[15]','blue[15]'],['+10[40]','blue:+10[40]']]" active="[40]">
    <div class="d-flex j-content-center a-items-center flex-col gap-3">
      <label>
        <input type="text" class="target-demo bg-c-body:+2 rounded-md pa-3" dim="bg-c-body:-3" blackout="bg-c-body:+5" focus="outline-none shadow-solid-4 shadow-c-primary[10]" />
      </label>
      <span>Focus the input to see the caret color</span>
    </div>
</utldemo>

<alert-box type="info">
  <span md="translate-y-0.4">
    If you want to change the alpha value on its own, utilize the syntax caret-alpha-[*], such as <span class="text-c-blue">"caret-alpha-35"</span>.
  </span>
</alert-box>

## Placeholder Color

Using `placeholder-c-[*]` or `placeholder-c-[*]:[shade|tint]`, you can control the text color of an input's placeholder.

<utldemo utl="placeholder-c" :items="['blue','blue:+6','pink','pink:-8','orchid', 'orchid:+10']" active="blue">
    <div class="d-flex j-content-center a-items-center flex-col gap-3 w-full">
      <label class="w-full max-w-300px">
        <input type="text" class="target-demo w-full bg-c-body:+2 rounded-md pa-3" dim="bg-c-body:-3" blackout="bg-c-body:+5" focus="outline-none shadow-solid-4 shadow-c-primary[10]" placeholder="This is a placeholder..." />
      </label>
    </div>
</utldemo>

<s-box color="green:-2">
  <span>
    You can use Arbitrary color values like <span class="hl">"placeholder-c-(#344224)"</span> as well. <br>
    <span class="text-sm text-w-400">Learn more about <nuxt-link to="/docs/guide/arbitrary-styling">Arbitrary Styling</nuxt-link></span>
  </span>
</s-box>

<s-box color="stronginvert">
  <span md="translate-y-0.7">
    Supported Arbitrary color values are <span class="hl">HEX, RGB, RGBA, HSL, HSA</span>.
  </span>
</s-box>

### Placeholder Alpha

Using `placeholder-c-[*][alpha]`, you can control the alpha channel (transparency) of an input's placeholder text color. The alpha value should fall within a range of <b>1</b> to <b>100</b>.

<utldemo utl="placeholder-c" :items="[['[40]','blue[40]'],['[15]','blue[15]'],['+10[40]','blue:+10[40]']]" active="[40]">
    <div class="d-flex j-content-center a-items-center flex-col gap-3 w-full">
      <label class="w-full max-w-300px">
        <input type="text" class="target-demo w-full bg-c-body:+2 rounded-md pa-3" dim="bg-c-body:-3" blackout="bg-c-body:+5" focus="outline-none shadow-solid-4 shadow-c-primary[10]" placeholder="This is a placeholder..." />
      </label>
    </div>
</utldemo>

<alert-box type="info">
  <span md="translate-y-0.4">
    If you want to change the alpha value on its own, utilize the syntax placeholder-alpha-[*], such as <span class="text-c-blue">"placeholder-alpha-35"</span>.
  </span>
</alert-box>

## Gradient Colors

In order to give an element a gradient background color, it is necessary to begin with the `bg-gradient` utility before proceeding to the color stops utilities.

<showcode lang="html">

```
<div class="-- bg-gradient ** ...">
    <!-- ... -->
</div>
```

</showcode>

Then, you must specify both the start and end color stops. Adding of a middle color stop is up to you.

<showcode lang="html">

```
<div class="bg-gradient -- start-c-blue ** mid-c-red -- end-c-green **">
    <!-- ... -->
</div>
```

</showcode>

### Start Color

Using `start-c-[*]` or `start-c-[*]:[shade|tint]`, you can control the gradient's starting color stop.

<utldemo utl="start-c" :items="['blue','blue:+6','pink','pink:-8','orchid', 'orchid:+10']" active="blue">
    <div class="d-flex flex-col gap-2 w-full max-w-md">
      <div class="w-5 h-5 rounded-full bg-c target-demo-raw"></div>
      <div class="w-full h-10 bg-gradient target-demo end-c-transparent gd-dir-right rounded-full"></div>
    </div>
</utldemo>

### Middle Color

Using `mid-c-[*]` or `mid-c-[*]:[shade|tint]`, you can control the gradient's middle color stop.

<utldemo utl="mid-c" :items="['blue','blue:+6','pink','pink:-8','orchid', 'orchid:+10']" active="blue">
    <div class="d-flex flex-col gap-2 w-full max-w-md">
      <div class="w-5 h-5 a-self-center rounded-full bg-c target-demo-raw"></div>
      <div class="w-full h-10 bg-gradient target-demo start-c-transparent end-c-transparent gd-dir-right rounded-full"></div>
    </div>
</utldemo>

### End Color

Using `end-c-[*]` or `end-c-[*]:[shade|tint]`, you can control the gradient's ending color stop.

<utldemo utl="end-c" :items="['blue','blue:+6','pink','pink:-8','orchid', 'orchid:+10']" active="blue">
    <div class="d-flex flex-col gap-2 w-full max-w-md">
      <div class="w-5 h-5 a-self-end rounded-full bg-c target-demo-raw"></div>
      <div class="w-full h-10 bg-gradient target-demo start-c-transparent gd-dir-right rounded-full"></div>
    </div>
</utldemo>

<alert-box type="info">
  <span md="translate-y-0.4" _="(span) text-c-stronginvert font-code">
    Using <span>`start-c-[*][alpha]`</span>, <span>`mid-c-[*][alpha]`</span> and <span>`end-c-[*][alpha]`</span> you can control the alpha channel (transparency) of gradients color stops. The alpha value should fall within a range of <b>1</b> to <b>100</b>.
  </span>
</alert-box>

<s-box color="green:-2">
  <span>
    You can use Arbitrary color values like <span class="hl">"start-c-(#344224)"</span> as well. <br>
    <span class="text-sm text-w-400">Learn more about <nuxt-link to="/docs/guide/arbitrary-styling">Arbitrary Styling</nuxt-link></span>
  </span>
</s-box>

<s-box color="stronginvert">
  <span md="translate-y-0.7">
    Supported Arbitrary color values are <span class="hl">HEX, RGB, RGBA, HSL, HSA</span>.
  </span>
</s-box>

### Gradient Direction

Using `gd-dir-[*]`, you can change the direction of gradient.

<utldemo utl="gd-dir" :items="['bottom','top','left','right','bottom-right','bottom-left','top-left','top-right']" active="bottom">
    <div class="d-flex flex-col gap-2">
      <div class="w-25 h-25 bg-gradient target-demo start-c-transparent end-c-primary rounded-md"></div>
    </div>
</utldemo>

<s-box color="green:-2">
  <span>
    You can use Arbitrary color values like <span class="hl">"gd-dir-(45deg)"</span> or <span class="hl">"gd-dir-(top_25deg)"</span> as well. <br>
    <span class="text-sm text-w-400">Learn more about <nuxt-link to="/docs/guide/arbitrary-styling">Arbitrary Styling</nuxt-link></span>
  </span>
</s-box>
