---
title: User Controls
section: Utilities
cat: Interactions
catid: 6
level: 3
---

Utilities for user control properties.

## User Select

Using `user-s-[*]`, you can control whether the user can select text in an element.

<utldemo utl="user-s" :items="['none','text','all','auto']" active="none">
    <div class="target-demo bg-c-body:+3 rounded-md pa-4 shadow-2">
        Looks like the magician's assistant took his disappearing act a little too seriously and poof! vanished right into thin air. Now, the poor magician is flying solo and still trying to conjure up his missing partner. Let's hope he doesn't make himself disappear in the process!
    </div>
</utldemo>

## Appearance

Using `appearance-[*]`, you can control the appearance of an element using platform-specific styling.

<utldemo>
    <div class="w-full d-flex a-items-center j-content-evenly" i-sm="flex-col gap-6">
        <div>
            <select class="w-full appearance-none">
                <option>Choose a car:</option>
                <option>Ford</option>
                <option>Tesla</option>
            </select>
            <div class="text-a-center mt-2">"appearance-none"</div>
        </div>
        <div>
            <select class="w-full appearance-auto">
                <option>Choose a car:</option>
                <option>Ford</option>
                <option>Tesla</option>
            </select>
            <div class="text-a-center mt-2">"appearance-auto"</div>
        </div>
    </div>
</utldemo>

## Cursor

Using `cursor-[*]`, you can control the mouse cursor when hovering over an element.

<utldemo utl="cursor" :items="['auto','default','wait','pointer','move','text','help','not-allowed','context-menu','progress','cell','crosshair','vertical-text','alias','copy','no-drop','grab','grabbing','all-scroll','col-resize','row-resize','n-resize','e-resize','s-resize','w-resize','ne-resize','nw-resize','se-resize','sw-resize','ew-resize','ns-resize','nesw-resize','nwse-resize','zoom-in','zoom-out','none']" active="auto">
    <div class="target-demo w-full h-40 bg-c-primary[10] border:3px_dashed_$c.primary d-flex a-items-center j-content-center text-lg text-c-primary rounded-md">
        Hover me
    </div>
</utldemo>

## Pointer Events

Using `pointer-e-[*]`, you can control whether an element reacts to pointer events like mouse clicks and touches.

<utldemo>
    <div class="w-full d-flex a-items-center j-content-evenly" i-sm="flex-col gap-6">
        <div>
            <select class="w-full pointer-e-none">
                <option>Choose a car:</option>
                <option>Ford</option>
                <option>Tesla</option>
            </select>
            <div class="text-a-center mt-2">"pointer-e-none"</div>
        </div>
        <div>
            <select class="w-full pointer-e-auto">
                <option>Choose a car:</option>
                <option>Ford</option>
                <option>Tesla</option>
            </select>
            <div class="text-a-center mt-2">"pointer-e-auto"</div>
        </div>
    </div>
</utldemo>

## Resize

Using `resize-[*]`, you can control whether an element is resizable by the user.

<utldemo utl="resize" :items="['xy','x','y','none']" active="xy">
    <div m-ignore-observe class="target-demo w-70 overflow-auto bg-c-body:+3 rounded-md pa-4 shadow-2">
        Looks like the magician's assistant took his disappearing act a little too seriously and poof! vanished right into thin air. Now, the poor magician is flying solo and still trying to conjure up his missing partner. Let's hope he doesn't make himself disappear in the process!
    </div>
</utldemo>
