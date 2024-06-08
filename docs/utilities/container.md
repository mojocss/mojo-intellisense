---
title: Container
section: Utilities
cat: Layout
catid: 3
level: 5
---

A container in a structural element that wraps and contains other elements, providing layout and alignment control. It helps maintain consistency and responsiveness in design across various devices and screen sizes.

| Breakpoint | Max Width | Padding          |
| ---------- | --------- | ---------------- |
| default    | 100%      | padding: 0 1rem; |
| sm         | 576px     | \*               |
| md         | 768px     | \*               |
| lg         | 992px     | \*               |
| xl         | 1200px    | \*               |
| xxl        | 1500px    | \*               |

<br>
<div class="text-sm -mt-3 mb-12"><span class="bg-c-body:+20 px-3 py-0.5 rounded-full" i-md="d-block py-4 px-5" dim="bg-c-body:-2" blackout="bg-c-body:+5">Learn how to add and customize container breakpoints in <nuxt-link to="/docs/config/breakpoints" class="z-1">config's breakpoints page</nuxt-link>.</span></div>

## Container Usage

<br>

1. Container

The `.container` class adjusts responsively, maintaining a fixed width that changes at different breakpoints.

<showcode lang="html">

```
<div class="container">
  <!-- ... -->
</div>
```

</showcode>

2. Container Fluid

The `.container-fluid` class is always at maximum width (100%) regardless of the screen size making it suitbale for fluid layouts.

<showcode lang="html">

```
<div class="container-fluid">
  <!-- ... -->
</div>
```

</showcode>
