import React from "react";
import SliderControl from "../sliderControl/SliderControl";

const AttributeControls = ({ settings, updateSettings }) => {
  const settingsKeys = Object.keys(settings);
  const rangeSettingsKeys = settingsKeys.filter(
    key => settings[key].type === "range"
  );

  return (
    <div>
      {rangeSettingsKeys.map(key => {
        const currSetting = settings[key];
        return (
          <SliderControl
            key={key}
            link={currSetting.link}
            labelStyle={{ minWidth: 150 }}
            label={`${currSetting.label} = `}
            displayValue={true}
            min={currSetting.min}
            max={currSetting.max}
            value={currSetting.value}
            onChange={value => updateSettings(key, value)}
          />
        );
      })}
    </div>
  );
};

export default AttributeControls;
