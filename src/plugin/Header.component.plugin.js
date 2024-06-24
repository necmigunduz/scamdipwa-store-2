import ModeToggleButton from '../component/ModeToggleButton';

import './Header.style.plugin';
// eslint-disable-next-line arrow-body-style
export const renderTopMenu = (args, callback, __instance) => {
    return (
        <>
          { callback(...args) }
          <div block="Header" elem="DarkModeToggle">
            <ModeToggleButton />
          </div>
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
