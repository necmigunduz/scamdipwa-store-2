import { connect } from 'react-redux';

import { ColorInverterComponent } from 'Component/ColorInverter/ColorInverter.component';

const mapStateToProps = (state) => ({
    isDarkModeEnabled: state.DarkModeReducer.enabled,
});

const ConnectedColorInverter = connect(mapStateToProps)(ColorInverterComponent);

export const render = (args, callback, __instance) => (
    <ConnectedColorInverter>{ callback(...args) }</ConnectedColorInverter>
);
export default {
    'Component/Image/Component': {
        'member-function': {
            render,
        },
    },
};
