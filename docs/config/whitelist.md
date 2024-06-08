---
title: Whitelist
section: Config
cat: Key Settings
catid: 3
level: 5
---

Mojo's whitelist enables you to specify a set of utilities to be compiled even if they're not used directly in the markup.

The structure of a `whitelist` object is as follows:

<showcode lang="js">

```
mojo({
    whitelist: {
        // whitelisted utilities
    },
    // ... other configurations
});

```

</showcode>

Specifying the utilities is similar to how [Patterns](/docs/config/patterns#rules) work. Here a example:

<showcode lang="js">

```
mojo({
    whitelist: {
        idle: 'translate-x-12 opacity-0',
        hover: 'opacity-100'
    },
    // ... other configurations
});

```

</showcode>

`whitelist` can be used with the [Ignore Observe](/docs/guide/modifiers#ignore-observe) attribute to pre-compile specific utilities and prevent them from being re-compiled whenever the DOM changes.
