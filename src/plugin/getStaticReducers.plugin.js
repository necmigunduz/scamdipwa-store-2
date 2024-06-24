import DarkModeReducer from "../store/DarkMode/DarkMode.reducer";
import injectStaticReducers from "Store/";
// export const getStaticReducers = (args, callback) => ({
//   ...callback(args),
//   DarkModeReducer,
// });

export default {
  "Store/Index/getReducers": {
    function: injectStaticReducers,
  },
};