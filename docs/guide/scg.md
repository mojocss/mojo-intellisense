---
title: Static CSS Generation
section: Guide
cat: Concepts
catid: 3
level: 7
---

Static CSS Generation (SCG) allows you to pre-generate CSS from HTML.

## Overview

If you prefer pre-generating your CSS without relying on the runtime engine, You can use Mojo's Static CSS Generation (SCG) module.

## Usage

<br>

1. Import the SCG Module:

<showcode lang="js">

```
import MojoSCG from "mojocss/src/interop/scg.js"
```

</showcode>

2. Create an Instance:

<showcode lang="js">

```
const htmlString = ""; // Static HTML content
const config = {}; // Mojo's Configuration options
const scg = new MojoSCG(htmlString, config)
```

</showcode>

3. Call the Render Method:

<showcode lang="js">

```
const css = scg.render();
```

</showcode>

4. Use the Generated CSS:

The `css` variable contains the generated CSS styles. You can inject these styles into a `<style>` tag inside the `<head>` section of your HTML document.
