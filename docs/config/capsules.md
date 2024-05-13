---
title: Capsules
section: Config
cat: Key Settings
catid: 3
level: 3
---

Mojo Capsules are custom functions that extend the functionality of the framework. These functions, referred to as capsules, allow developers to tailor and enhance the behavior of their web applications.

## Capsule Structure

Here's a basic structure of a capsule:

<showcode lang="js">

```
// Basic Capsule Structure
function myCapsule() {
    // Capsule logic and configurations go here
}

// Mojo Configuration with Capsules
mojo({
    capsules: [
        myCapsule,
        // Additional capsules can be added here
    ],
    // ... other configurations
});

```

</showcode>

Alternatively, you can import capsules:

<showcode lang="js">

```
// Import Capsule
import myCapsule from "myCapsule"

// Mojo Configuration with Imported Capsules
mojo({
    capsules: [
        myCapsule,
        // Additional capsules can be added here
    ],
    // ... other configurations
});
```

</showcode>

## Passing Options to Capsules

You can pass options to capsules using the following format:

<showcode lang="js">

```
mojo({
    capsules: [
        {
            capsule: myCapsule,
            options: {
                foo: "bar"
            }
        },
        // Additional capsules can be added here
    ],
    // ... other configurations
});
```

</showcode>

## Capsule Loader

The capsule loader is responsible for executing the capsule functions. It iterates through the provided capsule array, calling each function with the necessary arguments.

The capsule loader is automatically called when Mojo is initialized. Developers typically don't interact directly with the capsule loader; it is part of the internal Mojo framework structure.

## Developing Capsules

In Mojo's capsules, the `this` context plays a crucial role, providing access to methods and properties that allow developers to interact with and customize the Mojo framework.

In JavaScript, `this` refers to the object that owns the current code. In the context of Mojo capsules, `this` refers to an instance of the Capsule class, granting access to various functionalities and configurations.

These are methods and properties available on a Mojo's capsule:

### load

Can load another capsule(s):

<showcode lang="js">

```
  import Capsule1 from "...";
  import Capsule2 from "...";
  import Capsule3 from "...";
  
  function myCapsule() {
    this.load(Capsule1);
    
    this.load([
      Capsule2,
      {
        capsule: Capsule3,
        options: {
            foo: "bar"
          }
        }
      }
    ]);
  }
```

</showcode>

### config

Access base and options of current Mojo configurations.

<showcode lang="js">

```
  function myCapsule() {
    console.log(this.config);

    // examples:
    const isRTL = this.config.options.rtl;
    const darkModeTheme = this.config.options.darkMode.theme;
    const defaultThemeBodyColor = this.config.base.themes.default.body;
  }
```

</showcode>

### options

Access the options of capsule that passed in Mojo configurations.

<showcode lang="js">

```
  function myCapsule() {
    console.log(this.options);

    // example:
    const foo = this.options.foo;
  }
```

</showcode>

### setConfig(object)

Updates the configuration object of Mojo.

<showcode lang="js">

```
  function myCapsule() {
    this.setConfig({
      base: {
          themes: {
              default: {
                  body: "#ffffff",
              },
          },
      },
    });
  }
```

</showcode>

### appendCSS(string)

Appends CSS styles to Mojo's compiled styles.

<showcode lang="js">

```
  function myCapsule() {
    const css = ".customClass { color: red; }";
    this.appendCSS(css);
  }
```

</showcode>

### addPatterns(object)

Adds CSS styles with the structure of Mojo's [Patterns](/docs/config/patterns#rules).

<showcode lang="js">

```
  function myCapsule() {
    this.addPatterns({
      ".customPattern": "bg-c-blue text-c-white pa-4",
      // ... More patterns
    });
  }
```

</showcode>

### getPatternsCSS(object)

Returns the CSS created by Mojo's Patterns as a string.

<showcode lang="js">

```
  function myCapsule() {
    let css = ".customClass { color: red; }";

    css += this.getPatternsCSS({
      ".customPattern": "bg-c-blue text-c-white pa-4",
      // ... More patterns
    });

    this.appendCSS(css);
  }
```

</showcode>

### addUtility(object)

Adds new utilities to Mojo.

<showcode lang="js">

```
  function myCapsule() {
    // Static CSS utility
    this.addUtility({
      name: "yellow-box",
      body: "padding: 1rem; background-color: #ffcc00;",
    });
    // Usage: <div variant="yellow-box ..." >


    // Static Pettern utility
    this.addUtility({
      name: "red-alert",
      pattern: "pa-4 bg-c-red text-c-white",
    });
    // Usage: <div variant="red-alert ..." >


    // Dynamic CSS property utility
    this.addUtility({
      name: "v-align",
      props: "vertical-align",
    });
    // Usage: <div variant="v-align-middle ..." >

  }
```

</showcode>

### getUtilitiesCSS(string | Array)

Generates CSS for utility classes.

<showcode lang="js">

```
  function myCapsule() {
    const css1 = this.getUtilitiesCSS("bg-c-red text-c-white");
    const css2 = this.getUtilitiesCSS(["pa-4", "rounded-4"]);

    const css = `.customClass { ${css1} } .customClass { ${css2} }`;
    this.appendCSS(css);
  }
```

</showcode>

### addVariant(string, object)

While Mojo provides a set of complete variants, users have the flexibility to make their own custom variants.

<showcode lang="js">

```
  function myCapsule() {
    this.addVariant("not-link",{
      pseudo: "not(:link)";
    });
    // Usage: <div not-link="bg-c-red ..." >

    this.addVariant("landscape",{
      media: "(orientation: landscape)";
    });
    // Usage: <div landscape="bg-c-red ..." >

    this.addVariant("ltr",{
      media: "[dir='ltr']";
    });
    // Usage: <div ltr="ml-5 ..." >
  }
```

</showcode>
