---
title: Overview
section: Config
cat: INTRODUCTION
catid: 1
level: 1
---

Mojo CSS is a versatile and customizable CSS Engine that simplifies the process of designing and developing web applications.

At its core, Mojo provides a comprehensive configuration system that empowers developers to fine-tune the look and feel of their web projects.

## How to customize the configuration

To configure the the settings, simply call the `mojo()` function and pass in a configuration object. This object will determine how the Mojo is initialized and behaves.

Here's the overall structure of the configuration settings:

<showcode lang="js">

```
  mojo({
    options: {
      ...
    },
    base: {
      ...
    },
    whitelist: {
      ...
    },
    patterns: {
      ...
    },
    capsules: [
      ...
    ]
  });
```

</showcode>

As you can see in the code above, to start configuring Mojo CSS all you need is to define a settings object and pass it in to the `mojo()` function.

<guide-next type="config"></guide-next>
