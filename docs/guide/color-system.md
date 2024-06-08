---
title: Color System
section: Guide
cat: Concepts
catid: 3
level: 4
---

Mojo redefines color usage in your projects. With its built-in color engine, you can seamlessly access and utilize any color, along with its limitless tints and shades.

Simply specify the color and then indicate how much tinting or shading you want. It is essentially a color palette maker on the go.

<utldemo abovecode="true">
    <div class="w-full overflow-auto">
        <div class="mb-2 text-a-center">primary</div>
        <div class="w-full d-flex a-items-center j-content-center gap-3" _="(> div) d-flex a-items-center flex-shrink-0 j-content-center w-12 h-12 text-c-white text-sm rounded-sm (<@media(max-width:400px) {> div}) w-8 h-8">
            <div class="bg-c-primary:-10"></div>
            <div class="bg-c-primary:-5"></div>
            <div class="bg-c-primary !rounded-full"></div>
            <div class="bg-c-primary:+5"></div>
            <div class="bg-c-primary:+10"></div>
        </div>
        <div class="mt-2 w-full d-flex a-items-center j-content-center gap-3" _="(span) w-12 d-flex a-items-center text-80 flex-shrink-0 j-content-center (<@media(max-width:400px) {span}) w-8">
            <span>-10</span>
            <span>-5</span>
            <span></span>
            <span>+5</span>
            <span>+10</span>
        </div>
    </div>

</utldemo>
<showcode lang="html">

```
<div>
    <div class="bg-c-primary:-- -10**"></div>
    <div class="bg-c-primary:-- -5**"></div>
    <div class="bg-c-primary"></div>
    <div class="bg-c-primary:-- +5**"></div>
    <div class="bg-c-primary:-- +10**"></div>
</div>
```

</showcode>

To specify the tinting level, append a colon (:) to the color utility followed by a plus sign (+) and the desired intensity value, as in `bg-c-blue:+10`.

Similarly, to modify the shading, replace the plus sign (+) with a minus sign (-) and specify the desired intensity value like: `bg-c-blue:-10`

<alert-box type="info">
  <span>
    The range of intensity values is limitless.<br> Even float numbers like <span class="text-c-blue">"bg-c-blue:+12.7"</span> are permissible.
  </span>
</alert-box>

## Changing Lightness Separately

You can lighten or darken a color with a separate utility:

<showcode lang="html">

```
<div class="bg-c-primary --bg-c:+2**">...</div>

<div class="bg-c-blue --bg-c:-8**">...</div>
```

</showcode>

This comes in handy when you have various shades of a color in an element and don't want to name each one. When you change the main color, all the other shades change too.

<showcode lang="html">

```
<div class="bg-c-primary" -- hover="bg-c:+2" ** -- focus="bg-c:+3" **>
    ...
</div>
```

</showcode>

## Default Color Palette

Here's a list of Mojo's predefined colors, along with a palette of each to help you get started.

