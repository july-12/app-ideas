import React, { useState } from 'react';
import ReactSlider from 'react-slider';
import './index.css';

const BorderRadiusPreviewer = () => {
  const [borderRadiuItems, setBorderRadiuItems] = useState([{
    title: 'Top Left',
    slider: 0
  }, {
    title: 'Top Right',
    slider: 0
  }, {
    title: 'Bottom Right',
    slider: 0
  }, {
    title: 'Bottom Left',
    slider: 0
  }]);

  const handleSliderChange = (index, value) => {
    const newSliders = [...borderRadiuItems];
    newSliders[index].slider = value;
    setBorderRadiuItems(newSliders);
  };

  const radiusValue = borderRadiuItems.reduce((value, item) => {
    value += `${item.slider}% `;
    return value;
  }, '');
  return /*#__PURE__*/React.createElement("div", {
    className: "border-radius-previewer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "border-box",
    style: {
      borderRadius: radiusValue
    }
  }, /*#__PURE__*/React.createElement("span", null, "border-radius: ", /*#__PURE__*/React.createElement("span", {
    className: "raduis-value"
  }, radiusValue), ";")), /*#__PURE__*/React.createElement("div", {
    className: "border-control"
  }, borderRadiuItems.map((item, index) => /*#__PURE__*/React.createElement("div", {
    key: item.title,
    className: "border-control-item"
  }, /*#__PURE__*/React.createElement("h3", null, " ", item.title, ": "), /*#__PURE__*/React.createElement(ReactSlider, {
    className: "horizontal-slider",
    value: item.slider,
    onChange: value => handleSliderChange(index, value),
    onAfterChange: value => console.log(value),
    thumbClassName: "thumb",
    renderThumb: (props, state) => /*#__PURE__*/React.createElement("div", props, state.valueNow)
  })))));
};

export default BorderRadiusPreviewer;