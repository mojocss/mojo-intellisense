---
title: Gap
section: Utilities
cat: Spacing
catid: 4
level: 3
---

Utilities for gap.

Using `gap-[numbers]`, you can control gutters between grid and flexbox items.

<utldemo utl="gap" :items="['4','8','12','16']" active="4">
    <div class="w-full h-35 p-relative d-flex a-items-center j-content-center" >
        <div class="target-demo grid cols-2 a-items-center j-content-center gap-3 bg-c-primary[30] rounded-sm" _="(> div) flex-shrink:0 text-a-center bg-c-primary px-2 py-1.5 rounded-sm text-c-white" i-sm:children-div="text-sm w-16" lg:children-div="text-lg w-32">
            <div>item 1</div>
            <div>item 2</div>
            <div>item 3</div>
            <div>item 4</div>
        </div>
    </div>
</utldemo>

<alert-box type="info">
  <span>
    You can use numerical values which will be converted into a multiple of 0.25rem (can be changed in config → units) for consistent and precise sizing. <br> <br> For example, <span class="text-c-blue font-code">"gap-5"</span> will give you a gap of 1.25rem.
  </span>
</alert-box>

<s-box color="green:-2">
  <span>
    You can use Arbitrary values like <span class="hl">"gap-(16px)"</span> or <span class="hl">"gap-(2em)"</span> as well. <br>
    <span class="text-sm text-w-400">Learn more about <nuxt-link to="/docs/guide/arbitrary-styling">Arbitrary Styling</nuxt-link></span>
  </span>
</s-box>

## Gap X

Using `gap-x-[numbers]`, you can control the gutters between columns in grid and flexbox containers.

<utldemo utl="gap-x" :items="['4','8','12','16']" active="4">
    <div class="w-full h-35 p-relative d-flex a-items-center j-content-center" >
        <div class="target-demo grid cols-2 a-items-center j-content-center gap-3 bg-c-blue[30] rounded-sm" _="(> div) flex-shrink:0 text-a-center bg-c-blue px-2 py-1.5 rounded-sm text-c-white" i-sm:children-div="text-sm w-16" lg:children-div="text-lg w-32">
            <div>item 1</div>
            <div>item 2</div>
            <div>item 3</div>
            <div>item 4</div>
        </div>
    </div>
</utldemo>

<alert-box type="info">
  <span>
    You can use numerical values which will be converted into a multiple of 0.25rem (can be changed in config → units) for consistent and precise sizing. <br> <br> For example, <span class="text-c-blue font-code">"gap-x-5"</span> will give you a gap-x of 1.25rem.
  </span>
</alert-box>

<s-box color="green:-2">
  <span>
    You can use Arbitrary values like <span class="hl">"gap-x-(16px)"</span> or <span class="hl">"gap-x-(2em)"</span> as well. <br>
    <span class="text-sm text-w-400">Learn more about <nuxt-link to="/docs/guide/arbitrary-styling">Arbitrary Styling</nuxt-link></span>
  </span>
</s-box>

## Gap Y

Using `gap-y-[numbers]`, you can control the gutters between rows in grid and flexbox containers.

<utldemo utl="gap-y" :items="['4','8','12','16']" active="4">
    <div class="w-full h-35 p-relative d-flex a-items-center j-content-center" >
        <div class="target-demo grid cols-2 a-items-center j-content-center gap-3 bg-c-orchid[30] rounded-sm" _="(> div) flex-shrink:0 text-a-center bg-c-orchid px-2 py-1.5 rounded-sm text-c-white" i-sm:children-div="text-sm w-16" lg:children-div="text-lg w-32">
            <div>item 1</div>
            <div>item 2</div>
            <div>item 3</div>
            <div>item 4</div>
        </div>
    </div>
</utldemo>

<alert-box type="info">
  <span>
    You can use numerical values which will be converted into a multiple of 0.25rem (can be changed in config → units) for consistent and precise sizing. <br> <br> For example, <span class="text-c-blue font-code">"gap-y-5"</span> will give you a gap-y of 1.25rem.
  </span>
</alert-box>

<s-box color="green:-2">
  <span>
    You can use Arbitrary values like <span class="hl">"gap-y-(16px)"</span> or <span class="hl">"gap-y-(2em)"</span> as well. <br>
    <span class="text-sm text-w-400">Learn more about <nuxt-link to="/docs/guide/arbitrary-styling">Arbitrary Styling</nuxt-link></span>
  </span>
</s-box>
