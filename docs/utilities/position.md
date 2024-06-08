---
title: Position
section: Utilities
cat: Placement
catid: 2
level: 2
---

Utilities for position property.

Using `p-[*]`, you can control how an element is positioned in the DOM.

<utldemo utl="p" :items="['static','relative','absolute','fixed','sticky']" active="static">
    <div class="target-demo w-full max-w-100 d-flex j-content-center !p-relative" _="(> div) d-none w-full (&.p-static .demo-s) d-block (&.p-fixed .demo-f) d-block (&.p-absolute .demo-a) d-block (&.p-relative .demo-r) d-block (&.p-sticky .demo-st) d-block">
        <div class="demo-s">
             <div class="p-relative bg-c-body:+3 w-full h-30 rounded-md pa-3 shadow-1">
                <div class="mb-5">relative parent</div>
                <div class="p-static d-inline-block text-c-white bg-c-primary px-6 py-3 rounded-sm pa-3">
                    static child
                </div>
             </div>
        </div>
        <div class="demo-f">
            <div class="p-relative bg-c-body:+3 w-full h-30 rounded-md shadow-1 overflow-hidden">
                <div class="p-absolute top-0 w-full d-flex a-items-center text-c-stronginvert bg-c-primary[20] backdrop-blur-10 px-6 py-3 rounded-top-md z-3">
                    fixed element
                </div>
                <p class="p-relative z-0 overflow-auto h-full pa-4 pt-7">
                Looks like the magician's assistant took his disappearing act a little too seriously and poof! vanished right into thin air. Now, the poor magician is flying solo and still trying to conjure up his missing partner. Let's hope he doesn't make himself disappear in the process!
                </p>
            </div>
        </div>
        <div class="demo-a">
             <div class="p-relative bg-c-body:+3 w-full h-30 rounded-md pa-3 shadow-1">
                relative parent
                <div class="p-absolute -bottom-2 -right-2 text-c-white bg-c-primary px-6 py-3 rounded-sm pa-3">
                    absolute child
                </div>
             </div>
        </div>
        <div class="demo-r">
            <div class="p-relative bg-c-body:+3 w-full h-30 rounded-md pa-3 shadow-1">
                <div class="mb-5">relative parent</div>
                <div class="p-relative d-inline-block left-10px text-c-white bg-c-primary px-6 py-3 rounded-sm pa-3">
                    relative child (left:10px)
                </div>
            </div>
        </div>
        <div class="demo-st">
            <div class="p-relative bg-c-body:+3 w-full h-30 rounded-md shadow-1 overflow-auto">
                <div class="p-sticky top-0 mt-10 w-full d-flex a-items-center text-c-stronginvert bg-c-primary[20] backdrop-blur-10 px-6 py-3 z-3">
                    sticky element
                </div>
                <p class="z-0">
                Looks like the magician's assistant took his disappearing act a little too seriously and poof! vanished right into thin air. Now, the poor magician is flying solo and still trying to conjure up his missing partner. Let's hope he doesn't make himself disappear in the process!
                </p>
            </div>
        </div>
    </div>

</utldemo>
