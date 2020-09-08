import React from 'react';

import BitMasksDemo from '~/packages/intermediate/bitmasks';

const BitMasks = () => {
    return (
        <div>
            <BitMasksDemo />
            <div className="requirement">
                <p>
                    It's difficult to find an app that doesn't rely on some form of conditional
                    logic to implement its functionality. This is almost always performed using
                    statements like:
                </p>
                <p className="code">
                    <code>
                        if (processAccount === true) {'{'} <br />
                        &nbsp; &nbsp; /* do something */ <br />
                        {'}'}
                    </code>
                </p>
                <p>
                    If and switch statements work well for a limited number of conditionals, but
                    what if your app had 10's or 100's of conditionals to evaluate? Luckily, there's
                    another way.
                </p>
                <p>
                    The goal of the Bit Masks app is demonstrate how to use bit masks to evaluate
                    longer sequences of switches without having to rely on long strings of
                    conditional statements.
                </p>
            </div>
        </div>
    );
};

export default BitMasks;
