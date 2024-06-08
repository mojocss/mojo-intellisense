---
title: Typography
section: Utilities
cat: Appearance
catid: 1
level: 2
---

Utilities for Typography.

## Text Design

The utility `text-[letters]` provides a simple way to set various text styles and properties, such as font size, line height, font weight, letter spacing, etc...

<utldemo utl="text" :items="['sm', 'md','lg','xl','xxl']" active="md">
    <div class="d-flex a-items-center j-content-center" md="h-30">
        <div class="font-lato text-w-medium target-demo">
            Life is magical, embrace it with open arms.
        </div>
    </div>
</utldemo>

### Customizing

By default, this utility sets font size and line height for different text sizes.

But you can customize it by adjusting values in the Mojo's configuration object to set other styles like font weight (<b>fontWeight</b>) and letter spacing (<b>letterSpacing</b>).

<showcode lang="js">

```
mojo({
    base: {
        -- textDesign ** : {
            sm: {
                fontSize: "0.875rem",
                lineHeight: "1.5",
            },
            md: {
                fontSize: "1rem",
                lineHeight: "1.5",
            },
            lg: {
                fontSize: "1.125rem",
                lineHeight: "1.5",
            },
            xl: {
                fontSize: "1.5rem",
                lineHeight: "1.5",
            },
            xxl: {
                fontSize: "2rem",
                lineHeight: "1.5",
            },
            -- big ** : {
                fontSize: "4rem",
                lineHeight: "1.6",
                letterSpcaing: "4px"
            },
        },
    },
})
```

</showcode>

You can access your custom utilities for text design such as `big` by using the syntax `text-big`.

## Font Size

Using `text-[numbers]`, you can control the font size of an element.

<utldemo utl="text" :items="['100', '200','300','135','148']" active="200">
    <div class="d-flex a-items-center j-content-center" md="h-30">
        <div class="font-lato text-w-medium target-demo">
            Life is magical, embrace it with open arms.
        </div>
    </div>
</utldemo>

The font-size utility enables you to easily adjust the size of text in your design by using a numerical value that gets converted into a multiple of <b>0.01rem</b> (can be changed in config → units), allowing you to specify precise sizes like text-100 and even decimal values like text-114.4.

<s-box color="green:-2">
  <span>
    Arbitrary values like <span class="hl">text-(12px)</span> or <span class="hl">text-12px</span> are supported. <br>
    <span class="text-sm text-w-400">Learn more about <nuxt-link to="/docs/guide/arbitrary-styling">Arbitrary Styling</nuxt-link></span>
  </span>
</s-box>

## Font Weight

Using `text-w-[*]`, you can control the font weight of text.

<utldemo utl="text-w" :items="['light', 'normal', 'bold', 'black',]" active="normal">
    <div class="d-flex a-items-center j-content-center">
        <div class="font-lato target-demo text-xl">
            Life is magical, embrace it with open arms.
        </div>
    </div>
</utldemo>

A list of available utilites for font-weight:

| utility                 | value |
| ----------------------- | ----- |
| <b>text-w-hair</b>      | 100   |
| <b>text-w-thin</b>      | 200   |
| <b>text-w-light</b>     | 300   |
| <b>text-w-normal</b>    | 400   |
| <b>text-w-medium</b>    | 500   |
| <b>text-w-semibold</b>  | 600   |
| <b>text-w-bold</b>      | 700   |
| <b>text-w-extrabold</b> | 800   |
| <b>text-w-black</b>     | 900   |

<alert-box type="info">
  <span md="translate-y-0.4">
    Numeric values can also be used, such as <span class="text-c-blue">text-w-600</span>.
  </span>
</alert-box>

## Font Style

Using `text-s-[*]`, you can control the style of text.

<utldemo utl="text-s" :items="['italic', 'normal']" active="italic">
    <div class="d-flex a-items-center j-content-center">
        <div class="font-lato text-w-medium target-demo text-xl">
            Life is magical, embrace it with open arms.
        </div>
    </div>
</utldemo>

## Letter Spacing

Using `text-ls-[*]`, you can control the letter spacing of an element.

<utldemo utl="text-ls" :items="['normal', 'tighter','tight','loose','looser','open']" active="normal">
    <div class="d-flex a-items-center j-content-center">
        <div class="font-lato text-w-medium target-demo text-xl">
            Life is magical, embrace it with open arms.
        </div>
    </div>
</utldemo>

<s-box color="green:-2">
  <span>
    You can use Arbitrary values like <span class="hl">text-ls-(2px)</span> as well. <br>
    <span class="text-sm text-w-400">Learn more about <nuxt-link to="/docs/guide/arbitrary-styling">Arbitrary Styling</nuxt-link></span>
  </span>
</s-box>

## Line Height

