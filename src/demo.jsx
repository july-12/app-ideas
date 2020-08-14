import React from 'react';
import { useParams } from 'react-router-dom';

import BeginnerDemo from './beginners';
import './demo.less';

const compMap = {
    beginner: BeginnerDemo
};

const Demo = () => {
    const { level, demoId } = useParams();
    if (!compMap[level]) {
        return <div className="">没有该示列</div>;
    }
    const Comp = compMap[level][demoId];
    if (!Comp) {
        return <div className="">没有该示列</div>;
    }
    return (
        <div className="demo-wrap">
            <Comp />
        </div>
    );
};

export default Demo;