<utldemo _="(.demo) flex-col gap-3">
    <div class="w-full overflow-auto">
        <div class="mb-2 text-a-center">red</div>
        <div class="w-full d-flex a-items-center j-content-center gap-3" _="(> div) d-flex a-items-center flex-shrink-0 j-content-center w-8 h-8 text-c-white text-sm rounded-sm (<@media(min-width:768px) {> div}) w-12 h-12 (<@media(max-width:400px) {> div}) w-6 h-6">
            <div class="bg-c-red:-25" i-sm="!d-none"></div>
            <div class="bg-c-red:-20" i-sm="!d-none"></div>
            <div class="bg-c-red:-15"></div>
            <div class="bg-c-red:-10"></div>
            <div class="bg-c-red:-5"></div>
            <div class="bg-c-red !rounded-full"></div>
            <div class="bg-c-red:+5"></div>
            <div class="bg-c-red:+10"></div>
            <div class="bg-c-red:+15"></div>
            <div class="bg-c-red:+20" i-sm="!d-none"></div>
            <div class="bg-c-red:+25" i-sm="!d-none"></div>
        </div>
        <div class="mt-2 w-full d-flex a-items-center j-content-center gap-3" _="(span) w-8 d-flex a-items-center text-80 flex-shrink-0 j-content-center (<@media(min-width:768px) {span}) w-12 (<@media(max-width:400px) {span}) w-6">
            <span i-sm="!d-none">-25</span>
            <span i-sm="!d-none">-20</span>
            <span>-15</span>
            <span>-10</span>
            <span>-5</span>
            <span></span>
            <span>+5</span>
            <span>+10</span>
            <span>+15</span>
            <span i-sm="!d-none">+20</span>
            <span i-sm="!d-none">+25</span>
        </div>
    </div> 
    <div class="w-full overflow-auto">
        <div class="mb-2 text-a-center">pink</div>
        <div class="w-full d-flex a-items-center j-content-center gap-3" _="(> div) d-flex a-items-center flex-shrink-0 j-content-center w-8 h-8 text-c-white text-sm rounded-sm (<@media(min-width:768px) {> div}) w-12 h-12 (<@media(max-width:400px) {> div}) w-6 h-6">
            <div class="bg-c-pink:-25" i-sm="!d-none"></div>
            <div class="bg-c-pink:-20" i-sm="!d-none"></div>
            <div class="bg-c-pink:-15"></div>
            <div class="bg-c-pink:-10"></div>
            <div class="bg-c-pink:-5"></div>
            <div class="bg-c-pink !rounded-full"></div>
            <div class="bg-c-pink:+5"></div>
            <div class="bg-c-pink:+10"></div>
            <div class="bg-c-pink:+15"></div>
            <div class="bg-c-pink:+20" i-sm="!d-none"></div>
            <div class="bg-c-pink:+25" i-sm="!d-none"></div>
        </div>
        <div class="mt-2 w-full d-flex a-items-center j-content-center gap-3" _="(span) w-8 d-flex a-items-center text-80 flex-shrink-0 j-content-center (<@media(min-width:768px) {span}) w-12 (<@media(max-width:400px) {span}) w-6">
            <span i-sm="!d-none">-25</span>
            <span i-sm="!d-none">-20</span>
            <span>-15</span>
            <span>-10</span>
            <span>-5</span>
            <span></span>
            <span>+5</span>
            <span>+10</span>
            <span>+15</span>
            <span i-sm="!d-none">+20</span>
            <span i-sm="!d-none">+25</span>
        </div>
    </div>  
    <div class="w-full overflow-auto">
        <div class="mb-2 text-a-center">yellow</div>
        <div class="w-full d-flex a-items-center j-content-center gap-3" _="(> div) d-flex a-items-center flex-shrink-0 j-content-center w-8 h-8 text-c-white text-sm rounded-sm (<@media(min-width:768px) {> div}) w-12 h-12 (<@media(max-width:400px) {> div}) w-6 h-6">
            <div class="bg-c-yellow:-25" i-sm="!d-none"></div>
            <div class="bg-c-yellow:-20" i-sm="!d-none"></div>
            <div class="bg-c-yellow:-15"></div>
            <div class="bg-c-yellow:-10"></div>
            <div class="bg-c-yellow:-5"></div>
            <div class="bg-c-yellow !rounded-full"></div>
            <div class="bg-c-yellow:+5"></div>
            <div class="bg-c-yellow:+10"></div>
            <div class="bg-c-yellow:+15"></div>
            <div class="bg-c-yellow:+20" i-sm="!d-none"></div>
            <div class="bg-c-yellow:+25" i-sm="!d-none"></div>
        </div>
        <div class="mt-2 w-full d-flex a-items-center j-content-center gap-3" _="(span) w-8 d-flex a-items-center text-80 flex-shrink-0 j-content-center (<@media(min-width:768px) {span}) w-12 (<@media(max-width:400px) {span}) w-6">
            <span i-sm="!d-none">-25</span>
            <span i-sm="!d-none">-20</span>
            <span>-15</span>
            <span>-10</span>
            <span>-5</span>
            <span></span>
            <span>+5</span>
            <span>+10</span>
            <span>+15</span>
            <span i-sm="!d-none">+20</span>
            <span i-sm="!d-none">+25</span>
        </div>
    </div>
    <div class="w-full overflow-auto">
        <div class="mb-2 text-a-center">orange</div>
        <div class="w-full d-flex a-items-center j-content-center gap-3" _="(> div) d-flex a-items-center flex-shrink-0 j-content-center w-8 h-8 text-c-white text-sm rounded-sm (<@media(min-width:768px) {> div}) w-12 h-12 (<@media(max-width:400px) {> div}) w-6 h-6">
            <div class="bg-c-orange:-25" i-sm="!d-none"></div>
            <div class="bg-c-orange:-20" i-sm="!d-none"></div>
            <div class="bg-c-orange:-15"></div>
            <div class="bg-c-orange:-10"></div>
            <div class="bg-c-orange:-5"></div>
            <div class="bg-c-orange !rounded-full"></div>
            <div class="bg-c-orange:+5"></div>
            <div class="bg-c-orange:+10"></div>
            <div class="bg-c-orange:+15"></div>
            <div class="bg-c-orange:+20" i-sm="!d-none"></div>
            <div class="bg-c-orange:+25" i-sm="!d-none"></div>
        </div>
        <div class="mt-2 w-full d-flex a-items-center j-content-center gap-3" _="(span) w-8 d-flex a-items-center text-80 flex-shrink-0 j-content-center (<@media(min-width:768px) {span}) w-12 (<@media(max-width:400px) {span}) w-6">
            <span i-sm="!d-none">-25</span>
            <span i-sm="!d-none">-20</span>
            <span>-15</span>
            <span>-10</span>
            <span>-5</span>
            <span></span>
            <span>+5</span>
            <span>+10</span>
            <span>+15</span>
            <span i-sm="!d-none">+20</span>
            <span i-sm="!d-none">+25</span>
        </div>
    </div> 
    <div class="w-full overflow-auto">
        <div class="mb-2 text-a-center">tealblue</div>
        <div class="w-full d-flex a-items-center j-content-center gap-3" _="(> div) d-flex a-items-center flex-shrink-0 j-content-center w-8 h-8 text-c-white text-sm rounded-sm (<@media(min-width:768px) {> div}) w-12 h-12 (<@media(max-width:400px) {> div}) w-6 h-6">
            <div class="bg-c-tealblue:-25" i-sm="!d-none"></div>
            <div class="bg-c-tealblue:-20" i-sm="!d-none"></div>
            <div class="bg-c-tealblue:-15"></div>
            <div class="bg-c-tealblue:-10"></div>
            <div class="bg-c-tealblue:-5"></div>
            <div class="bg-c-tealblue !rounded-full"></div>
            <div class="bg-c-tealblue:+5"></div>
            <div class="bg-c-tealblue:+10"></div>
            <div class="bg-c-tealblue:+15"></div>
            <div class="bg-c-tealblue:+20" i-sm="!d-none"></div>
            <div class="bg-c-tealblue:+25" i-sm="!d-none"></div>
        </div>
        <div class="mt-2 w-full d-flex a-items-center j-content-center gap-3" _="(span) w-8 d-flex a-items-center text-80 flex-shrink-0 j-content-center (<@media(min-width:768px) {span}) w-12 (<@media(max-width:400px) {span}) w-6">
            <span i-sm="!d-none">-25</span>
            <span i-sm="!d-none">-20</span>
            <span>-15</span>
            <span>-10</span>
            <span>-5</span>
            <span></span>
            <span>+5</span>
            <span>+10</span>
            <span>+15</span>
            <span i-sm="!d-none">+20</span>
            <span i-sm="!d-none">+25</span>
        </div>
    </div>     
    <div class="w-full overflow-auto">
        <div class="mb-2 text-a-center">blue</div>
        <div class="w-full d-flex a-items-center j-content-center gap-3" _="(> div) d-flex a-items-center flex-shrink-0 j-content-center w-8 h-8 text-c-white text-sm rounded-sm (<@media(min-width:768px) {> div}) w-12 h-12 (<@media(max-width:400px) {> div}) w-6 h-6">
            <div class="bg-c-blue:-25" i-sm="!d-none"></div>
            <div class="bg-c-blue:-20" i-sm="!d-none"></div>
            <div class="bg-c-blue:-15"></div>
            <div class="bg-c-blue:-10"></div>
            <div class="bg-c-blue:-5"></div>
            <div class="bg-c-blue !rounded-full"></div>
            <div class="bg-c-blue:+5"></div>
            <div class="bg-c-blue:+10"></div>
            <div class="bg-c-blue:+15"></div>
            <div class="bg-c-blue:+20" i-sm="!d-none"></div>
            <div class="bg-c-blue:+25" i-sm="!d-none"></div>
        </div>
        <div class="mt-2 w-full d-flex a-items-center j-content-center gap-3" _="(span) w-8 d-flex a-items-center text-80 flex-shrink-0 j-content-center (<@media(min-width:768px) {span}) w-12 (<@media(max-width:400px) {span}) w-6">
            <span i-sm="!d-none">-25</span>
            <span i-sm="!d-none">-20</span>
            <span>-15</span>
            <span>-10</span>
            <span>-5</span>
            <span></span>
            <span>+5</span>
            <span>+10</span>
            <span>+15</span>
            <span i-sm="!d-none">+20</span>
            <span i-sm="!d-none">+25</span>
        </div>
    </div> 
    <div class="w-full overflow-auto">
        <div class="mb-2 text-a-center">green</div>
        <div class="w-full d-flex a-items-center j-content-center gap-3" _="(> div) d-flex a-items-center flex-shrink-0 j-content-center w-8 h-8 text-c-white text-sm rounded-sm (<@media(min-width:768px) {> div}) w-12 h-12 (<@media(max-width:400px) {> div}) w-6 h-6">
            <div class="bg-c-green:-25" i-sm="!d-none"></div>
            <div class="bg-c-green:-20" i-sm="!d-none"></div>
            <div class="bg-c-green:-15"></div>
            <div class="bg-c-green:-10"></div>
            <div class="bg-c-green:-5"></div>
            <div class="bg-c-green !rounded-full"></div>
            <div class="bg-c-green:+5"></div>
            <div class="bg-c-green:+10"></div>
            <div class="bg-c-green:+15"></div>
            <div class="bg-c-green:+20" i-sm="!d-none"></div>
            <div class="bg-c-green:+25" i-sm="!d-none"></div>
        </div>
        <div class="mt-2 w-full d-flex a-items-center j-content-center gap-3" _="(span) w-8 d-flex a-items-center text-80 flex-shrink-0 j-content-center (<@media(min-width:768px) {span}) w-12 (<@media(max-width:400px) {span}) w-6">
            <span i-sm="!d-none">-25</span>
            <span i-sm="!d-none">-20</span>
            <span>-15</span>
            <span>-10</span>
            <span>-5</span>
            <span></span>
            <span>+5</span>
            <span>+10</span>
            <span>+15</span>
            <span i-sm="!d-none">+20</span>
            <span i-sm="!d-none">+25</span>
        </div>
    </div> 
    <div class="w-full overflow-auto">
        <div class="mb-2 text-a-center">purple</div>
        <div class="w-full d-flex a-items-center j-content-center gap-3" _="(> div) d-flex a-items-center flex-shrink-0 j-content-center w-8 h-8 text-c-white text-sm rounded-sm (<@media(min-width:768px) {> div}) w-12 h-12 (<@media(max-width:400px) {> div}) w-6 h-6">
            <div class="bg-c-purple:-25" i-sm="!d-none"></div>
            <div class="bg-c-purple:-20" i-sm="!d-none"></div>
            <div class="bg-c-purple:-15"></div>
            <div class="bg-c-purple:-10"></div>
            <div class="bg-c-purple:-5"></div>
            <div class="bg-c-purple !rounded-full"></div>
            <div class="bg-c-purple:+5"></div>
            <div class="bg-c-purple:+10"></div>
            <div class="bg-c-purple:+15"></div>
            <div class="bg-c-purple:+20" i-sm="!d-none"></div>
            <div class="bg-c-purple:+25" i-sm="!d-none"></div>
        </div>
        <div class="mt-2 w-full d-flex a-items-center j-content-center gap-3" _="(span) w-8 d-flex a-items-center text-80 flex-shrink-0 j-content-center (<@media(min-width:768px) {span}) w-12 (<@media(max-width:400px) {span}) w-6">
            <span i-sm="!d-none">-25</span>
            <span i-sm="!d-none">-20</span>
            <span>-15</span>
            <span>-10</span>
            <span>-5</span>
            <span></span>
            <span>+5</span>
            <span>+10</span>
            <span>+15</span>
            <span i-sm="!d-none">+20</span>
            <span i-sm="!d-none">+25</span>
        </div>
    </div> 
    <div class="w-full overflow-auto">
        <div class="mb-2 text-a-center">bronze</div>
        <div class="w-full d-flex a-items-center j-content-center gap-3" _="(> div) d-flex a-items-center flex-shrink-0 j-content-center w-8 h-8 text-c-white text-sm rounded-sm (<@media(min-width:768px) {> div}) w-12 h-12 (<@media(max-width:400px) {> div}) w-6 h-6">
            <div class="bg-c-bronze:-25" i-sm="!d-none"></div>
            <div class="bg-c-bronze:-20" i-sm="!d-none"></div>
            <div class="bg-c-bronze:-15"></div>
            <div class="bg-c-bronze:-10"></div>
            <div class="bg-c-bronze:-5"></div>
            <div class="bg-c-bronze !rounded-full"></div>
            <div class="bg-c-bronze:+5"></div>
            <div class="bg-c-bronze:+10"></div>
            <div class="bg-c-bronze:+15"></div>
            <div class="bg-c-bronze:+20" i-sm="!d-none"></div>
            <div class="bg-c-bronze:+25" i-sm="!d-none"></div>
        </div>
        <div class="mt-2 w-full d-flex a-items-center j-content-center gap-3" _="(span) w-8 d-flex a-items-center text-80 flex-shrink-0 j-content-center (<@media(min-width:768px) {span}) w-12 (<@media(max-width:400px) {span}) w-6">
            <span i-sm="!d-none">-25</span>
            <span i-sm="!d-none">-20</span>
            <span>-15</span>
            <span>-10</span>
            <span>-5</span>
            <span></span>
            <span>+5</span>
            <span>+10</span>
            <span>+15</span>
            <span i-sm="!d-none">+20</span>
            <span i-sm="!d-none">+25</span>
        </div>
    </div>
    <div class="w-full overflow-auto">
        <div class="mb-2 text-a-center">orchid</div>
        <div class="w-full d-flex a-items-center j-content-center gap-3" _="(> div) d-flex a-items-center flex-shrink-0 j-content-center w-8 h-8 text-c-white text-sm rounded-sm (<@media(min-width:768px) {> div}) w-12 h-12 (<@media(max-width:400px) {> div}) w-6 h-6">
            <div class="bg-c-orchid:-25" i-sm="!d-none"></div>
            <div class="bg-c-orchid:-20" i-sm="!d-none"></div>
            <div class="bg-c-orchid:-15"></div>
            <div class="bg-c-orchid:-10"></div>
            <div class="bg-c-orchid:-5"></div>
            <div class="bg-c-orchid !rounded-full"></div>
            <div class="bg-c-orchid:+5"></div>
            <div class="bg-c-orchid:+10"></div>
            <div class="bg-c-orchid:+15"></div>
            <div class="bg-c-orchid:+20" i-sm="!d-none"></div>
            <div class="bg-c-orchid:+25" i-sm="!d-none"></div>
        </div>
        <div class="mt-2 w-full d-flex a-items-center j-content-center gap-3" _="(span) w-8 d-flex a-items-center text-80 flex-shrink-0 j-content-center (<@media(min-width:768px) {span}) w-12 (<@media(max-width:400px) {span}) w-6">
            <span i-sm="!d-none">-25</span>
            <span i-sm="!d-none">-20</span>
            <span>-15</span>
            <span>-10</span>
            <span>-5</span>
            <span></span>
            <span>+5</span>
            <span>+10</span>
            <span>+15</span>
            <span i-sm="!d-none">+20</span>
            <span i-sm="!d-none">+25</span>
        </div>
    </div>
    <div class="w-full overflow-auto">
        <div class="mb-2 text-a-center">gray</div>
        <div class="w-full d-flex a-items-center j-content-center gap-3" _="(> div) d-flex a-items-center flex-shrink-0 j-content-center w-8 h-8 text-c-white text-sm rounded-sm (<@media(min-width:768px) {> div}) w-12 h-12 (<@media(max-width:400px) {> div}) w-6 h-6">
            <div class="bg-c-gray:-25" i-sm="!d-none"></div>
            <div class="bg-c-gray:-20" i-sm="!d-none"></div>
            <div class="bg-c-gray:-15"></div>
            <div class="bg-c-gray:-10"></div>
            <div class="bg-c-gray:-5"></div>
            <div class="bg-c-gray !rounded-full"></div>
            <div class="bg-c-gray:+5"></div>
            <div class="bg-c-gray:+10"></div>
            <div class="bg-c-gray:+15"></div>
            <div class="bg-c-gray:+20" i-sm="!d-none"></div>
            <div class="bg-c-gray:+25" i-sm="!d-none"></div>
        </div>
        <div class="mt-2 w-full d-flex a-items-center j-content-center gap-3" _="(span) w-8 d-flex a-items-center text-80 flex-shrink-0 j-content-center (<@media(min-width:768px) {span}) w-12 (<@media(max-width:400px) {span}) w-6">
            <span i-sm="!d-none">-25</span>
            <span i-sm="!d-none">-20</span>
            <span>-15</span>
            <span>-10</span>
            <span>-5</span>
            <span></span>
            <span>+5</span>
            <span>+10</span>
            <span>+15</span>
            <span i-sm="!d-none">+20</span>
            <span i-sm="!d-none">+25</span>
        </div>
    </div>
    <div class="w-full overflow-auto">
        <div class="mb-2 text-a-center">grayblue</div>
        <div class="w-full d-flex a-items-center j-content-center gap-3" _="(> div) d-flex a-items-center flex-shrink-0 j-content-center w-8 h-8 text-c-white text-sm rounded-sm (<@media(min-width:768px) {> div}) w-12 h-12 (<@media(max-width:400px) {> div}) w-6 h-6">
            <div class="bg-c-grayblue:-25" i-sm="!d-none"></div>
            <div class="bg-c-grayblue:-20" i-sm="!d-none"></div>
            <div class="bg-c-grayblue:-15"></div>
            <div class="bg-c-grayblue:-10"></div>
            <div class="bg-c-grayblue:-5"></div>
            <div class="bg-c-grayblue !rounded-full"></div>
            <div class="bg-c-grayblue:+5"></div>
            <div class="bg-c-grayblue:+10"></div>
            <div class="bg-c-grayblue:+15"></div>
            <div class="bg-c-grayblue:+20" i-sm="!d-none"></div>
            <div class="bg-c-grayblue:+25" i-sm="!d-none"></div>
        </div>
        <div class="mt-2 w-full d-flex a-items-center j-content-center gap-3" _="(span) w-8 d-flex a-items-center text-80 flex-shrink-0 j-content-center (<@media(min-width:768px) {span}) w-12 (<@media(max-width:400px) {span}) w-6">
            <span i-sm="!d-none">-25</span>
            <span i-sm="!d-none">-20</span>
            <span>-15</span>
            <span>-10</span>
            <span>-5</span>
            <span></span>
            <span>+5</span>
            <span>+10</span>
            <span>+15</span>
            <span i-sm="!d-none">+20</span>
            <span i-sm="!d-none">+25</span>
        </div>
    </div>
    <div class="w-full overflow-auto">
        <div class="mb-2 text-a-center">charocoal</div>
        <div class="w-full d-flex a-items-center j-content-center gap-3" _="(> div) d-flex a-items-center flex-shrink-0 j-content-center w-8 h-8 text-c-white text-sm rounded-sm (<@media(min-width:768px) {> div}) w-12 h-12 (<@media(max-width:400px) {> div}) w-6 h-6">
            <div class="bg-c-charocoal:-25" i-sm="!d-none"></div>
            <div class="bg-c-charocoal:-20" i-sm="!d-none"></div>
            <div class="bg-c-charocoal:-15"></div>
            <div class="bg-c-charocoal:-10"></div>
            <div class="bg-c-charocoal:-5"></div>
            <div class="bg-c-charocoal !rounded-full"></div>
            <div class="bg-c-charocoal:+5"></div>
            <div class="bg-c-charocoal:+10"></div>
            <div class="bg-c-charocoal:+15"></div>
            <div class="bg-c-charocoal:+20" i-sm="!d-none"></div>
            <div class="bg-c-charocoal:+25" i-sm="!d-none"></div>
        </div>
        <div class="mt-2 w-full d-flex a-items-center j-content-center gap-3" _="(span) w-8 d-flex a-items-center text-80 flex-shrink-0 j-content-center (<@media(min-width:768px) {span}) w-12 (<@media(max-width:400px) {span}) w-6">
            <span i-sm="!d-none">-25</span>
            <span i-sm="!d-none">-20</span>
            <span>-15</span>
            <span>-10</span>
            <span>-5</span>
            <span></span>
            <span>+5</span>
            <span>+10</span>
            <span>+15</span>
            <span i-sm="!d-none">+20</span>
            <span i-sm="!d-none">+25</span>
        </div>
    </div>                                                             
</utldemo>
<div class="text-sm -mt-3 mb-12"><span class="bg-c-body:+20 px-3 py-0.5 rounded-full" i-md="d-block py-4 px-5" dim="bg-c-body:-2" blackout="bg-c-body:+3">Learn how to modify and customize the colors in <nuxt-link to="/docs/config/themes" class="z-1">config's themes page</nuxt-link>.</span></div>
