import React, { useEffect } from 'react';

import { createTag } from '@common';

const MicroFrontEnd = ({ name }) => {
    const capitalName = name.substring(0, 1).toUpperCase() + name.substring(1);
    const containerId = `container-${name}`;
    const scriptId = `mfe-script-${name}`;

    useEffect(() => {
        const renderMicroFE = () => {
            const renderFunc = `render${capitalName}`;
            if (window[renderFunc]) {
                window[renderFunc](containerId);
            }
        };

        if (document.getElementById(scriptId)) {
            renderMicroFE();
            return;
        }

        const scriptTag = createTag('script', {
            crossOrigin: '*',
            id: scriptId,
            src: `./${name}.bundle.js`,
            onload: () => {
                renderMicroFE();
            },
        });
        document.head.appendChild(scriptTag);

        return () => {
            const unmountFunc = `unmount${capitalName}`;
            if (window[unmountFunc]) {
                window[unmountFunc]();
            }
        };
    }, []);

    return <div id={containerId} />;
};

export default MicroFrontEnd;
