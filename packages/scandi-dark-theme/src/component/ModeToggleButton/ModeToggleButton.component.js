// packages/scandi-dark-theme/src/component/ModeToggleButton/ModeToggleButton.component.js
import PropTypes from "prop-types";
import { PureComponent } from "react";
import "./ModeToggleButton.style";

export class ModeToggleButtonComponent extends PureComponent {
    static propTypes = {
        isDarkModeEnabled: PropTypes.bool.isRequired,
        enableDarkMode: PropTypes.func.isRequired,
    };

    render() {
        const { isDarkModeEnabled, enableDarkMode } = this.props;
        console.log("Dark Mode Enabled:", isDarkModeEnabled);

        return (
            <button
                block="ModeToggleButton"
                aria-label={ __("Toggle Dark Mode") }
                onClick={() => enableDarkMode(!isDarkModeEnabled)}
            >
                { __("Toggle Dark Mode") }
            </button>
        );
    }
}

export default ModeToggleButtonComponent;
