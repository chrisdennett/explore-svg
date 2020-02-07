const strokeStyleSettings = {
  strokeLinecap: {
    label: "stroke-linecap",
    linke:
      "https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-linecap",
    type: "select",
    value: "round",
    options: {
      butt: {
        name: "butt",
        value: "butt"
      },
      round: {
        name: "round",
        value: "round"
      },
      square: {
        name: "square",
        value: "square"
      }
    }
  },
  strokeWidth: {
    label: "strokeWidth (line thickness)",
    link:
      "https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-width",
    type: "range",
    min: 1,
    max: 100,
    value: 25
  },
  strokeColor: {
    label: "stroke (colour)",
    link: "https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke",
    type: "colour",
    value: {
      r: 219,
      g: 62,
      b: 0,
      a: 1
    },
    palette: [
      "#B80000",
      "#DB3E00",
      "#FCCB00",
      "#008B02",
      "#006B76",
      "#1273DE",
      "#004DCF",
      "#5300EB"
    ]
  }
};

export const defaultAppData = {
  title: "SVG",
  infoUrl: "https://artfly.io/learning-to-talk-svg",

  elements: {
    line: {
      label: "<line />",
      styleSettings: {
        ...strokeStyleSettings
      },
      settings: {
        x1: {
          label: "x1",
          link: "https://developer.mozilla.org/en-US/docs/Web/SVG/Element/line",
          type: "range",
          min: 0,
          max: 1000,
          value: 75
        },
        y1: {
          label: "y1",
          link: "https://developer.mozilla.org/en-US/docs/Web/SVG/Element/line",
          type: "range",
          min: 0,
          max: 1000,
          value: 150
        },
        x2: {
          label: "x2",
          link: "https://developer.mozilla.org/en-US/docs/Web/SVG/Element/line",
          type: "range",
          min: 0,
          max: 1000,
          value: 800
        },
        y2: {
          label: "y2",
          link: "https://developer.mozilla.org/en-US/docs/Web/SVG/Element/line",
          type: "range",
          min: 0,
          max: 1000,
          value: 330
        }
      }
    }
  }
};
