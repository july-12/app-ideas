import React from 'react';
import { useParams } from 'react-router-dom';

import BeginnerDemo from '../demos/beginners';

import './show.less';

const compMap = {
    beginner: BeginnerDemo
};

const Demo = () => {
    const { level, demoId } = useParams();
    const unexistdemo = 'Demo unexist!';
    if (!compMap[level]) {
        return <div className="">{unexistdemo}</div>;
    }
    const Comp = compMap[level][demoId];
    if (!Comp) {
        return <div className="">{unexistdemo}</div>;
    }
    return (
        <div className="demo-wrap">
            <Comp />
        </div>
    );
};

export default Demo;
