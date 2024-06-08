---
title: Display
section: Utilities
cat: Placement
catid: 2
level: 1
---

Utilities for display property.

Using `d-[*]`, you can control display box type of an element.

<utldemo utl="d" :items="['inline','block','inline-block','flex','inline-flex','grid','inline-grid']" active="inline">
    <div class="target-demo" _="(> div) d-none (&.d-block .demo-b) d-block (&.d-inline-block .demo-ib) d-block (&.d-inline .demo-i) d-block d-block (&.d-flex .demo-f) d-flex w-full (&.d-inline-flex .demo-if) d-block (&.d-grid .demo-g) d-flex w-full (&.d-inline-grid .demo-ig) d-block w-full (&.d-flex) w-full (&.d-grid) w-full">
        <div class="demo-b">
            <p>Placed within a paragraph, a tiny <span class="d-block bg-c-primary text-c-white">orange span</span> element resides.</p>
        </div>
        <div class="demo-ib">
            <p>Placed within a paragraph, a tiny <span class="d-inline-block w-14 h-full bg-c-primary text-c-white">orange span</span> element resides.</p>
        </div>
        <div class="demo-i">
             <p>Placed within a paragraph, a tiny <span class="d-inline bg-c-primary text-c-white">orange span</span> element resides.</p>
        </div>
        <div class="demo-f j-content-center">
            <div class="d-flex gap-4 w-full max-w-90 bg-c-primary pa-4 rounded-sm" _="(div) w-full h-8 bg-c-black[40] rounded-sm">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <div class="demo-if">
            <p>Placed within a paragraph, an inline flex box
            <div class="d-inline-flex gap-2 bg-c-primary pa-2 rounded-xs v-align-middle" _="(div) w-8 h-4 bg-c-black[40] rounded-xs">
                <div></div>
                <div></div>
                <div></div>
            </div>
             resides.</p>
        </div>
        <div class="demo-g j-content-center">
            <div class="grid cols-4 rows-2 gap-3 w-full max-w-90 bg-c-primary pa-4 rounded-sm" _="(div) w-full bg-c-black[40] rounded-sm">
                <div class="c-start-1 c-end-3 h-8"></div>
                <div class="c-start-3 c-end-4"></div>
                <div class="c-start-4 c-end-5 r-start-1 r-end-3"></div>
                <div class="c-start-1 c-end-4"></div>
            </div>
        </div>
        <div class="demo-ig a-self-center">
            <p>Placed within a paragraph, an inline grid box
            <div class="d-inline-grid cols-4 rows-2 gap-1 bg-c-primary pa-2 rounded-xs w-32 v-align-middle" _="(div) bg-c-black[40] rounded-xs">
                <div class="c-start-1 c-end-3 !w-full h-2"></div>
                <div class="c-start-3 c-end-4"></div>
                <div class="c-start-4 c-end-5 r-start-1 r-end-3"></div>
                <div class="c-start-1 c-end-4 !w-full"></div>
            </div>
             resides.
            </p>
        </div>
    </div>
</utldemo>

Here's list of available utilites for display:

<div class="m-table-overflowed h-60">

| utility                     | CSS                          |
| --------------------------- | ---------------------------- |
| <b>d-none</b>               | display: none;               |
| <b>d-inline</b>             | display: inline;             |
| <b>d-block</b>              | display: block;              |
| <b>d-inline-block</b>       | display: inline-block;       |
| <b>d-flex</b>               | display: flex;               |
| <b>d-inline-flex</b>        | display: inline-flex;        |
| <b>d-grid</b>               | display: grid;               |
| <b>d-inline-grid</b>        | display: inline-grid;        |
| <b>d-table</b>              | display: table;              |
| <b>d-inline-table</b>       | display: inline-table;       |
| <b>d-table-caption</b>      | display: table-caption;      |
| <b>d-table-cell</b>         | display: table-cell;         |
| <b>d-table-column</b>       | display: table-column;       |
| <b>d-table-column-group</b> | display: table-column-group; |
| <b>d-table-footer-group</b> | display: table-footer-group; |
| <b>d-table-header-group</b> | display: table-header-group; |
| <b>d-table-row-group</b>    | display: table-row-group;    |
| <b>d-table-row</b>          | display: table-row;          |
| <b>d-flow-root</b>          | display: flow-root;          |
| <b>d-contents</b>           | display: contents;           |
| <b>d-list-item</b>          | display: list-item;          |
| <b>d-none</b>               | display: none;               |

</div>
