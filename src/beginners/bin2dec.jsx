import React, { useRef, useState } from 'react';

import bin2dec from '../../packages/beginner/bin2dec';

import './bin2dec.less';

const Bin2Dec = () => {
    const ref = useRef();
    const [valid, setValid] = useState(true);
    const [decimal, setDecimal] = useState();

    const handleConvert = () => {
        const { value } = ref.current;
        const decimal = bin2dec(value.trim());
        if (decimal) {
            setDecimal(decimal);
            setValid(true);
        } else {
            setValid(false);
            setDecimal();
        }
    };
    return (
        <div>
            <div className="box">
                <div className="input-area">
                    <input placeholder="Please input binary number" ref={ref} type="text" />
                    <button onClick={handleConvert}>convert</button>
                    {!valid && <p className="error">Invalid binary number(eg: 0101, 0011)</p>}
                    <p>Result: {decimal}</p>
                </div>
            </div>

            <div className="requirement">
                <h3>requirement</h3>
                <p>
                    Binary is the number system all digital computers are based on. Therefore it's
                    important for developers to understand binary, or base 2, mathematics. The
                    purpose of Bin2Dec is to provide practice and understanding of how binary
                    calculations.
                </p>

                <p>
                    Bin2Dec allows the user to enter strings of up to 8 binary digits, 0's and 1's,
                    in any sequence and then displays its decimal equivalent.
                </p>

                <p>
                    This challenge requires that the developer implementing it follow these
                    constraints:
                </p>

                <ul>
                    <li>Arrays may not be used to contain the binary digits entered by the user</li>
                    <li>
                        Determining the decimal equivalent of a particular binary digit in the
                        sequence must be calculated using a single mathematical function, for
                        example the natural logarithm. It's up to you to figure out which function
                        to use.
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Bin2Dec;
