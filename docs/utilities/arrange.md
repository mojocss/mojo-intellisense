---
title: Arrange
section: Utilities
cat: Layout
catid: 3
level: 3
---

Utilities for arranging flex and grid items.

## Justify Content

Using `j-content-[*]`, you can control how flex and grid items are positioned along the main axis of a container.

<utldemo utl="j-content" :items="['start','center','end','between','around','evenly','stretch','normal']" active="start">
    <div class="w-full h-35 p-relative d-flex a-items-center j-content-center" >
        <div class="target-demo w-full d-flex a-items-center gap-3 bg-c-blue[30] rounded-sm" _="(> div) flex-shrink:0 text-a-center bg-c-blue px-2 py-1.5 rounded-sm text-c-white (&.j-content-stretch > div) !w-unset flex-fluid" i-sm:children-div="text-sm w-16" lg:children-div="text-lg w-24">
            <div>1</div>
            <div>2</div>
            <div>3</div>
        </div>
    </div>
</utldemo>

## Justify Items

Using `j-items-[*]`, you can control how grid items are aligned along their inline axis.

<utldemo utl="j-items" :items="['start','center','end','stretch']" active="start">
    <div class="w-full h-35 p-relative d-flex a-items-center j-content-center" >
        <div class="target-demo w-full grid cols-3 a-items-center gap-3 rounded-sm" _="(> div) grid w-full bg-c-primary[30] rounded-sm (> div div) d-flex j-content-center w-10 text-a-center bg-c-primary px-2 py-1.5 rounded-sm text-c-white (&.j-items-start > div) j-items-start (&.j-items-center > div) j-items-center (&.j-items-end > div) j-items-end (&.j-items-stretch > div) j-items-stretch (&.j-items-stretch > div div) !w-unset (<@media(min-width:768px) {> div div}) !w-24 text-lg" i-sm:children-div="text-sm">
            <div><div>1</div></div>
            <div><div>2</div></div>
            <div><div>3</div></div>
        </div>
    </div>
</utldemo>

## Justify Self

Using `j-self-[*]`, you can control how an individual grid item is aligned along its inline axis.

<utldemo utl="j-self" :items="['start','center','end','stretch']" active="start">
    <div class="w-full h-35 p-relative d-flex a-items-center j-content-center" >
        <div class="w-full grid cols-3 a-items-center gap-3 rounded-sm j-items-stretch" _="(> div) grid w-full bg-c-orchid[30] rounded-sm (> div div) d-flex j-content-center text-a-center bg-c-orchid px-2 py-1.5 rounded-sm text-c-white (.target-demo) bg-c-primary w-10 (<@media(min-width:768px) {.target-demo}) !w-24 (.target-demo.j-self-stretch) !w-unset" i-sm:children-div="text-sm" lg:children-div="text-lg">
            <div><div>1</div></div>
            <div><div class="target-demo">2</div></div>
            <div><div>3</div></div>
        </div>
    </div>
</utldemo>

## Align Content

Using `j-content-[*]`, you can control how rows are positioned in flex and grid containers.

<utldemo utl="a-content" :items="['start','center','end','between','around','evenly','stretch','normal']" active="start">
    <div class="w-full h-55 p-relative d-flex a-items-center j-content-center" i-sm="h-40">
        <div class="target-demo w-full h-full grid cols-3 gap-3 bg-c-pink[30] rounded-sm" _="(> div) w-full d-flex a-items-center j-content-center text-a-center bg-c-pink px-2 py-1.5 rounded-sm text-c-white" i-sm:children-div="text-sm" lg:children-div="text-lg">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
        </div>
    </div>
</utldemo>

## Align Items

Using `a-items-[*]`, you can control how grid or flex items are aligned along their cross axis.

<utldemo utl="a-items" :items="['start','center','end','baseline','stretch']" active="start">
    <div class="w-full h-55 p-relative d-flex a-items-center j-content-center" i-sm="h-30">
        <div class="target-demo w-full h-full d-flex gap-3 bg-c-blue[30] rounded-sm" _="(> div) d-flex flex-fluid a-items-center j-content-center h-9 bg-c-blue px-2 py-1.5 rounded-sm text-c-white (&.a-items-stretch > div) !h-unset" i-sm:children-div="text-sm w-16" lg:children-div="text-lg w-24">
            <div>1</div>
            <div>2</div>
            <div>3</div>
        </div>
    </div>
</utldemo>

## Align Self

Using `a-self-[*]`, you can control how an individual grid or flex item is aligned along its cross axis.

