import React from "react";
import SliderControl from "../sliderControl/SliderControl";
import ColourPickerControl from "../colourPickerControl/ColourPickerControl";
import SelectorControl from "../selectorControl/SelectorControl";

const StyleControls = ({ settings, updateSettings }) => {
  const settingsKeys = Object.keys(settings);

  return (
    <div>
      {settingsKeys.map((key) => {
        const currSetting = settings[key];

        if (currSetting.type === "colour") {
          return (
            <ColourPickerControl
              key={key}
              label={currSetting.label}
              colour={currSetting.value}
              palette={currSetting.palette}
              onChange={(value) => updateSettings(key, value)}
            />
          );
        }
        if (currSetting.type === "select") {
          return (
            <SelectorControl
              key={key}
              label={currSetting.label}
              currentOptionKey={currSetting.value}
              options={currSetting.options}
              onChange={(value) => updateSettings(key, value)}
            />
          );
        }

        if (currSetting.type === "range") {
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
              onChange={(value) => updateSettings(key, value)}
            />
          );
        }

        return null;
      })}
    </div>
  );
};

export default StyleControls;
