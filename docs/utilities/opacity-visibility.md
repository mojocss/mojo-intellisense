---
title: Opacity & Visibility
section: Utilities
cat: General
catid: 7
level: 2
---

Utilities for Opacity & Visibility.

## Opacity

Using `opacity-[*]`, you can control the opacity of an element.

<utldemo utl="opacity" :items="['25','50','75','100']" active="25">
    <div class="target-demo w-25 h-25 bg-c-primary rounded-md"></div>
</utldemo>

<alert-box type="info">
  <span>
    You can use numerical values which will be converted into a multiple of 0.01 for consistent and precise design. <br> <br> For example, <span class="text-c-blue font-code">"opacity-54"</span> will give you an opacity of 0.54
  </span>
</alert-box>

<s-box color="green:-2">
  <span>
    You can use Arbitrary values like <span class="hl">"opacity-(0.73)"</span> as well. <br>
    <span class="text-sm text-w-400">Learn more about <nuxt-link to="/docs/guide/arbitrary-styling">Arbitrary Styling</nuxt-link></span>
  </span>
</s-box>

## Visibility

Using `visible` or `hidden`, you can control whether an element is visible or not.

<utldemo>
    <div class="w-full d-flex a-items-center j-content-evenly">
        <div>
            <div class="w-20 h-10 rounded-md border-3 border-s-dashed border-c-primary">
                <div class="visible w-full h-full rounded-md bg-c-primary border-3 border-s-dashed border-c-primary"></div>
            </div>
            <div class="text-a-center mt-2">"visible"</div>
        </div>
        <div>
            <div class="w-20 h-10 rounded-md border-3 border-s-dashed border-c-primary">
                <div class="hidden w-full h-full rounded-md bg-c-primary border-3 border-s-dashed border-c-primary"></div>
            </div>
            <div class="text-a-center mt-2">"hidden"</div>
        </div>
    </div>
</utldemo>
