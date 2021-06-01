const createTag = (tag, props) => {
    const element = document.createElement(tag);
    Object.keys(props).forEach((keyName) => {
        element[keyName] = props[keyName];
    });
    return element;
};

export default createTag;
