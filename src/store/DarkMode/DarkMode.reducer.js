import { DARKMODE_ENABLE } from './DarkMode.action';

/** @namespace myStore/Store/DarkMode/Reducer/getInitialState */
export const getInitialState = () => ({
    enabled: true,
});

/** @namespace myStore/Store/DarkMode/Reducer/DarkModeReducer */
export const DarkModeReducer = (state = getInitialState(), action) => {
    switch (action.type) {
    case DARKMODE_ENABLE:
        const { enabled } = action;

        return {
            enabled,
        };

    default:
        return state;
    }
};

export default DarkModeReducer;