<utldemo utl="a-self" :items="['start','center','end','baseline','auto','stretch']" active="start">
    <div class="w-full h-55 p-relative d-flex a-items-center j-content-center" i-sm="h-30" >
        <div class="w-full h-full d-flex gap-3 bg-c-green[30] rounded-sm" _="(> div) d-flex flex-fluid a-items-center j-content-center bg-c-green px-2 py-1.5 rounded-sm text-c-white (.target-demo) bg-c-primary h-9 (.target-demo.a-self-stretch) !h-unset (.target-demo.a-self-auto) !h-unset" i-sm:children-div="text-sm w-16" lg:children-div="text-lg w-24">
            <div>1</div>
            <div class="target-demo">2</div>
            <div>3</div>
        </div>
    </div>
</utldemo>

## Place Content

Using `p-content-[*]`, you can control how content are justified and aligned.

<utldemo utl="p-content" :items="['start','center','end','between','around','evenly','stretch','normal']" active="start">
    <div class="w-full h-55 p-relative d-flex a-items-center j-content-center" i-sm="h-40">
        <div class="target-demo w-full h-full d-flex flex-wrap gap-3 bg-c-blue[30] rounded-sm" _="(> div) d-flex a-items-center h-10 j-content-center text-a-center bg-c-blue px-2 py-1.5 rounded-sm text-c-white (&.p-content-stretch > div) flex-fluid !h-unset !w-unset" i-sm:children-div="text-sm" lg:children-div="text-lg w-24">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
        </div>
    </div>
</utldemo>

## Place Items

Using `p-items-[*]`, you can control how items are justified and aligned.

<utldemo utl="p-items" :items="['start','center','end','stretch']" active="start">
    <div class="w-full h-35 p-relative d-flex a-items-center j-content-center" >
        <div class="target-demo w-full h-full grid cols-3 !a-items-center gap-3 rounded-sm" _="(> div) grid w-full h-16 bg-c-primary[30] rounded-sm (> div div) d-flex j-content-center a-items-center w-10 text-a-center bg-c-primary px-2 py-1.5 rounded-sm text-c-white (&.p-items-start > div) p-items-start (&.p-items-center > div) p-items-center (&.p-items-end > div) p-items-end (&.p-items-stretch > div) p-items-stretch (&.p-items-stretch > div div) !w-unset (<@media(min-width:768px) {> div div}) !w-24 text-lg" i-sm:children-div="text-sm">
            <div><div>1</div></div>
            <div><div>2</div></div>
            <div><div>3</div></div>
        </div>
    </div>
</utldemo>

## Place Self

Using `p-self-[*]`, you can control how an individual item is justified and aligned.

<utldemo utl="p-self" :items="['start','center','end','stretch']" active="start">
    <div class="w-full h-35 p-relative d-flex a-items-center j-content-center" >
        <div class="w-full grid cols-3 a-items-center gap-3 rounded-sm j-items-stretch" _="(> div) grid w-full h-16 bg-c-orchid[30] rounded-sm (> div div) d-flex j-content-center a-items-center bg-c-orchid px-2 py-1.5 rounded-sm text-c-white (.target-demo) bg-c-primary w-10 (<@media(min-width:768px) {.target-demo}) !w-24 (.target-demo.p-self-stretch) !w-unset" i-sm:children-div="text-sm" lg:children-div="text-lg">
            <div><div>1</div></div>
            <div><div class="target-demo">2</div></div>
            <div><div>3</div></div>
        </div>
    </div>
</utldemo>

## Order

Using `order-[*]`, you can control the order of grid and flex items.

<utldemo utl="order" :items="['first','last','none']" active="first">
    <div class="w-full h-35 p-relative d-flex a-items-center j-content-center" >
        <div class="d-flex a-items-center j-content-center flex-wrap gap-3 bg-c-blue[30] rounded-sm" _="(> div) flex-shrink:0 text-a-center bg-c-blue px-2 py-1.5 rounded-sm text-c-white" i-sm:children-div="text-sm w-20" lg:children-div="text-lg w-24">
            <div>item 1</div>
            <div>item 2</div>
            <div>item 3</div>
            <div>item 4</div>
            <div>item 5</div>
            <div class="target-demo !bg-c-primary">item</div>
        </div>
    </div>
</utldemo>

<alert-box type="info">
  <span>
    You can also use numerical values like <span class="text-c-blue font-code">"order-3"</span>.
  </span>
</alert-box>
