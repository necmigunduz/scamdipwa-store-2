// packages/scandi-dark-theme/src/plugin/Header.component.plugin.js
import ModeToggleButton from "../component/ModeToggleButton";
import "./Header.style.plugin";

export const renderTopMenu = (args, callback, instance) => {
    return (
        <>
            {callback(...args)}
            <div block="Header" elem="DarkModeToggle">
                <ModeToggleButton />
            </div>
        </>
    );
};

export default {
    "Component/Header/Component": {
        "member-function": {
            renderTopMenu,
        },
    },
};
