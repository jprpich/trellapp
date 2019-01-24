import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup, clearSessionErrors, login } from '../../actions/session_actions';

const msp = (state) => {
  return {
    errors: Object.values(state.errors.session),
    formType: "signup"
  };
};

const mdp = (dispatch) => {
  return {
    processForm: (user) => dispatch(signup(user)),
    processDemoUser: (user) => dispatch(login(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors())
  }
}

export default connect(msp, mdp)(SessionForm);