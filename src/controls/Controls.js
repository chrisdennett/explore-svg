import React, { useState } from "react";
import styled from "styled-components";
// comps
import TabControls from "./tabControls/TabControls";
import AttributeControls from "./attributeControls/AttributeControls";
import StyleControls from "./styleControls/StyleControls";

const Controls = ({ element, updateElement }) => {
  const [activeTab, setActiveTab] = useState(1);

  const { settings, styleSettings } = element;

  const updateAttributeSettings = (key, newValue) => {
    const newSetting = { ...settings[key], value: newValue };
    const newSettings = { ...settings, [key]: newSetting };
    const newElementData = { ...element, settings: newSettings };

    updateElement(newElementData);
  };

  const updateStyleSettings = (key, newValue) => {
    const newSetting = { ...styleSettings[key], value: newValue };
    const newSettings = { ...styleSettings, [key]: newSetting };
    const newElementData = { ...element, styleSettings: newSettings };

    updateElement(newElementData);
  };

  return (
    <Container>
      <TabControls activeTab={activeTab} onUpdate={setActiveTab} />
      <ControlsUI>
        {activeTab === 0 && (
          <AttributeControls
            settings={settings}
            updateSettings={updateAttributeSettings}
          />
        )}

        {activeTab === 1 && (
          <StyleControls
            settings={styleSettings}
            updateSettings={updateStyleSettings}
          />
        )}
      </ControlsUI>
    </Container>
  );
};

export default Controls;

// STYLES
const Container = styled.div`
  border-top: 5px solid grey;
  padding-top: 5px;
  background: black;
  color: white;
`;

const ControlsUI = styled.div`
  margin: 15px;
`;
