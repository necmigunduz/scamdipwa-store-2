// src/component/DarkModeProvider/DarkModeProvider.component.js
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import './DarkModeProvider.style';
/** @namespace myStore/Component/DarkModeProvider/Component */
export class DarkModeProviderComponent extends Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
        isDarkModeEnabled: PropTypes.bool.isRequired,
    };

    render() {
        const { children, isDarkModeEnabled } = this.props;

        return (
            <div block="DarkModeProvider" mods={ { isEnabled: isDarkModeEnabled } }>
                { children }
            </div>
        );
    }
}

export default DarkModeProviderComponent;
