import { connect } from 'react-redux';
import ProfileDropdown from './profile_dropdown';
import { closeModal } from '../../actions/modal_actions';

const msp = state => ({

});

const mdp = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  }
};

export default connect(msp, mdp)(ProfileDropdown);