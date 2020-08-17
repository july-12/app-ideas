import * as React from 'react';
import { useParams } from 'react-router-dom';

import BeginnerDemo from '../demos/beginners';

import './show.less';

const compMap = {
    beginner: BeginnerDemo
};

const Demo = () => {
    const { level, demoId } = useParams();
    const notice = 'Demo not founded!';
    if (!compMap[level]) {
        return <div>{notice}</div>;
    }
    const Comp = compMap[level][demoId];
    if (!Comp) {
        return <div>{notice}</div>;
    }
    return (
        <div className="demo-wrap">
            <Comp />
        </div>
    );
};

export default Demo;
