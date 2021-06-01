import React from 'react';
import ReactDOM from 'react-dom';
import NavApp from './core/app';

const containers = [];

window.renderNav = (containerId) => {
    const element = document.getElementById(containerId);
    if (element) {
        ReactDOM.render(<NavApp />, element);
        containers.push(element);
    }
};

window.unmountNav = (containerId) => {
    const element = document.getElementById(containerId);
    const index = containers.find((element) => element === containerId);
    if (element && index >= 0) {
        ReactDOM.unmountComponentAtNode(element);
        containers.splice(index, 1);
    }
};

window.unmountAllNav = (containerId) => {
    while (containers.length > 0) {
        const element = containers.pop();
        ReactDOM.unmountComponentAtNode(element);
    }
};
