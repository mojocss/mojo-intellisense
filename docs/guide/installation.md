---
title: Installation
section: Guide
cat: Getting Started
catid: 2
level: 1
---

There are three ways to get started with Mojo. You can either:

- Use npm to install Mojo (recommended)
- Download the Compiled version
- Use Mojo via CDN

<alert-box type="info">
  <span>
    <span class="text-w-bold text-c-blue">Prerequisites:</span> In order to install Mojo via npm, first you need <a href="https://nodejs.org/en/download/"> Node </a> installed on your machine.
  </span>
</alert-box>

## Install via package manager

To include Mojo in your build setup you need to install it via a package manager.

NPM:

<showcode lang="bash">

```
npm install mojocss
```

</showcode>

Yarn:

<showcode lang="bash">

```
yarn add mojocss
```

</showcode>

Then import it in your project's main.js and initiate `mojo()`:

<showcode lang="js">

```
// Import Mojo CSS
import mojo from 'mojocss'

// Initialize
mojo()

```

</showcode>

And voila! 🎉 You can now use Mojo in your project.

<br>

## Download the Compiled version

Download Mojo's ready-to-use compiled code so you can drop it straight into your project.

By using this, you can quickly and easily include Mojo in your project without needing to set up a build process.

This doesn’t include documentation or source files:

[Download](https://unpkg.com/mojocss@latest)

<br>

## Using Mojo via CDN

If you need to pack light and fast, grab Mojo from CDN to jumpstart your next project.

<showcode lang="html">

```
<script src="https://unpkg.com/mojocss"></script>
```

</showcode>

### Starter template

To get started with Mojo right away, use this starter template:

<showcode lang="html" filename="index.html">

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>It's Mojo</title>

    <!-- Mojo CSS CDN -->
    <script src="https://unpkg.com/mojocss"></script>
  </head>
  <body m-load style="display:none">

    <h1 class="text-c-primary"> Hello World! </h1>

    <!-- Initialize Mojo CSS -->
    <script>
      mojo();
    </script>
  </body>
</html>
```

 </showcode>

<guide-next></guide-next>
