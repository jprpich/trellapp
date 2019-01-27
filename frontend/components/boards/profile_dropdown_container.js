import { connect } from 'react-redux';
import ProfileDropdown from './profile_dropdown';
import { closeModal } from '../../actions/modal_actions';
import { logout } from '../../actions/session_actions';

const msp = state => ({
  currentUser: state.entities.users[state.session.id] 
});

const mdp = dispatch => {
  return {
    logout: () => dispatch(logout()),
    closeModal: () => dispatch(closeModal())
  }
};

export default connect(msp, mdp)(ProfileDropdown);