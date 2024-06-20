export const testPlugin = (args, callback, _instance) => {
    // eslint-disable-next-line
    console.log('Extension is working!');

    return callback(...args);
};

export default {
    'Component/Header/Component': {
        'member-function': {
            render: testPlugin,
        },
    },
};
