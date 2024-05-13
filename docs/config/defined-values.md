---
title: Defined Values
section: Config
cat: Base
catid: 2
level: 5
---

Mojo offers a range of pre-set values for various styling properties, accessible through `base.definedValues`.

These values encompass defaults for letter-spacing, line-height, font-weight, border-radius, box-shadow, animation.

## Letter Spacing

| Key     | Description            | Default Value |
| ------- | ---------------------- | ------------- |
| tighter | Tighter letter spacing | `-0.05em`     |
| tight   | Tight letter spacing   | `-0.03em`     |
| loose   | Loose letter spacing   | `0.05em`      |
| looser  | Looser letter spacing  | `0.1em`       |
| open    | Open letter spacing    | `0.2em`       |

## Line Height

| Key     | Description            | Default Value |
| ------- | ---------------------- | ------------- |
| tighter | Tighter line height    | `0.7`         |
| tight   | Tight line height      | `0.9`         |
| loose   | Loose line height      | `1.2`         |
| looser  | Looser line height     | `1.5`         |
| open    | Open line height       | `2`           |
| resp    | Responsive line height | `1.3em`       |

## Font Weight

| Key       | Description        | Default Value |
| --------- | ------------------ | ------------- |
| black     | Black font weight  | `900`         |
| extrabold | Extra bold weight  | `800`         |
| bold      | Bold font weight   | `700`         |
| semibold  | Semi-bold weight   | `600`         |
| medium    | Medium font weight | `500`         |
| normal    | Normal font weight | `400`         |
| light     | Light font weight  | `300`         |
| thin      | Thin font weight   | `200`         |
| hair      | Hairline weight    | `100`         |

## Border Radius

| Key | Description        | Default Value |
| --- | ------------------ | ------------- |
| xs  | Extra small radius | `0.2rem`      |
| sm  | Small radius       | `0.4rem`      |
| md  | Medium radius      | `0.8rem`      |
| lg  | Large radius       | `1.2rem`      |
| xl  | Extra large radius | `1.6rem`      |
| xxl | Double extra large | `2rem`        |

## Box Shadow

| Key | Description        | Default Value                                                                                |
| --- | ------------------ | -------------------------------------------------------------------------------------------- |
| 1   | Box shadow level 1 | `0 1px 2px var(--m-shadow-color, #0000001a)`                                                 |
| 2   | Box shadow level 2 | `0 1px 3px var(--m-shadow-color, #0000001a), 0 1px 2px var(--m-shadow-color, #0000001a)`     |
| 3   | Box shadow level 3 | `0 4px 6px var(--m-shadow-color, #0000001a), 0 2px 4px var(--m-shadow-color, #0000001a)`     |
| 4   | Box shadow level 4 | `0 10px 15px var(--m-shadow-color, #0000001a), 0 4px 6px var(--m-shadow-color, #0000001a)`   |
| 5   | Box shadow level 5 | `0 20px 25px var(--m-shadow-color, #0000001a), 0 10px 10px var(--m-shadow-color, #0000001a)` |

## Animation

<div class="overflow-auto">

| Key   | Description     | Default Value                                                                                                                    |
| ----- | --------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| spin  | Spin animation  | `{ dur: "1.5s linear infinite", keyframes: { "100%": { idle: "transform:rotate(1turn)" } } }`                                    |
| flare | Flare animation | `{ dur: "1s cubic-bezier(0, 0, 0.2, 1) infinite", keyframes: {"75%, 100%": {idle:"transform:scale(2) opacity-0"} } }`            |
| pulse | Pulse animation | `{ dur: "2s cubic-bezier(0.4, 0, 0.8, 1) infinite", keyframes: {"0%, 100%": {idle:"opacity-100"}, "50%":{idle:"opacity-30"} } }` |

</div>
