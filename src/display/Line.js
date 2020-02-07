import React from "react";

export const Line = ({ attributeSettings, styleSettings }) => {
  const { x1, y1, x2, y2 } = attributeSettings;
  const {
    strokeWidth,
    strokeColor,
    strokeLinecap,
    strokeDasharray
  } = styleSettings;

  const { r, g, b, a } = strokeColor.value;
  const colour = `rgb(${r}, ${g}, ${b}, ${a} )`;

  const strokeDashArrayValue = strokeDasharray.value;
  const isDashed = strokeDashArrayValue !== "none";
  const strokeLinecapValue = strokeLinecap.value;

  const styles = {
    strokeWidth: strokeWidth.value,
    stroke: colour,
    strokeDasharray: strokeDashArrayValue
  };

  if (!isDashed) {
    styles.strokeLinecap = strokeLinecapValue;
  }

  return (
    <line
      x1={x1.value}
      y1={y1.value}
      x2={x2.value}
      y2={y2.value}
      style={styles}
    />
  );
};
