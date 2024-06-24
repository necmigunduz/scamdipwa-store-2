import { connect } from 'react-redux';
import { DarkModeProviderComponent } from 'Component/DarkModeProvider/DarkModeProvider.component';

// Assuming you have a selector to get the enabled state from DarkModeReducer
const mapStateToProps = (state) => ({
    isDarkModeEnabled: state.DarkModeReducer.enabled,
});

// Wrap DarkModeProviderComponent with connect to access Redux state
const ConnectedDarkModeProvider = connect(mapStateToProps)(DarkModeProviderComponent);

export const renderRouter = (args, callback, __instance) => {
    return (
        <ConnectedDarkModeProvider key="router">
            { callback(...args) }
        </ConnectedDarkModeProvider>
    );
};

export default {
    'Component/App/Component': {
        'member-function': {
            renderRouter,
        },
    },
};
