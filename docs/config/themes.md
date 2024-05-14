---
title: Themes
section: Config
cat: Base
catid: 2
level: 2
---

The `base.themes` in lets coders tweak existing themes or add new ones.

| Property       | Description                                         | Type   |
| -------------- | --------------------------------------------------- | ------ |
| default        | The default color theme for the application.        | object |
| [Custom Theme] | Users can define and set their custom color themes. | object |

## Default Theme

Mojo comes with a default theme color, perfect to kickstart your project.

<div class="h-60 overflow-auto">

| Property | Type   | Default Value |
| -------- | ------ | ------------- |
| body     | string | "#fff"        |
| invert   | string | "#202129"     |
| primary  | string | "#ff6145"     |
| white    | string | "#fff"        |
| black    | string | "#000"        |
| gray     | string | "#666666"     |
| grayblue | string | "#455370"     |
| red      | string | "#e84c3d"     |
| pink     | string | "#ff004e"     |
| orange   | string | "#f39b13"     |
| yellow   | string | "#f1c40f"     |
| tealblue | string | "#01caff"     |
| blue     | string | "#0078ff"     |
| green    | string | "#2ccd70"     |
| purple   | string | "#5a51de"     |
| bronze   | string | "#c67c3b"     |
| orchid   | string | "#9a59b5"     |
| charcoal | string | "#31394c"     |

</div>

## Customizing Colors

You can create custom themes and colors.

<s-box color="green:-2">
  <span>
    When users choose to make a new theme without specifying a color, the system defaults to preset values.
  </span>
</s-box>

Here's an example of defining new themes and colors

<showcode lang="js">

```
  mojo({
    base: {
      themes: {
        default: {
          body: "#f2f7f9",
          invert: "#6b88a5",
          primary: "#ff6145",
          customname: "#1f1d2b",
        },
        dim: {
          body: "#1a2a39",
          invert: "#90a4b8",
          customname: "#e1f0ff",
        },
        blackout: {
          body: "#000",
          invert: "#999",
          customname: "#e1f0ff",
        },
      },
    }
  });

```

</showcode>
