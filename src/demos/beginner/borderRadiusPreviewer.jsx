import React from 'react';

import BorderRadiusPreviewer from '~/packages/beginner/borderRadiusPreviewer';

const BorderRadiusPreviewerDemo = () => {
    return (
        <div>
            <BorderRadiusPreviewer />
            <div className="requirement">
                <h3>requirement</h3>
                <p>
                    The border-radius property can have multiple values changed. Preview how the
                    shape looks while changing these values.
                </p>
            </div>
        </div>
    );
};

export default BorderRadiusPreviewerDemo;
