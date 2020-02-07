import React from "react";

export const Line = ({ attributeSettings, styleSettings }) => {
  const { x1, y1, x2, y2 } = attributeSettings;
  const { strokeWidth } = styleSettings;

  const styles = { strokeWidth: strokeWidth.value, stroke: "#000" };

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
