import React, { useState } from 'react';
import './index.css';

function bitmasks(value, mask) {
  return (value & mask) === mask;
}

const BitMasksDemo = () => {
  const [mask, setMask] = useState(0);
  const data = [{
    name: 'Moscow',
    GMT: 3
  }, {
    name: 'Paris',
    GMT: 2
  }, {
    name: 'Berlin',
    GMT: 2
  }, {
    name: 'Brussels',
    GMT: 2
  }, {
    name: 'Amsterdam',
    GMT: 2
  }, {
    name: 'Rome',
    GMT: 2
  }, {
    name: 'London',
    GMT: 2
  }, {
    name: 'Dublin',
    GMT: 1
  }, {
    name: 'New York',
    GMT: -4
  }, {
    name: 'Washington',
    GMT: -4
  }, {
    name: 'St. Louis',
    GMT: -5
  }, {
    name: 'Los Angeles',
    GMT: -7
  }, {
    name: 'Tokyo',
    GMT: 9
  }, {
    name: 'Beijing',
    GMT: 8
  }, {
    name: 'Ho Chi Mihn City',
    GMT: 7
  }, {
    name: 'Mumbai',
    GMT: 5
  }];

  const search = e => {
    const {
      value
    } = e.target;
    setMask(value);
  };

  const filterData = mask ? data.filter(({
    GMT
  }) => bitmasks(GMT, +mask)) : data;
  return /*#__PURE__*/React.createElement("div", {
    className: "masks"
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    placeholder: "Input GMT to search",
    onChange: search
  }), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", {
    className: "head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "title"
  }, "Country"), " ", /*#__PURE__*/React.createElement("span", {
    className: "gmt"
  }, "GMT")), filterData.map(({
    name,
    GMT
  }) => /*#__PURE__*/React.createElement("li", {
    key: name + GMT
  }, /*#__PURE__*/React.createElement("span", {
    className: "title"
  }, name), " ", /*#__PURE__*/React.createElement("span", {
    className: "gmt"
  }, GMT)))));
};

export default BitMasksDemo;