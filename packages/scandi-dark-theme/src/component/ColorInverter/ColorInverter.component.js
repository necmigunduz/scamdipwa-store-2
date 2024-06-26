import PropTypes from 'prop-types';
import { Component } from 'react';

import './ColorInverter.style';
/** @namespace myStore/Component/ColorInverter/Component */
export class ColorInverterComponent extends Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
        isDarkModeEnabled: PropTypes.bool.isRequired,
    };

    render() {
        const { isDarkModeEnabled, children } = this.props;

        return (
          <div block="ColorInverter" mods={ { isInverted: isDarkModeEnabled } }>
            { children }
          </div>
        );
    }
}
