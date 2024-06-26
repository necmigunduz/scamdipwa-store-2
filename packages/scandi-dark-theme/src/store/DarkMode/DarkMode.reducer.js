import BrowserDatabase from '../../../../../node_modules/@scandipwa/scandipwa/src/util/BrowserDatabase';

import { DARKMODE_ENABLE } from './DarkMode.action';

export const DARKMODE_KEY = 'DARKMODE_ENABLED';

//  @namespace ScandiDarkTheme/Store/DarkMode/Reducer/getInitialState
export const getInitialState = () => ({
    enabled: BrowserDatabase.getItem(DARKMODE_KEY) || false,
});

// @namespace ScandiDarkTheme/Store/DarkMode/Reducer/DarkModeReducer
export const DarkModeReducer = (state = getInitialState(), action) => {
    switch (action.type) {
    case DARKMODE_ENABLE:
        const { enabled } = action;

        if (enabled) {
            BrowserDatabase.setItem(true, DARKMODE_KEY);
        } else {
            // clear the local storage state
            BrowserDatabase.deleteItem(DARKMODE_KEY);
        }

        return {
            enabled,
        };

    // for any other action types return the current state
    default:
        return state;
    }
};

export default DarkModeReducer;
