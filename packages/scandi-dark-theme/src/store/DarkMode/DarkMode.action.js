export const DARKMODE_ENABLE = 'DARKMODE_ENABLE';

/** @namespace myStore/Store/DarkMode/Action/enableDarkMode */
export const enableDarkMode = (enabled) => ({
    type: DARKMODE_ENABLE,
    enabled,
});
