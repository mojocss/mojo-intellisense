---
title: Transition
section: Utilities
cat: Interactions
catid: 6
level: 1
---

Utilities for transition properties.

## Transition Duration

Using `ts-[number]`, you can control the duration of CSS transitions.

<utldemo utl="ts" :items="['100','250','500','800']" active="100">
    <div class="target-demo text-w-700 px-4 py-2 bg-c-primary[20] text-c-primary border:3px_solid_$c.primary rounded-md" hover="bg-alpha-100 text-c-white">
        Hover me
    </div>
</utldemo>

<alert-box type="info">
  <span>
    You can use numerical values which will be converted into a multiple of 1ms (can be changed in config → units). <br> <br> For example, <span class="text-c-blue font-code">"ts-560"</span> will give you a transition-duration of 560ms.
  </span>
</alert-box>

<alert-box type="warning">
  <span>
    When adding or removing classes to an element dynamically,<br> use <span class="text-c-orange font-code">"tsm-[number]"</span> instead of "ts-[number]".
  </span>
</alert-box>

<s-box color="green:-2">
  <span>
    You can use Arbitrary values like <span class="hl">"ts-(1.5s)"</span> or <span class="hl">"ts-(400ms)"</span> as well. <br>
    <span class="text-sm text-w-400">Learn more about <nuxt-link to="/docs/guide/arbitrary-styling">Arbitrary Styling</nuxt-link></span>
  </span>
</s-box>

## Transition Delay

Using `ts-d-[number]`, you can control the delay of CSS transitions.

<utldemo utl="ts-d" :items="['100','250','500','800']" active="100">
    <div class="target-demo text-w-700 px-4 py-2 bg-c-primary[20] text-c-primary border:3px_solid_$c.primary rounded-md ts-300" hover="bg-alpha-100 text-c-white">
        Hover me
    </div>
</utldemo>

<alert-box type="info">
  <span>
    You can use numerical values which will be converted into a multiple of 1ms (can be changed in config → units). <br> <br> For example, <span class="text-c-blue font-code">"ts-560"</span> will give you a transition-delay of 560ms.
  </span>
</alert-box>

<alert-box type="warning">
  <span>
    When adding or removing classes to an element dynamically,<br> use <span class="text-c-orange font-code">"tsm-d-[number]"</span> instead of "ts-[number]".
  </span>
</alert-box>

<s-box color="green:-2">
  <span>
    You can use Arbitrary values like <span class="hl">"ts-d-(1.5s)"</span> or <span class="hl">"ts-d-(400ms)"</span> as well. <br>
    <span class="text-sm text-w-400">Learn more about <nuxt-link to="/docs/guide/arbitrary-styling">Arbitrary Styling</nuxt-link></span>
  </span>
</s-box>

## Transition Timing Function

Using `ts-f-[*]`, you can control the easing of CSS transitions.

<utldemo utl="ts-f" :items="['linear','ease','ease-in','ease-out','ease-in-out','cubic-bezier(.88,.1,.12,1.21)']" active="linear">
    <div class="target-demo text-w-700 px-4 py-2 bg-c-primary[20] text-c-primary border:3px_solid_$c.primary rounded-md ts-500" hover="bg-alpha-100 text-c-white">
        Hover me
    </div>
</utldemo>

<alert-box type="info">
  <span>
    You can use any cubic-beziar value.
  </span>
</alert-box>

<alert-box type="warning">
  <span>
    When adding or removing classes to an element dynamically,<br> use <span class="text-c-orange font-code">"tsm-f-[*]"</span> instead of "ts-f-[*]".
  </span>
</alert-box>

## Transition Property

Using `ts-p-[*]`, you can control which CSS properties transition.

<utldemo utl="ts-p" :items="['all','color','background-color']" active="all">
    <div class="target-demo text-w-700 px-4 py-2 bg-c-primary[20] text-c-primary border:3px_solid_$c.primary rounded-md ts-500" hover="bg-alpha-100 text-c-white">
        Hover me
    </div>
</utldemo>

<s-box color="green:-2">
  <span>
    You can use Arbitrary values like <span class="hl">"ts-p-(color,height,background-color)"</span> as well. <br>
    <span class="text-sm text-w-400">Learn more about <nuxt-link to="/docs/guide/arbitrary-styling">Arbitrary Styling</nuxt-link></span>
  </span>
</s-box>
