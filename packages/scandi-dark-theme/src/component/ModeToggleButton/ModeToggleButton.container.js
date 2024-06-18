// packages/scandi-dark-theme/src/component/ModeToggleButton/ModeToggleButton.container.js
import { connect } from "react-redux";
import { enableDarkMode } from "../../store/DarkMode/DarkMode.action";
import ModeToggleButton from "./ModeToggleButton.component";

const mapStateToProps = (state) => ({
    isDarkModeEnabled: state.DarkMode?.enabled,  // Optional chaining to prevent accessing undefined
});

const mapDispatchToProps = (dispatch) => ({
    enableDarkMode: (enabled) => dispatch(enableDarkMode(enabled)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ModeToggleButton);