Using `text-lh-[*]`, you can control the line height of an element.

<utldemo utl="text-lh" :items="['normal', 'tighter','tight','loose','looser','open','resp']" active="normal">
    <div class="d-flex a-items-center j-content-center">
        <div class="font-lato text-w-medium target-demo text-xl">
            Looks like the magician's assistant took his disappearing act a little too seriously and poof! vanished right into thin air. Now, the poor magician is flying solo and still trying to conjure up his missing partner. Let's hope he doesn't make himself disappear in the process!
        </div>
    </div>
</utldemo>

<s-box color="green:-2">
  <span>
    You can use Arbitrary values like <span class="hl">text-lh-(1.4em)</span> as well. <br>
    <span class="text-sm text-w-400">Learn more about <nuxt-link to="/docs/guide/arbitrary-styling">Arbitrary Styling</nuxt-link></span>
  </span>
</s-box>

## Text Align

Using `text-a-[*]`, you can control the alignment of text.

<utldemo utl="text-a" :items="['left', 'center','right','justify','start','end']" active="left">
    <div class="d-flex a-items-center j-content-center">
        <div class="font-lato text-w-medium target-demo text-xl">
            Looks like the magician's assistant took his disappearing act a little too seriously and poof! vanished right into thin air. Now, the poor magician is flying solo and still trying to conjure up his missing partner. Let's hope he doesn't make himself disappear in the process!
        </div>
    </div>
</utldemo>

## Text Decoration

Using `text-d-[*]`, you can control the decoration of text.

<utldemo utl="text-d" :items="['underline', 'overline','line-through','none',]" active="underline">
    <div class="d-flex a-items-center j-content-center">
        <div class="font-lato text-w-medium target-demo text-xl">
           Life is magical, embrace it with open arms.
        </div>
    </div>
</utldemo>

## Text Transform

Using `text-t-[*]`, you can control the transformation of text.

<utldemo utl="text-t" :items="['uppercase','lowercase', 'capitalize', 'none',]" active="uppercase">
    <div class="d-flex a-items-center j-content-center">
        <div class="font-lato text-w-medium target-demo text-xl">
           Life is magical, embrace it with open arms.
        </div>
    </div>
</utldemo>

## White Space

Using `text-ws-[*]`, you can control the element's white-space property.

<utldemo utl="text-ws" :items="['normal','nowrap', 'pre','pre-wrap', 'pre-line', 'break-spaces']" active="normal">
    <div class="d-flex a-items-center j-content-center overflow-auto">
        <div class="w-full font-lato text-w-medium target-demo text-xl">
           Looks like the magician's assistant took his disappearing act a little too seriously and poof! vanished right into thin air. Now, the poor magician is flying solo and still trying to conjure up his missing partner. Let's hope he doesn't make himself disappear in the process!
        </div>
    </div>
</utldemo>

## Word Break

Using `text-wb-[*]`, you can control the word breaks in the element.

<utldemo utl="text-wb" class="overflow-hidden" :items="['normal','words', 'all','keep']" active="normal">
    <div class="d-flex a-items-center j-content-center">
        <div class="w-40% font-lato text-w-medium target-demo text-xl py-3 px-4 rounded-6 bg-c-stronginvert[6]" md="w-60%">
           As the wizard attempted to cast a spell with the longest English word, <span class="text-c-stronginvert">"Pneumonoultramicroscopicsilicovolcanoconiosis"</span>, he suddenly realized he had forgotten its pronunciation and ended up turning himself into a newt instead.
        </div>
    </div>
</utldemo>

## Vertical Align

Using `v-align-[*]`, you can control the vertical alignment of an inline box.

<utldemo utl="v-align" :items="['baseline','top', 'middle', 'bottom', 'text-top', 'text-bottom', 'sub', 'super']" active="baseline">
    <div class="d-flex a-items-center j-content-center">
        <p class="font-lato text-w-medium text-xl">
            Life is magical, <img class="target-demo" src="/img/docs/pattern-bg.svg" width="16" height="16"> embrace it with open arms.
        </p>  
    </div>
</utldemo>

## List Style Type

Using `list-style-[*]`, you can control the type of list-item marker in a list.

<utldemo utl="list-style" :items="['disc','square','decimal','none']" active="disc">
    <ul class="target-demo">
        <li>Ford</li>
        <li>Tesla</li>
        <li>Mercedes</li>
    </ul>
</utldemo>

## List Style Position

Using `list-style-p-[*]`, you can control the position of the list-item markers.

<utldemo utl="list-style-p" :items="['inside','outside']" active="inside">
    <ul class="list target-demo bg-c-primary[20]">
        <li>Ford</li>
        <li>Tesla</li>
        <li>Mercedes</li>
    </ul>
</utldemo>
