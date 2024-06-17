console.log("Header.component.plugin.js is loaded");

export const testPlugin = (args, callback, instance) => {
  console.log("Extension is working!");
  return callback(...args);
};

export default {
  "Component/Header/Component": {
    "member-function": {
      render: testPlugin,
    },
  },
};