import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import './ModeToggleButton.style';

/** @namespace myStore/Component/ModeToggleButton/Component */
export class ModeToggleButtonComponent extends PureComponent {
    static propTypes = {
        isDarkModeEnabled: PropTypes.bool.isRequired,
        enableDarkMode: PropTypes.func.isRequired,
    };

    render() {
        const { isDarkModeEnabled, enableDarkMode } = this.props;

        return (
            <button
              block="ModeToggleButton"
              aria-label={ __('Toggle Dark Mode') }
              // eslint-disable-next-line react/jsx-no-bind
              onClick={ () => enableDarkMode(!isDarkModeEnabled) }
            >
              { __('Toggle Dark Mode') }
            </button>
        );
    }
}

export default ModeToggleButtonComponent;
