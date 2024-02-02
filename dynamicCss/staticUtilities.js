module.exports = {
  "bg-gradient":
    "--m-gd-dir: to bottom;--m-gd-start-color: ;--m-gd-mid-color: ;--m-gd-end-color: ;background-image: linear-gradient(var(--m-gd-dir), var(--m-gd-start-color), var(--m-gd-mid-color) var(--m-gd-end-color))",
  // filter:
  //   "--m-f-blur: ;--m-f-brightness: ;--m-f-contrast: ;--m-f-grayscale: ;--m-f-hue-rotate: ;--m-f-invert: ;--m-f-saturate: ;--m-f-sepia: ;--m-f-drop-shadow: ;-webkit-filter: var(--m-f-blur) var(--m-f-brightness) var(--m-f-contrast) var(--m-f-grayscale) var(--m-f-hue-rotate) var(--m-f-invert) var(--m-f-saturate) var(--m-f-sepia) var(--m-f-drop-shadow);filter: var(--m-f-blur) var(--m-f-brightness) var(--m-f-contrast) var(--m-f-grayscale) var(--m-f-hue-rotate) var(--m-f-invert) var(--m-f-saturate) var(--m-f-sepia) var(--m-f-drop-shadow)",
  "filter-none": "filter: none;-webkit-filter: none",
  // "backdrop-filter":
  //   "--m-bf-blur: ;--m-bf-brightness: ;--m-bf-contrast: ;--m-bf-grayscale: ;--m-bf-hue-rotate: ;--m-bf-invert: ;--m-bf-saturate: ;--m-bf-sepia: ;--m-bf-drop-shadow: ;-webkit-backdrop-filter: var(--m-bf-blur) var(--m-bf-brightness) var(--m-bf-contrast) var(--m-bf-grayscale) var(--m-bf-hue-rotate) var(--m-bf-invert) var(--m-bf-saturate) var(--m-bf-sepia);backdrop-filter: var(--m-bf-blur) var(--m-bf-brightness) var(--m-bf-contrast) var(--m-bf-grayscale) var(--m-bf-hue-rotate) var(--m-bf-invert) var(--m-bf-saturate) var(--m-bf-sepia)",
  "backdrop-filter-none": "backdrop-filter: none;-webkit-backdrop-filter: none",
  // transform:
  //   "--m-t-translate-x: 0;--m-t-translate-y: 0;--m-t-translate-z: 0;--m-t-rotate: 0;--m-t-rotate-x: 0;--m-t-rotate-y: 0;--m-t-rotate-z: 0;--m-t-skew-x: 0;--m-t-skew-y: 0;--m-t-scale-x: 1;--m-t-scale-y: 1;--m-t-scale-z: 1;-webkit-transform: translateX(var(--m-t-translate-x)) translateY(var(--m-t-translate-y)) translateZ(var(--m-t-translate-z)) rotate(var(--m-t-rotate)) rotateX(var(--m-t-rotate-x)) rotateY(var(--m-t-rotate-y)) rotateZ(var(--m-t-rotate-z)) skewX(var(--m-t-skew-x)) skewY(var(--m-t-skew-y)) scaleX(var(--m-t-scale-x)) scaleY(var(--m-t-scale-y)) scaleZ(var(--m-t-scale-z));-ms-transform: translateX(var(--m-t-translate-x)) translateY(var(--m-t-translate-y)) translateZ(var(--m-t-translate-z)) rotate(var(--m-t-rotate)) rotateX(var(--m-t-rotate-x)) rotateY(var(--m-t-rotate-y)) rotateZ(var(--m-t-rotate-z)) skewX(var(--m-t-skew-x)) skewY(var(--m-t-skew-y)) scaleX(var(--m-t-scale-x)) scaleY(var(--m-t-scale-y)) scaleZ(var(--m-t-scale-z));transform: translateX(var(--m-t-translate-x)) translateY(var(--m-t-translate-y)) translateZ(var(--m-t-translate-z)) rotate(var(--m-t-rotate)) rotateX(var(--m-t-rotate-x)) rotateY(var(--m-t-rotate-y)) rotateZ(var(--m-t-rotate-z)) skewX(var(--m-t-skew-x)) skewY(var(--m-t-skew-y)) scaleX(var(--m-t-scale-x)) scaleY(var(--m-t-scale-y)) scaleZ(var(--m-t-scale-z))",
  "transform-none":
    "transform: none;-webkit-transform: none;-ms-transform: none",
  transition:
    "-mojo-delay-transition-property: all;-webkit--mojo-delay-transition-property: all;-o--mojo-delay-transition-property: all;-mojo-delay-transition-duration: 100ms;-webkit--mojo-delay-transition-duration: 100ms;-o--mojo-delay-transition-duration: 100ms;-mojo-delay-transition-timing-function: ease;-webkit--mojo-delay-transition-timing-function: ease;-o--mojo-delay-transition-timing-function: ease",
  "transition-none":
    "-mojo-delay-transition-property: none;-webkit--mojo-delay-transition-property: none;-o--mojo-delay-transition-property: none",
  grid: "display: grid;grid-template-columns: repeat(1, minmax(0, 1fr));grid-gap: 1rem;--m-box-start: start;--m-box-end: end",
  "cols-auto": "grid-template-columns: repeat(auto-fit, minmax(0, 1fr))",
  "rows-auto": "grid-template-rows: repeat(auto-fit, minmax(0, 1fr))",
  "col-auto": "grid-column: auto",
  "col-offset-auto": "grid-column-start: auto",
  "flex-fluid": "flex: 1 1 0%",
  "flex-auto": "flex: 1 1 auto",
  "flex-none": "flex: none",
  "flex-wrap": "flex-wrap: wrap",
  "flex-nowrap": "flex-wrap: nowrap",
  "flex-wrap-reverse": "flex-wrap: wrap-reverse",
  "flex-col": "flex-direction: column",
  "flex-row": "flex-direction: row",
  "flex-col-reverse": "flex-direction: column-reverse",
  "flex-row-reverse": "flex-direction: row-reverse",
  "text-wb-normal": "word-break: normal;overflow-wrap: normal",
  "text-wb-words": "overflow-wrap: break-word",
  "text-wb-all": "word-break: break-all",
  "text-wb-keep": "word-break: keep-all",
  "text-truncate":
    "overflow: hidden;text-overflow: ellipsis;white-space: nowrap",
  hidden: "visibility: hidden",
  visible: "visibility: visible",
  "resize-xy": "resize: both",
  "resize-x": "resize: horizontal",
  "resize-y": "resize: vertical",
  "outline-none": "outline:none",
};
