import React, { FC, useState } from 'react';
import ReactSlider from 'react-slider';

import './index.css';

const BorderRadiusPreviewer: FC = () => {
    const [borderRadiuItems, setBorderRadiuItems] = useState([
        { title: 'Top Left', slider: 0 },
        { title: 'Top Right', slider: 0 },
        { title: 'Bottom Right', slider: 0 },
        { title: 'Bottom Left', slider: 0 }
    ]);

    const handleSliderChange = (index, value) => {
        const newSliders = [...borderRadiuItems];
        newSliders[index].slider = value;
        setBorderRadiuItems(newSliders);
    };

    const radiusValue = borderRadiuItems.reduce((value, item) => {
        value += `${item.slider}% `;
        return value;
    }, '');

    return (
        <div className="border-radius-previewer">
            <div className="border-box" style={{ borderRadius: radiusValue }}>
                <span>
                    border-radius: <span className="raduis-value">{radiusValue}</span>;
                </span>
            </div>
            <div className="border-control">
                {borderRadiuItems.map((item, index) => (
                    <div key={item.title} className="border-control-item">
                        <h3> {item.title}: </h3>
                        <ReactSlider
                            className="horizontal-slider"
                            value={item.slider}
                            onChange={(value) => handleSliderChange(index, value)}
                            onAfterChange={(value) => console.log(value)}
                            thumbClassName="thumb"
                            renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BorderRadiusPreviewer;
