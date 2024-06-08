---
title: Utilities
section: Config
cat: Key Settings
catid: 3
level: 4
---

Mojo allows you to create custom utilities tailored to your unique project requirements.

The structure of a `utilities` array is as follows:

<showcode lang="js">

```
mojo({
    utilities: [
        // Your utility objects
    ],
    // ... other configurations
});

```

</showcode>

You can add 3 types of utilities:

<showcode lang="js">

```
mojo({
    utilities: [
        // 1. Using raw CSS
        {
            name: "yellow-box",
            body: "padding: 1rem; background-color: #ffcc00;"
        },
        // Usage: <div variant="yellow-box ..." >

        // 2. Encapsulating other utilities
        {
            name: "red-alert",
            pattern: "pa-4 bg-c-red text-c-white",
        },
        // Usage: <div variant="red-alert ..." >

        // 3. A utiltiy based on a CSS property
        {
            name: "v-align",
            props: "vertical-align",
        },
        // Usage: <div variant="v-align-middle ..." >
    ],
    // ... other configurations
});

```

</showcode>
