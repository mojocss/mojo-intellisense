---
title: Z-Index
section: Utilities
cat: Placement
catid: 2
level: 4
---

Utilities for z-index property.

Using `z-[*]`, you can control the stack order of elements.

<utldemo utl="z" :items="['10','20','30','40','50','auto']" active="10">
    <div class="w-55 h-55 bg-c-red[0] p-relative w-full d-flex a-items-center j-content-center" _="(> div:not(.target-demo)) text-c-white p-absolute bg-c-grayblue w-20 h-20 rounded-md d-flex a-items-center j-content-center shadow-solid-2 shadow-c-stronginvert[70] (> div:not(.target-demo):nth-child(odd)) bg-c-grayblue:+8" children-div:m-default="!shadow-alpha-100">
        <div class="target-demo w-25 h-25 bg-c-primary shadow-solid-2 shadow-c-stronginvert[70] !rounded-full"></div>
        <div class="left-0 z-10">10</div>
        <div class="top-0 z-20">20</div>
        <div class="right-0 z-30" >30</div>
        <div class="bottom-0 z-40">40</div>
    </div>
</utldemo>

<s-box color="blue">
  <span>
    To use negative values simply add a "-" before the utility name, <br> such as <span class="hl">"-z-10"</span>.
  </span>
</s-box>
