// packages/scandi-dark-theme/src/plugin/getStaticReducers.plugin.js
import DarkModeReducer from '../store/DarkMode/DarkMode.reducer';

export const getStaticReducers = (args, callback) => {
    return {
        ...callback(args),
        DarkMode: DarkModeReducer,
    };
};

export default {
    'Store/Index/getReducers': {
        function: getStaticReducers,
    },
};