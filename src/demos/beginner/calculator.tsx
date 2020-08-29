import React, { useState } from 'react';

import './calculator.less';

function isNumber(val) {
    console.log(!isNaN(+val));
    return !isNaN(+val);
}

const CalculatorDemo = () => {
    const [keyRecord, setKeyRecord] = useState([]);
    const [prevRecord, setPrevRecord] = useState([]);

    const keys = [
        ['AC', '<x', '%', '/'],
        ['7', '8', '9', 'x'],
        ['4', '5', '6', '-'],
        ['1', '2', '3', '+'],
        ['!', '0', '.', '=']
    ];

    const handleClick = (item) => {
        switch (item.key) {
            case 'AC':
                setKeyRecord([]);
                break;
            case '<x':
                setKeyRecord(keyRecord.slice(0, keyRecord.length - 1));
                break;
            case '=':
                break;
            default:
                setKeyRecord(keyRecord.concat(item));
                break;
        }
    };

    const renderResult = () => {
        console.log(keyRecord);
        if (keyRecord.length > 0) {
            let number = '';
            let result = keyRecord.reduce((result, key) => {
                switch (key.key) {
                    case '+':
                        result = result + +number;
                        break;
                    case '-':
                        result = result - +number;
                        break;
                    case 'x':
                        result = result * +number;
                        break;
                    case '/':
                        result = result / +number;
                        break;
                    default:
                        number += key;
                        break;
                }
                return result;
            }, 0);
            if (result === 0) {
                result = number;
            }
            return (
                <div>
                    <span className="input-opt">=</span>
                    <span className="input-value">{result}</span>
                </div>
            );
        }
    };

    return (
        <div className="calculator">
            <div className="screen">
                <div className="prev-input"></div>
                <div className="current-input">
                    {keyRecord.map((key) => (
                        <span className={isNumber(key) ? 'input-value' : 'input-opt'} key={key}>
                            {key}
                        </span>
                    ))}
                    {renderResult()}
                </div>
            </div>
            <div className="keyboard">
                {keys.map((row, index) => (
                    <div key={index} className="keyboard-row">
                        {row.map((key) => (
                            <div
                                key={key}
                                className={`keyboard-row-column ${
                                    isNumber(key) || key === '.' ? `keyboard-row-column-number` : ''
                                }`}
                                onClick={() => handleClick(key)}
                            >
                                {key}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

const Calculator = () => {
    return (
        <div>
            <CalculatorDemo />
            <div className="requirement">
                <h3>requirement</h3>
                <p>
                    Calculators are not only one of the most useful tools available, but they are
                    also a great way to understand UI and event processing in an application. In
                    this problem you will create a calculator that supports basic arithmetic
                    calculations on integers.
                </p>
                <p>
                    The styling is up to you so use your imagination and get creative! You might
                    also find it worth your time to experiment with the calculator app on your
                    mobile device to better understand basic functionality and edge cases.
                </p>
                <h4> Constraints </h4>
                <ul>
                    <li>
                        You may not use the <b>eval()</b> function to execute calculations
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Calculator;
