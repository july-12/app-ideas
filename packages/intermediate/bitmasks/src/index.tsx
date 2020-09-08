import React, { FC, useState } from 'react';

import './index.css';

function bitmasks(value: number, mask: number) {
    return (value & mask) === mask;
}

const BitMasksDemo: FC = () => {
    const [mask, setMask] = useState(0);

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

    const filterData = mask ? data.filter(({ GMT }) => bitmasks(GMT, +mask)) : data;

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

export default BitMasksDemo;
