import ModeToggleButton from '../component/ModeToggleButton';

import './Header.style.plugin';
// eslint-disable-next-line arrow-body-style
export const renderTopMenu = (args, callback, __instance) => {
    return (
        <>
            <div block="Header" elem="DarkModeToggle">
                <ModeToggleButton />
            </div>
            {callback(...args)}
        </>
    );
};

export default {
    'Component/Header/Component': {
        'member-function': {
            renderTopMenu,
        },
    },
};
