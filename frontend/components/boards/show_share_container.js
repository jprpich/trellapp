import { connect } from 'react-redux';
import ShowShare from './show_share';
import { closeModal } from '../../actions/modal_actions';

const msp = (state) => {
  return {

  }
};

const mdp = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
  }
};

export default connect(msp, mdp)(ShowShare);