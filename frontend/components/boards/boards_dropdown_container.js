import { connect } from 'react-redux';
import BoardsDropdown from './boards_dropdown';
import { closeModal } from '../../actions/modal_actions';


const msp = state => ({
  boards: Object.values(state.entities.boards)
});

const mdp = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  }
};

export default connect(msp, mdp)(BoardsDropdown);