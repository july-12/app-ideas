import * as React from 'react';
import { useParams } from 'react-router-dom';

import beginnerDemo from '../demos/beginner';

import './show.less';

const compMap = {
    beginner: beginnerDemo
};

const Demo = () => {
    const { level, demoTitle } = useParams();

    const notFoundContent = <div>Demo not founded!</div>;

    if (!compMap[level]) {
        return notFoundContent;
    }

    const demoIndex = compMap[level].findIndex((demo) => demo.title === demoTitle);

    if (demoIndex === -1) {
        return notFoundContent;
    }

    const { Comp } = compMap[level][demoIndex];

    return (
        <div className="demo-wrap">
            <h3>{demoTitle}</h3>
            <Comp />
        </div>
    );
};

export default Demo;
