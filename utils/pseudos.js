const pseudos = {
    class: {},
    className: {},
    hover: {
        pseudo: "hover",
    },
    focus: {
        pseudo: "focus",
    },
    active: {
        pseudo: "active",
    },
    first: {
        pseudo: "first-child",
    },
    last: {
        pseudo: "last-child",
    },
    even: {
        pseudo: "nth-child(even)",
    },
    odd: {
        pseudo: "nth-child(odd)",
    },
    "focus-within": {
        pseudo: "focus-within",
    },
    visited: {
        pseudo: "visited",
    },
    "not-first": {
        pseudo: "not(:first-child)",
    },
    "not-last": {
        pseudo: "not(:last-child)",
    },
    disabled: {
        pseudo: "disabled",
    },
    checked: {
        pseudo: "checked",
    },
    "not-checked": {
        pseudo: "not(:checked)",
    },
    invalid: {
        pseudo: "invalid",
    },
    valid: {
        pseudo: "valid",
    },
    optional: {
        pseudo: "optional",
    },
    "read-only": {
        pseudo: "read-only",
    },
    "focus-visible": {
        pseudo: "focus-visible",
    },
    indeterminate: {
        pseudo: "indeterminate",
    },
    required: {
        pseudo: "required",
    },
    empty: {
        pseudo: "empty",
    },
    before: {
        pseudo: ":before",
    },
    after: {
        pseudo: ":after",
    },
    selection: {
        pseudo: ":selection",
    },
    "first-letter": {
        pseudo: ":first-letter",
    },
    "first-line": {
        pseudo: ":first-line",
    },
    /*
      "parent-hover": {
          parent: "[parent]:hover",
      },
      "parent-focus": {
          parent: "[parent]:focus",
      },
      "parent-active": {
          parent: "[parent]:active",
      },
      "parent-visited": {
          parent: "[parent]:visited",
      },
      "sibling-hover": {
          parent: "[sibling]:hover ~",
      },
      "sibling-focus": {
          parent: "[sibling]:focus ~",
      },
      "sibling-checked": {
          parent: "[sibling]:checked ~",
      },
     */
    rtl: {
        parent: "[dir='rtl']",
    },
    print: {
        media: "print",
    },
};

for(let i in pseudos){
    if(pseudos[i].pseudo) {
        pseudos["parent-" + i] = {
            parent: "[parent]:" + pseudos[i].pseudo
        }
        pseudos["sibling-" + i] = {
            parent: "[sibling]:" + pseudos[i].pseudo
        }
    }
}

module.exports = pseudos;