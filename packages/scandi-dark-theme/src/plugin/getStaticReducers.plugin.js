import injectStaticReducers from '../../../../src/store/index';
// export const getStaticReducers = (args, callback) => ({
//   ...callback(args),
//   DarkModeReducer,
// });

export default {
  "Store/Index/getReducers": {
    function: injectStaticReducers,
  },
};