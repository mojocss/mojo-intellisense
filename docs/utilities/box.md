---
title: Box
section: Utilities
cat: Layout
catid: 3
level: 4
---

Utilities for box-sizing, clear and float.

## Box Sizing

Using `box-s-[*]`, you can control whether the browser includes padding and borders when calculating an element's total size.

<utldemo utl="box-s" :items="['border','content']" active="border" _="(.demo) flex-col">
    <div class="target-demo !box-s-border" _="(> div) d-none (&.box-s-border .demo-b) !d-flex (&.box-s-content .demo-c) !d-flex">
        <div class="demo-b a-items-center j-content-center flex-col gap-5">
            <div class="p-relative h-150px w-full d-flex a-items-center j-content-center">
                <div class="box-s-border bg-c-body:+8 text-c-stronginvert w-200px h-100px border-10 pa-10px border-c-primary">
                    200px width, 10px border & 10px padding
                </div>
            </div>
            <div class="text-a-center w-70% mx-auto" i-lg="w-90%">
                Using <b>"box-s-border"</b>, the element's size includes padding and border.
            </div>
        </div>
        <div class="demo-c a-items-center j-content-center flex-col gap-5">
            <div class="p-relative h-150px w-full d-flex a-items-center j-content-center">
                <div class="box-s-content bg-c-body:+8 text-c-stronginvert w-200px h-100px border-10 pa-10px border-c-primary">
                    200px width, 10px border & 10px padding
                </div>
            </div>
            <div class="text-a-center w-70% mx-auto" i-lg="w-90%">
                Using "box-s-content", the element's size <b class="text-d-underline">doesn't</b> include padding and border.
            </div>
        </div>
    </div>

</utldemo>

## Float

Using `float-[*]`, you can control the wrapping of content around an element.

<utldemo utl="float" :items="['none','left','right']" active="none" _="(.demo) flex-col">
    <div class="h-80 d-flex a-items-center j-content-center" i-sm="h-100">
        <div class="text-lg">
            <div class="target-demo w-120px h-120px rounded-4" i-sm="w-20 h-20" _="(&.float-none) mb-5 (&.float-left) mr-5 (&.float-right) ml-5" style="background-image:url('/img/docs/kite-s.png')"></div>
            <p class="!mt-0">
                 Looks like the magician's assistant took his disappearing act a little too seriously and poof! vanished right into thin air. Now, the poor magician is flying solo and still trying to conjure up his missing partner. Let's hope he doesn't make himself disappear in the process!
            </p>       
        </div>
    </div>
</utldemo>

## Clear

Using `clear-[*]`, you can control the wrapping of content around an element.

<utldemo utl="clear" :items="['none','left','right','both']" active="none" _="(.demo) flex-col">
    <div class="h-80 d-flex a-items-center j-content-center" i-sm="h-100">
        <div class="text-lg">
            <div class="w-120px h-120px rounded-4 float-left" i-sm="w-20 h-20" _="(&.float-none) mb-5 (&.float-left) mr-5 (&.float-right) ml-5" style="background-image:url('/img/docs/kite-s.png')"></div>
            <div class="w-160px h-160px rounded-4 float-right" i-sm="w-25 h-25" _="(&.float-none) mb-5 (&.float-left) mr-5 (&.float-right) ml-5" style="background-image:url('/img/docs/kite-s.png')"></div>
            <p class="target-demo !mt-0">
                 Looks like the magician's assistant took his disappearing act a little too seriously and poof! vanished right into thin air. Now, the poor magician is flying solo and still trying to conjure up his missing partner. Let's hope he doesn't make himself disappear in the process!
            </p>       
        </div>
    </div>
</utldemo>
