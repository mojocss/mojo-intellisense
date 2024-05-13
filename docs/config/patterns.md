---
title: Patterns
section: Config
cat: Key Settings
catid: 3
level: 2
---

Leveraging CSS-IN-JS Syntax and nested rules, Mojo's patterns simplifies writing CSS and enables you to apply global styles or encapsulate utility sets to reduce code repetition.

The structure of a `patterns` object is as follows:

<showcode lang="js">

```
mojo({
    patterns: {
        // Your Styles
    },
    // ... other configurations
});

```

</showcode>

## Selectors

Mojo's patterns allow you to declare a wide range of CSS selectors, including animations and at-rules.

<showcode lang="js">

```
mojo({
    patterns: {
        // Class
        '.button': {
            // ...
        },
        // ID
        '#button': {
            // ...
        },
        // Complex selectors
        '.hero > .action-btn:not(.primary)': {
            // ...
        },
        // Media query
        '@media (min-width: 30em) and (orientation: landscape)': {
            // ...
        },
        // Keyframes
        '@keyframes spin': {
            // ...
        },
    },
    // ... other configurations
});

```

</showcode>

## Rules

Mojo's patterns allow you to style selectors using utilities and assigning them to different variants, just like you would style them in your markup.

### Idle

The default state of a selector is referred to as `idle`, akin to HTML's "class" attribute.

This is how you make a card class using `idle` key:

<showcode lang="js">

```
mojo({
    patterns: {
        '.card': {
            idle: 'bg-c-white pa-6 rounded-md',
        }
    },
    // ... other configurations
});

```

</showcode>

Alternatively, you can use this syntax (plain string) if there are no states or variants:

<showcode lang="js">

```
mojo({
    patterns: {
        '.card': 'bg-c-white pa-6 rounded-md'
    },
    // ... other configurations
});

```

</showcode>

Both methods will generate the following CSS:

<showcode lang="css">

```
.card {
    --m-bg-c-alpha: 1;
    background-color: rgba(var(--m-color-white),var(--m-bg-c-alpha));
    padding: 1.5rem;
    border-radius: 0.8rem;
}

```

</showcode>

### Variants

Simillar to what you would do in your markup with variants like hover, md and... here utilities would be assigned to keys named after the variants respective names.

<showcode lang="js">

```
mojo({
    patterns: {
        '.card': {
            idle: 'bg-c-white pa-6 rounded-md',
            hover: 'shadow-2 translate-y-2', // Hover state
            xxl: 'text-lg pa-8' // xxl screen size
        },
    },
    // ... other configurations
});

```

</showcode>

## Nesting

Mojo's patterns enables nesting, similar to preprocessors like SASS.

<showcode lang="js">

```
mojo({
    patterns: {
        '.card': {
            // ...
            '&.big': {
                // Will generate CSS: .card.big {...}
            }
            '.card-head': {
                // Will generate CSS: .card .card-haed {...}
            }
        },
    },
    // ... other configurations
});

```

</showcode>

## CSS In JS

To apply CSS styles within your patterns, utilize the 'style' key and employ css-in-js syntax.

<showcode lang="js">

```
mojo({
    patterns: {
        '.card': {
            // ...
            style: {
                backgroundColor: 'red',
                paddingTop: '12px'
            }
        },
    },
    // ... other configurations
});

```

</showcode>
