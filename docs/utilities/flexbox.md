---
title: Flexbox
section: Utilities
cat: Layout
catid: 3
level: 1
---

Utilities for flexbox properties.

## Flex Direction

Using `flex-[row|row-reverse|col|col-revere]`, you can control the direction of flex items.

<utldemo utl="flex" :items="['row','row-reverse','col','col-reverse']" active="row">
    <div class="w-55 h-35 p-relative d-flex a-items-center j-content-center" >
        <div class="target-demo d-flex a-items-center j-content-center gap-3 bg-c-primary[30] rounded-sm" _="(> div) flex-shrink:0 text-a-center bg-c-primary px-2 py-1.5 rounded-sm text-c-white" i-sm:children-div="text-sm w-20" lg:children-div="text-lg w-32">
            <div>item 1</div>
            <div>item 2</div>
            <div>item 3</div>
        </div>
    </div>
</utldemo>

## Flex Wrap

Using `flex-[nowrap|wrap|wrap-reverse]`, you can control how flex items wrap.

<utldemo utl="flex" :items="['nowrap','wrap','wrap-reverse']" active="nowrap">
    <div class="w-full h-35 p-relative d-flex a-items-center overflow-hidden" >
        <div class="target-demo d-flex a-items-center gap-3 bg-c-blue[30] rounded-sm" _="(> div) flex-shrink:0 text-a-center bg-c-blue px-2 py-1.5 rounded-sm text-c-white" i-sm:children-div="text-sm w-20" lg:children-div="text-lg w-32">
            <div>item 1</div>
            <div>item 2</div>
            <div>item 3</div>
            <div>item 4</div>
            <div>item 5</div>
            <div>item 6</div>
            <div>item 7</div>
        </div>
    </div>
</utldemo>

## Flex

Using `flex-[none|auto|fluid]`, you can control how flex items wrap.

<utldemo utl="flex" :items="['none','auto','fluid']" active="none">
    <div class="target-demo" _="(> div) d-none (&.flex-none .demo-n) d-block (&.flex-auto .demo-a) d-block (&.flex-fluid .demo-f) d-block">
        <div class="demo-n w-full overflow-hidden" i-sm="max-w-300px">
            <div class="w-full h-25 p-relative d-flex a-items-center j-content-center overflow-hidden" >
                <div class="d-flex a-items-center gap-3 bg-c-blue[30] rounded-sm" _="(> div) text-a-center px-2 py-1.5 rounded-sm text-c-white" i-sm:children-div="text-sm" lg:children-div="text-lg">
                    <div class="bg-c-primary flex-none">none</div>
                    <div i-sm="w-16" class="bg-c-blue w-32 flex-auto">auto</div>
                    <div i-sm="w-32" class="bg-c-blue w-64 flex-fluid">fluid</div>
                </div>
            </div>
            <div class="text-a-center w-70% mx-auto" i-lg="w-40%">
                Use "flex-none" to restrict a flex item from either growing or shrinking.
            </div>
        </div>
        <div class="demo-a">
            <div class="w-full h-25 p-relative d-flex a-items-center j-content-center overflow-hidden" >
                <div class="d-flex a-items-center gap-3 bg-c-primary[30] rounded-sm" _="(> div) text-a-center px-2 py-1.5 rounded-sm text-c-white" i-sm:children-div="text-sm" lg:children-div="text-lg">
                    <div class="bg-c-blue flex-none">none</div>
                    <div i-sm="w-16" class="bg-c-primary w-32 flex-auto">
                        <span i-sm="d-none">auto w-32</span>
                        <span class="flex-shrink-0" sm="d-none">w-16</span>
                    </div>
                    <div i-sm="w-32" class="bg-c-primary w-64 flex-auto">
                        <span i-sm="d-none">auto w-64</span>
                        <span sm="d-none">w-32</span>
                    </div>
                </div>
            </div>
            <div class="text-a-center w-70% mx-auto" i-lg="w-90%">
                Use "flex-auto" to enable a flex item to grow and shrink while considering its initial size.
            </div>
        </div>
        <div class="demo-f">
            <div class="w-full h-25 p-relative d-flex a-items-center j-content-center overflow-hidden" >
                <div class="d-flex a-items-center gap-3 bg-c-primary[30] rounded-sm" _="(> div) text-a-center px-2 py-1.5 rounded-sm text-c-white" i-sm:children-div="text-sm" lg:children-div="text-lg">
                    <div class="bg-c-blue flex-none">none</div>
                    <div i-sm="w-16" class="bg-c-primary w-32 flex-fluid">
                        <span i-sm="d-none">fluid w-32</span>
                        <span sm="d-none">w-16</span>
                    </div>
                    <div i-sm="w-32" class="bg-c-primary w-64 flex-fluid">
                        <span i-sm="d-none">fluid w-64</span>
                        <span sm="d-none">w-32</span>
                    </div>
                </div>
            </div>
            <div class="text-a-center w-70% mx-auto" i-lg="w-90%">
                Use "flex-fluid" to enable a flex item to grow and shrink regardless of its initial size.
            </div>
        </div>
    </div>
</utldemo>

<s-box color="green:-2">
  <span>
    You can use Arbitrary values like <span class="hl">"flex-(1_0_auto)"</span> as well. <br>
    <span class="text-sm text-w-400">Learn more about <nuxt-link to="/docs/guide/arbitrary-styling">Arbitrary Styling</nuxt-link></span>
  </span>
</s-box>

## Flex Grow

Using `flex-g-[*]`, you can control wheter a flex item should grow to fill any available space or not.

<utldemo utl="flex-g" :items="['0','1']" active="0">
    <div class="w-full h-35 p-relative d-flex a-items-center j-content-center" >
        <div class="w-full d-flex a-items-center j-content-between gap-3 bg-c-blue[30] rounded-sm" _="(> div) flex-shrink:0 text-a-center bg-c-blue px-2 py-1.5 rounded-sm text-c-white (@i-sm div) text-sm (@lg div) text-lg w-32">
            <div>item 1</div>
            <div class="target-demo !w-unset !bg-c-primary">item 2</div>
            <div>item 3</div>
        </div>
    </div>
</utldemo>

<s-box color="green:-2">
  <span>
    You can use Arbitrary values like <span class="hl">"flex-g-(2)"</span> as well. <br>
    <span class="text-sm text-w-400">Learn more about <nuxt-link to="/docs/guide/arbitrary-styling">Arbitrary Styling</nuxt-link></span>
  </span>
</s-box>

## Flex Shrink

Using `flex-s-[*]`, you can control wheter a flex item should shrink or not.

<utldemo utl="flex-s" :items="['0','1']" active="0">
    <div class="w-full max-w-400px h-35 p-relative d-flex a-items-center j-content-center" >
        <div class="w-full mx-auto d-flex a-items-center j-content-between gap-3 bg-c-blue[30] rounded-sm" _="(> div) flex-g-1 text-a-center bg-c-blue px-2 py-1.5 rounded-sm text-c-white (@i-sm div) text-sm w-20 (@lg div) text-lg w-32">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>5</div>
            <div class="target-demo !bg-c-primary">6</div>
        </div>
    </div>
</utldemo>

<s-box color="green:-2">
  <span>
    You can use Arbitrary values like <span class="hl">"flex-s-(4)"</span> as well. <br>
    <span class="text-sm text-w-400">Learn more about <nuxt-link to="/docs/guide/arbitrary-styling">Arbitrary Styling</nuxt-link></span>
  </span>
</s-box>
