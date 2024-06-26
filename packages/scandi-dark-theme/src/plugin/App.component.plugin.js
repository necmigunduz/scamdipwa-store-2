import { connect } from 'react-redux';

import { DarkModeProviderComponent } from '../../packages/scandi-dark-theme/src/component/DarkModeProvider/DarkModeProvider.component';
// Assuming you have a selector to get the enabled state from DarkModeReducer
const mapStateToProps = (state) => ({
    isDarkModeEnabled: state.DarkModeReducer.enabled,
});

// Wrap DarkModeProviderComponent with connect to access Redux state
const ConnectedDarkModeProvider = connect(mapStateToProps)(DarkModeProviderComponent);

export const renderRouter = (args, callback, __instance) => (
    <ConnectedDarkModeProvider key="router">
        { callback(...args) }
    </ConnectedDarkModeProvider>
);

export default {
    'Component/App/Component': {
        'member-function': {
            renderRouter,
        },
    },
};
