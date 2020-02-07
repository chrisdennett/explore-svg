const strokeStyleSettings = {
  strokeWidth: {
    label: "strokeWidth (line thickness)",
    link:
      "https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-width",
    type: "range",
    min: 1,
    max: 100,
    value: 5
  },
  strokeColor: {
    label: "stroke (colour)",
    link:
      "https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-width",
    type: "colour",
    value: "#000000"
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
          value: 30
        },
        y1: {
          label: "y1",
          link: "https://developer.mozilla.org/en-US/docs/Web/SVG/Element/line",
          type: "range",
          min: 0,
          max: 1000,
          value: 30
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
          value: 30
        }
      }
    }
  }
};
