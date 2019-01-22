import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, clearSessionErrors } from '../../actions/session_actions';

const msp = (state) => {
  return {
    errors: Object.values(state.errors.session),
    formType: "login"
  };
};

const mdp = (dispatch) => {
  return {
    processForm: (user) => dispatch(login(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors())
  }
}

export default connect(msp, mdp)(SessionForm);