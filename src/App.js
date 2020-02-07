import React, { useState } from "react";
import * as Space from "react-spaces";
//
import TopBar from "./top-bar/TopBar";
import Display from "./display/Display";
import Controls from "./controls/Controls";
import { defaultAppData } from "./appData";

function App() {
  const [appData, setAppData] = useState(defaultAppData);
  const [optionsVisible, setOptionsVisible] = useState(true);
  const [currentElementKey, setCurrentElementKey] = useState("line");

  // values derived from state
  const currentElement = appData.elements[currentElementKey];
  const { settings, label } = currentElement;

  const updateCurrentElement = newElementData => {
    const updatedElements = {
      ...appData.elements,
      [currentElementKey]: newElementData
    };
    setAppData({
      ...appData,
      elements: updatedElements
    });
  };

  return (
    <Space.ViewPort>
      <Space.Top size={60}>
        <Space.Info>
          {sizeInfo => (
            <TopBar
              title={`${appData.title} : ${label}`}
              infoUrl={appData.infoUrl}
              optionsVisible={optionsVisible}
              setOptionsVisible={setOptionsVisible}
              width={sizeInfo.width}
            />
          )}
        </Space.Info>
      </Space.Top>

      <Space.Fill trackSize={true}>
        <Display element={currentElement} />
      </Space.Fill>

      {optionsVisible && (
        <Space.BottomResizable size={250} scrollable={true}>
          <Controls
            element={currentElement}
            updateElement={updateCurrentElement}
          />
        </Space.BottomResizable>
      )}
    </Space.ViewPort>
  );
}

export default App;
