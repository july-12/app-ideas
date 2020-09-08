import React, { useState } from 'react';

import './bitMasks.less';

const BitMasksDemo = () => {
    const [mask, setMask] = useState();

    const data = [
        { name: 'Moscow', GMT: 3 },
        { name: 'Paris', GMT: 2 },
        { name: 'Berlin', GMT: 2 },
        { name: 'Brussels', GMT: 2 },
        { name: 'Amsterdam', GMT: 2 },
        { name: 'Rome', GMT: 2 },
        { name: 'London', GMT: 2 },
        { name: 'Dublin', GMT: 1 },
        { name: 'New York', GMT: -4 },
        { name: 'Washington', GMT: -4 },
        { name: 'St. Louis', GMT: -5 },
        { name: 'Los Angeles', GMT: -7 },
        { name: 'Tokyo', GMT: 9 },
        { name: 'Beijing', GMT: 8 },
        { name: 'Ho Chi Mihn City', GMT: 7 },
        { name: 'Mumbai', GMT: 5 }
    ];

    const search = (e) => {
        const { value } = e.target;
        setMask(value);
    };

    const checkGMT = (gmt, mask) => {
        return (gmt & mask) === +mask;
    };

    const filterData = mask ? data.filter(({ GMT }) => checkGMT(GMT, mask)) : data;

    return (
        <div className="masks">
            <input type="number" placeholder="Input GMT to search" onChange={search} />
            <ul>
                <li className="head">
                    <span className="title">Country</span> <span className="gmt">GMT</span>
                </li>
                {filterData.map(({ name, GMT }) => (
                    <li key={name + GMT}>
                        <span className="title">{name}</span> <span className="gmt">{GMT}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

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
