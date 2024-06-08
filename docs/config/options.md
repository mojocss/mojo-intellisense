---
title: Options
section: Config
cat: Key Settings
catid: 3
level: 1
---

The options object in the configuration is crucial for developers to set the basic preferences for their projects.

<div class="overflow-auto">

| key           | Description                             | Type    | Default Value                     |
| ------------- | --------------------------------------- | ------- | --------------------------------- |
| initialStyles | Initialize styles for the application.  | boolean | true                              |
| rtl           | Enable or disable right-to-left layout. | boolean | false                             |
| minify        | Minify styles for improved performance. | boolean | true                              |
| darkMode      | Configuration for dark mode settings.   | object  | { enabled: false, theme: "dark" } |

</div>

## initialStyles

Mojo's initialStyles offer essential base styles, aiming to harmonize cross-browser variations and enhance compatibility with your design system.

## rtl

Enabling this option in Mojo adds a `direction: rtl` style to the `body` element, shifting the project to a right-to-left layout.

## minify

Enabling this option will automatically compress the output CSS styles. It is recommended to have this option enabled TO enhance optimization.

## darkMode

Enabling this option triggers the dark theme automatically when the user's system theme is dark.
<alert-box type="warning">
Once dark mode is enabled in the "options" object, it's crucial to create a corresponding dark theme in "base.themes"
</alert-box>
