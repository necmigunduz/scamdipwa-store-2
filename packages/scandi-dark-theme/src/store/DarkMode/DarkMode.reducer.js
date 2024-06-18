import { DARKMODE_ENABLE } from './DarkMode.action';

/** @namespace ScandiDarkTheme/Store/DarkMode/Reducer/getInitialState */
const getInitialState = () => ({
    enabled: false
});

/** @namespace ScandiDarkTheme/Store/DarkMode/Reducer/DarkModeReducer */
const DarkModeReducer = (state = getInitialState(), action) => {
    switch (action.type) {
        case DARKMODE_ENABLE:
            const { enabled } = action;
            return {
                ...state,
                enabled
            };
        default:
            return state;
    }
};

export default DarkModeReducer;
