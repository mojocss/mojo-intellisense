---
title: Animation
section: Utilities
cat: Interactions
catid: 6
level: 2
---

Utilities for animation.

Using `animation-[*]`, you can animate elements with CSS animations.

<utldemo utl="animation" :items="['spin','flare','pulse']" active="spin">
    <div class="target-demo w-10 h-10 bg-c-primary" _="(&:not(.animation-spin)) rounded-full"></div>
</utldemo>

## Customizing Animations

Modify Mojo's configuration object to personalize animation utilities and introduce fresh options as per your requirements.

<showcode lang="js">

```
mojo({
    base: {
        definedValues: {
            animation : {
               -- spin ** : {
                    dur: "1.5s linear infinite",
                    keyframes: {
                        "100%": {
                            idle: "transform:rotate(1turn)",
                        },
                    },
                },
               -- flare ** : {
                    dur: "1s cubic-bezier(0, 0, 0.2, 1) infinite",
                    keyframes: {
                        "75%, 100%": {
                            idle: "transform:scale(2) opacity-0",
                        },
                    },
                },
               -- pulse ** : {
                    dur: "2s cubic-bezier(0.4, 0, 0.8, 1) infinite",
                    keyframes: {
                        "0%, 100%": {
                            idle: "opacity-100",
                        },
                        "50%": {
                            idle: "opacity-30",
                        },
                    },
                },
            }
        },
    },
})
```

</showcode>
